"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex p-4 text-xl text-center">
        <h5>PAGE NOT FOUND</h5>
        <div className="w-0.5 mx-2 bg-white" />
        <button className="text-pink" onClick={goBack}>
          BACK
        </button>
      </div>
    </div>
  );
}
