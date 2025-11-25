import Link from "next/link";
import React from "react";

const GoToShop = ({ name }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-[75vh]">
      <h1 className="text-3xl lg:text-2xl lg:font-bold">{name}</h1>
      <Link
        href="/shop"
        className="px-4 py-2 rounded-md bg-[#007AFF] hover:scale-105 hover:shadow-md hover:bg-[#006ee4] transition duration-300 cursor-pointer text-white font-bold">
        Go to Shop
      </Link>
    </div>
  );
};

export default GoToShop;
