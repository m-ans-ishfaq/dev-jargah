import { Timer } from "./Timer";
import { content } from "../assets/data";
import { AvatarRounded } from "./ui/avatar";
import { DarkSectionWrapper } from "./ui/section-wrapper";

export function DarkSection() {
  return (
    <section className="w-full mt-8 relative flex flex-col items-center">
      {/* Timer */}
      <div className="relative px-4 z-[4] container max-w-5xl flex flex-col">
        <div className="hidden sm:flex justify-center w-full">
          <Timer />
        </div>
      </div>
      <div className="h-20 left-0 top-24 bg-red-700 w-full absolute z-[2]" />
      <div className="w-full relative py-12 sm:py-0 sm:-top-20 z-[3] sm:pt-40">
        <img
          src="/hexagon.png"
          alt=""
          className="object-cover absolute w-full h-full sm:h-[calc(100%+80px)] top-0 left-0 z-0"
        />
        <div className="absolute w-full h-full sm:h-[calc(100%+80px)] top-0 left-0 z-[1] bg-black bg-opacity-80" />
        {/* Speakers */}
        <DarkSectionWrapper
          containerClassname="pb-16"
          title="Our Speakers"
          description="Get inspired by our distinguished speakers, leading voices in the tech industry at Dev جرگہ"
        >
          <div className="text-white w-full container grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {content.speakers.map(({ name, avatar }, i) => (
              <AvatarRounded
                key={i}
                {...{ name, img: `/speakers/${avatar}` }}
              />
            ))}
          </div>
        </DarkSectionWrapper>
        {/* Sponsors */}
        {/* <DarkSectionWrapper
          containerClassname="pb-16"
          title="Our Sponsors"
          description="Get inspired by our distinguished speakers, leading voices in the tech industry at Dev جرگہ"
        >
          <div className="text-white w-full container grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {content.speakers.map(({ name, avatar }, i) => (
              <AvatarRounded
                key={i}
                {...{ name, img: `/speakers/${avatar}` }}
              />
            ))}
          </div>
        </DarkSectionWrapper> */}
      </div>
    </section>
  );
}
