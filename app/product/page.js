import React from 'react'
import ProductCard from './ProductCard'

export const metadata = {
  keywords:
    "ecommerce product components, Ecommerce product components examples, Ecommerce product components list",
  description:
    "Ecommerce product components list page. It more useful for the users.",
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
    title: "Ecommerce Product Components",
    description:
      "Ecommerce product components list page. It more useful for the users.",
    url: "https://makecomponents.com/product",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/product`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/product/product001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/product/product001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Product components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/product`),
  title: {
    default: `Ecommerce Product Components`,
  },
  alternates: {
    canonical: "https://makecomponents.com/product",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Ecommerce Product Components",
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
        name: "Ecommerce Product Components",
        item: "https://makecomponents.com/product",
      },
    ],
  };
  return (
    <div>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductCard/>
    </div>
  )
}
