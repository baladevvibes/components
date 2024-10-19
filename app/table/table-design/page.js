import React from "react";
import TableDesign from "./TableDesign";

export const metadata = {
  keywords:
    "Table design in html examples, Simple table design in html examples, HTML table code",
  description:
    "Table design in HTML examples and with clean design and proper color code. It is fully responsive.",
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
    title: "Table design in HTML examples ",
    description:
      "Table design in HTML examples and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/table/table-design",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/table/table-design`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/table/table003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/table/table003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Table design in HTML examples",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/table/table-design`),
  title: {
    default: `Table design in HTML examples`,
  },
  alternates: {
    canonical: "https://makecomponents.com/table/table-design",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Table Components",
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
        name: "Table components",
        item: "https://makecomponents.com/table",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Table design in HTML examples",
        item: "https://makecomponents.com/table/table-design",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TableDesign />
    </div>
  );
}
