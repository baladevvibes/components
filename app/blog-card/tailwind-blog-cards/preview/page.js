import React from 'react'
import TailwindBlogCardsPre from './TailwindBlogCardsPre'

export const metadata = {
  keywords:
    "Tailwind blog cards preview, tailwind  cards, Tailwind blog cards preview list ",
  description: "Tailwind blog cards preview and with clean design and proper color code. It is fully responsive.",
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
    title: "Tailwind blog cards preview",
    description:
      "Tailwind blog cards preview and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/blog-card/tailwind-blog-cards/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/blog-card/tailwind-blog-cards/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/blog-card/blogcard001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/blog-card/blogcard001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Blog cards components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/blog-card/tailwind-blog-cards/preview`
  ),
  title: {
    default: "Tailwind blog cards preview",
  },
  alternates: {
    canonical:
      "https://makecomponents.com/blog-card/tailwind-blog-cards/preview",
  },
};

export default function page() {

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Tailwind blog cards preview",
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
        name: "Blog cards component",
        item: "https://makecomponents.com/blog-card",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tailwind blog cards ",
        item: "https://makecomponents.com/blog-card/tailwind-blog-cards/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Tailwind blog cards preview",
        item: "https://makecomponents.com/blog-card/tailwind-blog-cards/preview",
      },
    ],
  };
  return (
    <div>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TailwindBlogCardsPre/>
    </div>
  )
}
