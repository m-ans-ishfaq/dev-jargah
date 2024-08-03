import Image from "next/image";
import { Logo } from "../assets/images";
import Link from "next/link";

export function Footer()
{
    return (
        <footer className="bg-neutral-950 text-white py-8 border-t border-t-neutral-500 flex justify-center px-4">
            <div className="container px-0 flex flex-wrap gap-4 justify-between items-center">
                {/* Left */}
                <div className="flex flex-col">
                    <Image src={Logo} alt="Dev Jirga Logo" className="w-32" />
                </div>
                {/* Right */}
                <div className="flex flex-col sm:items-end text-neutral-200">
                    <p>
                        Copyright © 2024 Dev جرگہ., All rights  reserved.
                    </p>
                    <p>
                        Design & Develop by <Link href="" target="_blank" className="underline hover:text-red-500">Muhammad Anas</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}