import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev جرگہ",
  description: "Dev جرگہ Embracing Innovation and Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white antialiased ">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
