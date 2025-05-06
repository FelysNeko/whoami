import PL from "@/components/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="p-4 space-y-4 max-w-5xl">
        <h1 className="text-7xl">Hello,</h1>
        <h2 className="text-4xl">
          My name is Jonny Jin, also known as FelysNeko.
        </h2>
        <p className="text-xl">
          I am an international student at the University of Waterloo. My career
          focus is on machine learning, but I am also interested in programming
          language. <PL href="https://exec.felys.dev" text="Felys" /> is a
          programming language I developed.
        </p>
        <p className="text-xl">
          Checkout my{" "}
          <PL href="https://www.linkedin.com/in/jonny-jin" text="LinkedIn" />{" "}
          and <PL href="https://github.com/FelysNeko" text="GitHub" /> for more
          details.
        </p>
      </div>
    </div>
  );
}
