import React from "react";
import SkeletonTableTailwindPre from "./SkeletonTableTailwindPre";

export const metadata = {
  keywords:
    "Skeleton table tailwind css, Skeleton table tailwin , Skeleton table ",
  description: "Skeleton section and it perform loading and resreated.",
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
    title: "Skeleton table tailwind css preview",
    description:
      "Many hero section in modern day. They are unique, give a separate template to read, and are attractive.",
    url: "https://makecomponents.com/skeleton/skeleton-table-tailwind/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/skeleton/skeleton-table-tailwind//preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/skeleton/skeleton001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/skeleton/skeleton001.webp", // Must be an absolute URL
        width: 800,
        height: 600, 
        alt: "skeleton components preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/skeleton/skeleton-table-tailwind/preview`
  ),
  title: {
    default: "Skeleton table tailwind css preview",
  },
  alternates: {
    canonical: "https://makecomponents.com/skeleton/skeleton-table-tailwind/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Skeleton Table section",
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
        name: "Skeleton components",
        item: "https://makecomponents.com/skeleton",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Skeleton table tailwind css",
        item: "https://makecomponents.com/skeleton/skeleton-table-tailwind",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Skeleton table tailwind css preview",
        item: "https://makecomponents.com/skeleton/skeleton-table-tailwind/preview",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SkeletonTableTailwindPre />
    </div>
  );
}
