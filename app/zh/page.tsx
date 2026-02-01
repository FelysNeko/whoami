"use client";
import PL from "@/components/link";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import elysia from "@/public/elysia.jpg";
import cyrene from "@/public/cyrene.jpg";

export default function Home() {
  const [background, setBackground] = useState<StaticImageData | null>(null);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="p-4 space-y-4 max-w-5xl">
        <h1 className="text-7xl">你好，</h1>
        <h2 className="text-4xl">我是Jonny Jin，常用网名银河猫猫侠。</h2>
        <p className="text-xl">
          本人目前在加拿大读大学，主要从事机器学习和软件开发，同时也热衷于研究编程语言。
          <PL href="https://exec.felys.dev" text="Felys" />{" "}
          是我正在创作的一款编程语言，旨在纪念
          <button
            className="text-pink cursor-pointer"
            onClick={() => setBackground(background === elysia ? null : elysia)}
          >
            爱莉希雅
          </button>
          与
          <button
            className="text-pink cursor-pointer"
            onClick={() => setBackground(background === cyrene ? null : cyrene)}
          >
            昔涟
          </button>
          在我人生中留下的不可磨灭的印记，顺便填充一下简历。
        </p>
        <div className="w-screen h-screen fixed top-0 left-0 bg-transparent z-[-1]">
          {background && (
            <Image
              src={background}
              alt=""
              fill
              priority
              className="object-cover opacity-15"
            />
          )}
        </div>
      </div>
    </div>
  );
}
