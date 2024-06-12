"use client";

import Image from "next/image";
import { Tabs } from "./ui/Tabs";
import { StickyScroll } from "./ui/StickyScroll";
import { LinkPreview } from "./ui/LinkPreview";
import { useRef } from "react";
import { useIsVisible } from "@/utils/useIsVisible";

export default function Projects() {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  const webContent = [
    {
      title: "Responsive & SEO friendly",
      description:
        "Easy to use and SEO friendly website (100% on Ahref) built with Next js 14 using app router, server components, API routes.",
      content: (
        <div
          className="flex h-full w-full items-center justify-center
            bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]
            text-white"
        >
          Responsive Design & SEO
        </div>
      ),
    },
    {
      title: "Bilingual website",
      description:
        "Website is Bilingual arabic and english for ease of use using react-i18next for localization",
      content: (
        <div
          className="flex h-full w-full items-center justify-center
            bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))]
            text-white"
        >
          Bilingual website
        </div>
      ),
    },
    {
      title: "Display properties on map",
      description:
        "Display properties with price and floating card on maps using mapTiler to reduce costs.",
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/map.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Real time Chat",
      description:
        "Implemented cross-platform real time chat using Parse server live queries (web-sockets)",
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/chat.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Dashboard",
      description:
        "Dashboard for statistics, management, logs, review before acceptance.",
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/dashboard.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
  const iosContent = [
    {
      title: "Search screen",
      description:
        "User can search, filter and sort properties according to various criteria.",
      hasImage: true,
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/searchIosE.jpg"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Display properties on map",
      description: "Display properties on maps using mapTiler to reduce costs.",
      hasImage: true,
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/mapIosE.jpg"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Real time Chat",
      description:
        "Implemented cross-platform real time chat using Parse server live queries (web-sockets)",
      hasImage: true,
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/chatIosE.jpg"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Ad. details screen",
      hasImage: true,
      description:
        "User can view ad details and contact the seller with various methods.",
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/propertyDetailsIosE.jpg"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "iPadOS compatible",
      description: "App is responsive and iPadOS compatible.",
      hasImage: true,
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/ipadIosE.jpg"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
  const androidContent = [
    {
      title: "Search screen",
      description:
        "User can search and sort properties according to various (date added,price,area).",
      hasImage: true,
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/searchAndroid.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Filter menu",
      description:
        "Filter properties according to various criteria (unit type, price, area, level, ...).",
      hasImage: true,
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/filterAndroid.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Add new properties",
      description:
        "User is easily able to add new properties with location and images.",
      hasImage: true,
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/addAndroid.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Display properties on map",
      description: "Display properties on maps using mapTiler to reduce costs.",
      hasImage: true,
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/mapAndroid.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Real time Chat",
      description:
        "Implemented cross-platform real time chat using Parse server live queries (web-sockets)",
      hasImage: true,
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/chatAndroid.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Ad. details screen",
      hasImage: true,
      description:
        "User can view ad details and contact the seller with various methods.",
      content: (
        <div
          className="flex h-full w-full items-center justify-center text-white"
        >
          <Image
            src="/detailsAndroid.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  const tabs = [
    {
      title: "Web",
      value: "product",
      content: (
        <div
          className="relative h-full w-full overflow-hidden rounded-2xl
            bg-violet-800 pt-2 pl-2 text-xl font-bold text-white md:p-10 md:text-4xl"
        >
          <p>Web App</p>
          <div className="p-3 md:p-10">
            <StickyScroll content={webContent} />
          </div>
        </div>
      ),
    },
    {
      title: "Ios",
      value: "Ios",
      content: (
        <div
          className="relative h-full w-full overflow-hidden rounded-2xl
            bg-violet-800 pt-2 pl-2 text-xl font-bold text-white md:p-10 md:text-4xl"
        >
          <p>iOs App</p>
          <div className="p-3 md:p-10">
            <StickyScroll content={iosContent} />
          </div>
        </div>
      ),
    },
    {
      title: "Android",
      value: "Android",
      content: (
        <div
          className="relative h-full w-full overflow-hidden rounded-2xl
            bg-violet-800 pt-2 pl-2 text-xl font-bold text-white md:p-10 md:text-4xl"
        >
          <p>Android App</p>
          <div className="p-3 md:p-10">
            <StickyScroll content={androidContent} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="projects"
      className="relative mx-auto mt-14 md:mt-40 flex h-[50rem] w-full px-4 max-w-5xl flex-col
        items-start justify-start [perspective:1000px] md:h-[50rem]"
    >
      <h2
        className="mx-auto inline-block bg-gradient-to-r from-fuchsia-500
          via-violet-300 to-violet-500 bg-clip-text pb-10 md:pb-20 text-2xl font-bold
          text-transparent md:text-5xl"
      >
        Major projects:
      </h2>
      <LinkPreview url="https://bdoonwasyt.com">
        <h3
          className="text-xl relative z-10 bg-gradient-to-b from-blue-400
            to-emerald-600 bg-clip-text md:text-center font-sans font-bold
            text-transparent md:text-4xl"
        >
          Bdoon Wasyt
        </h3>
        <p
          ref={ref1}
          className={`mb-16 mt-4 md:pl-[100px] text-lg font-semibold ${ isVisible1
            && "animate-fade-right" }`}
        >
          The fast growing real estate listing website.
        </p>
      </LinkPreview>
      <Tabs tabs={tabs} />
    </section>
  );
}
