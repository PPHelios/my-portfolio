"use client";

import React from "react";
import { Vortex } from "./ui/Vortex";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import CtaButton from "./myComponents/CtaButton";
import { ChevronsDown } from "lucide-react";
import "../app/style.css";
import SocialBar from "./myComponents/SocialBar";
function Hero() {
  return (
    <div
      className="relative mx-auto h-screen min-h-screen w-screen overflow-hidden
        rounded-md"
    >
      <Vortex
        backgroundColor="#000001"
        rangeY={800}
        particleCount={100}
        baseHue={0}
        className="flex h-full min-h-screen w-full flex-col items-center
          justify-center py-4"
      >
        <h1
          className="mt-6 max-w-xl animate-fade-right text-center text-xl
            animate-delay-[1000ms] animate-duration-[2000ms] md:text-3xl"
        >
          Welcome to my portfolio
        </h1>
        <h2
          className="blue-100 mt-6 max-w-xl animate-fade-left text-center
            text-2xl font-semibold animate-delay-[1000ms]
            animate-duration-[2000ms] md:text-5xl"
        >
          I&apos;m Haytham Atef
        </h2>
        <TextGenerateEffect
          className="mt-10 max-w-[80%] text-center text-sm md:max-w-[50%]
            md:text-6xl"
          words="Front-end developer, who translates concepts into reality."
        />
        <a href="#about" className="mt-8">
          <CtaButton
            title="About me"
            icon={<ChevronsDown />}
            position="right"
          />
        </a>
        <SocialBar
          className="absolute bottom-10 right-5 flex flex-col gap-5 md:bottom-10
            md:right-20"
        />
      </Vortex>
    </div>
  );
}

export default Hero;
