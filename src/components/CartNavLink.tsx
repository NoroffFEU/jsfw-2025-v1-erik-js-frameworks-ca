"use client";

import { useCartStore } from "../features/cart/store";
import { NavLink } from "./NavLink";

export function CartNavLink() {
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return <NavLink href="/cart">Cart ({cartCount})</NavLink>;
}
