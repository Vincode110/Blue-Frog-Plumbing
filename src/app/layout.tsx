import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/Header";
import { FloatingEmergencyCTA } from "@/components/ui-elements/FloatingEmergencyCTA";
import { Footer } from "@/components/layout/Footer";
import { LiveChat } from "@/components/ui-elements/LiveChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Frog Plumbing | Professional Plumbing Services in San Antonio",
  description: "Expert plumbing services in San Antonio, TX. 24/7 emergency plumbing, repairs, installations, and maintenance. Licensed, insured, and guaranteed.",
  keywords: ["plumbing services San Antonio", "emergency plumber San Antonio", "pipe repair", "water heater installation", "drain cleaning", "leak detection", "professional plumber Texas"],
  authors: [{ name: "Blue Frog Plumbing" }],
  openGraph: {
    title: "Blue Frog Plumbing | Professional Plumbing Services in San Antonio",
    description: "Expert plumbing services in San Antonio, TX. 24/7 emergency plumbing available.",
    url: "https://bluefrogplumbing.com",
    siteName: "Blue Frog Plumbing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Frog Plumbing | Professional Plumbing Services in San Antonio",
    description: "Expert plumbing services in San Antonio, TX. 24/7 emergency plumbing available.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Blue Frog Plumbing",
    "description": "Expert plumbing services in San Antonio, TX. 24/7 emergency plumbing, repairs, installations, and maintenance. Licensed, insured, and guaranteed.",
    "url": "https://bluefrogplumbing.com",
    "telephone": "+1-555-0123",
    "email": "service@bluefrogplumbing.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Antonio",
      "addressRegion": "TX",
      "postalCode": "78201",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.4241",
      "longitude": "-98.4936"
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-16:00",
      "Su 00:00-24:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Debit Card, Check",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "29.4241",
        "longitude": "-98.4936"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plumbing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Plumbing",
            "description": "24/7 emergency plumbing services for burst pipes, leaks, and urgent issues"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water Heater Installation",
            "description": "Professional water heater installation and repair services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drain Cleaning",
            "description": "Professional drain cleaning and clog removal services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Leak Detection",
            "description": "Advanced leak detection and repair services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "5000"
    },
    "sameAs": [
      "https://facebook.com/bluefrogplumbing",
      "https://twitter.com/bluefrogplumbing",
      "https://instagram.com/bluefrogplumbing"
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingEmergencyCTA />
        <LiveChat />
        <Toaster />
      </body>
    </html>
  );
}
