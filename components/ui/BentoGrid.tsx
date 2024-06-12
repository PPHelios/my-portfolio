import { cn } from "@/utils/cn";
import { BentoGlobe } from "./BentoGlobe";
import BentoSkills from "./BentoSkills";
import GridBackground from "./GridBackground";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import CtaButton from "./CtaButton";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `grid-auto-row-[340px] mx-auto grid max-w-7xl grid-cols-1 gap-4
        md:grid-flow-col md:grid-cols-2 md:grid-rows-[340px_340px_340px] animate-fade animate-duration-[2000ms]`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  id: number;
}) => {
  return (
    <div
      className={cn(
        `${id === 1 ? "row-span-2" : "row-span-1"} ${
        id === 0 ? "md:col-span-2" : "md:col-span-1" }
        ${id === 3 ? "p-0" : "p-4"} group/bento relative mb-8 rounded-xl border
        border-transparent bg-white shadow-input transition duration-200
        hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none`,
        className,
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* {header} */}
      {id === 1 && <BentoGlobe />}
      {id !== 3 && (
        <div
          className={`${ (id === 0 || id === 2) &&
          "absolute bottom-2 left-2 z-50 bg-[#1003002b] p-4" } transition
          duration-200 group-hover/bento:translate-x-2`}
        >
          <div
            className="mb-2 mt-2 font-sans font-bold text-neutral-600
              dark:text-neutral-200"
          >
            {title}
          </div>
          <div
            className="font-sans text-xs font-normal text-neutral-600
              dark:text-neutral-300"
          >
            {description}
          </div>
        </div>
      )}
      {id === 0 && (
        <div className="flex h-full flex-row items-center justify-between">
          <div className="h-full">
            <img src="./webMob.jpg" className="h-full" />
          </div>
          <div className="hidden md:solid">
            <img src="./webMob.jpg" className="h-[20px]" />
            <img src="./webMob.jpg" className="h-[20px]" />
            <img src="./webMob.jpg" className="h-[20px]" />
          </div>
        </div>
      )}
      {id === 2 && (
        <GridBackground>
          <BentoSkills />
        </GridBackground>
      )}
      {id === 3 && (
        <BackgroundGradientAnimation
          className="flex h-full min-h-[300px] w-full items-center
            justify-center"
        >
          <div
            className="flex flex-col items-center justify-center gap-6 px-4
              text-center text-3xl font-bold text-white md:text-4xl"
          >
            <div>Contact Me</div>
            <CtaButton title={"Copy Email"} />
          </div>
        </BackgroundGradientAnimation>
      )}
    </div>
  );
};
