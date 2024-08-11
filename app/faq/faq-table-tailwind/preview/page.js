import React from 'react'
import FaqTableTailwindPre from './FaqTableTailwindPre'

export const metadata = {
    keywords:
      "faq table tailwind css, Faq table tailwind css example, Tailwind CSS table",
    description:
      "This section is product-based. It has a design like a FAQ, and inside has table data. The user easily understands and gets the group of data peview.",
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
      title: "Faq table tailwind css " ,
      description:
        "This section is product-based. It has a design like a FAQ, and inside has table data. The user easily understands and gets the group of data peview.",
      url: "https://makecomponents.com/faq/faq-table-tailwind/peview",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/faq/faq-table-tailwind/peview`,
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
    metadataBase: new URL(`https://makecomponents.com/faq/faq-table-tailwind/peview`),
    title: {
      default: "Faq table tailwind css peview",
    },
    alternates: {
      canonical: "https://makecomponents.com/faq/faq-table-tailwind/peview",
    },
  };

export default function page() {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        name: "Faq table tailwind css preview",
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
            name: "Faq table tailwind css",
            item: "https://makecomponents.com/faq/faq-table-tailwind",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Faq table tailwind css preview",
            item: "https://makecomponents.com/faq/faq-table-tailwind/preview",
          },
        ],
      };
  return (
    <div>
              <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <FaqTableTailwindPre/>
    </div>
  )
}
