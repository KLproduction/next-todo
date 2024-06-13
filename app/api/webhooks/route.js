import Stripe from "stripe";
import getRawBody from "raw-body";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-04-10",
});

const endpointSecret = process.env.WEBHOOK_SECRET;

export const config = {
  api: {
    bodyParser: false,
    sizeLimit: "1mb",
  },
};

export default async function POST(req, res) {
  try {
    if (req.method !== "POST")
      return res.status(405).send("Only POST requests allowed");

    const sig = req.headers["stripe-signature"];

    const rawBody = await request.text();

    let event;
    try {
      event = stripe.webhookEndpoints.constructEvent(
        rawBody,
        sig,
        endpointSecret
      );
    } catch (e) {
      return res.status(400).send(`Webhook Error:${e.message}`);
    }
    console.log("event.type", JSON.stringify(event.type));
    if (event.type === "checkout.session.completed") {
      res.status(200).json({ received: true });
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ["line_items"],
        }
      );
      const lineItems = sessionWithLineItems.line_items;

      if (!lineItems) return res.status(500).send("Internal Server Error");

      try {
        // Save the data, change customer account info, etc
        console.log("Fullfill the order with custom logic");
        console.log("data", lineItems.data);
        console.log("customer email", event.data.object.customer_details.email);
        console.log("created", event.data.object.created);
      } catch (error) {
        console.log("Handling when you're unable to save an order");
      }
    }
    res.status(200).end();
  } catch (e) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
}
