import Image from "next/image";
import { content } from "../assets/data";
import { MLSABadge, MLSAQUABadge } from "../assets/images";

export function SponsorsAndOrganizers()
{

    const ORGANIZERS = [
        {
            image: MLSABadge
        },
        {
            image: MLSAQUABadge
        }
    ];

    return (
        <section className="px-4 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 container px-0">
                {/* Sponsors */}
                <div className="flex flex-col gap-6 py-6 items-center">
                    <h2 className="font-bold text-xl">
                        Sponsors and Media Partners
                    </h2>
                    <div className="w-full grid grid-cols-2 gap-3 xl:grid-cols-4 ">
                        {content.partners.map(({image, label, partnership}, i) => (
                            <div key={i} className="flex flex-col items-center py-4 px-4 border rounded-md">
                                <img src={"/partners/" + image} alt={label} className="w-20 h-20 object-contain" />
                                <span className="text-center font-medium text-lg">{partnership}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Organizers */}
                <div className="flex flex-col gap-6 py-6 items-center">
                    <h2 className="font-bold text-xl">
                        Sponsors and Media Partners
                    </h2>
                    <div className="text-center w-full grid grid-cols-2 xl:grid-cols-4 gap-3">
                        {ORGANIZERS.map(({image}, i) => (
                            <div key={i} className="flex flex-col items-center py-4 px-4 border rounded-md">
                                <Image src={image} alt="MLSA"  className="w-20 h-20 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}