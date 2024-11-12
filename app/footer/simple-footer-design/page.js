import React from "react";
import SimpleFooterDesign from "./SimpleFooterDesign";


export const metadata = {
  keywords: "Simple Footer design ,Simple Footer design css,Footer Tailwind React",
  description:
    "Simple Footer design and with clean design and proper color code. It is fully responsive.",
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
    title: "Simple Footer design",
    description:
      "Simple Footer design and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/footer/simple-footer-design",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/footer/simple-footer-design`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/footer/footer004.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/footer/footer004.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Simple Footer design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/footer/simple-footer-design`),
  title: {
    default: "Simple Footer design ",
  },
  alternates: {
    canonical: "https://makecomponents.com/footer/simple-footer-design",
  },
};



export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Simple Footer design",
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
        name: "footer tailwind components",
        item: "https://makecomponents.com/footer",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Simple Footer design",
        item: "https://makecomponents.com/footer/simple-footer-design",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SimpleFooterDesign />
    </div>
  );
}
