import React from 'react'
import TailwindBlogCards from './TailwindBlogCards'

export const metadata = {
    keywords:
      "tailwind blog cards, tailwind  cards, Tailwind blog cards list ",
    description: "tailwind blog cards and with clean design and proper color code. It is fully responsive.",
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
      title: "tailwind blog cards",
      description:
        "tailwind blog cards and with clean design and proper color code. It is fully responsive.",
      url: "https://makecomponents.com/blog-card/tailwind-blog-cards",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/blog-card/tailwind-blog-cards`,
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
      `https://makecomponents.com/blog-card/tailwind-blog-cards`
    ),
    title: {
      default: "tailwind blog cards",
    },
    alternates: {
      canonical:
        "https://makecomponents.com/blog-card/tailwind-blog-cards",
    },
  };

export default function page() {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        name: "Tailwind blog cards",
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
            item: "https://makecomponents.com/skeleton",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Tailwind blog cards",
            item: "https://makecomponents.com/blog-card/tailwind-blog-cards",
          },
        ],
      };
  return (
    <div>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        
        <TailwindBlogCards/>
    
    </div>
  )
}
