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
            <div className="relative px-4 z-[4] container flex flex-col">
                <div className="flex justify-center w-full">
                    <Timer {...{ targetDate }} />
                </div>
            </div>
            <div className="h-20 left-0 top-24 bg-red-700 w-full absolute z-[2]" />
            <div className="w-full relative -top-20 z-[3] pt-40">
                <Image src={Hexagon} alt="" className="absolute w-full h-[calc(100%+80px)] top-0 left-0 z-0 object-cover" />
                <div className="absolute w-full h-[calc(100%+80px)] top-0 left-0 z-[1] bg-black bg-opacity-80 object-cover" />
                <div className="relative z-[5] flex flex-col text-center gap-8 items-center">
                    <div className="text-white">
                        <h2 className="text-2xl font-bold">
                            Our Speakers
                        </h2>
                        <p>
                            Get inspired by our distinguished speakers, leading voices in the tech industry at Dev جرگہ
                        </p>
                    </div>
                    <div className="text-white w-full container grid gap-6 grid-cols-4 xl:grid-cols-5">
                        {content.speakers.map(({ name, avatar }, i) => (
                            <div key={i} className="flex flex-col items-center gap-4">
                                <img src={"/speakers/" + avatar} alt={name} className="h-40 w-40 rounded-full object-cover" />
                                <div className="text-start flex gap-4">
                                    <h5 className="text-lg font-medium">{name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}