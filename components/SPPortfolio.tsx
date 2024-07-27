"use client";

import { LinkPreview } from "./ui/LinkPreview";
import { useRef } from "react";
import { useIsVisible } from "@/utils/useIsVisible";
import UsedStack from "./myComponents/UsedStack";
const stacks = [
  { id: 1, name: "Next JS", image: "/next.svg" },
  { id: 2, name: "Tailwind CSS", image: "/tail.svg" },
  { id: 3, name: "Aceternity", image: "/aceternity.png" },
  { id: 4, name: "TypeScript", image: "/ts.svg" },
];
export default function SPPortfolio() {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="flex-col items-start justify-start px-4 pb-5">
      <LinkPreview url="https://haytham-atef.vercel.app/">
        <h2
          className="relative z-10 bg-gradient-to-b from-blue-400 to-emerald-600
            bg-clip-text font-sans text-xl font-bold text-transparent
            md:text-4xl"
        >
          My Portfolio Page
        </h2>
        <p
          ref={ref1}
          className={`mt-4 text-lg font-semibold md:pl-[20px] ${ isVisible1 &&
            "animate-fade-right" }`}
        >
          Portfolio page inspired by Adrian Hajdin project.
        </p>
      </LinkPreview>
      <UsedStack stacks={stacks} className="my-6" />
      <div>
        <h3 className="my-4 text-lg font-bold text-violet-600 underline">
          Technology Used :
        </h3>
        <div
          className="ml-4 flex flex-col items-start justify-start gap-2
            font-semibold"
        >
          <li>Next JS</li>
          <li>Tailwind CSS.</li>
          <li>Tailwind CSS Animated for animations.</li>
          <li>Aceternity for effects.</li>
        </div>
      </div>
    </div>
  );
}
