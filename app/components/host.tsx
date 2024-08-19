import { content } from "../assets/data";
import { SectionWrapper } from "./ui/section-wrapper";
import { AvatarClassic } from "./ui/avatar";

export function Hosts() {
  return (
    <SectionWrapper
      title="Event Hosts"
      description={`Meet the visionary organizers and hosts driving Dev جرگہ’s success and fostering a vibrant tech community.`}
    >
      <div className="w-full container grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {content.hosts.map(({ name, role, avatar }, i) => (
          <AvatarClassic key={i} {...{ name, role, img: `/hosts/${avatar}` }} />
        ))}
      </div>
    </SectionWrapper>
  );
}
