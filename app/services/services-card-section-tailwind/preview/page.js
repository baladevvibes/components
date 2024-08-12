import React from 'react'
import ServicesCardSectionPre from './ServicesCardSectionPre'

export const metadata = {
    keywords: "Color card design tailwind css free, section design, Color card design tailwind css example",
    description:
    "Services section with professional card. Info will take throw the visitor. The design is nice, and it is also responsive.",
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
      title: "Services color card section tailwind css preview",
      description:
        "Services section with professional card preview. Info will take throw the visitor. The design is nice, and it is also responsive.",
      url: "https://makecomponents.com/services/services-card-section-tailwind/perview",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/services/services-card-section-tailwind/perview`,
      },
      images: [
        {
          url: "https://makecomponents.com/Image/services/services005.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/services/services005.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Services color card section tailwind css preview",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(
      `https://makecomponents.com/services/services-card-section-tailwind/perview`
    ),
    title: {
      default: "Services color card section tailwind css preview",
    },
    alternates: {
      canonical: "https://makecomponents.com/services/services-card-section-tailwind/perview",
    },
  };

export default function page() {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        name: "Services color card section tailwind css preview",
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
            name: "Services component tailwind css",
            item: "https://makecomponents.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Services color card section tailwind css preview",
            item: "https://makecomponents.com/services/services-card-section-tailwind",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Services color card section tailwind css preview perview",
            item: "https://makecomponents.com/services/services-card-section-tailwind/preview",
          },
        ],
      };
  return (
    <div>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <ServicesCardSectionPre/>
    </div>
  )
}
