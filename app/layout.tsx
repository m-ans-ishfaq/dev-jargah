import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEV JIRGA 24 | Embracing Innovation, Collaboration and Elevation",
  description:
    "Join us at Dev جرگہ Pakistan's Tech Event for an exciting day of innovation, knowledge exchange, and community spirit in Islamabad. Dive into the latest tech trends, interact with industry leaders through insightful discussions, and network with fellow tech enthusiasts shaping the future.",
  keywords: [
    "Dev Jirga 24",
    "Dev Jargah",
    "Devjirga",
    "devjarga",
    "Pakistan Tech Event",
    "Innovation",
    "Collaboration",
    "Technology",
    "Islamabad",
    "Tech Conference",
    "Community",
    "Networking",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white antialiased">
      <head>
        <link
          rel="icon"
          href="https://www.devjirga.live/_next/static/media/logo.735f2f8d.webp"
        />
        <meta
          name="google-site-verification"
          content="jtUocS8z5CaqrKtnC3FCZ1l7ZmQ9usqk19iN2CDeNjU"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
