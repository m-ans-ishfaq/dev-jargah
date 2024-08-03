import Image from "next/image";
import { QUAImage } from "../assets/images";
import { content } from "../assets/data";

export function QUA()
{

    return (
        <section className="flex justify-center items-center h-[40vh] min-h-[32rem] bg-black relative px-4">
            <Image src={QUAImage} alt="QUA Islamabad" className="absolute w-full h-full object-cover top-0 left-0 z-0" />
            <div className="relative py-8 px-8 bg-white backdrop-blur-sm bg-opacity-65 rounded-md w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 divide-y divide-x md:divide-y-0 divide-neutral-400 border-neutral-400 border">
                {content.aboutUs.details.map(({label, value}, i) => (
                    <div key={i} className="py-4 w-full h-full flex items-center flex-col justify-center">
                        <h5 className="font-bold text-2xl sm:text-4xl">{value}</h5>
                        <p className="text-lg">{label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}