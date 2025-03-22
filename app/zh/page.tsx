import PL from "@/components/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center md:items-center pt-14 md:pt-0">
      <div className="p-4 space-y-4 max-w-5xl">
        <h1 className="text-7xl">你好，</h1>
        <h2 className="text-4xl">我是Jonny Jin，常用网名银河猫猫侠。</h2>
        <p className="text-xl">
          本人现在在加拿大读大学，主要从事机器学习相关科研工作，同时也热衷于编程语言。
          <PL href="https://exec.felys.dev" text="Felys" />
          是我正在创作的一款编程语言，自娱自乐的同时释放一下我对爱莉希雅的厨力，平时闲的话就会继续迭代这个项目。
        </p>
      </div>
    </div>
  );
}
