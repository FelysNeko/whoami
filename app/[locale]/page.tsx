"use client";

import Image from "next/image";
import { useState } from "react";
import PinkLink from "@/components/link";
import { useConfig } from "@/components/i18n";
import cyrene from "@/public/cyrene.jpg";
import elysia from "@/public/elysia.jpg";

export default function Home() {
  const config = useConfig();
  const [background, setBackground] = useState<"elysia" | "cyrene" | null>(
    null,
  );

  return (
    <div className="min-h-dvh flex justify-center items-center">
      <div className="p-4 space-y-4 max-w-5xl">
        <h1 className="text-7xl">{config.greeting}</h1>
        <h2 className="text-4xl">{config.introduction}</h2>
        <p className="text-xl">
          {config.profile.lead}
          <PinkLink href="https://felys.dev" text="Felys" />
          {config.profile.tail}
          {config.dedication && (
            <>
              <button
                className="text-pink cursor-pointer"
                onClick={() =>
                  setBackground(background === "elysia" ? null : "elysia")
                }
              >
                {config.dedication.elysia}
              </button>
              {config.dedication.conjunction}
              <button
                className="text-pink cursor-pointer"
                onClick={() =>
                  setBackground(background === "cyrene" ? null : "cyrene")
                }
              >
                {config.dedication.cyrene}
              </button>
              {config.dedication.tail}
            </>
          )}
        </p>
        {config.social && (
          <p className="text-xl">
            {config.social.lead}
            <PinkLink
              href="https://www.linkedin.com/in/jonny-jin"
              text={config.social.linkedin}
            />
            {config.social.middle}
            <PinkLink
              href="https://github.com/FelysNeko"
              text={config.social.github}
            />
            {config.social.tail}
          </p>
        )}
        {config.closing && <p className="text-xl">{config.closing}</p>}
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
          <Image src={cyrene} alt="" fill priority className="object-cover" />
        </div>
      </div>
    </div>
  );
}
