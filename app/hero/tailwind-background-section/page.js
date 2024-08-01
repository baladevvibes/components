import React from "react";
import TailwindBackground from "./TailwindBackground";

export const metadata = {
  keywords:
    "Tailwind background section,Tailwind background gradient, Tailwind gradient generator",
  description:
    "Tailwind background section with gradient and color-fully. It gives a simple and professional section for tech.",
  icons: {
    icon: "../favicon.ico",
    shortcut: "../favicon.ico",
    apple: "../favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "../favicon.ico",
    },
  },
  openGraph: {
    title: "Tailwind Backgrond section",
    description:
      "Tailwind background section with gradient and color-fully. It gives a simple and professional section for tech.",
    url: "https://makecomponents.com/hero/tailwind-background-section",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/hero/tailwind-background-section`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/hero/hero005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/hero/hero005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "hero components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/hero/tailwind-background-section`
  ),
  title: {
    default: "Tailwind Backgrond section",
  },
  alternates: {
    canonical: "https://makecomponents.com/hero/tailwind-background-section",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Tailwind Backgrond section",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://makecomponents.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hero components",
        item: "https://makecomponents.com/hero",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tailwind background section",
        item: "https://makecomponents.com/hero/tailwind-background-section",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TailwindBackground />
    </div>
  );
}
