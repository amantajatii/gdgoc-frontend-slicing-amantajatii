"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, children, className }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hover:text-black transition duration-150 rounded-md cursor-pointer text-xl lg:text-sm lg:font-semibold ${
        isActive ? "text-black" : "text-[#737373]"
      } ${className}`}>
      {children}
    </Link>
  );
};

export default NavItem;
