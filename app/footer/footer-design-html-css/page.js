import React from 'react'
import FooterDesignHtml from './FooterDesignHtml'

export const metadata = {
  keywords:
    "footer design html, footer design html template free, footer design  tailwind ",
  description:
    "footer design html and with clean design proper color code. It fully responsive.",
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
    title: "footer design html ",
    description:
      "footer design html and with clean design proper color code. It fully responsive.",
    url: "https://makecomponents.com/footer/footer-design-html-css",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/footer/footer-design-html-css`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/footer/footer003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/footer/footer003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "footer design html ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/footer/footer-design-html-css`),
  title: {
    default: "footer design html",
  },
  alternates: {
    canonical: "https://makecomponents.com/footer/footer-design-html-css",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "footer design html",
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
        name: "Footer components",
        item: "https://makecomponents.com/footer",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "footer design html",
        item: "https://makecomponents.com/footer/footer-design-html-css",
      },
    ],
  };
  return (
    <div>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FooterDesignHtml/>
    </div>
  )
}
