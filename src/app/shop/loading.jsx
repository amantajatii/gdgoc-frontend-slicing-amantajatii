import {
  ProductGallerySkeleton,
  ReadingListSkeleton,
  BooksForYouSkeleton,
} from "@/components/Shop/Skeletons";

export default function Loading() {
  return (
    <div className="flex flex-col gap-16 w-[90vw] max-w-5xl mx-auto px-8 mb-12 lg:px-0 mt-8">
      <ProductGallerySkeleton />
      <ReadingListSkeleton />
      <BooksForYouSkeleton />
    </div>
  );
}
