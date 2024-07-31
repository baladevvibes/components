import React from "react";
import EcommerceProductPre from "./EcommerceProductPre";

export const metadata = {
  keywords:
    "ecommerce product design tailwind, Tailwind eCommerce template free, Tailwind CSS eCommerce components",
  description:
    "Ecommerce product this section to highlight the product and sales. This session gives more attraction for the users.",
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
    title: "Ecommerce product design tailwind preview",
    description:
      "Ecommerce product this section to highlight the product and sales. This session gives more attraction for the users.",
    url: "https://makecomponents.com/product/ecommerce-product/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/product/ecommerce-product/preview`,
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
  metadataBase: new URL(`https://makecomponents.com/product/ecommerce-product/preview`),
  title: {
    default: `Ecommerce product design tailwind preview`,
  },
  alternates: {
    canonical: "https://makecomponents.com/product/ecommerce-product/preview",
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
      {
        "@type": "ListItem",
        position: 4,
        name: "Ecommerce product design tailwind preview",
        item: "https://makecomponents.com/product/ecommerce-product/preview",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EcommerceProductPre />
    </div>
  );
}
