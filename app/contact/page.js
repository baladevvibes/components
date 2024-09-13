import React from 'react'
import ContactCard from './ContactCard'

export const metadata = {
  keywords: "contact template section design free , Tailwind contact page free, Free Tailwind templates",
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
    title: "contact template section design",
    description:
      "There are many templates on this page. It will have different templates that are available, and it also has free code",
    url: "https://makecomponents.com/contact",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/contact`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/contact/contact001.webp", // Must be an absolute URL
      },
      {
        url: "https://makecomponents.com/Image/contact/contact001.webp", // Must be an absolute URL
        alt: "about components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/contact`
  ),
  title: {
    default: "contact template section design",
  },
  alternates: {
    canonical: "https://makecomponents.com/contact",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Contact Section",
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
        name: "Contact component",
        item: "https://makecomponents.com/contact",
      },
    ],
  };
  return (
    <div>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactCard/>
    </div>
  )
}
