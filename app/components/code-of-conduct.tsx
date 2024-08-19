import { content } from "../assets/data";
import { CardClassic } from "./ui/card";

export function CodeOfConduct() {
  return (
    <section className="my-12 px-4 flex flex-col gap-8 text-center justify-center items-center">
      <div>
        <h2 className="text-2xl font-bold mb-2">Code of Conduct</h2>
        <p>
          Dev Jirga is committed to fostering an inclusive, respectful, and
          harassment-free environment for all participants.
        </p>
      </div>
      <div className="w-full container grid gap-6 grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 xl:grid-rows-1 xl:grid-cols-4">
        {content.codeOfConduct.map(({ title, description }, i) => (
          <CardClassic
            key={i}
            {...{ title, content: description }}
            titleClassname="text-black font-bold mb-1"
            contentClassname="text-base"
          />
        ))}
      </div>
    </section>
  );
}
