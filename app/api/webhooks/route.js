import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.text();
  const signature = headers().get("stripe-signature");
  const endpointSecret = process.env.WEBHOOK_SECRET;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
  });

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
    // console.log("event:", event);
  } catch (e) {
    return new NextResponse("invalid signature", { status: 400 });
  }

  const session = event.data.object;

  if (event.type === "checkout.session.completed") {
    console.log(`Payment was successful for session for user`);
    console.log(session.customer_details.email);
  }

  return new NextResponse("ok", { status: 200 });
}
