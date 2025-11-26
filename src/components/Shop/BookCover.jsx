"use client";
import { useState } from "react";
import Image from "next/image";
import { getProxiedImageUrl } from "@/lib/utils";

import Skeleton from "../Skeleton";

const BookCover = ({ src, alt, className, width, height }) => {
  const [imgSrc, setImgSrc] = useState(getProxiedImageUrl(src));
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc("https://placehold.co/400x600?text=No+Image");
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <Skeleton className="absolute inset-0 z-10 w-full h-full" />
      )}
      <Image
        src={imgSrc || "https://placehold.co/400x600?text=No+Image"}
        alt={alt}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        width={width}
        height={height}
        unoptimized
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default BookCover;
