import React from 'react'
import TailwindServicesSection from './TailwindServicesSection'


export const metadata = {
  keywords: "Tailwind services section ,Tailwind services section css,Testimonials Tailwind React",
  description:
    "Tailwind services section and with clean design and proper color code. It is fully responsive.",
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
    title: "Tailwind services section",
    description:
      "Tailwind services section and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/services/tailwind-services-section",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/services/tailwind-services-section`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/services/services006.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/services/services006.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Tailwind services section",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/services/tailwind-services-section`),
  title: {
    default: "Tailwind services section ",
  },
  alternates: {
    canonical: "https://makecomponents.com/services/tailwind-services-section",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Tailwind services section",
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
        name: "services components",
        item: "https://makecomponents.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tailwind services section",
        item: "https://makecomponents.com/services/tailwind-services-section",
      },
    ],
  };
  return (
    <div>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <TailwindServicesSection/>
    </div>
  )
}
