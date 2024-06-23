"use client";
import React from "react";
import { Copy, CopyCheck } from "lucide-react";

function CtaButton({
  title,
  icon,
  position,
}: {
  title: string;
  icon?: any;
  position?: string;
}) {
  const [clicked, setClicked] = React.useState(false);
  const copyButton = title === "Copy Email";
  const handleCopy = () => {
    navigator.clipboard.writeText("haytham.atef1@gmail.com");
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="relative z-50 inline-flex h-12 w-full overflow-hidden
        rounded-lg p-[1px] focus:outline-none"
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
          bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className="inline-flex h-full w-full cursor-pointer items-center
          justify-center gap-2 rounded-lg bg-slate-950 px-3 py-1 text-sm
          font-medium capitalize text-white backdrop-blur-3xl"
      >
        {position === "left" && icon}
        {copyButton && !clicked ? <Copy /> : copyButton ? <CopyCheck /> : null}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
}

export default CtaButton;
