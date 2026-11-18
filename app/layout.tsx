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

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wildterra.org"),
  title: {
    default: "WildTerra — Sovereign Land & Wildlife Protection",
    template: "%s | WildTerra",
  },
  description:
    "WildTerra protects connected wilderness corridors, defends unfragmented habitats, and guards keystone wildlife species from road development and destruction.",
  keywords: [
    "wildlife conservation",
    "ecological corridors",
    "habitat protection",
    "keystone species",
    "rewilding",
    "land trust",
    "salmon river sanctuary",
    "grizzly bear migration",
    "boreal forest conservation",
  ],
  authors: [{ name: "WildTerra Foundation" }],
  creator: "WildTerra Conservation",
  publisher: "WildTerra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wildterra.org",
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
    canonical: "https://wildterra.org",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://wildterra.org/#organization",
      name: "WildTerra Conservation",
      url: "https://wildterra.org",
      logo: "https://wildterra.org/images/1.png",
      sameAs: [
        "https://twitter.com/wildterra",
        "https://instagram.com/wildterra",
      ],
      description:
        "Global land and wildlife conservation trust defending contiguous migratory corridors and sovereign habitats.",
    },
    {
      "@type": "WebSite",
      "@id": "https://wildterra.org/#website",
      url: "https://wildterra.org",
      name: "WildTerra",
      publisher: {
        "@id": "https://wildterra.org/#organization",
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
