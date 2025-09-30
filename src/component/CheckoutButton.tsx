"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CheckoutButton({
  items,
  className,
  title,
}: {
  items: any[];
  className?: string;
  title?: string;
}) {
    const [loading, setLoading] = useState(false);
  const handleCheckout = async () => {
    setLoading(true);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleCheckout}
      className={"" + (className ? ` ${className}` : "")}
    >
      {loading ? "Loading..." :  title ? title :  'PAY' }
    </button>
  );
}
