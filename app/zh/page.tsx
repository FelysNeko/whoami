"use client";

import Image from "next/image";
import { useState } from "react";
import PinkLink from "@/components/link";
import cyrene from "@/public/cyrene.jpg";
import elysia from "@/public/elysia.jpg";

type Background = "elysia" | "cyrene" | null;

export default function Page() {
  const [background, setBackground] = useState<Background>(null);

  const toggle = (name: Exclude<Background, null>) =>
    setBackground(background === name ? null : name);

  return (
    <div className="min-h-dvh flex justify-center items-center">
      <div className="p-4 space-y-4 max-w-5xl">
        <h1 className="text-7xl">你好，</h1>
        <h2 className="text-4xl">我是 Jonny Jin，常用网名银河猫猫侠。</h2>
        <p className="text-xl">
          本人目前在加拿大读大学，主要从事机器学习和软件开发，同时对编译原理感兴趣。
          <PinkLink href="https://felys.dev" text="Felys" />
          {" 项目包含了编程语言和模型微调两个项目，旨在纪念"}
          <button
            className="text-pink cursor-pointer"
            onClick={() => toggle("elysia")}
          >
            爱莉希雅
          </button>
          与
          <button
            className="text-pink cursor-pointer"
            onClick={() => toggle("cyrene")}
          >
            昔涟
          </button>
          在我人生中留下的不可磨灭的印记。
        </p>
        <p className="text-xl">清冷的旅途中夹杂着一抹粉色。</p>
        <div
          className="w-dvw h-dvh fixed top-0 left-0 z-[-1]"
          style={{
            opacity: background === "elysia" ? 0.15 : 0,
            transition: "opacity 200ms ease-in-out",
          }}
        >
          <Image
            src={elysia}
            alt=""
            fill
            priority
            className="object-cover object-top"
          />
        </div>
        <div
          className="w-dvw h-dvh fixed top-0 left-0 z-[-1]"
          style={{
            opacity: background === "cyrene" ? 0.15 : 0,
            transition: "opacity 200ms ease-in-out",
          }}
        >
          <Image
            src={cyrene}
            alt=""
            fill
            priority
            className="object-cover object-[75%_center]"
          />
        </div>
      </div>
    </div>
  );
}
