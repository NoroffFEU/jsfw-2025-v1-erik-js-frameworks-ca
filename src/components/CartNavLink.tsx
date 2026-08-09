"use client";

import { useCartStore } from "../features/cart/store";
import { NavLink } from "./NavLink";
import { ShoppingCart } from "lucide-react";

export function CartNavLink() {
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <NavLink href="/cart">
      <span className="relative flex items-center justify-center w-10 h-10 bg-green-200 rounded-full border border-green-600 hover:bg-green-300 transition-colors">
        <ShoppingCart size={20} color="rgb(22 101 52)" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-green-600 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartCount}
          </span>
        )}
      </span>
    </NavLink>
  );
}
