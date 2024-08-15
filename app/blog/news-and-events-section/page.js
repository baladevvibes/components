import React from "react";
import NewsAndEvents from "./NewsAndEvents";

export const metadata = {
  keywords:
    "news and events section template, news and events section tailwind css, news and events section Tailwind ",
  description:
    "simple news and events section. This section is simple, professional, and good. The changes are all done in the block section and landing page.",
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
    title: "News and events section",
    description:
      "simple news and events section. This section is simple, professional, and good. The changes are all done in the block section and landing page.",
    url: "https://makecomponents.com/blog/news-and-events-section",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/blog/news-and-events-section`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/blog/blog002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/blog/blog002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "News and events section",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/blog/news-and-events-section`
  ),
  title: {
    default: "News and events section",
  },
  alternates: {
    canonical: "https://makecomponents.com//blog/news-and-events-section",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "News and events section",
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
        name: "Blog components",
        item: "https://makecomponents.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "News and events section",
        item: "https://makecomponents.com/blog/news-and-events-section",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewsAndEvents />
    </div>
  );
}
