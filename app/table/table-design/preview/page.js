import React from 'react'
import TableDesignPre from './TableDesignPre'
export const metadata = {
    keywords: "HTML table examples tailwind ,HTML table  Tailwind css ,Html table code example tailwind",
    description:
      "Table design in HTML examples preview and with clean design and proper color code. It is fully responsive.",
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
      title: "Table design in HTML examples preview",
      description:
        "Table design in HTML examples preview and with clean design and proper color code. It is fully responsive.",
      url: "https://makecomponents.com/table/table-design/preview",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/table/table-design/preview`,
      },
      images: [
        {
          url: "https://makecomponents.com/Image/table/table003.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/table/table003.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Table design in HTML examples preview",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(`https://makecomponents.com/table/table-design/preview`),
    title: {
      default: "Table design in HTML examples preview  ",
    },
    alternates: {
      canonical: "https://makecomponents.com/table/table-design/preview",
    },
  };

export default function page() {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        name: "Table design in HTML examples preview preview",
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
            name: "table tailwind components",
            item: "https://makecomponents.com/table",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Table design in HTML examples",
            item: "https://makecomponents.com/table/table-design/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Table design in HTML examples preview preview",
            item: "https://makecomponents.com/table/table-design/preview",
          },
        ],
      };
  return (
    <div>
           <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <TableDesignPre/>
    </div>
  )
}
