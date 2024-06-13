import { Settings } from "lucide-react";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
  });
  const stripeSession = await stripe.checkout.sessions.create({
    success_url: Settings,
    cancel_url: Settings,
    payment_method_types: ["card"],
    mode: "subscription",
    customer_email: sessions.email ?? "",
    line_items: [
      {
        price: 10,
        quantity: 1,
      },
    ],
    metadata: {
      userId: sessions.id,
    },
  });

  return new NextResponse(JSON.stringify({ url: stripeSession.url }));
}
