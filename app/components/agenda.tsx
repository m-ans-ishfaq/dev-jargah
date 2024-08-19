import { content } from "../assets/data";
import { CardClassic } from "./ui/card";
import { SectionWrapper } from "./ui/section-wrapper";

export function Agenda() {
  return (
    <SectionWrapper
      title="Event Agenda"
      description="Discover the exciting lineup in our Event Agenda, packed with sessions, talks, and activities for Dev جرگہ."
    >
      <div className="w-full container grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {content.eventAgendas.map(({ agenda, time }, i) => (
          <CardClassic key={i} {...{ title: agenda, content: time }} />
        ))}
      </div>
    </SectionWrapper>
  );
}
