"use client";

import SPPortfolio from "./SPPortfolio";
import SPThesus from "./SPThesus";
export default function SideProjects() {

  return (
    <section
      id="projects"
      className="relative mx-auto mt-14 flex w-full max-w-5xl flex-col
        items-start justify-start gap-9 px-4 md:my-20"
    >
      <h2
        className="mx-auto inline-block bg-gradient-to-r from-fuchsia-500
          via-violet-300 to-violet-500 bg-clip-text pb-5 text-2xl font-bold
          text-transparent md:pb-10 md:text-5xl"
      >
        Side projects:
      </h2>
      <SPPortfolio />
      <SPThesus />
    </section>
  );
}
