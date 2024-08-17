import React from 'react'
import HideandShowDesignPre from './HideandShowDesignPre'

export const metadata = {
    keywords:
      "Hide and show design tailwind css preview , Hide and show design tailwind css preview example, Hide and show design",
    description:
      "Hide and show design tailwind css preview like faq and showing reslative images. It fully responsive.",
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
      title: "Hide and show design tailwind css preview",
      description:
        "Hide and show design tailwind css preview like faq and showing reslative images. It fully responsive.",
      url: "https://makecomponents.com//highlight/hide-and-show-design/preview",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com//highlight/hide-and-show-design/preview`,
      },
      images: [
        {
          url: "https://makecomponents.com/Image/highlight/highlight003.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/highlight/highlight003.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Hide and show design tailwind css preview",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(
      `https://makecomponents.com//highlight/hide-and-show-design/preview`
    ),
    title: {
      default: `Hide and show design tailwind css preview `,
    },
    alternates: {
      canonical:
        "https://makecomponents.com//highlight/hide-and-show-design/preview",
    },
  };

export default function page() {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "@name": "Hide and show design tailwind css preview ",
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
            name: "highlight components",
            item: "https://makecomponents.com/highlight",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hide and show design tailwind css",
            item: "https://makecomponents.com//highlight/hide-and-show-design",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hide and show design tailwind css preview",
            item: "https://makecomponents.com//highlight/hide-and-show-design/preview",
          },
        ],
      };
  return (
    <div>
           <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <HideandShowDesignPre/>
    </div>
  )
}
