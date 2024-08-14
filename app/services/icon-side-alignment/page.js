import React from "react";
import IconSideAligment from "./IconSideAligment";
import { Metadata } from "next";

export const metadata = {
  keywords:
  "services section,services section website design,our services section design, service section design,section design",
  description:
    "This component create on 28/June/2024 using CSS framework tailwindcss. It fully responsive component.",
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
    title: "Icon services section tailwind css",
    description:
      "This component create on 28/June/2024 using CSS framework tailwindcss. It fully responsive component.",
    url: "https://makecomponents.com/services/icon-side-alignment",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/services/icon-side-alignment`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/services/services002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/services/services002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Icon services section tailwind css",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/services/icon-side-alignment`
  ),
  title: {
    default: "Icon services section tailwind css",
  },
  alternates: {
    canonical:
      "https://makecomponents.com/services/icon-side-alignment",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Icon services section tailwind css",
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
        name: "Icon services section tailwind css",
        item: "https://makecomponents.com/services/icon-side-alignment",
      },
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IconSideAligment />
    </div>
  );
}
