import React from 'react'
import ResponsivePre from './ResponsivePre'

export const metadata = {
    keywords:
      "responsive table css, responsive table example tailwind, Tailwind table component",
    description:
      "Tailwind table is responsive and easy to user experience for the see the data values.",
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
      title: "Tailwind table responsive preview",
      description:
        "Tailwind table is responsive and easy to user experience for the see the data values.",
      url: "https://makecomponents.com/table/responsive-table/preview",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/table/responsive-table/preview`,
      },
      images: [
        {
          url: "https://makecomponents.com/Image/table/table002.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/table/table002.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Table components",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(`https://makecomponents.com/table/responsive-table/preview`),
    title: {
      default: `Tailwind table responsive preview`,
    },
    alternates: {
      canonical: "https://makecomponents.com/table/responsive-table/preview",
    },
  };

export default function page() {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        name: "Table Components",
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
          {
            "@type": "ListItem",
            position: 3,
            name: "Tailwind table responsive",
            item: "https://makecomponents.com/table/responsive-table",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Tailwind table responsive preview",
            item: "https://makecomponents.com/table/responsive-table/preview",
          },
        ],
      };
  return (
    <div>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <ResponsivePre/>
    </div>
  )
}
