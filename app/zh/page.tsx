"use client";
import PL from "@/components/link";
import Image from "next/image";
import { useState } from "react";
import elysia from "@/public/elysia.jpg";

export default function Home() {
  const [modal, setModal] = useState(false);

  return (
    <div className="min-h-screen flex justify-center md:items-center pt-14 md:pt-0">
      <div className="p-4 space-y-4 max-w-5xl">
        <h1 className="text-7xl">你好，</h1>
        <h2 className="text-4xl">我是Jonny Jin，常用网名银河猫猫侠。</h2>
        <p className="text-xl">
          本人现在在加拿大读大学，主要从事机器学习相关科研工作，同时也热衷于编程语言。
          <PL href="https://exec.felys.dev" text="Felys" />
          是我正在创作的一款编程语言，自娱自乐的同时释放一下我对
          <button
            className="hover:text-elysia cursor-pointer duration-150"
            onClick={() => setModal((m) => !m)}
          >
            爱莉希雅
          </button>
          的厨力，平时闲的话就会继续迭代这个项目。
        </p>
        <dialog
          open={modal}
          className="w-screen h-screen fixed top-0 bg-transparent z-[-1]"
        >
          <Image
            src={elysia}
            alt=""
            fill
            priority
            placeholder="blur"
            className="object-cover opacity-5"
          />
        </dialog>
      </div>
    </div>
  );
}
