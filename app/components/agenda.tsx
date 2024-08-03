import { content } from "../assets/data";

export function Agenda()
{
    return (
        <section className="my-12 px-4 flex flex-col gap-8 text-center justify-center items-center">
            <div>
                <h2 className="text-2xl font-bold">
                    Event Agenda
                </h2>
                <p>
                Discover the exciting lineup in our Event Agenda, packed with sessions, talks, and activities for Dev جرگہ.
                </p>
            </div>
            <div className="w-full container grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {content.eventAgendas.map(({agenda, time}, i) => (
                    <div key={i} className="flex flex-col gap-4 group cursor-pointer">
                        <div className="text-start flex">
                            <div className="w-2 bg-red-600 h-full" />
                            <div className="pl-4 py-2 bg-neutral-50 group-hover:bg-neutral-100 w-full">
                                <p className="text-neutral-600">{time}</p>
                                <h5 className="text-lg font-medium">{agenda}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}