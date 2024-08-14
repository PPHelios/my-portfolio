"use client";

import { LinkPreview } from "./ui/LinkPreview";
import { useIsVisible } from "@/utils/useIsVisible";
import UsedStack from "./myComponents/UsedStack";
import { useRef } from "react";
const stacks = [
  { id: 1, name: "React Native", image: "/reactNative.png" },
  { id: 2, name: "Native Wind", image: "/nativewind.png" },
  { id: 3, name: "gluestack-ui", image: "/gluestack.png" },
  { id: 4, name: "TypeScript", image: "/ts.svg" },
];
export default function SPMazady() {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="flex-col items-start justify-start px-4">
      <LinkPreview url="https://mazady-ha.vercel.app/">
        <h2
          className="relative z-10 bg-gradient-to-b from-blue-400 to-emerald-600
            bg-clip-text font-sans text-xl font-bold text-transparent
            md:text-4xl"
        >
          Mazady website & app
        </h2>
        <p
          ref={ref1}
          className={`mt-4 text-lg font-semibold md:pl-[20px] ${ isVisible1 &&
            "animate-fade-right" }`}
        >
          Full stack auction website and React Native app.
        </p>
      </LinkPreview>
      <UsedStack stacks={stacks} className="my-6" />
      <div>
        <h3 className="my-4 text-lg font-bold text-violet-600 underline">
          About Mazady :
        </h3>
        <p className="mb-3 font-semibold text-emerald-500">
          Simple MERN stack website & app for auctions.
        </p>
        <div
          className="ml-4 flex flex-col items-start justify-start gap-2
            font-semibold"
        >
          <li>Supports light/dark themes.</li>
          <li>Supports product search.</li>
        </div>
        <h3 className="my-4 text-lg font-bold text-violet-600 underline">
          Technology used in website:
        </h3>
        <div
          className="ml-4 flex flex-col items-start justify-start gap-2
            font-semibold"
        >
          <li>Next JS</li>
          <li>TypeScript</li>
          <li>Redux & Redux Persist</li>
          <li>Tailwind CSS</li>
          <li>Chadcn/ui</li>
          <h3 className="my-4 text-lg font-bold text-violet-600 underline">
            Technology used in Backend:
          </h3>
          <div
            className="ml-4 flex flex-col items-start justify-start gap-2
              font-semibold"
          >
            <li>Express server deployed on render.com</li>
            <li>JWT authentication & authorization</li>
            <li>
              Mongodb database on mongo atlas and communicated using mongoose
            </li>
            <li>
              Multi file upload using multer and images uploaded to cloudinary
              via API
            </li>
            <li>Rate limiting with redis data base</li>
          </div>
        </div>
        <h3 className="my-4 text-lg font-bold text-violet-600 underline">
          Technology used in app:
        </h3>
        <div
          className="ml-4 flex flex-col items-start justify-start gap-2
            font-semibold"
        >
          <li>React Native</li>
          <li>TypeScript</li>
          <li>Native Wind</li>
          <li>gluestack-ui</li>
        </div>
      </div>
    </div>
  );
}
