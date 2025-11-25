"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className=" flex justify-center items-center py-6 w-screen">
      <div className="flex justify-center lg:justify-start items-center gap-[15px] w-[90vw] max-w-5xl font-bold text-[#BDBDBD]">
        <h2 className="text-black">
          <Link href="/">Home</Link>
        </h2>
        <BsChevronRight />
        <h2>{pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}</h2>
      </div>
    </div>
  );
};

export default Navigation;
