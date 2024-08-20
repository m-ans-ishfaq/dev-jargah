import { content } from "../assets/data";
import { AvatarRounded } from "./ui/avatar";
import { DarkSectionWrapper } from "./ui/section-wrapper";

export const MediaPartners = () => (
  <DarkSectionWrapper
    title="Our Media Partners"
    description="Explore our media partners who are supporting Dev جرگہ and amplifying our message."
  >
    <div className="text-white w-full container grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {content.mediaPartners.map(({ label, image }, i) => (
        <AvatarRounded key={i} name={label} img={`/media-partners/${image}`} />
      ))}
    </div>
  </DarkSectionWrapper>
);
