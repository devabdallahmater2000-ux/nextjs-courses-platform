import { NextResponse } from "next/server";

import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is not defined in environment variables.");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-08-27.basil",
});

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price * 100, // السعر بالسنت
        },
        quantity: item.quantity,
      })),
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
    });

    return NextResponse.json({
      id: session.id,
      url: session.url,
      course: items[0], // لو شراء كورس واحد فقط
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
