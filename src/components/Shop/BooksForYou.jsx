import React from "react";
import BookCard from "./BookCard";

const BooksForYou = ({ books }) => {
  if (!books?.length) return null;

  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Books For You</h1>
        <hr className="border-[#ECECEC]" />
        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto -mx-16 px-16 pb-4 lg:mx-0 lg:px-0">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksForYou;
