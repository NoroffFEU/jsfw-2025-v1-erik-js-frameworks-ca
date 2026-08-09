import React from "react";

import { useRouter } from "next/navigation";
import { useCartStore } from "../store";

export const CheckoutBtn = () => {
  const router = useRouter();
  const cartItems = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-end mt-4 px-4 py-2 bg-gray-100 font-bold text-lg">
      <button
        onClick={() => {
          clearCart();
          router.push("/checkout");
        }}
        className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 hover:shadow-lg transition duration-200 cursor-pointer"
      >
        Checkout
      </button>
    </div>
  );
};
