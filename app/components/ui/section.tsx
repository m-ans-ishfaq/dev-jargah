import { ReactNode } from "react";
import { Timer } from "../Timer";

export const DarkSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full mt-8 relative flex flex-col items-center">
      {/* Timer */}
      <div className="relative px-4 z-[4] container max-w-5xl flex flex-col">
        <div className="hidden sm:flex justify-center w-full">
          <Timer />
        </div>
      </div>
      <div className="h-20 left-0 top-24 bg-red-700 w-full absolute z-[2]" />
      <div className="w-full relative py-12 sm:py-0 sm:-top-20 z-[3] sm:pt-28">
        <img
          src="/hexagon.png"
          alt=""
          className="object-cover absolute w-full h-full sm:h-[calc(100%+80px)] top-0 left-0 z-0"
        />
        <div className="text-white absolute w-full h-full sm:h-[calc(100%+80px)] top-0 left-0 z-[1] bg-black bg-opacity-80" />
        {children}
      </div>
    </section>
  );
};
