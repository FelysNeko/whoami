import PinkLink from "@/components/link";

export default function Page() {
  return (
    <div className="min-h-dvh flex justify-center items-center">
      <div className="p-4 space-y-4 max-w-5xl">
        <h1 className="text-7xl">Hello,</h1>
        <h2 className="text-4xl">
          My name is Jonny Jin, also known as FelysNeko.
        </h2>
        <p className="text-xl">
          I am an undergraduate student at the University of Waterloo. My career
          focus is on machine learning and software development, but I am also
          interested in compiler principles. The{" "}
          <PinkLink href="https://felys.dev" text="Felys" /> project contains a
          programming language and some model fine-tuning demos that will be
          available when I am running experiments.
        </p>
        <p className="text-xl">
          Check out my{" "}
          <PinkLink
            href="https://www.linkedin.com/in/jonny-jin"
            text="LinkedIn"
          />
          {" and "}
          <PinkLink href="https://github.com/FelysNeko" text="GitHub" />
          {" for more details."}
        </p>
      </div>
    </div>
  );
}
