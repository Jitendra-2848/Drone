import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rawBase =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://wildterra.vercel.app");
const siteUrl = rawBase.startsWith("http") ? rawBase : `https://${rawBase}`;

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WildTerra — Sovereign Land & Wildlife Protection",
    template: "%s | WildTerra",
  },
  description:
    "WildTerra secures connected wilderness corridors, defends untouched habitats, and protects keystone wildlife across planetary biomes from industrial development.",
  keywords: [
    "wildlife conservation",
    "ecological corridors",
    "habitat protection",
    "keystone species",
    "rewilding",
    "nature sanctuary",
    "land trust",
    "salmon river sanctuary",
    "grizzly bear migration",
    "boreal forest conservation",
    "biodiversity census",
    "wildlife telemetry",
  ],
  authors: [{ name: "WildTerra Conservation Trust" }],
  creator: "WildTerra",
  publisher: "WildTerra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-token",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "WildTerra Conservation",
    title: "WildTerra — Sovereign Land & Wildlife Protection",
    description:
      "Securing unbroken land corridors and pristine habitats so keystone wildlife has room to endure without human disturbance.",
    images: [
      {
        url: "/images/3.png",
        width: 1200,
        height: 630,
        alt: "Wild river and forest sanctuary protected by WildTerra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WildTerra — Sovereign Land & Wildlife Protection",
    description:
      "Securing unbroken land corridors and pristine habitats so keystone wildlife has room to endure.",
    images: ["/images/3.png"],
    creator: "@wildterra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "WildTerra Conservation",
      url: siteUrl,
      logo: `${siteUrl}/images/1.png`,
      sameAs: [
        "https://twitter.com/wildterra",
        "https://instagram.com/wildterra",
      ],
      description:
        "Global land and wildlife conservation trust defending contiguous migratory corridors and sovereign habitats.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "WildTerra",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full w-full bg-white text-black antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
