"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { CartNavLink } from "./CartNavLink";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
          <NavLink href="/">Products</NavLink>
          <NavLink href="/about">Contact</NavLink>
          <CartNavLink />
        </nav>
      )}
    </div>
  );
}
