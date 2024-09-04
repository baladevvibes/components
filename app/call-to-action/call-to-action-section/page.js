import React from 'react'
import CallToActionSection from './CallToActionSection'


export const metadata = {

  description:
    "call to action section ui design and with clean design proper color code. It fully responsive.",
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
    title: "call to action section ui design ",
    description:
      "call to action section ui design and with clean design proper color code. It fully responsive.",
    url: "https://makecomponents.com/call-to-action/call-to-action-section",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/call-to-action/call-to-action-section`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/call-to-action/call002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/call-to-action/call002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "call to action section ui design ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/call-to-action/call-to-action-section`),
  title: {
    default: "call to action section ui design",
  },
  alternates: {
    canonical: "https://makecomponents.com/call-to-action/call-to-action-section",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "call to action section ui design",
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
        name: "Call to action components",
        item: "https://makecomponents.com/call-to-action",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "call to action section ui design",
        item: "https://makecomponents.com/call-to-action/call-to-action-section",
      },
    ],
  };
  return (
    <div>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <CallToActionSection/>
    </div>
  )
}
