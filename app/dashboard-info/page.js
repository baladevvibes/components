import React from 'react'
import DashboardCard from './DashboardCard'

export const metadata = {
  keywords:
    "Dashboard Info components, free card section, tailwind card component, Tailwind card component react, Tailwind card component css",
  description:
    "10+ card sections using Tailwind CSS There are many more card component templates on this page. take reference and code. It is useful for the developer and designer, too.",
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
    title: "Dashboard Info Components",
    description:
      "Dashboard Info Components using Tailwind CSS There are many more card component templates on this page. take reference and code. It is useful for the developer and designer, too.",
    url: "https://makecomponents.com/dashboard-info",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/dashboard-info`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/dashboard-info/dashboard-info001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/dashboard-info/dashboard-info001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Dashboard Info Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/dashboard-info`),
  title: {
    default: `Dashboard Info Components`,
  },
  alternates: {
    canonical: "https://makecomponents.com/dashboard-info",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
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
        name: "Dashboard Info Components",
        item: "https://makecomponents.com/dashboard-info",
      },
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DashboardCard/>
    </div>
  )
}
