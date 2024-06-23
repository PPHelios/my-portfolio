"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export function AboutGrid() {
  return (
    <section id="about">
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
    description: "For web and mobile apps.",
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
