import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe, STRIPE_PRICE_IDS, resolveStripePriceId } from "@/lib/stripe";
import { PRODUCTS, BUNDLES } from "@/lib/products";

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

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

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
        customer_creation: isSubscription ? undefined : "always",
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
        customer_creation: isSubscription ? undefined : "always",
      });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    const isDev = process.env.NODE_ENV === "development";
    let message = "Payment setup failed. Please try again or contact support.";
    if (error instanceof Stripe.errors.StripeError) {
      message = isDev ? error.message : message;
    } else if (error instanceof Error && isDev) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
