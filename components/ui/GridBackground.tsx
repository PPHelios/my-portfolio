import React, { ReactNode } from "react";

function GridBackground({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative flex size-full items-start justify-center bg-white
        pt-5 bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center
          justify-center bg-white
          [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]
          dark:bg-black"
      ></div>
      {children}
    </div>
  );
}

export default GridBackground;
