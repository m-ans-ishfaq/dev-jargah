import { content } from "../assets/data";
import { CardBadge } from "./ui/card";
import { SectionWrapper } from "./ui/section-wrapper";

export const Organizers = () => {
  return (
    <SectionWrapper title="Organizers">
      <div className="container gap-4 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {content.organizers.map(({ image }, i) => (
          <CardBadge key={i} {...{ img: `/mentors/${image}` }} />
        ))}
      </div>
    </SectionWrapper>
  );
};
