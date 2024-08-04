import Image from "next/image";
import { Timer } from "./Timer";
import { Hexagon } from "../assets/images";
import { content } from "../assets/data";

export function Speakers() {

    // 1 October 2024
    const targetDate = new Date('2024-10-01T00:00:00');
    targetDate.setUTCHours(0, 0, 0, 0);
    targetDate.setMinutes(targetDate.getMinutes() - targetDate.getTimezoneOffset() + 4 * 60);

    return (
        <section className="w-full mt-8 relative flex flex-col items-center">
            <div className="relative px-4 z-[4] container max-w-5xl flex flex-col">
                <div className="hidden sm:flex justify-center w-full">
                    <Timer targetDate={targetDate} />
                </div>
            </div>
            <div className="h-20 left-0 top-24 bg-red-700 w-full absolute z-[2]" />
            <div className="w-full relative py-12 sm:py-0 sm:-top-20 z-[3] sm:pt-40">
                <Image
                    src={Hexagon}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="absolute w-full h-full sm:h-[calc(100%+80px)] top-0 left-0 z-0"
                />
                <div className="absolute w-full h-full sm:h-[calc(100%+80px)] top-0 left-0 z-[1] bg-black bg-opacity-80" />
                <div className="px-4 relative z-[5] flex flex-col text-center gap-8 items-center">
                    <div className="text-white">
                        <h2 className="text-2xl font-bold">
                            Our Speakers
                        </h2>
                        <p>
                            Get inspired by our distinguished speakers, leading voices in the tech industry at Dev جرگہ
                        </p>
                    </div>
                    <div className="text-white w-full container grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {content.speakers.map(({ name, avatar }, i) => (
                            <div key={i} className="flex flex-col items-center gap-4">
                                <Image
                                    src={`/speakers/${avatar}`}
                                    alt={name}
                                    width={160} // Adjust width as needed
                                    height={160} // Adjust height as needed
                                    className="rounded-full object-cover"
                                />
                                <div className="text-start flex gap-4">
                                    <h5 className="text-lg font-medium pb-2 border-b-2 border-red-600">{name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
