import content from "@/content.json";
import Image from "next/image";
import { Logo } from "../assets/images";
import Link from "next/link";

export function Header({ transparent = false }: { transparent?: boolean})
{
    const HEADER_LINKS = [
        {
          href: '#event',
          label: "Event"
        },
        {
          href: '#host',
          label: "Hosts"
        },
        {
          href: '#sponsor',
          label: "Sponsors"
        },
        {
          href: '#speaker',
          label: "Speakers"
        }
      ];

    return (
        <header className={`relative z-20 text-white ${transparent ? '' : 'bg-black'} first:px-4 py-4 flex justify-center`}>
            <div className="flex flex-wrap gap-4 justify-between items-center container px-0">
                {/* Right Side */}
                <div className="flex flex-col">
                    <Image src={Logo} alt="Dev Jirga Logo" className="w-32" />
                    <p className="hidden md:flex font-medium">
                        Innovate, Collaborate, Elevate
                    </p>
                </div>
                {/* Left Side */}
                <div className="flex flex-col gap-1 items-end justify-end">
                    <p className="hidden sm:flex pr-4">
                        {content.eventDate} ✦  {content.eventLocation}
                    </p>
                </div>
            </div>
        </header>
    )
}