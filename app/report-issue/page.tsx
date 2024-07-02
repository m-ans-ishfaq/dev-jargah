import Image from "next/image";
import Logo from "@/public/logo.webp";
import BgImage from "@/public/form-bg.webp";
import { ReportIssueForm } from "./form";

export default function Page()
{
    return (
        <div className="relative flex min-h-screen justify-center md:px-12 lg:px-0">
            <div className="relative z-20 flex flex-1 flex-col justify-center bg-white py-12 px-4 shadow-2xl md:flex-none md:px-28">
                <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
                    <div className="flex flex-col items-start justify-start">
                        <a href="/"><Image alt="Logo of Dev Jargah" loading="lazy" width="130" height="80" decoding="async" data-nimg="1" className="object-scale-down mb-2" src={Logo} style={{ color: "transparent" }} /></a>
                        <h2 className="mt-16 text-lg font-semibold text-gray-900">Report an Issue</h2>
                        <p className="mt-2 text-sm text-gray-700">
                            {"Having trouble? No worries! Just submit the form below and we'll be happy to help."}
                        </p>
                    </div>
                    <div className="mt-10">
                        <div className="mt-6">
                        <ReportIssueForm />
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