import React from "react";
import InfoNumberSectionCss from "./InfoNumberSectionCss";

export const metadata = {
  keywords: "Info number section css,Info section design,Info section design examples",
  description:
    "Info number section css and with clean design proper color code. It fully responsive.",
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
    title: "Info number section css ",
    description:
      "Info number section css and with clean design proper color code. It fully responsive.",
    url: "https://makecomponents.com/info/info-number-section-css",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/info/info-number-section-css`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/info/info003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/info/info003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Info number section css ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/info/info-number-section-css`),
  title: {
    default: "Info number section css",
  },
  alternates: {
    canonical: "https://makecomponents.com/info/info-number-section-css",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Info number section css",
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
        name: "Info components",
        item: "https://makecomponents.com/info",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Info number section css",
        item: "https://makecomponents.com/info/info-number-section-css",
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InfoNumberSectionCss />
    </div>
  );
}
