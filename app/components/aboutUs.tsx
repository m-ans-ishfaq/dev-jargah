import Image from "next/image";
import AboutUsImage from "@/public/about-us.webp";
import content from "@/content.json";
import Link from "next/link";

export function AboutUs()
{
    return (
        <div className="relative isolate overflow-hidden bg-slate-900">
            <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
                <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style={{ clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" }}></div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12  mx-auto  max-w-2xl lg:max-w-none lg:mx-0">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl font-display">
                            {content.aboutUs.title}
                        </h2>
                    </div>
                    <div>
                        <p className="text-base leading-8 text-slate-300">
                            {content.aboutUs.description}
                        </p>
                        <div className="mt-6">
                        
                        </div>
                    </div>
                </div>
                <div className="mt-16  mx-auto  max-w-2xl lg:max-w-none lg:mx-0">
                    <Image loading="lazy" width="1484" height="848" decoding="async" data-nimg="1" className="aspect-[9/5] w-full object-cover" src={AboutUsImage} alt="People" style={{ color: "transparent" }} />
                </div>
                <div className="grid lg:grid-cols-3 gap-12 mt-16 items-center mx-auto  max-w-2xl lg:max-w-none lg:mx-0">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-white lg:text-3xl xl:text-4xl font-display">About us</h3>
                    </div>
                    <div className="lg:col-span-2">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 text-white sm:grid-cols-2 sm:gap-y-16  lg:grid-cols-4">
                            {content.aboutUs.details.map(({label, value}, i) => (
                                <div key={i} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                                    <dt className="text-sm leading-6">{label}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
