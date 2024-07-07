import React from "react";
import SemiCardDesignPre from "./SemiCardDesignPre";

export const metadata = {
  keywords:
    "Tailwind css card grid example, Card Tailwind CSS, Tailwind CSS card grid, Card tailwind css example, Tailwind responsive card grid",
  description:
    "Semi circle design preview. Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.",
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
    title: "Semi circle design preview",
    description:
      "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design. It is hero section",
    url: "https://makecomponents.com/card/semi-card-design/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/semi-card-design/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/card/card004.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/card/card004.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Semi Circle Design preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/card/semi-card-design/preview`
  ),
  title: {
    default: `Semi circle design preview`,
  },
  alternates: {
    canonical: "https://makecomponents.com/card/semi-card-design/preview",
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
        name: "Card components",
        item: "https://makecomponents.com/card",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Semi circle design",
        item: "https://makecomponents.com/card/semi-card-design",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Semi circle design preview",
        item: "https://makecomponents.com/card/semi-card-design/preview",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SemiCardDesignPre />
    </div>
  );
}
