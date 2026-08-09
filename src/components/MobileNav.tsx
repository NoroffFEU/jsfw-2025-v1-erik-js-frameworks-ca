"use client";

import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { CartNavLink } from "./CartNavLink";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-2 my-5 justify-center items-center hover:text-green-800"
          onClick={() => setIsOpen(false)}
        >
          <CartNavLink />
          <NavLink href="/">Products</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      )}
    </div>
  );
}
