import Image from "next/image";
import { HeroBg } from "../assets/images";
import { Header } from "./header";
import { content } from "../assets/data";
import { FaLocationArrow, FaRegClock } from "react-icons/fa";

export function Hero() {
    return (
        <section className="w-full overflow-x-hidden relative">
            <Image src={HeroBg} alt="" className="absolute w-full h-full top-0 left-0 z-0 object-cover" />
            <div className="absolute w-full h-full top-0 left-0 z-[1] bg-black bg-opacity-50 object-cover" />
            {/* Circles */}
            <div className="absolute -left-40 top-20 w-80 h-96 rounded-full z-[2] bg-gradient-radial from-[#FC343150] from-5% to-75% to-[#FC343100] opacity-50" />
            <div className="absolute -right-40 top-60 w-80 h-96 rounded-full z-[2] bg-gradient-radial from-[#FC343150] from-5% to-75% to-[#FC343100] opacity-50" />
            {/* Content */}
            <div className="">
                <Header transparent />
                <div className="px-4 flex flex-col items-center">
                    {/* Main Wrapper */}
                    <div className="text-center max-w-5xl text-white relative z-[3] pt-16 sm:pt-40 pb-8 flex flex-col gap-4 items-center justify-center">
                        <div className="space-y-2">
                            <h1 className="text-xl sm:text-3xl font-bold">
                                {content.title}
                            </h1>
                            <p className="text-justify sm:text-center text-neutral-300 text-lg">
                                {content.description}
                            </p>
                        </div>
                         {/* <div className="flex justify-center">
                            <div className="grid grid-cols-2 gap-4">
                                <button className="text-sm sm:text-lg font-medium py-3 px-6 btn">
                                    Register Now
                                </button>
                                <button className="text-sm sm:text-lg font-medium py-3 px-6 btn">
                                    Become a Sponsor
                                </button>
                            
                            </div>
                            */}
                    </div>
                        <div className="">
                            <div className="mt-16 w-full max-w-5xl py-6 bg-black bg-opacity-50 backdrop-blur-sm  rounded-md border-neutral-600 border flex flex-col gap-2 items-start px-6 text-start">
                                <h3 className="text-xl">
                                    {content.aboutUs.title}
                                </h3>
                                <p className="text-neutral-300">
                                    {content.aboutUs.description}
                                </p>
                                <div className="mt-2 w-full flex flex-wrap gap-4 justify-between">
                                    {/* Left */}
                                    <div className="flex flex-wrap gap-6">
                                        <div className="flex gap-2 items-center">
                                            <FaRegClock />
                                            <span>{content.eventDate} 10:00 AM</span>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <FaLocationArrow />
                                            <span>{content.eventLocation}</span>
                                        </div>
                                    </div>
                                    {/* Right */}
                                    <div className="">
                                        <button className="btn py-2 px-4">
                                            View Speakers
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-20 bottom-0 bg-red-700 w-full absolute z-[2]" />
            </div>
        </section>
    )
}