import React from "react";
import CallToActionAtt from "./CallToActionAtt";
export const metadata = {
  keywords:
    "call to action tailwind, Call to action tailwind react, Tailwind components, Call to action tailwind css, Call to action tailwind example",
  description:
    "Call to action section. It was create by the tailwind css. It fully responsive and easy for the developer and designer.",
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
    title: "Attractive Call to action",
    description:
      "Call to action section. It was create by the tailwind css. It fully responsive and easy for the developer and designer.",
    url: "https://makecomponents.com/call-to-action/call-to-action-attractive",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/call-to-action/call-to-action-attractive`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/call-to-action/call001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/call-to-action/call001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "call to action components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/call-to-action/call-to-action-attractive`
  ),
  title: {
    default: `Attractive Call to action `,
  },
  alternates: {
    canonical:
      "https://makecomponents.com/call-to-action/call-to-action-attractive",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "@name": "Tailwind call to action",
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
        name: "call to action",
        item: "https://makecomponents.com/call-to-action",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Attractive Call to action",
        item: "https://makecomponents.com/call-to-action/call-to-action-attractive",
      },
    ],
  };
  return (
    <div>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CallToActionAtt />
    </div>
  );
}
