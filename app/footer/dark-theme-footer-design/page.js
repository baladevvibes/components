import React from "react";
import DarkThemeFooter from "./DarkThemeFooter";
export const metadata = {
  keywords:
    "tailwind footer section, Tailwind footer template free, react tailwind footer",
  description:
    "This footer was created by the dark theme-based. It will be easy for a website dark theme-based.",
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
    title: "Dark theme footer design",
    description:
      "This footer was created by the dark theme-based. It will be easy for a website dark theme-based.",
    url: "https://makecomponents.com/footer/dark-theme-footer-design",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/footer/dark-theme-footer-design`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/footer/footer002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/footer/footer002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "foote components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/footer/dark-theme-footer-design`
  ),
  title: {
    default: `Dark theme footer design `,
  },
  alternates: {
    canonical: "https://makecomponents.com/footer/dark-theme-footer-design",
  },
};
export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Footer components",
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
        name: "Footer components",
        item: "https://makecomponents.com/footer",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dark theme footer design",
        item: "https://makecomponents.com/footer/dark-theme-footer-design",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DarkThemeFooter />
    </div>
  );
}
