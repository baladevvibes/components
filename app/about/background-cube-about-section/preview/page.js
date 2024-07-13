import React from "react";
import BackgroundCubeSectionPre from "./BackgroundCubeSectionPre";

export const metadata = {
  keywords:
    "tailwind about us page, tailwind about us page free, Tailwind about us page free template, tailwind about us page free, about us page tailwind",
  description:
    "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.This is about section",
  icons: {
    icon: "../../favicon.ico",
    shortcut: "../../favicon.ico",
    apple: "../../favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "../../favicon.ico",
    },
  },
  openGraph: {
    title: "Background cube about section preview",
    description:
      "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design. It is about section",
    url: "https://makecomponents.com/about/background-cube-about-section/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/about/background-cube-about-section/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/about/about004.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/about/about004.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "about components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/about/background-cube-about-section/preview`
  ),
  title: {
    default: `Background layer hero section preview`,
  },
  alternates: {
    canonical:
      "https://makecomponents.com/about/background-cube-about-section/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
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
        name: "About components",
        item: "https://makecomponents.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Background cube about section",
        item: "https://makecomponents.com/about/background-cube-about-section",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Background cube about section preview",
        item: "https://makecomponents.com/about/background-cube-about-section/preview",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BackgroundCubeSectionPre />
    </div>
  );
}
