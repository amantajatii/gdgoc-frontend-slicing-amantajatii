const BookCard = ({ book }) => {
  return (
    <div
      className="w-[239px] min-w-[239px] lg:w-full lg:min-w-0 min-h-[438px] bg-[#ffffff] shrink-0 shadow-md hover:translate-y-[-5px] hover:shadow-lg transition duration-300"
      key={book._id}>
      <div className="h-[280px] bg-gray-100 w-full px-4 pt-4 object-contain overflow-hidden">
        <img
          src={book.cover_image}
          alt={book.title}
          className="w-full h-full object-contain object-center overflow-hidden"
        />
      </div>
      <div className="flex flex-col gap-2 p-8">
        <div>
          <h3 className="text-xl font-bold">
            {book.title.length <= 25 ? (
              book.title
            ) : (
              <>
                {book.title.substring(0, 25)}
                <span className="text-[#737373]">...</span>
              </>
            )}
          </h3>
          <h5 className="text-lg font-semibold text-[#737373]">
            {book.tags?.[0]?.name || "No Tag"}
          </h5>
          <h5 className="font-bold text-[#23856D] text-lg p-1">
            {book.details?.price || "Price not available"}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
