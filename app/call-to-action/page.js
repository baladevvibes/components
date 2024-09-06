import React from "react";
import CallCard from "./CallCard";

export const metadata = {
  keywords:
    "Call to action components css free , Tailwind About us page free, Free Tailwind templates",
  description:
    "Call to action templates on this page. It will have different templates that are available, and it also has free code",
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
    title: "Call to action components css",
    description:
      "Call to action templates on this page. It will have different templates that are available, and it also has free code",
    url: "https://makecomponents.com/blog",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/blog`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/call-to-action/call001.webp", // Must be an absolute URL
      },
      {
        url: "https://makecomponents.com/Image/call-to-action/call001.webp", // Must be an absolute URL
        alt: "Call to action components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/call-to-action`),
  title: {
    default: "Call to action components css",
  },
  alternates: {
    canonical: "https://makecomponents.com/call-to-action",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Blog template ",
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
        name: "Call to action component",
        item: "https://makecomponents.com/call-to-action",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CallCard />
    </div>
  );
}
