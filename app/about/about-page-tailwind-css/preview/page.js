import React from 'react'
import AboutusPageTempPre from './AboutPageTailwindPre'

export const metadata = {
    keywords:
      "About page tailwind css, About page tailwind css example, About page components",
    description:
      "About page tailwind css and with clean design proper color code. It fully responsive.",
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
      title: "About page tailwind css preview",
      description:
        "About page tailwind css and with clean design proper color code. It fully responsive.",
      url: "https://makecomponents.com/about/about-page-tailwind-css/preview",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/about/about-page-tailwind-css/preview`,
      },
      images: [
        {
          url: "https://makecomponents.com/Image/about/about006.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/about/about006.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "About page tailwind css preview",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(`https://makecomponents.com/about/about-page-tailwind-css/preview`),
    title: {
      default: "About page tailwind css",
    },
    alternates: {
      canonical: "https://makecomponents.com/about/about-page-tailwind-css/preview",
    },
  };
  

export default function page() {

    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        name: "About page tailwind css",
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
            name: "About us components",
            item: "https://makecomponents.com/about",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "About page tailwind css",
            item: "https://makecomponents.com/about/about-page-tailwind-css",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "About page tailwind css preview",
            item: "https://makecomponents.com/about/about-page-tailwind-css/preview",
          },
        ],
      };
  return (
    <div>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <AboutusPageTempPre/>
    </div>
  )
}
