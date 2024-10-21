import React from 'react'
import ModernTailwindCardPre from './ModernTailwindCardPre'

export const metadata = {
    keywords:
      "modern tailwind card design, Modern tailwind card design template html,Tailwind css card example html",
    description:
      "Modern tailwind card design preview and with clean design and proper color code. It is fully responsive.",
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
      title: "Modern tailwind card design preview",
      description:
        "Modern tailwind card design preview and with clean design and proper color code. It is fully responsive.",
      url: "https://makecomponents.com/card/modern-tailwind-card-design/preview",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/card/modern-tailwind-card-design/preview`,
      },
      images: [
        {
          url: "https://makecomponents.com/Image/card/card009.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/card/card009.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Modern tailwind card design",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(
      `https://makecomponents.com/card/modern-tailwind-card-design/preview`
    ),
    title: {
      default: `Modern tailwind card design preview`,
    },
    alternates: {
      canonical: "https://makecomponents.com/card/modern-tailwind-card-design/preview",
    },
  };

export default function page() {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        name: "Modern tailwind card design preview",
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
            name: "Card components",
            item: "https://makecomponents.com/card",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Modern tailwind card design preview",
            item: "https://makecomponents.com/card/modern-tailwind-card-design",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Modern tailwind card design preview ",
            item: "https://makecomponents.com/card/modern-tailwind-card-design/preview",
          },
        ],
      };
  return (
    <div>
           <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <ModernTailwindCardPre/>
    </div>
  )
}
