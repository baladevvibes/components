import React from 'react'
import AboutusPageTemp from './AboutusPageTemp'

export const metadata = {
  keywords:
    "about us page template tailwind css, About us page tailwind css example, Tailwind CSS website templates free",
  description:
    "About Us page template: tailwind css. It is fully responsive, and it is good for the product base design.",
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
    title: "About us page template Tailwind css",
    description:
      "About Us page template: tailwind css. It is fully responsive, and it is good for the product base design.",
    url: "https://makecomponents.com/about/about-us-page-template",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/about/about-us-page-template`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/about/about005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/about/about005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "About us page template",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/about/about-us-page-template`
  ),
  title: {
    default: "About us page template Tailwind css",
  },
  alternates: {
    canonical: "https://makecomponents.com/about/about-us-page-template",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "About us page template tailwind css",
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
        name: "About components",
        item: "https://makecomponents.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tailwind background section",
        item: "https://makecomponents.com/about/about/about-us-page-template",
      },
    ],
  };
  return (
    <div>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <AboutusPageTemp/>
    </div>
  )
}
