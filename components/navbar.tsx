"use client";

import { usePathname, useRouter } from "next/navigation";
import { EN, ZH } from "@/lib/config";
import { useConfig } from "./i18n";

export default function Navbar() {
  const { root } = useConfig();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = root === EN.root ? ZH.root : EN.root;
  const handleSwitchLanguage = () => {
    router.push(pathname.replace(`/${root}`, `/${switchLocale}`));
  };

  return (
    <div className="fixed top-5 right-5 p-1 bg-neutral-900/10 backdrop-blur-xs rounded-md">
      <button
        className="flex justify-center items-center text-lg cursor-pointer"
        onClick={handleSwitchLanguage}
      >
        <span className={root === EN.root ? "text-pink" : "text-neutral-400"}>
          EN
        </span>
        <div className="w-0.5 h-5 mx-2 bg-white" />
        <span className={root === ZH.root ? "text-pink" : "text-neutral-400"}>
          中
        </span>
      </button>
    </div>
  );
}
