"use client";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[50vh] p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p className="mb-4">Checkout successful.</p>
      <div className="flex justify-center"></div>
      <Link href="/" className="text-green-800 hover:underline">
        Continue Shopping
      </Link>
    </div>
  );
}
