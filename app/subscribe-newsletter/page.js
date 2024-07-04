import React from 'react'
import NewsLetterCard from './NewsLetterCard'
export const metadata = {
  keywords:
    "newsletter free section,free newsletter tailwind,newsletter section",
    description:
    "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.",
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
    title: "2+ Newsletter section tailwind css",
    description:
      "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.",
    url: "https://makecomponents.com/subscribe-newsletter",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/hero`,
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
        alt: "newsletter components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/subscribe-newsletter`
  ),
  title: {
    default: `2+ Newsletter section tailwind css`,
  },
  alternates: {
    canonical: "https://makecomponents.com/subscribe-newsletter",
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
        name: "Newsletter Components",
        item: "https://makecomponents.com/subscribe-newsletter",
      },
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewsLetterCard/>
    </div>
  )
}
