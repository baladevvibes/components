import React from "react";
import TabcardData from "./TabcardData";

export const metadata = {
  keywords:
    "tab tailwind css, Tab section tailwind css example, Tailwind CSS tab component",
  description:
    "Tab components and muti design are on this page. we can copy the code and use in any project.",
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
    title: "Tab Components",
    description:
      "Tab components and muti design are on this page. we can copy the code and use in any project",
    url: "https://makecomponents.com/tab",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/tab`,
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
  metadataBase: new URL(`https://makecomponents.com/tab`),
  title: {
    default: "Tab Components",
  },
  alternates: {
    canonical: "https://makecomponents.com/tab",
  },
};
export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Tab components",
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
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
  <TabcardData/>
    </div>
  );
}
