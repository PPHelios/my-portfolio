import React from "react";
import { GlareCard } from "./ui/GlareCard";
const phases = [
  {
    name: "Requirements & Design",
    content: "Define project goals and design architecture and UI/UX",
  },
  {
    name: "Development & Testing",
    content: "Implement features to produce an increment and test",
  },
  {
    name: "Deployment & Maintenance",
    content: "Launch or integrate the increment and fix bugs",
  },
];
function Approach() {
  return (
    <section id="approach" className="px-5 py-10 md:w-screen">
      <div className="flex items-center justify-center">
        <h2
          className="inline-block bg-gradient-to-r from-fuchsia-500
            via-violet-300 to-violet-500 bg-clip-text pb-5 text-2xl font-bold
            text-transparent md:pb-10 md:text-5xl"
        >
          Approach
        </h2>
      </div>
      <p
        className="mb-8 mt-3 size-full max-w-4xl text-center text-lg
          md:text-left md:text-xl"
      >
        I prefer using <span className="font-bold text-emerald-600">Agile</span>{" "}
        methodology with{" "}
        <span className="font-bold text-emerald-600">Scrum</span> framework for
        early and continous software delivery, more collaboration with the
        customer and accomodate changing requirements.
      </p>
      <div
        className="flex flex-col items-center justify-center gap-4 md:flex-row"
      >
        {phases.map((phase) => (
          <GlareCard
            key={phase.name}
            className="flex items-center justify-center"
          >
            <div
              className="z-10 flex flex-col items-center justify-center gap-4
                p-4"
            >
              <h5 className="text-lg font-bold text-violet-600">
                {phase.name}
              </h5>
              <p className="text-center text-sm">{phase.content}</p>
            </div>
            <img
              className="absolute inset-0 size-full object-cover"
              src="/bg.png"
            />
          </GlareCard>
        ))}
      </div>
    </section>
  );
}

export default Approach;
