import React from 'react'
import FaqCard from './FaqCard'

export const metadata = {
  keywords: "faq template  , Taq Section free templates, Faq component",
  description:
    "There are many templates on this page. It will have different templates that are available, and it also has free code",
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
    title: "faq template section design",
    description:
      "There are many templates on this page. It will have different templates that are available, and it also has free code",
    url: "https://makecomponents.com/faq",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/faq`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/faq/faq001.webp", // Must be an absolute URL
      },
      {
        url: "https://makecomponents.com/Image/faq/faq001.webp", // Must be an absolute URL
        alt: "faq components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/faq`
  ),
  title: {
    default: "faq template section design",
  },
  alternates: {
    canonical: "https://makecomponents.com/faq",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Faq Section",
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
        name: "Faq Section",
        item: "https://makecomponents.com/faq",
      },
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqCard/>
    </div>
  )
}
