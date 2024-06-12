"use client";

import React from "react";
import { Vortex } from "./ui/Vortex";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import CtaButton from "./ui/CtaButton";
import { ChevronsDown } from "lucide-react";
function Hero() {
  return (
    <div
      className="mx-auto h-screen min-h-screen w-screen overflow-hidden
        rounded-md"
    >
      <Vortex
        backgroundColor="#000001"
        rangeY={800}
        particleCount={100}
        baseHue={0}
        className="flex h-full w-full flex-col items-center justify-center py-4"
      >
        <h2 className="mt-6 max-w-xl text-center text-xl md:text-3xl animate-fade-right animate-delay-[1000ms]
            animate-duration-[2000ms]">
          Welcome to my portfolio
        </h2>
        <h2
          className="blue-100 mt-6 max-w-xl animate-fade-left text-center
            text-2xl font-semibold animate-delay-[1000ms]
            animate-duration-[2000ms] md:text-5xl"
        >
          I'm Haytham Atef
        </h2>
        <TextGenerateEffect
          className="mt-10 max-w-[80%] text-center md:max-w-[50%] text-sm md:text-5xl"
          words="Front-end developer, who translates concepts into reality."
        />
        <a href="#about" className="mt-8">
          <CtaButton
            title="About me"
            icon={<ChevronsDown />}
            position="right"
          />
        </a>
      </Vortex>
    </div>
  );
}

export default Hero;
