"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Navbar({ locale }: { locale: "en" | "zh" }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = locale === "en" ? "zh" : "en";
  const handleSwitchLanguage = () => {
    router.push(pathname.replace(`/${locale}`, `/${switchLocale}`));
  };

  return (
    <div className="fixed top-5 right-5 p-1 bg-neutral-900/10 backdrop-blur-xs rounded-md">
      <button
        className="flex justify-center items-center text-lg cursor-pointer"
        onClick={handleSwitchLanguage}
      >
        <span className={locale === "en" ? "text-pink" : "text-neutral-400"}>
          EN
        </span>
        <div className="w-0.5 h-5 mx-2 bg-white" />
        <span className={locale === "zh" ? "text-pink" : "text-neutral-400"}>
          中
        </span>
      </button>
    </div>
  );
}
