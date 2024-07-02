import Image from "next/image";
import Logo from "@/public/logo.webp";
import Link from "next/link";

export function Footer()
{
    return (
        <footer className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between md:flex-row">
                <Image loading="lazy" width="130" height="80" decoding="async" data-nimg="1" className="object-scale-down" src={Logo} alt="Logo" style={{ color: "transparent" }} />
                <div className="flex flex-col">
                    <p className="mt-6 text-base text-slate-500 md:mt-0">Copyright © 2024  Dev جرگہ., All rights reserved.</p>
                    <p className="text-base text-slate-500">Design &amp; Develop by <Link href="https://m-ans-ishfaq.github.io/" target="_blank" className="font-medium text-blue-600"> Muhammad Anas</Link></p>
                </div>
            </div>
        </footer>
    )
}