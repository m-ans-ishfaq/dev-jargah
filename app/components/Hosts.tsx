import Image from "next/image";
import { content } from "../assets/data";

export function Hosts()
{
    return (
        <section className="my-12 px-4 flex flex-col gap-8 text-center justify-center items-center">
            <div>
                <h2 className="text-2xl font-bold">
                    Event Hosts
                </h2>
                <p>
                    Meet the visionary organizers and hosts driving Dev جرگہ's success and fostering a vibrant tech community.
                </p>
            </div>
            <div className="w-full container grid gap-6 grid-cols-4 xl:grid-cols-5">
                {content.hosts.map(({name, role, avatar}, i) => (
                    <div key={i} className="flex flex-col gap-4">
                        <img src={"/hosts/" + avatar} alt={name} className="h-60 w-full object-cover" />
                        <div className="text-start flex gap-4">
                            <div className="w-2 bg-red-600 h-full" />
                            <div>
                                <h5 className="text-lg font-medium">{name}</h5>
                                <p className="text-neutral-600">{role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}