import React from "react";
import SideHalfGridAbout from "./SideHalfGridAbout";
export const metadata = {
  keywords: "about us page template,About us page template free, About us page",
  description:
    "Side-half grid about section. It's a new design and professional for the building base website.",
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
    title: "Side half grid about section",
    description:
      "Side-half grid about section. It's a new design and professional for the building base website.",
    url: "https://makecomponents.com/about/side-half-grid-about-section",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/about/side-half-grid-about-section`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/about/about003.webp", // Must be an absolute URL
        alt: "about components",
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
    `https://makecomponents.com/about/side-half-grid-about-section`
  ),
  title: {
    default: "Side half grid about section",
  },
  alternates: {
    canonical: "https://makecomponents.com/about/side-half-grid-about-section",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Side half grid about section",
        item: "https://makecomponents.com/about/side-half-grid-about-section",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SideHalfGridAbout />
    </div>
  );
}
