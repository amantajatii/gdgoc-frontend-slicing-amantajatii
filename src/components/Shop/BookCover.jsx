"use client";
import { useState } from "react";
import Image from "next/image";
import { getProxiedImageUrl } from "@/lib/utils";

const BookCover = ({ src, alt, className, width, height }) => {
  const [imgSrc, setImgSrc] = useState(getProxiedImageUrl(src));
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc("https://placehold.co/400x600?text=No+Image");
    }
  };

  return (
    <Image
      src={imgSrc || "https://placehold.co/400x600?text=No+Image"}
      alt={alt}
      className={className}
      width={width}
      height={height}
      unoptimized
      onError={handleError}
    />
  );
};

export default BookCover;
