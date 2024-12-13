"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="md:flex p-4 text-xl text-center">
        <h5>PAGE NOT FOUND</h5>
        <div className="w-[2px] mx-2 bg-white hidden md:block" />
        <button className="text-elypink" onClick={goBack}>
          <span className="md:hidden">{"> "}</span>BACK
          <span className="md:hidden">{" <"}</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
