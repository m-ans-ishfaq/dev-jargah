import { content } from "../assets/data";
import { CardBadge } from "./ui/card";
import { SectionWrapper } from "./ui/section-wrapper";

export const Sponsors = () => {
  return (
    <SectionWrapper title="Sponsors">
      <div className="container gap-4 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {content.sponsors.map(({ image, label, partnership }, i) => (
          <CardBadge
            key={i}
            {...{ img: `/partners/${image}`, alt: label, txt: partnership }}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
