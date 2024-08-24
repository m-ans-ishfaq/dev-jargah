import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEV JIRGA 24 | Embracing Innovation, Collaboration and Elevation",
  description: "Embracing Innovation, Collaboration and Elevation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white antialiased">
      <head>
        <link rel="icon" href="https://www.devjirga.live/_next/static/media/logo.735f2f8d.webp" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
