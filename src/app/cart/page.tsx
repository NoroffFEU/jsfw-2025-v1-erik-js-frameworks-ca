"use client";

import { ListCartItems } from "./../../features/cart/components/ListCartItems";
import { CheckoutBtn } from "../../features/cart/components/CheckoutBtn";
export default function CartPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ListCartItems />
      <CheckoutBtn />
    </div>
  );
}
