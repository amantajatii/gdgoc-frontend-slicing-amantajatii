import Skeleton from "../Skeleton";

export const BookCardSkeleton = () => {
  return (
    <div className="w-[239px] min-w-[239px] lg:w-full lg:min-w-0 min-h-[438px] bg-white shrink-0 shadow-md">
      <div className="h-[280px] w-full p-4">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-2 p-8">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-6 w-1/3 mt-1" />
        </div>
      </div>
    </div>
  );
};

export const ProductGallerySkeleton = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 justify-items-center">
        {/* Image Section */}
        <div className="flex flex-col gap-4 w-full max-w-[506px]">
          <Skeleton className="w-full h-[475px]" />
          <div className="flex gap-4 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="w-[100px] h-[75px] shrink-0" />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex gap-3 mt-4">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="w-20 h-8 rounded-full" />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-7 w-1/4" />
            <Skeleton className="h-6 w-1/3" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-5 w-1/2" />
            ))}
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Skeleton className="w-32 h-12 rounded-xl" />
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="w-12 h-12 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReadingListSkeleton = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-6">
        <Skeleton className="h-8 w-48" />
        <hr className="border-gray-200" />
        <div className="pt-2 pb-3 flex lg:grid lg:grid-cols-4 gap-6 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <BookCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const BooksForYouSkeleton = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-6">
        <Skeleton className="h-8 w-48" />
        <hr className="border-gray-200" />
        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <BookCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
