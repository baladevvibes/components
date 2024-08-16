import React from 'react'
import BlogSkeletonTailwind from './BlogSkeletonTailwind'
export const metadata = {
    keywords:
    "Blog Skeleton tailwind css, Blog Skeleton, card Skeleton ",
    description: "Blog skeleton tailwind CSS it loading and make performance good looking onloading view.",
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
      title: "Blog Skeleton tailwind css",
      description:
        "Blog skeleton tailwind CSS it loading and make performance good looking onloading view.",
      url: "https://makecomponents.com/skeleton/blog-skeleton-tailwind",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/skeleton/blog-skeleton-tailwind`,
      },
      images: [
        {
          url: "https://makecomponents.com/Image/skeleton/skeleton002.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/skeleton/skeleton002.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Blog Skeleton tailwind css",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(
      `https://makecomponents.com/skeleton/blog-skeleton-tailwind`
    ),
    title: {
      default: "Blog Skeleton tailwind css",
    },
    alternates: {
      canonical:
        "https://makecomponents.com/skeleton/blog-skeleton-tailwind",
    },
  };
export default function page() {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        name: "Blog Skeleton tailwind css",
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
            name: "Skeleton component",
            item: "https://makecomponents.com/skeleton",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Blog Skeleton tailwind css",
            item: "https://makecomponents.com/skeleton/blog-skeleton-tailwind",
          },
        ],
      };
  return (
    <div>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <BlogSkeletonTailwind/>
    </div>
  )
}
