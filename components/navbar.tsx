import Link from "next/link";

interface Props {
  lang: "en" | "zh";
}

export default function Navbar({ lang }: Props) {
  return (
    <div className="fixed top-5 right-5 p-1 bg-neutral-900/10 backdrop-blur-xs rounded-md">
      <Link
        href={lang === "en" ? "/zh" : "/en"}
        className="flex justify-center items-center text-lg"
      >
        <span className={lang === "en" ? "text-pink" : "text-neutral-400"}>
          EN
        </span>
        <div className="w-0.5 h-5 mx-2 bg-white" />
        <span className={lang === "zh" ? "text-pink" : "text-neutral-400"}>
          中
        </span>
      </Link>
    </div>
  );
}
