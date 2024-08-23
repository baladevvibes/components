import React from 'react'
import ContactPageTailwind from './ContactPageTailwind'

export const metadata = {
  keywords:
    "contact page tailwind css, contact page tailwind css example, contact page components",
  description:
    "Contact page tailwind css and with clean design proper color code. It fully responsive.",
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
    title: "Contact page tailwind css",
    description:
      "Contact page tailwind css and with clean design proper color code. It fully responsive.",
    url: "https://makecomponents.com/contact/contact-page-tailwind",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/contact/contact-page-tailwind`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/contact/contact002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/contact/contact002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Contact page tailwind css",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/contact/contact-page-tailwind`),
  title: {
    default: "Contact page tailwind css",
  },
  alternates: {
    canonical: "https://makecomponents.com/contact/contact-page-tailwind",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Contact page tailwind css",
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
        name: "Contact us components",
        item: "https://makecomponents.com/contact",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact page tailwind css",
        item: "https://makecomponents.com/contact/contact-page-tailwind",
      },
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <ContactPageTailwind/>
    </div>
  )
}
