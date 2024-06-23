"use client";

import { LinkPreview } from "./ui/LinkPreview";
import { useRef } from "react";
import { useIsVisible } from "@/utils/useIsVisible";
import UsedStack from "./myComponents/UsedStack";
const stacks = [
  { id: 1, name: "React JS", image: "/react.webp" },
  { id: 2, name: "Material UI", image: "/mui.png" },
  { id: 3, name: "Node JS", image: "/node.svg" },
  { id: 4, name: "Zustand", image: "/zustand.png" },
];
export default function SPThesus() {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  return (
      <div className="flex-col items-start justify-start px-4">
        <LinkPreview url="https://thesus2.netlify.app/">
          <h2
            className="relative z-10 bg-gradient-to-b from-blue-400
              to-emerald-600 bg-clip-text font-sans text-xl font-bold
              text-transparent md:text-4xl"
          >
            Thesus
          </h2>
          <p
            ref={ref1}
            className={`mt-4 text-lg font-semibold md:pl-[20px] ${ isVisible1 &&
              "animate-fade-right" }`}
          >
            A foot wear shopping website inspired by thesusoutdoors.com.
          </p>
        </LinkPreview>
        <UsedStack stacks={stacks} className="my-6" />
        <div>
          <h3 className="my-4 text-lg font-bold text-violet-600 underline">
            About Thesus :
          </h3>
          <p className="text-md mb-3 font-semibold text-emerald-500">
            It is a full stack app using MERN stack (backend is not deployed).
          </p>
          <div
            className="align-start ml-4 flex flex-col justify-start gap-2
              font-semibold "
          >
            <li>Supports Arabic/English from within the user menu.</li>
            <li>Supports light/dark theme from within the user menu.</li>
            <li>Supports product search.</li>
            <li>
              Backend supports authentication, session management, cart
              management, and addition of new products to the database.
            </li>
          </div>
          <h3 className="my-4 text-lg font-bold text-violet-600 underline">
            Technology Used :
          </h3>
          <div
            className="align-start ml-4 flex flex-col justify-start gap-2
              font-semibold"
          >
            <li>React JS.</li>
            <li>MUI for components and styling.</li>
            <li>i18next for localization.</li>
            <li>AnimXYZ for animations.</li>
            <li>React Hook Form + Yup for client-side forms and validation.</li>
            <li>Zustand for state management.</li>
            <li>Node.js + Express for backend.</li>
            <li>MongoDB Atlas + Mongoose for database (basic usage).</li>
            <li>Passport.js for authentication.</li>
          </div>
        </div>
      </div>
  );
}
