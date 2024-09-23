"use client";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [lang, setLang] = useState("en");
  const choose = (en: any, zh: any) => (lang === "en" ? en : zh);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="relative space-y-4 max-w-[64rem] p-6 pt-10 pb-16">
        <h1 className="text-6xl font-semibold pb-2">
          {choose("Hello,", "你好，")}
        </h1>
        <h3 className="text-4xl">
          {choose(
            "My name is Jonny Jin, also known as FelysNeko.",
            "我是Jonny Jin，常用网名银河猫猫侠。"
          )}
        </h3>
        <p className="text-xl">
          {choose(
            <>
              I am an international student at the University of Waterloo.
              Python, C, and Rust are my favourite and most used languages. Most
              of my time is devoted to building my own programming language,{" "}
              <L href="https://felys.dev" text="Felys" />. It is a project that
              will be continuously iterating as I take more technical courses.
              You can find all my active repositories on{" "}
              <L href="https://github.com/FelysNeko" text="GitHub" />.
            </>,
            <>
              本人现在就读于滑铁卢大学，喜欢且常用Python、C、Rust这三门编程语言。我大部分的时间都花在了开发
              <L href="https://felys.dev" text="Felys" />
              编程语言上，是一个长期项目，会随着我技术的提升持续迭代。我所有活跃的项目都在
              <L href="https://github.com/FelysNeko" text="GitHub" />。
            </>
          )}
        </p>
        <p className="text-xl">
          {choose(
            <>
              Beyond coding, I play frisbee, fingerstyle guitar, and video
              games. Elysia and Acheron from Honkai series are my two favourite
              game characters, and Elysia is my one and only waifu. By the way,
              the avatar I use everywhere is Asuka from Evangelion, my favourite
              anime ever.
            </>,
            <>
              除了敲代码，我也打飞盘、玩指弹吉他、打游戏。崩坏系列中的爱莉希雅和黄泉是我最喜欢的两个游戏角色，并且单推爱莉。同时我也是个EVA厨，头像一直用的是明日香。
            </>
          )}
        </p>
        <p className="text-xl">
          {choose(
            <>
              Currently, the only social media platforms I use are{" "}
              <L href="https://www.instagram.com/felysneko/" text="Instagram" />{" "}
              and{" "}
              <L
                href="https://www.linkedin.com/in/jonny-jin/"
                text="LinkedIn"
              />
              , although I do not regularly check them. The best way to reach me
              is via <L href="mailto:contact@felysneko.com" text="Email" />, and
              I usually respond quickly.
            </>,
            <>
              在用的社交媒体有
              <L href="https://www.instagram.com/felysneko/" text="INS" />
              和
              <L href="https://www.linkedin.com/in/jonny-jin/" text="领英" />
              ，但并不常看。联系我可以直接
              <L href="mailto:contact@felysneko.com" text="邮件" />
              ，回复速度会比较快。
            </>
          )}
        </p>
        <button
          className="absolute right-6 bottom-6 text-lg"
          onClick={() => setLang((l) => (l === "en" ? "zh" : "en"))}
        >
          <span className={`text-${choose("elypink", "vpwhite")}`}>EN</span>
          {" | "}
          <span className={`text-${choose("vpwhite", "elypink")}`}>中</span>
        </button>
      </div>
    </main>
  );
};

interface LinkProps {
  href: string;
  text: string;
}

const L = ({ href, text }: LinkProps) => {
  return (
    <Link href={href} target="_blank" className="text-elypink">
      {text}
    </Link>
  );
};

export default Home;
