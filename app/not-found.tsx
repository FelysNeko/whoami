"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <html lang="en" className="bg-neutral-900 text-neutral-100">
      <body className="antialiased h-dvh flex justify-center items-center">
        <div className="flex p-4 text-xl text-center">
          <h5>PAGE NOT FOUND</h5>
          <div className="w-0.5 mx-2 bg-white" />
          <button className="text-pink cursor-pointer" onClick={goBack}>
            BACK
          </button>
        </div>
      </body>
    </html>
  );
}
