import React from 'react'
import TailwindAboutUsPageFreePre from './TailwindAboutUsPageFreePre'

export const metadata = {
  keywords: "Tailwind About us page free preview  ,Tailwind about us page free download  css,Testimonials Tailwind React",
  description:
    "Tailwind About us page free preview  and with clean design and proper color code. It is fully responsive.",
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
    title: "Tailwind About us page free preview ",
    description:
      "Tailwind About us page free preview  and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/about/tailwind-about-us-page-free/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/about/tailwind-about-us-page-free/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/about/about008.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/about/about008.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Tailwind About us page free preview ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/about/tailwind-about-us-page-free/preview`),
  title: {
    default: "Tailwind About us page free preview  ",
  },
  alternates: {
    canonical: "https://makecomponents.com/about/tailwind-about-us-page-free/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Tailwind About us page free preview ",
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
        name: "About tailwind components",
        item: "https://makecomponents.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tailwind About us page free preview ",
        item: "https://makecomponents.com/about/tailwind-about-us-page-free/preview",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Tailwind About us page free preview   " ,
        item: "https://makecomponents.com/about/tailwind-about-us-page-free/preview",
      },
    ],
  };
  return (
    <div>
           <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <TailwindAboutUsPageFreePre/>
    </div>
  )
}
