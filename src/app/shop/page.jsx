import BooksForYou from "@/components/Shop/BooksForYou";
import ProductGallery from "@/components/Shop/ProductGallery";
import ReadingList from "@/components/Shop/ReadingList";

export const dynamic = "force-dynamic";

async function getData() {
  try {
    const [randomRes, listRes, eightRandomArray] = await Promise.all([
      fetch("https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/random_book", {
        cache: "no-store",
      }),
      fetch(
        "https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?sort=newest&page=1",
        { cache: "no-store" }
      ),
      Promise.all(
        Array.from({ length: 8 }).map((_, index) =>
          fetch(
            `https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/random_book?random=${index}`,
            { cache: "no-store" }
          )
        )
      ),
    ]);

    const [randomBook, listData, eightRandomBooks] = await Promise.all([
      randomRes.json(),
      listRes.json(),
      Promise.all(eightRandomArray.map((r) => r.json())),
    ]);

    return {
      randomBook,
      fourBooks: listData.books.slice(0, 4),
      eightRandomBooks,
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
