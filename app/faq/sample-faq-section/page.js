import React from "react";
import SampleFAQ from "./SampleFAQ";

export const metadata = {
  keywords:
    "faq section design, Faq section design template, FAQ page",
  description:
    "This is a very simple faq design. But look at the at the high-level rich class. It will be very easy to handle and use for the design.",
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
    title: "Simple faq sample design css",
    description:
      "This is a very simple faq design. But look at the at the high-level rich class. It will be very easy to handle and use for the design.",
    url: "https://makecomponents.com/faq/sample-faq-section",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/faq/sample-faq-section`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/faq/faq001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/faq/faq001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Card components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/faq/sample-faq-section`),
  title: {
    default: `Simple faq sample design css`,
  },
  alternates: {
    canonical: "https://makecomponents.com/faq/sample-faq-section",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "FAQ Section",
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
        name: "Faq components",
        item: "https://makecomponents.com/faq",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Curve card design section",
        item: "https://makecomponents.com/faq/sample-faq-section",
      },
    ],
  };
  
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SampleFAQ />
    </div>
  );
}
