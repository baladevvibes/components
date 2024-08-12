import React from "react";
import ServicesCardSection from "./ServicesCardSection";

export const metadata = {
  keywords:
    "Color card design tailwind css free, section design, Color card design tailwind css example",
  description:
    "Services section with professional card. Info will take throw the visitor. The design is nice, and it is also responsive.",
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
    title: "Services color card section tailwind css ",
    description:
      "Services section with professional card . Info will take throw the visitor. The design is nice, and it is also responsive.",
    url: "https://makecomponents.com/services/services-card-section-tailwind",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/services/services-card-section-tailwind`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/services/services005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/services/services005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Services color card section tailwind css ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/services/services-card-section-tailwind`
  ),
  title: {
    default: "Services color card section tailwind css",
  },
  alternates: {
    canonical:
      "https://makecomponents.com/services/services-card-section-tailwind",
  },
};
export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Services color card section tailwind css preview",
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
        name: "Services component tailwind css",
        item: "https://makecomponents.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services color card section tailwind css",
        item: "https://makecomponents.com/services/services-card-section-tailwind",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesCardSection />
    </div>
  );
}
