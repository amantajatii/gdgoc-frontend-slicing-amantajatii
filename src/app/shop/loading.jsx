import { FaRegCircle } from "react-icons/fa";

export default function Loading() {
  return (
    <main className="h-[70vh] flex items-center justify-center">
      <p className="text-gray-500 animate-pulse text-4xl">
        <FaRegCircle />
      </p>
    </main>
  );
}
