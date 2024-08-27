import React from 'react'
import InfoDesignCssPre from './InfoDesignCssPre'

export const metadata = {
  keywords:
    "Info Design css preview, Info Design css example preview, Info page component preview",
  description:
    "Info Design css preview and with clean design proper color code. It fully responsive.",
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
    title: "Info Design css preview",
    description:
      "Info Design css preview and with clean design proper color code. It fully responsive.",
    url: "https://makecomponents.com/info/info-design-css/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/info/info-design-css`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/info/info002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/info/info002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Info Design css preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/info/info-design-css/preview`),
  title: {
    default: "Info Design css preview",
  },
  alternates: {
    canonical: "https://makecomponents.com/info/info-design-css/preview",
  },
};

export default function page() {

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Info Design css preview",
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
        name: "Info Design css",
        item: "https://makecomponents.com/info/info-design-css",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Info Design css preview",
        item: "https://makecomponents.com/info/info-design-css/preview",
      },
    ],
  };
  return (
    <div>
               <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <InfoDesignCssPre/>
    </div>
  )
}
