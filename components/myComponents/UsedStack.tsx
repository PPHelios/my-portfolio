import React from "react";
import { AnimatedTooltip } from "../ui/AnimatedTooltip";

type Props = {
  stacks: { id: number; name: string; image: string }[];
  className?: string;
};

function UsedStack({ stacks, className }: Props) {
  return (
    <div className={`align-center flex justify-start gap-4 ${className}`}>
      <AnimatedTooltip items={stacks} />
    </div>
  );
}

export default UsedStack;
