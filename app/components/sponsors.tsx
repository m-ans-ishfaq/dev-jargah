import content from "@/content.json";
import Image from "next/image";

export function Sponsors()
{
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl font-display text-center">Sponsors &amp; Media Partners</h2>
                </div>
                <div className="mt-16 -mx-4 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                    {content.partners.map(({image, label, partnership}, i) => (
                        <div key={i} className="bg-slate-400/5 p-6 sm:p-10">
                            <Image className="max-h-20 min-h-[5rem] w-full object-contain" src={require(`@/public/partners/${image}`)} alt={label} width="158" height="60"/>
                            <br/>
                            <p className="text-center font-bold font-display">{partnership}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}