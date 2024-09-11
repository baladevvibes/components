import React from 'react'
import InfoNumberSectionCssPre from './InfoNumberSectionCssPre'



export const metadata = {
  keywords: "Info number section css preview,Information Page Design,Info section design examples",
  description:
    "Info number section css preview and with clean design proper color code. It fully responsive.",
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
    title: "Info number section css preview ",
    description:
      "Info number section css preview and with clean design proper color code. It fully responsive.",
    url: "https://makecomponents.com/info/info-number-section-css/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/info/info-number-section-css/preview`,
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
        alt: "Info number section css preview ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/info/info-number-section-css/preview`),
  title: {
    default: "Info number section css preview",
  },
  alternates: {
    canonical: "https://makecomponents.com/info/info-number-section-css/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Info number section css preview",
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
      {
        "@type": "ListItem",
        position: 4,
        name: "Info number section css preview",
        item: "https://makecomponents.com/info/info-number-section-css/preview",
      },
    ],
  };

  return (
    <div>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <InfoNumberSectionCssPre/>
    </div>
  )
}
