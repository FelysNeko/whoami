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
          because I appreciate their design. Though when it comes to work, I
          just pick the most suitable tool. After all, the fundamentals remain
          unchanged.
        </p>
      </div>
    </div>
  );
};

export default Home;
