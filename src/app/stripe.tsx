"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_51QnzZjIxOG1zTojXNT5K2KJFgZPH0sb4j8XMgo4NwYj1hHKNOhzldmtt286RxboiSxkPwrMtAmsxh5hCT2ojMZDY00SXYO5U24");

export default function Home() {
  const handleCheckout = async () => {
    const stripeUI = await stripe;
    let sessionResponse: any = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        data: [],
      }),
    });
    sessionResponse = await sessionResponse.json();

    stripeUI?.redirectToCheckout({
      sessionId: sessionResponse.sessionId,
    });
  };

  return (
    <>
      <button
        onClick={handleCheckout}
        className="text-sm px-4 py-2.5 w-full my-4 font-semibold tracking-wide bg-gray-500 hover:bg-gray-900 text-white rounded-md"
      >
        Checkout
      </button>
    </>
  );
}