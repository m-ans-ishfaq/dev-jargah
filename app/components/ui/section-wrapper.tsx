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
    <section className="my-12 px-4 flex flex-col gap-8 text-center justify-center items-center">
      <div>
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  );
}
