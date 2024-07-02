import content from "@/content.json";

export function RegisterCard()
{
    return (
        <div className="bg-white w-full ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
                <div className="relative">
                    <svg aria-hidden="true" className="absolute inset-0 h-full w-full ">
                        <defs>
                        <pattern id=":Rb6:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" patternTransform="translate(0 80)">
                            <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                        </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#:Rb6:)"></rect>
                    </svg>
                    <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-24  text-center lg:text-left shadow-2xl sm:rounded-3xl sm:px-16 flex flex-col lg:flex-row items-center justify-between ">
                        <div>
                        <h2 className="lg:mx-0 mx-auto max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {content.registerCard.title}
                        </h2>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-100">
                            {content.registerCard.description}
                        </p>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:mx-0 mx-auto flex items-center justify-center gap-x-6">
                        <a className="group inline-flex items-center justify-center rounded-full py-3 px-5 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-brand-primary-600 text-white hover:text-slate-100 hover:bg-brand-primary-500 active:bg-brand-primary-800 active:text-brand-primary-100 focus-visible:outline-brand-primary-600 py-4 px-8" href="/register">
                            Register yourself 
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4L6.4 18Z"></path>
                            </svg>
                        </a>
                        </div>
                        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
                        <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7"></circle>
                        <defs>
                            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                <stop stop-color="7775D6"></stop>
                                <stop offset="1" stop-color="#E935C1"></stop>
                            </radialGradient>
                        </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}