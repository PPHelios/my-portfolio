"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export function AboutGrid() {
  return (
    <section id="about">
      <div
        className="mx-auto flex w-[96%] flex-col items-start justify-start gap-3
          pl-2 py-4 text-xl"
      >
        <p>
          <span className="font-bold text-yellow-600">
            {" "}
            PSM I certified Scrum Master
          </span>{" "}
          with <span className="font-bold text-teal-500">5+</span> years of
          leadership in{" "}
          <span className="font-bold text-teal-500">Agile environments</span>,
          complemented by{" "}
          <span className="font-bold text-teal-500">over 5</span> years of
          experience as a{" "}
          <span className="font-bold text-teal-500">Full Stack Developer</span>.
        </p>
        <p>
          Proficient in{" "}
          <span className="font-bold text-teal-500">
            bridging technical and business
          </span>{" "}
          perspectives, with a track record of depvering high-impact solutions
          and managing cross-functional teams using{" "}
          <span className="font-bold text-teal-500">Scrum ,Kanban</span>{" "}
          methodologies and{" "}
          <span className="font-bold text-teal-500">DevOps</span> practices.
        </p>
        <p>
          Extensive experience working with{" "}
          <span className="font-bold text-teal-500">multinational teams</span> ,
          enhancing cross-cultural communication and collaboration.
        </p>
      </div>
      <BentoGrid className="mx-auto mt-5 max-w-4xl px-5">
        {items.map((item, i) => {
          return (
            <BentoGridItem
              key={i}
              id={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
}

const items = [
  {
    id: 0,
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "md:col-span-2",
  },
  {
    id: 1,
    // title: "The Digital Revolution",
    // description: "Dive into the transformative power of technology.",
    // className: "md:col-span-1"
  },
  {
    id: 2,
    title: "Diverse skill set",
    // description: "For web and mobile apps.",
    className: "md:col-span-1",
  },
  {
    id: 3,
    title: "The Power of Communicationsss",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-2",
  },
];
