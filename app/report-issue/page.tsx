import Image from "next/image";
import Logo from "@/public/logo.webp";
import BgImage from "@/public/form-bg.webp";

export default function Page()
{
    return (
        <div className="relative flex min-h-screen justify-center md:px-12 lg:px-0">
            <div className="relative z-20 flex flex-1 flex-col justify-center bg-white py-12 px-4 shadow-2xl md:flex-none md:px-28">
                <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
                    <div className="flex flex-col items-start justify-start">
                        <a href="/"><Image alt="Logo of Dev Jargah" loading="lazy" width="130" height="80" decoding="async" data-nimg="1" className="object-scale-down mb-2" src={Logo} style={{ color: "transparent" }} /></a>
                        <h2 className="mt-16 text-lg font-semibold text-gray-900">Report an Issue</h2>
                        <p className="mt-2 text-sm text-gray-700">Having trouble? No worries! Just submit the form below and we'll be happy to help.</p>
                    </div>
                    <div className="mt-10">
                        <div className="mt-6">
                        <form className="space-y-7">
                            <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
                                <div><label htmlFor="name" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Name</label><input id="name" name="name" type="text" autoComplete="name" className=" block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" /></div>
                                <div><label htmlFor="phone_number" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Phone Number</label><input id="phone_number" name="phone_number" type="tel" autoComplete="phone" className=" block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" /></div>
                            </div>
                            <div><label htmlFor="email" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Email address</label><input id="email" name="email" type="email" autoComplete="email" className=" block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" /></div>
                            <div><label htmlFor="issue" className="mb-3 block text-sm font-medium text-gray-700 after:absolute after:content-['*'] after:text-red-500">Issue</label><textarea id="issue" name="issue" className=" h-32 block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"></textarea></div>
                            <div className="pt-1">
                                <button className="group inline-flex items-center justify-center rounded-full py-3 px-5 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-brand-primary-600 text-white hover:text-slate-100 hover:bg-brand-primary-500 active:bg-brand-primary-800 active:text-brand-primary-100 focus-visible:outline-brand-primary-600 w-full" type="submit">
                                    Submit 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4L6.4 18Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="Toastify"></div>
                </div>
            </div>
            <div className="absolute inset-0 hidden w-full flex-1 sm:block lg:relative lg:w-0 lg:flex lg:justify-center lg:items-center">
                <Image alt="" loading="lazy" decoding="async" data-nimg="fill" src={BgImage} className="absolute z-10 h-full w-full inset-0 object-cover text-transparent opacity-50" />
                <div className="absolute w-full h-full bg-black" />
                <Image alt="Logo" src={Logo} className="hidden lg:flex absolute z-[15]" />
            </div>
        </div>
    )
}