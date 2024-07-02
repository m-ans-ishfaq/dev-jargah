import content from "@/content.json";

export function Agenda()
{
    return (
        <section>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
                <div className="flex flex-col items-center max-w-4xl mx-auto ">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl font-display text-center">Event Agenda</h2>
                </div>
                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-2xl lg:max-w-none lg:mx-0">
                    {content.eventAgendas.map(({ agenda, time }, i) => (
                        <div key={i} className="p-4 bg-slate-100 rounded-3xl flex flex-col gap-4">
                            <div className="flex-1">
                            <div className="flex justify-between items-center gap-4">
                                <div className="py-1.5 px-3 text-sm font-medium text-slate-900 bg-slate-200 rounded-full">
                                    {time}
                                </div>
                            </div>
                            <p className="mt-4 text-base text-slate-900">
                                {agenda}
                            </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}