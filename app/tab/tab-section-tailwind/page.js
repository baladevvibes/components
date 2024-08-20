import React from "react";
import TabSectionTailwind from "./TabSectionTailwind";

export const metadata = {
  keywords:
    "Tab section tailwind css, Tab section tailwind css example, Tailwind CSS tab component",
  description:
    "Tab section tailwind css is used for the product design and web application. It fully responsive",
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
    title: "Tab section tailwind css",
    description:
      "Tab section tailwind css is used for the product design and web application. It fully responsive",
    url: "https://makecomponents.com/tab/tab-section-tailwind",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/tab/tab-section-tailwind`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/tab/tab001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/tab/tab001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Tab components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/tab/tab-section-tailwind`),
  title: {
    default: "Tab section tailwind css",
  },
  alternates: {
    canonical: "https://makecomponents.com/tab/tab-section-tailwind",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Tab section tailwind css",
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
        name: "Tab components",
        item: "https://makecomponents.com/tab",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tab section tailwind css",
        item: "https://makecomponents.com/tab/tab-section-tailwind",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TabSectionTailwind />
    </div>
  );
}
