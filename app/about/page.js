import React from "react";
import AboutCard from "./AboutCard";

export const metadata = {
  keywords: "About us template tailwind css free , Tailwind About us page free, Free Tailwind templates",
  description:
    "There are many templates on this page. It will have different templates that are available, and it also has free code",
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
    title: "About us template tailwind css",
    description:
      "There are many templates on this page. It will have different templates that are available, and it also has free code",
    url: "https://makecomponents.com/about",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/about`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/about/about003.webp", // Must be an absolute URL
      },
      {
        url: "https://makecomponents.com/Image/about/about003.webp", // Must be an absolute URL
        alt: "about components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/about`
  ),
  title: {
    default: "About us template tailwind css",
  },
  alternates: {
    canonical: "https://makecomponents.com/about",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "About Section",
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
        name: "About component",
        item: "https://makecomponents.com/about",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutCard />
    </div>
  );
}
