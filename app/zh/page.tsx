import PL from "@/components/link";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center md:items-center pt-20 md:pt-0">
      <div className="p-4 space-y-4 max-w-5xl">
        <h1 className="text-7xl">你好，</h1>
        <h2 className="text-4xl">我是Jonny Jin，常用网名银河猫猫侠。</h2>
        <p className="text-xl">
          本人现在就读于滑铁卢大学，有做过全栈开发和强化学习相关的实习，并且对编译器很感兴趣。
          <PL href="https://felys.dev" text="Felys" />
          是我正在创作的一款函数式编程语言，是个大型的兴趣类项目，会随着我技术的提升持续迭代，希望能在大学毕业前写完。
          详情见我的
          <PL href="https://www.linkedin.com/in/jonny-jin" text="LinkedIn" />和
          <PL href="https://github.com/FelysNeko" text="GitHub" />。
        </p>
        <p className="text-xl">
          个人常用Python、Rust、C，单纯因为喜欢其设计理念，同时它们的源码也是写编译器和解释器的优质参考。
        </p>
        <p className="text-xl">
          读大学前兴趣爱好还是挺多的，但现在只有时间弹吉他和打游戏了。最喜欢崩坏系列中的
          <span className="hover:text-elypink duration-300">爱莉希雅</span>
          和黄泉，以及EVA里的明日香，其中单推爱莉。
        </p>
      </div>
    </div>
  );
};

export default Home;
