"use client";
import { useState } from "react";
import Link from "next/link";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsCart, BsCartFill } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import BookCover from "./BookCover";
import { useShop } from "@/context/ShopContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductGallery = ({ book }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const {
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
    isInCart,
    isInWishlist,
  } = useShop();

  const inCart = book ? isInCart(book._id) : false;
  const inWishlist = book ? isInWishlist(book._id) : false;

  const images = book.images?.length
    ? book.images
    : [book.cover_image, book.cover_image, book.cover_image, book.cover_image];

  if (!book) return null;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 justify-items-center">
        <div className="flex flex-col gap-4 w-full max-w-[506px]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full h-[475px] bg-gray-100 rounded-lg overflow-hidden">
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <BookCover
                  src={img}
                  alt={`book cover ${book.title} ${index + 1}`}
                  className="w-full h-full object-contain"
                  width={506}
                  height={475}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs-swiper w-full h-[75px]">
            {images.map((img, index) => (
              <SwiperSlide
                key={index}
                className="cursor-pointer rounded-md overflow-hidden border-2 border-transparent transition duration-300 opacity-60 hover:opacity-100 [&.swiper-slide-thumb-active]:border-blue-500 [&.swiper-slide-thumb-active]:opacity-100">
                <BookCover
                  src={img}
                  alt={`thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={100}
                  height={75}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
                : `${book.summary.substring(0, 180)}...`
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
            <button
              onClick={() =>
                inWishlist ? removeFromWishlist(book._id) : addToWishlist(book)
              }
              className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:scale-105 hover:shadow-md transition duration-300 ${
                inWishlist
                  ? "bg-red-100 text-red-500 hover:bg-red-200"
                  : "bg-[#dbecff] hover:bg-[#b0d5fe]"
              }`}>
              {inWishlist ? <MdFavorite /> : <MdFavoriteBorder />}
            </button>
            <button
              onClick={() =>
                inCart ? removeFromCart(book._id) : addToCart(book)
              }
              className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:scale-105 hover:shadow-md transition duration-300 ${
                inCart
                  ? "bg-green-100 text-green-600 hover:bg-green-200"
                  : "bg-[#dbecff] hover:bg-[#b0d5fe]"
              }`}>
              {inCart ? <BsCartFill /> : <BsCart />}
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
