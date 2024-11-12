import React from 'react'
import MordernCardDesignTailwindCssPre from './MordernCardDesignTailwindCssPre'

export const metadata = {
  keywords: "Mordern card design tailwind css Preview ,Mordern card design ,Card Tailwind template",
  description:
    "Mordern card design tailwind css Preview and with clean design and proper color code. It is fully responsive.",
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
    title: "Mordern card design tailwind css Preview",
    description:
      "Mordern card design tailwind css Preview and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/card/modern-card-design-tailwind-css/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/modern-card-design-tailwind-css/preview`,
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
        alt: "Mordern card design tailwind css Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/card/modern-card-design-tailwind-css/preview`),
  title: {
    default: "Mordern card design tailwind css Preview ",
  },
  alternates: {
    canonical: "https://makecomponents.com/card/modern-card-design-tailwind-css/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Mordern card design tailwind css Preview",
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
        item: "https://makecomponents.com/card/modern-card-design-tailwind-css/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Mordern card design tailwind css Preview",
        item: "https://makecomponents.com/card/modern-card-design-tailwind-css/preview",
      },
    ],
  };
  return (
    <div>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <MordernCardDesignTailwindCssPre/>
    </div>
  )
}
