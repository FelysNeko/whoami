import PL from "@/components/link";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center md:items-center pt-14 md:pt-0">
      <div className="p-4 space-y-4 max-w-5xl">
        <h1 className="text-7xl">你好，</h1>
        <h2 className="text-4xl">我是Jonny Jin，常用网名银河猫猫侠。</h2>
        <p className="text-xl">
          本人现在在加拿大读大学，有做过计算机行业相关的实习，并且对编译器很感兴趣。
          <PL href="https://felys.dev" text="Felys" />
          是我正在创作的一款编程语言，是个大型的兴趣类项目，会随着我技术的提升持续迭代，希望能在大学毕业前达到一个满意的水准。
        </p>
      </div>
    </div>
  );
};

export default Home;
