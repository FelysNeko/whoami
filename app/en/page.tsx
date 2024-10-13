import PL from "@/components/link";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center md:items-center pt-20 md:pt-0">
      <div className="p-4 space-y-4 max-w-5xl">
        <h1 className="text-7xl">Hello,</h1>
        <h2 className="text-4xl">
          My name is Jonny Jin, also known as FelysNeko.
        </h2>
        <p className="text-xl">
          I am an international student at the University of Waterloo. I have
          experience in web development and reinforcement learning research
          through internships, and I am interested in compilers.{" "}
          <PL href="https://felys.dev" text="Felys" /> is a functional
          programming language I developed. It will continue to evolve as I take
          more relevant courses, and I hope to complete it before graduation.
          Checkout my{" "}
          <PL href="https://www.linkedin.com/in/jonny-jin" text="LinkedIn" />{" "}
          and <PL href="https://github.com/FelysNeko" text="GitHub" /> for more
          details.
        </p>
        <p className="text-xl">
          My go-to programming languages are Python, Rust, and C, primarily
          because I appreciate their design and philosophy. Their source code is
          great resources for learning compilers and interpreters.
        </p>
        <p className="text-xl">
          I used to have many hobbies, but now I mainly play guitar and video
          games. My favorite characters are{" "}
          <span className="hover:text-elypink duration-300">Elysia</span> and
          Acheron (Honkai) for games, and Asuka (Evangelion) for anime. Elysia
          is my one and only waifu.
        </p>
      </div>
    </div>
  );
};

export default Home;
