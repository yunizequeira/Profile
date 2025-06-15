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
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  };
}
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_HOME_PAGE}`),
  title: "Yunior Zequeira | Desarrollador Web en Las Vegas",
  description:
    "Portafolio de Yunior Zequeira, desarrollador web especializado en React.js y Next.js en Las Vegas.",
  keywords:
    "Yunior Zequeira,Yunior Zequeira MOreno, desarrollador web, React, Next.js, Las Vegas, sitios web",
  appleWebApp: {
    title: "Yunior Zequeira | Desarrollador Web en Las Vegas",
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/favicon.ico",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },
  icons: {
    icon: [{ url: "/Icons/logo.png" }, { url: "/icon.png", type: "image/png" }],
    apple: [
      { url: "/favicon.ico" },
      { url: "/Icons/logo.png", sizes: "152x152", type: "image/png" },
      { url: "/Icons/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://lvwebdesign.group/",
  }
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
