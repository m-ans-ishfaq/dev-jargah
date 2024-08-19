import { content } from "../assets/data";
import { CardBadge } from "./ui/card";

export function SponsorsAndOrganizers() {
  const ORGANIZERS = [
    {
      image: "mlsa.png",
    },
    {
      image: "mlsa_qua.png",
    },
  ];

  return (
    <section className="px-4 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 container px-0">
        {/* Sponsors */}
        <div className="flex flex-col gap-6 py-6 items-center">
          <h2 className="font-bold text-xl">Sponsors and Media Partners</h2>
          <div className="w-full grid grid-cols-2 gap-3 xl:grid-cols-4 ">
            {content.partners.map(({ image, label, partnership }, i) => (
              <CardBadge
                key={i}
                {...{ img: `/partners/${image}`, alt: label, txt: partnership }}
              />
            ))}
          </div>
        </div>
        {/* Organizers */}
        <div className="flex flex-col gap-6 py-6 items-center">
          <h2 className="font-bold text-xl">Organizers</h2>
          <div className="text-center w-full grid grid-cols-2 xl:grid-cols-4 gap-3">
            {ORGANIZERS.map(({ image }, i) => (
              <CardBadge key={i} {...{ img: `/mentors/${image}` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
