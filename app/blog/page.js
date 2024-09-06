import React from 'react'
import BlogCard from './BlogCard'

export const metadata = {
  keywords: "Blog template css free , Tailwind About us page free, Free Tailwind templates",
  description:
    "There are many templates on this page. It will have different templates that are available, and it also has free code",
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
    title: "Blog template css",
    description:
      "There are many templates on this page. It will have different templates that are available, and it also has free code",
    url: "https://makecomponents.com/blog",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/blog`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/blog/blog002.webp", // Must be an absolute URL
      },
      {
        url: "https://makecomponents.com/Image/blog/blog002.webp", // Must be an absolute URL
        alt: "blog components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/blog`
  ),
  title: {
    default: "Blog template css",
  },
  alternates: {
    canonical: "https://makecomponents.com/blog",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Blog template ",
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
        name: "Blog component",
        item: "https://makecomponents.com/blog",
      },
    ],
  };
  return (
    <div>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogCard/>
    </div>
  )
}
