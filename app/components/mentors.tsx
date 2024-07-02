import content from "@/content.json";
import Image from "next/image";

export function Mentors() {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
                <div className="flex flex-col items-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl font-display text-center">Organizers</h2>
                </div>
                <ul role="list" className="mx-auto mt-20 flex flex-wrap justify-center gap-x-8 gap-y-16 text-center lg:mx-0 lg:max-w-none">
                    {content.mentors.map(({ avatar, name }, i) => (
                        <li key={i} className="flex flex-col items-center">
                            <div className="mx-auto h-32 w-32 xl:h-48 xl:w-48 rounded-full border border-neutral-300">
                                <Image 
                                    alt={name} 
                                    loading="lazy" 
                                    width="192" 
                                    height="192" 
                                    decoding="async" 
                                    data-nimg="1" 
                                    className="w-full h-full object-contain rounded-full" 
                                    src={require(`@/public/mentors/${avatar}`)} 
                                    style={{ color: "transparent" }} 
                                />
                            </div>
                            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                                {name}
                            </h3>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
