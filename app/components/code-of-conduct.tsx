import { content } from "../assets/data";

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
          <div
            key={i}
            className="h-full flex flex-col gap-4 group cursor-pointer"
          >
            <div className="text-start flex h-full">
              <div className="w-2 bg-red-600 h-full" />
              <div className="p-4 py-2 bg-neutral-50 group-hover:bg-neutral-100 w-full">
                <p className="font-bold text-lg mb-2">{title}</p>
                <h5 className="text-lg font-medium">{description}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
