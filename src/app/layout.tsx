import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
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
      <meta
        name="google-site-verification"
        content="PoQ_7yqwr5v3-vZmcUYcZaTmAOU5X8Gs45eU8s6eOqY"
      />
      <Head>
        <title>Yunior Zequeira | Desarrollador Web en Las Vegas</title>
        <meta
          name="description"
          content="Portafolio de Yunior Zequeira, desarrollador web especializado en React.js y Next.js en Las Vegas."
        />
        <meta
          name="keywords"
          content="Yunior Zequeira, desarrollador web, React, Next.js, Las Vegas, sitios web"
        />
        <meta name="author" content="Yunior Zequeira" />
        <meta property="og:title" content="Yunior Zequeira | Web Developer" />
        <meta
          property="og:description"
          content="Desarrollador web profesional con enfoque en sitios modernos y optimizados para SEO."
        />
        <meta property="og:url" content="https://lvwebdesign.group" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://lvwebdesign.group" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yunior Zequeira",
              url: "https://lvwebdesign.group",
              image: "https://lvwebdesign.group/people/Yuni.png",
              email: "mailto:yunizequeira@gmail",
              telephone: "+17024150982",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Las Vegas, Nevada",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                postalCode: "89129",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.linkedin.com/in/yunior-zequeira-246a14216/",
              ],
              jobTitle: "Desarrollador Web",
              worksFor: {
                "@type": "Organization",
                name: "LV Web Design Group",
              },
            }),
          }}
        />
      </Head>
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
