import Logo from "@/public/logo.webp";
import Image from "next/image";
import content from "@/content.json";
import Link from "next/link";

export function Header() {
    return (
        <header className="relative z-50 pb-11 lg:pt-11">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
                <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
                    <Image loading="lazy" width="130" height="80" decoding="async" data-nimg="1" className="object-scale-down" src={Logo} alt="Logo" style={{ color: 'transparent' }} />
                </div>
                <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-brand-primary-600 py-4 font-mono text-sm text-brand-primary-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
                    <div className="mx-auto flex items-center gap-4 px-4">
                        <p>
                            <time dateTime="2022-04-04"></time>
                            <time dateTime="2022-04-06">{content.eventDate}</time>
                        </p>
                        <svg aria-hidden="true" viewBox="0 0 6 6" className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"><path d="M3 0L6 3L3 6L0 3Z" stroke-width="2" stroke-linejoin="round"></path></svg>
                        <p className="hidden sm:inline-flex">
                            {content.eventLocation}
                        </p>
                    </div>
                </div>
                 <!--<div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
                    <Link className="group inline-flex items-center justify-center rounded-full py-3 px-5 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-brand-primary-600 text-white hover:text-slate-100 hover:bg-brand-primary-500 active:bg-brand-primary-800 active:text-brand-primary-100 focus-visible:outline-brand-primary-600" href="/register">
                        Register yourself
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4L6.4 18Z"></path></svg>
                    </Link>
                </div>
                ...-->
            </div>
        </header>
    )
}
