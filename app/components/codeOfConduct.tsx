import content from "@/content.json";
import Link from "next/link";

export function CodeOfConduct()
{
    return (
        <div className="bg-white py-24 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col mx-auto max-w-2xl lg:max-w-none lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl font-display text-center">Code of Conduct</h2>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {content.codeOfConduct.map(({title, description}, i) => (
                        <div key={i}>
                            <dt className="text-1xl font-semibold text-slate-900 tracking-tight">
                                {title}
                            </dt>
                            <dd className="mt-1 text-slate-600">
                                {description}
                            </dd>
                        </div>
                    ))}
                </dl>
                <div className="flex justify-center mt-12">
                    <Link className="group inline-flex items-center justify-center rounded-full py-3 px-5 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-brand-primary-600 text-white hover:text-slate-100 hover:bg-brand-primary-500 active:bg-brand-primary-800 active:text-brand-primary-100 focus-visible:outline-brand-primary-600" href="/report-issue">
                        Report an Issue 
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4L6.4 18Z"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}