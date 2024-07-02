import content from "@/content.json";
import Image from "next/image";

export function Speakers()
{
    return (
        <section>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
                <div className="flex flex-col items-center max-w-4xl mx-auto ">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl font-display text-center">Our Speakers</h2>
                </div>
                <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3">
                    {content.speakers.map(({avatar, name}, i) => (
                        <li key={i}>
                            <Image className="mx-auto h-60 w-60 rounded-xl object-cover object-top" src={require(`@/public/speakers/${avatar}`)} alt={name} />
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