import { AvatarRounded } from "./avatar";
import { DarkSectionWrapper } from "./section-wrapper";

export const SectionContent = ({
  title,
  description,
  items,
  itemPath,
}: {
  title: string;
  description: string;
  items: { name: string; avatar: string }[];
  itemPath: string;
}) => (
  <DarkSectionWrapper
    containerClassname="pb-16"
    title={title}
    description={description}
  >
    <div className="text-white w-full container grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ name, avatar }, i) => (
        <AvatarRounded key={i} name={name} img={`/${itemPath}/${avatar}`} />
      ))}
    </div>
  </DarkSectionWrapper>
);
