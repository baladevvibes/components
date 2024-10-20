import React from 'react'
import TailwindAboutUsPre from './TailwindAboutUsPre'

export const metadata = {
  keywords:
    "Tailwind CSS About us page, About us page Tailwind free, About page components",
  description:
    "Tailwind CSS About Us page and with clean design and proper color code. It is fully responsive preview.",
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
    title: "Tailwind CSS About us page preview",
    description:
      "Tailwind CSS About Us page and with clean design and proper color code. It is fully responsive preview.",
    url: "https://makecomponents.com/about/tailwind-css-about-us-page",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/about/tailwind-css-about-us-page`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/about/about007.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/about/about007.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Tailwind CSS About us page preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/about/tailwind-css-about-us-page`
  ),
  title: {
    default: "Tailwind CSS About us page preview",
  },
  alternates: {
    canonical: "https://makecomponents.com/about/tailwind-css-about-us-page",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Tailwind CSS About us page preview",
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
        name: "About us components",
        item: "https://makecomponents.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tailwind CSS About us page",
        item: "https://makecomponents.com/about/tailwind-css-about-us-page",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tailwind CSS About us page preview",
        item: "https://makecomponents.com/about/tailwind-css-about-us-page/preview",
      },
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <TailwindAboutUsPre/>
    </div>
  )
}
