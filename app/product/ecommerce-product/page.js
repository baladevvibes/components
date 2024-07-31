import React from 'react'
import EcommerceProduct from './EcommerceProduct'


export const metadata = {
  keywords:
    "ecommerce product design tailwind, Tailwind eCommerce template free, Tailwind product page",
  description:
    "Ecommerce product this section to highlight the product and sales. This session gives more attraction for the users.",
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
    title: "Ecommerce product design tailwind ",
    description:
      "Ecommerce product this section to highlight the product and sales. This session gives more attraction for the users.",
    url: "https://makecomponents.com/product/ecommerce-product",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/product/ecommerce-product`,
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
  metadataBase: new URL(`https://makecomponents.com/product/ecommerce-product`),
  title: {
    default: `Ecommerce product design tailwind `,
  },
  alternates: {
    canonical: "https://makecomponents.com/product/ecommerce-product",
  },
};
export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Product section",
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
        name: "Faq components",
        item: "https://makecomponents.com/product",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Ecommerce product design tailwind",
        item: "https://makecomponents.com/product/ecommerce-product",
      },
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EcommerceProduct/>
    </div>
  )
}
