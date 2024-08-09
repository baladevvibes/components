import React from "react";
import OurServiceTalwind from "./OurServiceTalwind";

export const metadata = {
  keywords:
    "Our Services tailwind css, Service page html css, Service page html example",
  description:
    "This section made up of three grid. It will take place for the services section.",
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
    title: "Our Services tailwind css",
    description:
      "This section made up of three grid. It will take place for the services section.",
    url: "https://makecomponents.com/services/our-services-tailwind-css",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/services/our-services-tailwind-css`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/services/services004/services004.webpp",
        secure_url:
          "https://makecomponents.com/Image/services/services004/services004.webp",
        alt: "Our Services tailwind components",
        type:"image/webp"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/services/our-services-tailwind-css`
  ),
  title: {
    default: "Our Services tailwind css",
  },
  alternates: {
    canonical: "https://makecomponents.com/services/our-services-tailwind-css",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Our services tailwind css",
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
        name: "Services components",
        item: "https://makecomponents.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Our Services tailwind css",
        item: "https://makecomponents.com/services/our-services-tailwind-css/preview",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OurServiceTalwind />
    </div>
  );
}
