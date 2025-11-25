import BooksForYou from "@/components/Shop/BooksForYou";
import ProductGallery from "@/components/Shop/ProductGallery";
import ReadingList from "@/components/Shop/ReadingList";
import React from "react";

async function getData() {
  try {
    const randomReq = fetch(
      "https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/random_book",
      { cache: "no-store" }
    ).then((r) => r.json());

    const listReq = fetch(
      "https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?sort=newest&page=1",
      { cache: "no-store" }
    ).then((r) => r.json());

    const eightRandomReq = Promise.all(
      Array.from({ length: 8 }).map((_, index) =>
        fetch(
          `https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/random_book?random=${index}`,
          { cache: "no-store" }
        ).then((r) => r.json())
      )
    );

    const [randomData, listData, eightRandomData] = await Promise.all([
      randomReq,
      listReq,
      eightRandomReq,
    ]);

    return {
      randomBook: randomData,
      fourBooks: listData.books.slice(0, 4),
      eightRandomBooks: eightRandomData,
    };
  } catch (err) {
    console.error("Failed to fetch data:", err);
    return {
      randomBook: null,
      fourBooks: [],
      eightRandomBooks: [],
    };
  }
}

const Shop = async () => {
  const { randomBook, fourBooks, eightRandomBooks } = await getData();

  return (
    <div className="flex flex-col gap-16 w-[90vw] max-w-5xl mx-auto px-8 mb-12 lg:px-0">
      <ProductGallery book={randomBook} />
      <ReadingList books={fourBooks} />
      <BooksForYou books={eightRandomBooks} />
    </div>
  );
};

export default Shop;
