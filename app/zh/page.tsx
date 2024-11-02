import PL from "@/components/link";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center md:items-center pt-14 md:pt-0">
      <div className="p-4 space-y-4 max-w-5xl">
        <h1 className="text-7xl">你好，</h1>
        <h2 className="text-4xl">我是Jonny Jin，常用网名银河猫猫侠。</h2>
        <p className="text-xl">
          本人现在在加拿大读大学，有做过全栈开发和强化学习相关的实习，并且对编译器很感兴趣。
          <PL href="https://felys.dev" text="Felys" />
          是我正在创作的一款编程语言，是个大型的兴趣类项目，会随着我技术的提升持续迭代，希望能在大学毕业前写完。
          个人常用Python、Rust、C，单纯因为喜欢其设计理念，同时它们的源码也是写编译器和解释器的优质参考。
        </p>
        <p className="text-xl">
          来看中文版的访客八成和工作无关，我便多聊两句。上大学后一直在写项目玩没空追番，
          再加上对日本文化兴趣减退，回归现充了，但这不妨碍我喜欢
          <span className="text-elypink">爱莉希雅</span>
          和黄泉（均出自崩坏系列）。喜欢爱莉原因太多了，单推，无须多言，后者则是老熟人雷电芽衣，
          她那张出云国时期的插画真的太美了，完全忘不掉。
        </p>
      </div>
    </div>
  );
};

export default Home;
