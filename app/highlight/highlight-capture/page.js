import React from "react";
import HighLightCapture from "./HighLightCapture";

export const metadata = {
  keywords:
    "highlight section,free components,free code, make components, make component",
  description:
    "Highlight Section Capture. Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.",
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
    title: "Highlight Capture",
    description:
      "Highlight Newsletter Capture. Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design. It is Highlight Newsletter section",
    url: "https://makecomponents.com/highlight/highlight-capture",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/highlight/highlight-capture`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/highlight/highlight001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/highlight/highlight001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Subscribe Newsletter components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/highlight/highlight-capture`
  ),
  title: {
    default: `Highlight Capture`,
  },
  alternates: {
    canonical: "https://makecomponents.com/highlight/highlight-capture",
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
        name: "Subscribe Newsletter components",
        item: "https://makecomponents.com/subscribe-newsletter",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Highlight Capture",
        item: "https://makecomponents.com/highlight/highlight-capture",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HighLightCapture />
    </div>
  );
}
