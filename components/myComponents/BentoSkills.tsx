import { skills } from "@/data";
import React from "react";
function BentoSkills() {
  return (
    <div
      className="mt-4 flex h-full min-h-[240px] flex-wrap content-start
        items-start justify-center gap-3"
    >
      {skills.map((skill, i) => (
        <div
          key={i}
          className={"pointer-events-none rounded-sm bg-sky-900 p-2"}
        >
          {skill}
        </div>
      ))}
    </div>
  );
}

export default BentoSkills;
