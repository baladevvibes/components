import React from 'react'
import CallToActionSectionPre from './CallToActionSectionPre'

export const metadata = {

  description:
    "call to action section ui design preview and with clean design proper color code. It fully responsive.",
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
    title: "call to action section ui design preview ",
    description:
      "call to action section ui design preview and with clean design proper color code. It fully responsive.",
    url: "https://makecomponents.com/call-to-action/call-to-action-section/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/call-to-action/call-to-action-section/preview`,
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
        alt: "call to action section ui design preview ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/call-to-action/call-to-action-section/preview`),
  title: {
    default: "call to action section ui design preview",
  },
  alternates: {
    canonical: "https://makecomponents.com/call-to-action/call-to-action-section/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "call to action section ui design preview",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "call to action section ui design preview",
        item: "https://makecomponents.com/call-to-action/call-to-action-section/preview",
      },
    ],
  };
  return (
    <div>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

        <CallToActionSectionPre/>
    </div>
  )
}
