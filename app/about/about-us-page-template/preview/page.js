import React from "react";
import AboutusPageTempPre from "./AboutusPageTempPre";

export const metadata = {
  keywords:
    "about us page template tailwind css, About us page tailwind css example, Tailwind CSS website templates free",
  description:
    "About Us page template preview: tailwind css. It is fully responsive, and it is good for the product base design.",
  icons: {
    icon: "../../favicon.ico",
    shortcut: "../../favicon.ico",
    apple: "../favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "../../favicon.ico",
    },
  },
  openGraph: {
    title: "About us page template Tailwind css preview",
    description:
      "About Us page template preview: tailwind css. It is fully responsive, and it is good for the product base design.",
    url: "https://makecomponents.com/about/about-us-page-template/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/about/about-us-page-template/preview`,
    },

    images: [
      {
        url: "https://makecomponents.com/Image/about/about005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        // secure_url:"https://makecomponents.com/Image/about/about005.webp",
        // type:"image/webp",
      },
      {
        url: "https://makecomponents.com/Image/about/about005.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "About us page template",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/about/about-us-page-template/preview`
  ),
  title: {
    default: "About us page template Tailwind css preview",
  },
  alternates: {
    canonical:
      "https://makecomponents.com/about/about-us-page-template/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "About us page template tailwind css preview",
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
        name: "About components",
        item: "https://makecomponents.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tailwind background section",
        item: "https://makecomponents.com/about/about/about-us-page-template",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Tailwind background section preview",
        item: "https://makecomponents.com/about/about/about-us-page-template/preview",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutusPageTempPre />
    </div>
  );
}
