"use client";
import { useState } from "react";
import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { IoEye } from "react-icons/io5";

const ProductGallery = ({ book }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!book) return null;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 justify-items-center">
        <div className="bg-gray-100">
          <img
            src={book.cover_image}
            alt={`book cover ${book.title}`}
            className="w-full min-w-[348px] max-w-[506px] h-auto min-h-[277px] lg:h-[475px] my-auto object-contain overflow-hidden"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-3 mt-4">
            {book.tags?.map((tag, index) => (
              <Link
                href={tag.url}
                key={index}
                target="_blank"
                className="px-2 py-1 text-sm rounded-full bg-[#E0E0E0] text-black cursor-pointer hover:bg-[#c8c8c8] hover:-translate-y-px transition duration-300">
                {tag.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">{book.title}</h2>
            <h5 className="text-xl font-semibold">
              {book.details?.price || "Price not available"}
            </h5>
            <h6 className="font-bold text-[#737373]">
              Availability : <span className="text-blue-500">In Stock</span>
            </h6>
          </div>
          <p className="text-[#858585] leading-relaxed">
            {book.summary
              ? isExpanded
                ? book.summary
                : `${book.summary.substring(0, 150)}...`
              : "No summary available."}
            {book.summary && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#23A6F0] font-bold ml-2 hover:underline cursor-pointer">
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            )}
          </p>
          <div className="text-[#858585]">
            <p>
              <span className="font-semibold">Pages : </span>
              {book.details?.total_pages || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Publisher : </span>
              {book.publisher || "Unknown"}
            </p>
            <p>
              <span className="font-semibold">ISBN : </span>
              {book.details?.isbn || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Published : </span>
              {book.details?.published_date || "Unknown"}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#007AFF] text-white font-bold p-3.5  rounded-xl cursor-pointer hover:bg-[#006ee4] hover:scale-105 hover:shadow-md hover:text-white transition duration-300">
              <Link
                href={book.buy_links?.[0]?.url || "#"}
                target={book.buy_links?.[0]?.url ? "_blank" : "_self"}>
                Buy Now
              </Link>
            </button>
            <button className="bg-[#dbecff] w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-[#b0d5fe] hover:scale-105 hover:shadow-md transition duration-300">
              <MdFavoriteBorder />
            </button>
            <button className="bg-[#dbecff] w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-[#b0d5fe] hover:scale-105 hover:shadow-md transition duration-300">
              <BsCart />
            </button>
            <button className="bg-[#dbecff] w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-[#b0d5fe] hover:scale-105 hover:shadow-md transition duration-300">
              <IoEye />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
