"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-green-100 hover:text-green-800 ${
        isActive ? "bg-green-800 text-white" : "text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
}
