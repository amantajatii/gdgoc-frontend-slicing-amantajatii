import BookCover from "./BookCover";

import Link from "next/link";

const BookCard = ({ book }) => {
  const buyUrl = book.buy_links?.[0]?.url || "#";
  const isExternal = !!book.buy_links?.[0]?.url;

  return (
    <Link
      href={buyUrl}
      target={isExternal ? "_blank" : "_self"}
      className="w-[239px] min-w-[239px] lg:w-full lg:min-w-0 min-h-[438px] bg-[#ffffff] shrink-0  hover:translate-y-[-5px] hover:shadow-lg transition duration-300 block"
      key={book._id}>
      <div className="h-[280px] w-full overflow-hidden">
        <BookCover
          src={book.cover_image}
          alt={book.title}
          className="w-full h-full object-contain object-center overflow-hidden"
          width={239}
          height={280}
        />
      </div>
      <div className="flex flex-col gap-2 p-8">
        <div>
          <h3 className="text-xl font-bold">
            {book.title.length <= 25 ? (
              book.title
            ) : (
              <>
                {book.title.substring(0, 20)}
                <span className="text-[#737373]">...</span>
              </>
            )}
          </h3>
          <h5 className="text-lg font-semibold text-[#737373]">
            {book.category?.name || "No Tag"}
          </h5>
          <h5 className="font-bold text-[#23856D] text-lg p-1">
            {book.details?.price || "Price not available"}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
