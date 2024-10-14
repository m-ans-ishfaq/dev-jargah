import Image from "next/image";
import BgImage from "@/public/dev-jirga-card.png";
import { RegistrationForm } from "./form";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen justify-center">
      <div className="flex flex-col justify-center py-12 px-4">
        <div className="mx-auto w-full lg:pl-20 px-8">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-lg font-semibold text-gray-900">
              Registration Form
            </h2>
            <p className="mt-2 text-sm text-gray-700">Register for Dev جرگہ.</p>
          </div>
          <div className="mt-10">
            <div className="mt-6">
              <RegistrationForm />
            </div>
          </div>
          <div className="Toastify"></div>
        </div>
      </div>
      <div className="inset-0 w-full flex-1 lg:flex lg:justify-center lg:items-center ">
        <Image
          alt=""
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          src={BgImage}
          className="h-full max-h-screen w-full inset-0 object-right object-contain text-transparent"
        />
      </div>
    </div>
  );
}
