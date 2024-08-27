import React from 'react'
import InfoDesignCss from './InfoDesignCss'

export const metadata = {
  keywords:
    "Info Design css, Info Design css example, Info page components",
  description:
    "Info Design css and with clean design proper color code. It fully responsive.",
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
    title: "Info Design css ",
    description:
      "Info Design css and with clean design proper color code. It fully responsive.",
    url: "https://makecomponents.com/info/info-design-css",
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
        alt: "Info Design css ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/info/info-design-css`),
  title: {
    default: "Info Design css",
  },
  alternates: {
    canonical: "https://makecomponents.com/info/info-design-css",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Info Design css",
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
    ],
  };
  return (
    <div>
              <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <InfoDesignCss/>
    </div>
  )
}
