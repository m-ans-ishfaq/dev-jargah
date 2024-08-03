import content from "@/content.json";
import Image from "next/image";
import { Logo } from "../assets/images";
import Link from "next/link";

export function Header({ transparent = false }: { transparent?: boolean})
{
    const HEADER_LINKS = [
        {
          href: '#',
          label: "Event"
        },
        {
          href: '#',
          label: "Hosts"
        },
        {
          href: '#',
          label: "Sponsors"
        },
        {
          href: '#',
          label: "Speakers"
        }
      ];

    return (
        <header className={`relative z-20 text-white ${transparent ? '' : 'bg-black'} first:px-4 py-4 flex justify-center`}>
            <div className="flex justify-between items-center container px-0">
                {/* Right Side */}
                <div className="flex flex-col">
                    <Image src={Logo} alt="Dev Jirga Logo" className="w-32" />
                    <p className="hidden lg:flex font-medium">
                        Innovate, Collaborate, Elevate
                    </p>
                </div>
                {/* Left Side */}
                <div className="flex flex-col gap-1 items-end justify-end">
                    <nav className="flex gap-4">
                        {HEADER_LINKS.map(({href, label}, i) => (
                            <Link className="rounded-md hover:btn py-1 px-4" key={i} {...{ href }}>
                                {label}
                            </Link>
                        ))}
                    </nav>
                    <p className="pr-4">
                        {content.eventDate} ✦  {content.eventLocation}
                    </p>
                </div>
            </div>
        </header>
    )
}