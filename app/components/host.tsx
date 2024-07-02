import content from "@/content.json";

export function Host()
{
    return (
        <section id="team" aria-labelledby="team-title" className="py-24">
            <svg aria-hidden="true" width="0" height="0">
                <defs>
                    <clipPath id=":r0:-0" clipPathUnits="objectBoundingBox">
                        <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0"></path>
                    </clipPath>
                    <clipPath id=":r0:-1" clipPathUnits="objectBoundingBox">
                        <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7"></path>
                    </clipPath>
                    <clipPath id=":r0:-2" clipPathUnits="objectBoundingBox">
                        <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0"></path>
                    </clipPath>
                </defs>
            </svg>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl font-display">Organizers &amp; Host</h2>
                </div>
                <div>
                    <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 xl:grid-cols-4 [&amp;:not(:focus-visible)]:focus:outline-none mx-auto  max-w-2xl lg:max-w-none lg:mx-0">
                        {content.hosts.map(({avatar, name, role}, i) => (
                            <div key={i}>
                                <div className="group relative h-[24rem] sm:h-[17.5rem] transform overflow-hidden rounded-4xl">
                                    <div className="absolute bottom-6 left-0 right-4 top-0 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6 border-blue-300 border-indigo-300 border-sky-300"></div>
                                    <div className="absolute inset-0 bg-indigo-50" style={{ clipPath: "url(\"#:r0:-0\")" }}>
                                        <img src={`/hosts/${avatar}`} alt={name} width="600" height="600" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110 object-top" sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" style={{ color: "transparent" }} />
                                    </div>
                                </div>
                                <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">{name}</h3>
                                <p className="mt-1 text-base tracking-tight text-slate-500">{role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}