import React from 'react'
import IconServicesSectionPre from './IconServicesSectionPre'
export const metadata = {
  keywords: "our services section design, section design, about section design",
  description:
    "This component was created by tailwind CSS. It is fully responsive and gives a good-looking icon services section.",
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
    title: "Icon services section perview",
    description:
      "This component was created by tailwind CSS. It is fully responsive and gives a good-looking icon services section.",
    url: "https://makecomponents.com/services/icon-services-section/perview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/services/icon-services-section/perview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/services/services003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/services/services003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Icon services section components perview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/services/icon-services-section/perview`
  ),
  title: {
    default: "Icon services section perview",
  },
  alternates: {
    canonical: "https://makecomponents.com/services/icon-services-section/perview",
  },
};
export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Icon services section",
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
        name: "Services component tailwind css",
        item: "https://makecomponents.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Icon services section",
        item: "https://makecomponents.com/services/icon-services-section",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Icon services section perview",
        item: "https://makecomponents.com/services/icon-services-section/preview",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <IconServicesSectionPre/>
    </div>
  )
}
