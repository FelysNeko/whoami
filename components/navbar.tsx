import Link from "next/link";

interface Props {
  lang: "en" | "zh";
}

const Navbar = ({ lang }: Props) => {
  return (
    <div className="md:fixed top-0 p-4 h-20 w-screen flex text-lg">
      <div className="ml-auto h-12 w-16 mx-1 flex justify-center items-center">
        <Link
          href={lang === "en" ? "/zh" : "/en"}
          className="flex justify-center items-center"
        >
          <span className={lang === "en" ? "text-elypink" : "text-neutral-400"}>
            EN
          </span>
          <div className="w-[2px] h-5 mx-2 bg-white" />
          <span className={lang === "zh" ? "text-elypink" : "text-neutral-400"}>
            中
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
