"use client";
import React, { useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCartBold, PiShoppingCartLight } from "react-icons/pi";
import NavItem from "./NavItem";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      {/* desktop view */}
      <div className=" hidden lg:flex w-screen bg-[#ffffff] flex-col items-center justify-center">
        <div className="h-[78px] max-w-5xl w-[90vw] flex gap-16 items-center justify-between">
          <h3 className="text-xl font-semibold">
            <Link href="/shop">Bookstar</Link>
          </h3>
          <div className="flex items-center gap-4 text-sm">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/shop" className="relative flex items-center gap-2">
              Shop
              <button>
                <IoIosArrowDown />
              </button>
            </NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/blog">Blog</NavItem>
            <NavItem href="/contact">Contact</NavItem>
            <NavItem href="/pages">Pages</NavItem>
          </div>
          <div className="flex items-center justify-center text-lg text-[#23A6F0]">
            <Link
              href="/login"
              className="flex items-center gap-2.5 px-3 py-2 rounded-md cursor-pointer hover:bg-[#f0f0f0] transition duration-300">
              <FiUser />
              <h6 className="text-md font-semibold">Login / Register</h6>
            </Link>
            <Link
              href="/"
              className=" px-3 py-2.5 rounded-md cursor-pointer hover:bg-[#f0f0f0] transition duration-300">
              <FiSearch />
            </Link>
            <Link
              href="/cart"
              className="flex gap-1 justify-center items-center  px-3 py-2.5 rounded-md cursor-pointer hover:bg-[#f0f0f0] transition duration-300">
              <BsCart />
              <p className="text-sm">1</p>
            </Link>
            <Link
              href="/wishlist"
              className="flex gap-1 justify-center items-center  px-3 py-2.5 rounded-md cursor-pointer hover:bg-[#f0f0f0] transition duration-300">
              <MdFavoriteBorder />
              <p className="text-sm">1</p>
            </Link>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="w-full bg-[#ffffff] flex lg:hidden flex-col items-center justify-between">
        <div className="flex items-center w-full p-8 justify-between">
          <h3 className="text-xl font-semibold">Bookstar</h3>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-2xl">
            <BiMenuAltRight />
          </button>
        </div>
        {showMobileMenu && (
          <div className="w-full bg-[#ffffff] p-6 flex flex-col gap-12 items-center">
            <div className="flex flex-col justify-center items-center gap-4 text-sm">
              <NavItem href="/" onClick={() => setShowMobileMenu(false)}>
                Home
              </NavItem>
              <NavItem href="/shop" onClick={() => setShowMobileMenu(false)}>
                Shop
              </NavItem>
              <NavItem href="/about" onClick={() => setShowMobileMenu(false)}>
                About
              </NavItem>
              <NavItem href="/blog" onClick={() => setShowMobileMenu(false)}>
                Blog
              </NavItem>
              <NavItem href="/contact" onClick={() => setShowMobileMenu(false)}>
                Contact
              </NavItem>
              <NavItem href="/pages" onClick={() => setShowMobileMenu(false)}>
                Pages
              </NavItem>
            </div>
            <div className="flex flex-col text-3xl items-center gap-2.5 px-3 py-2 rounded-md cursor-pointer hover:bg-[#f0f0f0] transition duration-300 text-[#23A6F0]">
              <Link
                href="/login"
                onClick={() => setShowMobileMenu(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-md ">
                <FiUser />
                <h6 className="text-lg">Login / Register</h6>
              </Link>
              <Link
                href="/"
                onClick={() => setShowMobileMenu(false)}
                className=" px-3 py-2.5 rounded-md">
                <FiSearch />
              </Link>
              <Link
                href="/cart"
                onClick={() => setShowMobileMenu(false)}
                className="flex gap-1 justify-center items-center  px-3 py-2.5 rounded-md">
                <BsCart />
                <p className="text-xs">1</p>
              </Link>
              <Link
                href="/wishlist"
                onClick={() => setShowMobileMenu(false)}
                className="flex gap-1 justify-center items-center  px-3 py-2.5 rounded-md">
                <MdFavoriteBorder />
                <p className="text-xs">1</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
