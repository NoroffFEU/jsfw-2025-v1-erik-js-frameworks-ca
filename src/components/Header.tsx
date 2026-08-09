"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { MobileNav } from "./MobileNav";
import { CartNavLink } from "./CartNavLink";
import { Search } from "lucide-react";

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearchChange = (value: string) => {
    setSearch(value);

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    const queryString = params.toString();
    router.push(queryString ? `/?${queryString}` : "/");
  };

  return (
    <header className=" mb-6 border-b border-gray-200 bg-gray-100 sticky top-0 z-50 py-4 sm:py-8">
      <div className="container mx-auto grid  md:grid-cols-3 items-center gap-4 px-4">
        <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
        {!isMobileNavOpen && (
          <h1
            className={`text-2xl text-center text-gray-700 text-shadow-xs font-bold ${isMobileNavOpen ? "md:block hidden" : "block"}`}
          >
            FrameShop
          </h1>
        )}

        <div className="relative w-full max-w-xs justify-self-center  md:block">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-700/20"
          />
        </div>

        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center justify-end gap-4"
        >
          <NavLink href="/">Products</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <CartNavLink />
        </nav>

        <div className="justify-self-end md:hidden"></div>
      </div>
    </header>
  );
}
