import { NextRequest, NextResponse } from "next/server";
import { getStripe, STRIPE_PRICE_IDS } from "@/lib/stripe";
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

    // Check if we have a pre-configured Stripe Price ID
    const stripePriceId = STRIPE_PRICE_IDS[productId];

    let session;

    if (stripePriceId) {
      // Use pre-configured price
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
      // Create dynamic price (fallback)
      session = await getStripe().checkout.sessions.create({
        mode: isSubscription ? "subscription" : "payment",
        line_items: [
          {
            price_data: isSubscription
              ? undefined
              : {
                  currency: "usd",
                  unit_amount: unitAmount,
                  product_data: {
                    name: productName,
                    description: `AI Code Agency — ${productName}`,
                  },
                },
            ...(isSubscription && stripePriceId
              ? { price: stripePriceId }
              : {}),
            quantity: 1,
          },
        ],
        success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/cancel`,
        metadata: { productId, productName },
        billing_address_collection: "auto",
        customer_creation: "always",
      });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
