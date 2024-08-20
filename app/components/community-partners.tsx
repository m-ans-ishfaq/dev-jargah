import React from "react";
import { content } from "../assets/data";
import { DarkSectionWrapper } from "./ui/section-wrapper";
import { AvatarRounded } from "./ui/avatar";

export function CommunityPartners() {
  return (
    <DarkSectionWrapper
      title="Our Community Partners"
      description="Meet our valued community partners who are contributing to the success of Dev جرگہ."
    >
      <div className="w-full container py-6">
        <div className="text-white grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {content.communityPartners.map(({ image, label }, i) => (
            <AvatarRounded key={i} img={`/partners/${image}`} name={label} />
          ))}
        </div>
      </div>
    </DarkSectionWrapper>
  );
}
