import React from 'react'
import EcommerceTshirtDesign from './EcommerceTshirtDesign'
export const metadata = {
  keywords: "e commerce t shirt design ,e commerce t shirt design tailwind css,Testimonials Tailwind React",
  description:
  "E-commerce t-shirt design with clean design and proper color code. It is fully responsive.",
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
    title: "E-commerce t-shirt design",
    description:
      "E-commerce t-shirt design with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/e-card/e-commerce-t-shirt-design",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/e-card/e-commerce-t-shirt-design`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/e-card/e-card001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/e-card/e-card001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "E-commerce t-shirt design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/e-card/e-commerce-t-shirt-design`),
  title: {
    default: "E-commerce t-shirt design ",
  },
  alternates: {
    canonical: "https://makecomponents.com/e-card/e-commerce-t-shirt-design",
  },
};


export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "E-commerce t-shirt design",
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
        name: "E-commerce tailwind components",
        item: "https://makecomponents.com/e-card",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "E-commerce t-shirt design",
        item: "https://makecomponents.com/e-card/e-commerce-t-shirt-design",
      },
    ],
  };
  return (
    <div>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <EcommerceTshirtDesign/>
    </div>
  )
}
