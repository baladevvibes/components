import React from 'react'
import BlogCardDesign from './BlogCardDesign'
export const metadata = {
    keywords:
      "Blog card design tailwind css template, Blog card design tailwind css, Tailwind CSS card example",
    description:
      "Blog card design tailwind css. It use for the blog card section.",
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
      title: "Blog card design tailwind css",
      description:
      "Blog card design tailwind css. It use for the blog card section.",
      url: "https://makecomponents.com/blog/blog-card-design",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/blog/blog-card-design`,
      },
      images: [
        {
          url: "https://makecomponents.com/Image/blog/blog001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/blog/blog001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "blog components",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(
      `https://makecomponents.com/blog/blog-card-design`
    ),
    title: {
      default: "Blog card design tailwind css",
    },
    alternates: {
      canonical:
        "https://makecomponents.com/blog/blog-card-design",
    },
  };
export default function page() {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        name: "Blog card design",
        itemListElement: [
          [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://makecomponents.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog components",
              item: "https://makecomponents.com/blog",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Blog card design tailwind css",
              item: "https://makecomponents.com/blog/blog-card-design",
            },
          ],
          [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://makecomponents.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Card Components",
              item: "https://makecomponents.com/card",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Blog card design tailwind css",
              item: "https://makecomponents.com/blog/blog-card-design",
            },
          ],
        ],
      };
  return (
    <div>
             <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <BlogCardDesign/>
    </div>
  )
}
