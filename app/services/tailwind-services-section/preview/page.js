import React from 'react'
import TailwindServicesSectionPre from './TailwindServicesSectionPre'

export const metadata = {
  keywords: "Tailwind services section preview ,Tailwind services section template,Tailwind services components",
  description:
    "Tailwind services section preview and with clean design and proper color code. It is fully responsive.",
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
    title: "Tailwind services section preview",
    description:
      "Tailwind services section preview and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/services/tailwind-services-section/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/services/tailwind-services-section/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/services/services006.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/services/services006.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Tailwind services section preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/services/tailwind-services-section/preview`),
  title: {
    default: "Tailwind services section preview ",
  },
  alternates: {
    canonical: "https://makecomponents.com/services/tailwind-services-section/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Tailwind services section preview",
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
        name: "services components",
        item: "https://makecomponents.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tailwind services section",
        item: "https://makecomponents.com/services/tailwind-services-section",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Tailwind services section preview",
        item: "https://makecomponents.com/services/tailwind-services-section/preview",
      },
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TailwindServicesSectionPre/>
    </div>
  )
}
