import React from 'react'
import FaqTableTailwind from './FaqTableTailwind'

export const metadata = {
    keywords:
      "faq table tailwind css, Faq table tailwind css example, Tailwind CSS table component",
    description:
      "This section is product-based. It has a design like a FAQ, and inside has table data. The user easily understands and gets the group of data.",
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
      title: "Faq table tailwind css",
      description:
        "This section is product-based. It has a design like a FAQ, and inside has table data. The user easily understands and gets the group of data.",
      url: "https://makecomponents.com/faq/faq-table-tailwind",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/faq/faq-table-tailwind`,
      },
      images: [
        {
          url: "https://makecomponents.com/Image/faq/faq002.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/faq/faq002.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "FAQ components",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(`https://makecomponents.com/faq/faq-table-tailwind`),
    title: {
      default: "Faq table tailwind css",
    },
    alternates: {
      canonical: "https://makecomponents.com/faq/faq-table-tailwind",
    },
  };

export default function page() {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        name: "Faq table tailwind css",
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
            name: "Faq components",
            item: "https://makecomponents.com/faq",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Curve card design section",
            item: "https://makecomponents.com/faq/faq-table-tailwind",
          },
        ],
      };
  return (
    <div>
           <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <FaqTableTailwind/>
    </div>
  )
}
