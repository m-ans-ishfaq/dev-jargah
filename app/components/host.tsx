import { content } from "../assets/data";
import { SectionWrapper } from "./ui/section-wrapper";
import { AvatarClassic } from "./ui/avatar";

const tiers = ["Tier 1", "Tier 2", "Tier 3"].reduce<Record<string, any>>(
  (acc, tier) => {
    acc[tier] = content.hosts.filter((host) => host.tier === tier);
    return acc;
  },
  {}
);

const TierSection = ({
  tier,
  hosts,
}: {
  tier: string;
  hosts: typeof content.hosts;
}) => (
  <div className="py-6">
    <div className="flex justify-center text-center relative">
      <h2 className="relative z-10 font-bold text-2xl mb-4">{tier}</h2>
    </div>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {hosts.map(({ name, role, avatar }, i) => (
        <div className="flex justify-center">
          <AvatarClassic
            key={i}
            name={name}
            role={role}
            img={`/hosts/${avatar}`}
          />
        </div>
      ))}
    </div>
  </div>
);

export function Hosts() {
  return (
    <SectionWrapper
      title="Event Hosts"
      description={`Meet the visionary organizers and hosts driving Dev جرگہ’s success and fostering a vibrant tech community.`}
    >
      <div className="w-full container">
        {Object.entries(tiers).map(([tier, hosts]) => (
          <TierSection key={tier} tier={tier} hosts={hosts} />
        ))}
      </div>
    </SectionWrapper>
  );
}
