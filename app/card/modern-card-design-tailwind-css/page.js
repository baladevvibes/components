import React from 'react'
import MordernCardDesignTailwindCss from './MordernCardDesignTailwindCss'


export const metadata = {
  keywords: "Mordern card design tailwind css ,Mordern card design ,Card Tailwind template",
  description:
    "Mordern card design tailwind css and with clean design and proper color code. It is fully responsive.",
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
    title: "Mordern card design tailwind css",
    description:
      "Mordern card design tailwind css and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/card/modern-card-design-tailwind-css",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/modern-card-design-tailwind-css`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/card/card011.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/card/card011.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Mordern card design tailwind css",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/card/modern-card-design-tailwind-css`),
  title: {
    default: "Mordern card design tailwind css ",
  },
  alternates: {
    canonical: "https://makecomponents.com/card/modern-card-design-tailwind-css",
  },
};

export default function page() {

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Mordern card design tailwind css",
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
        name: "Card tailwind components",
        item: "https://makecomponents.com/card",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mordern card design tailwind css",
        item: "https://makecomponents.com/card/modern-card-design-tailwind-css",
      },
    ],
  };

  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <MordernCardDesignTailwindCss/>
    </div>
  )
}
