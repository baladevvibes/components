import React from 'react'
import AboutPageTailwnd from './AboutPageTailiwnd'

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
      title: "About page tailwind css ",
      description:
        "About page tailwind css and with clean design proper color code. It fully responsive.",
      url: "https://makecomponents.com/about/about-page-tailwind-css",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/about/about-page-tailwind-css`,
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
          alt: "About page tailwind css ",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(`https://makecomponents.com/about/about-page-tailwind-css`),
    title: {
      default: "About page tailwind css",
    },
    alternates: {
      canonical: "https://makecomponents.com/about/about-page-tailwind-css",
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
        ],
      };
  return (
    <div>
               <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <AboutPageTailwnd/>
    </div>
  )
}
