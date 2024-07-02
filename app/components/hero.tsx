import content from "@/content.json";
import Logo from "@/public/logo.webp";
import Image from "next/image";
import { HeroCard } from "./heroCard";

export function Hero()
{
    return (
        <div className="relative isolate">
            <svg className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-slate-200 [mask-image:radial-gradient(40rem_40rem_at_center,white,transparent)]" aria-hidden="true">
                <defs>
                    <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                        <path d="M.5 200V.5H200" fill="none"></path>
                    </pattern>
                </defs>
                <svg x="50%" y="-1" className="overflow-visible fill-slate-50">
                    <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0"></path>
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"></rect>
            </svg>
            <div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
                <div className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath : "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" }}></div>
            </div>
            <div className="overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:pt-20 lg:pb-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center  mx-auto  max-w-2xl lg:max-w-none lg:mx-0">
                        <div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl font-display">
                            {content.title}
                        </h1>
                        <p className="mt-6 font-display text-2xl tracking-tight text-slate-700">
                            {content.description}
                        </p>
                        <div className="mt-8">
                            <a className="group inline-flex items-center justify-center rounded-full py-3 px-5 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-brand-primary-600 text-white hover:text-slate-100 hover:bg-brand-primary-500 active:bg-brand-primary-800 active:text-brand-primary-100 focus-visible:outline-brand-primary-600" href="/register">
                                Register yourself 
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4L6.4 18Z"></path>
                                </svg>
                            </a>
                        </div>
                        </div>
                        <div className="">
                        <HeroCard />
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}