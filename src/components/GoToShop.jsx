import Link from "next/link";
import React from "react";

const GoToShop = ({ name }) => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full h-[75vh] text-center px-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-500 text-lg max-w-md">
          Explore our vast collection of books and find your next favorite read.
        </p>
      </div>
      <Link
        href="/shop"
        className="group flex items-center gap-2 px-8 py-3 rounded-full bg-[#007AFF] text-white font-bold text-lg hover:bg-[#006ee4] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        Go to Shop
      </Link>
    </div>
  );
};

export default GoToShop;
