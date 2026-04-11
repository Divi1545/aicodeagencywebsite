import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe, STRIPE_PRICE_IDS, resolveStripePriceId } from "@/lib/stripe";
import { getServerBaseUrl } from "@/lib/site-url";
import { PRODUCTS, BUNDLES } from "@/lib/products";

type StripeErrorInstance = InstanceType<typeof Stripe.errors.StripeError>;

function asStripeError(error: unknown): StripeErrorInstance | null {
  if (error instanceof Stripe.errors.StripeError) return error;
  if (
    error instanceof Error &&
    "statusCode" in error &&
    typeof (error as { statusCode?: unknown }).statusCode === "number"
  ) {
    return error as StripeErrorInstance;
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const { productId, isBundle } = await req.json();

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    // Find product details
    let productName = "";
    let unitAmount = 0;
    let isSubscription = false;

    if (isBundle) {
      const bundle = BUNDLES.find((b) => b.id === productId);
      if (!bundle) {
        return NextResponse.json({ error: "Bundle not found" }, { status: 404 });
      }
      productName = bundle.name;
      unitAmount = bundle.price * 100;
    } else {
      const product = PRODUCTS.find((p) => p.id === productId);
      if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
      }
      productName = product.name;
      unitAmount = product.price * 100;
      isSubscription = product.isSubscription;
    }

    const baseUrl = getServerBaseUrl();

    const stripePriceId = resolveStripePriceId(STRIPE_PRICE_IDS[productId]);

    let session;

    if (stripePriceId) {
      session = await getStripe().checkout.sessions.create({
        mode: isSubscription ? "subscription" : "payment",
        line_items: [{ price: stripePriceId, quantity: 1 }],
        success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/cancel`,
        metadata: { productId, productName },
        billing_address_collection: "auto",
      });
    } else {
      const lineItem = isSubscription
        ? {
            quantity: 1 as const,
            price_data: {
              currency: "usd" as const,
              unit_amount: unitAmount,
              recurring: { interval: "month" as const },
              product_data: {
                name: productName,
                description: `AI Code Agency — ${productName}`,
              },
            },
          }
        : {
            quantity: 1 as const,
            price_data: {
              currency: "usd" as const,
              unit_amount: unitAmount,
              product_data: {
                name: productName,
                description: `AI Code Agency — ${productName}`,
              },
            },
          };

      session = await getStripe().checkout.sessions.create({
        mode: isSubscription ? "subscription" : "payment",
        line_items: [lineItem],
        success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/cancel`,
        metadata: { productId, productName },
        billing_address_collection: "auto",
      });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    const stripeErr = asStripeError(error);
    const isDev = process.env.NODE_ENV === "development";
    let message = "Payment setup failed. Please try again or contact support.";

    if (error instanceof Error && error.message.includes("STRIPE_SECRET_KEY")) {
      message =
        "Checkout is not configured: STRIPE_SECRET_KEY is missing on the server. Add the secret key (sk_…) in your host’s environment variables (e.g. Vercel → Settings → Environment Variables), then redeploy.";
    } else {
      if (stripeErr) {
        if (stripeErr.type === "StripeAuthenticationError") {
          message =
            "Stripe rejected the API key. Use the secret key (sk_test_… or sk_live_…), not the publishable key, and ensure it is set for the correct environment on your host.";
        } else if (
          stripeErr.type === "StripeInvalidRequestError" &&
          /success_url|cancel_url|invalid url|not a valid url/i.test(stripeErr.message)
        ) {
          message =
            "Stripe rejected a redirect URL. Set NEXT_PUBLIC_BASE_URL to your live HTTPS URL, or deploy on Vercel so VERCEL_URL is used automatically.";
        } else if (stripeErr.type === "StripeInvalidRequestError") {
          message = stripeErr.message;
        } else if (isDev) {
          message = stripeErr.message;
        }
      } else if (error instanceof Error && isDev) {
        message = error.message;
      }
    }

    return NextResponse.json(
      {
        error: message,
        ...(stripeErr?.code ? { stripeCode: stripeErr.code } : {}),
      },
      { status: 500 }
    );
  }
}
