import { content } from "../assets/data";
import { AvatarRounded } from "./ui/avatar";
import { SectionWrapper } from "./ui/section-wrapper";

export function Speakers() {
  return (
    <SectionWrapper
      title="Our Speakers"
      description="Get inspired by our distinguished speakers, leading voices in the tech industry at Dev جرگہ"
    >
      <div className="w-full container grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {content.speakers.map(({ name, avatar }, i) => (
          <AvatarRounded key={i} {...{ name, img: `/speakers/${avatar}` }} />
        ))}
      </div>
    </SectionWrapper>
  );
}
