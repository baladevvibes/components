import React from "react";
import HeroWithSearchBar from "./HeroWithSearchBar";


export const metadata = {
  keywords:
    "Tailwind hero templates, Tailwind hero section free, Hero section tailwind react example",
  description:
    "This component create using CSS framework tailwindcss. It fully responsive component. Added Seacrh bar.",
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
    title: "Hero Banner With Searching Options",
    description:
      "This component create using CSS framework tailwindcss. It fully responsive component. Added Seacrh bar.",
    url: "https://makecomponents.com/hero/hero-with-searchbar",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/hero/hero-with-searchbar`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/hero/hero001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/hero/hero001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Hero components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/hero/hero-with-searchbar`),
  title: {
    default: `Hero Banner With Searching Options`,
  },
  alternates: {
    canonical: "https://makecomponents.com/hero/hero-with-searchbar",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Hero Section",
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
        name: "Hero Banner With Searching Options",
        item: "https://makecomponents.com/hero/hero-with-searchbar",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroWithSearchBar />
    </div>
  );
}
