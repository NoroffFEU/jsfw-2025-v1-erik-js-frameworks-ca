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
      <span className="flex items-center gap-1 bg-green-200 px-2 py-1.5 rounded-full text-green-800 border border-green-600 hover:bg-green-300 transition-colors">
        <ShoppingCart size={22} color="rgb(22 101 52)" />
        {cartCount > 0 && (
          <span className="bg-green-600 text-white font-bold rounded-full px-2 py-1 text-xs">
            {cartCount}
          </span>
        )}
      </span>
    </NavLink>
  );
}
