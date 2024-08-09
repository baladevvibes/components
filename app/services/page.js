import React from "react";
import ServicesCard from "./servicesCard";

export const metadata = {
  keywords:
    "services component tailwind css, services component, services component html example",
  description:
    "services component tailwind css. On this page, there are a lot of service components. A template is ready.",
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
    title: "services component tailwind css",
    description:
      "services component tailwind css. On this page, there are a lot of service components. A template is ready.",
    url: "https://makecomponents.com/service",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/service`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/services/services001.webp",
        secure_url:
          "https://makecomponents.com/Image/services/services001.webp",
        alt: "hero components",
        type:"image/webp"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/service`
  ),
  title: {
    default: "Services component tailwind css",
  },
  alternates: {
    canonical: "https://makecomponents.com/service",
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
        name: "services component tailwind css",
        item: "https://makecomponents.com/services",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesCard />
    </div>
  );
}
