import React from 'react'
import DashboardInfromationPre from './DashboardInfromationPre'

export const metadata = {
  keywords: "Dashboard Information preview examples,Dashboard Information preview design,Simple dashboard examples",
  description:
    "Dashboard Information preview and with clean design and proper color code. It is fully responsive.",
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
    title: "Dashboard Information preview",
    description:
      "Dashboard Information preview and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/dashboard-info/dashboard-information/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/dashboard-info/dashboard-information/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/dashboard-info/dashboard-info002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/dashboard-info/dashboard-info002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Dashboard Information preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/dashboard-info/dashboard-information/preview`),
  title: {
    default: "Dashboard Information preview",
  },
  alternates: {
    canonical: "https://makecomponents.com/dashboard-info/dashboard-information/preview",
  },
};


export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Dashboard Information",
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
        name: "Dashboard Info components",
        item: "https://makecomponents.com/dashboard-info",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dashboard Information",
        item: "https://makecomponents.com/dashboard-info/dashboard-information",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dashboard Information preview",
        item: "https://makecomponents.com/dashboard-info/dashboard-information/preview",
      },
    ],
  };
  return (
    <div>
           <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <DashboardInfromationPre/>
    </div>
  )
}
