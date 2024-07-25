import React from "react";
import SampleFAQPre from "./SampleFAQPre";

export const metadata = {
    keywords:
      "faq section design, Faq section design template, FAQ page",
    description:
      "This is a very simple faq design. But look at the at the high-level rich class. It will be very easy to handle and use for the design.",
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
      title: "Simple faq sample design css preview",
      description:
        "This is a very simple faq design. But look at the at the high-level rich class. It will be very easy to handle and use for the design preview.",
      url: "https://makecomponents.com/faq/sample-faq-section/preview",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/faq/sample-faq-section/preview`,
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
    metadataBase: new URL(`https://makecomponents.com/faq/sample-faq-section.preview`),
    title: {
      default: `Simple faq sample design css preview`,
    },
    alternates: {
      canonical: "https://makecomponents.com/faq/sample-faq-section/preview",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Curve card design section preview",
        item: "https://makecomponents.com/faq/sample-faq-section/preview",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SampleFAQPre />
    </div>
  );
}
