import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IEEE NKSS SAC | North Karnataka Subsection Student Activities Committee",
    template: "%s",
  },
  description:
    "The official home of IEEE North Karnataka Subsection's Student Activities Committee — student branches, events, committees, and resources across North Karnataka.",
  metadataBase: new URL("https://ieeenkss-sac.example.org"),
  openGraph: {
    type: "website",
    siteName: "IEEE NKSS SAC",
    title: "IEEE NKSS SAC | North Karnataka Subsection Student Activities Committee",
    description:
      "Connecting student branches, committees, and events across North Karnataka into a single, active network of IEEE volunteers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE NKSS SAC",
    description: "One Subsection. One Signal.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IEEE North Karnataka Subsection SAC",
  url: "https://ieeenkss-sac.example.org",
  parentOrganization: {
    "@type": "Organization",
    name: "IEEE North Karnataka Subsection",
  },
  areaServed: "North Karnataka, India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-4 focus:rounded-md focus:bg-signalNavy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />

      </body>
    </html>
  );
}
