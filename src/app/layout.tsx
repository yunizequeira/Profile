import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata, Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  };
}
export const metadata: Metadata = {
  title: "Yunior Zequeira | Desarrollador Web en Las Vegas",
  description:
    "Portafolio de Yunior Zequeira, desarrollador web especializado en React.js y Next.js en Las Vegas.",
  keywords:
    "Yunior Zequeira, desarrollador web, React, Next.js, Las Vegas, sitios web",
  openGraph: {
    title: "Yunior Zequeira | Desarrollador Web en Las Vegas",
    description:
      "Portafolio de Yunior Zequeira, desarrollador web especializado en React.js y Next.js en Las Vegas.",
    url: "https://lvwebdesign.group",
    siteName: "Yunior Zequeira | Desarrollador Web en Las Vegas",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "https://lvwebdesign.group/people/Yuni.png",
        width: 800,
        height: 600,
        alt: "Yunior Zequeira | Desarrollador Web en Las Vegas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yunior Zequeira | Desarrollador Web en Las Vegas",
    description:
      "Portafolio de Yunior Zequeira, desarrollador web especializado en React.js y Next.js en Las Vegas.",
    images: ["https://lvwebdesign.group/people/Yuni.png"],
  },

  verification: {
    google: "PoQ_7yqwr5v3-vZmcUYcZaTmAOU5X8Gs45eU8s6eOqY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#212428] text-white`}
      >
        <nav className="fixed top-0 right-0 left-0 z-50">
          <Navbar />
        </nav>
        <main className="overflow-hidden bg-gradient-to-r min-h-screen mt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
