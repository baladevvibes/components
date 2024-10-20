import React from 'react'
import Tablecard from './TableCard'

export const metadata = {
  keywords:
    "table tailwind css, table section tailwind css example, Tailwind CSS table component",
  description:
    "Table components and muti design are on this page. we can copy the code and use in any project.",
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
    title: "Table components",
    description:
      "Table components and muti design are on this page. we can copy the code and use in any project",
    url: "https://makecomponents.com/table",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/table`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/table/table001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/table/table001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Table components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/table`),
  title: {
    default: "Table components",
  },
  alternates: {
    canonical: "https://makecomponents.com/table",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Table components",
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
        name: "Table components",
        item: "https://makecomponents.com/table",
      },
    ],
  };
  return (
    <div>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Tablecard/>
      
      </div>
  )
}
