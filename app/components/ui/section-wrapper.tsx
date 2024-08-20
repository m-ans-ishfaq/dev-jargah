import { cn } from "@/app/utils/cn";
import { ReactNode } from "react";

export function SectionWrapper({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="my-16 px-4 flex flex-col gap-8 text-center justify-center items-center">
      <div>
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  );
}

export function DarkSectionWrapper({
  title,
  description,
  children,
  containerClassname,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  containerClassname?: string;
}) {
  return (
    <div
      className={cn(
        "my-16 px-4 relative z-[5] flex flex-col text-center gap-8 items-center",
        containerClassname
      )}
    >
      <div className="text-white">
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </div>
  );
}
