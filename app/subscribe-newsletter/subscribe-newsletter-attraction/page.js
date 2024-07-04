import React from "react";
import SubscribeNewletterAttraction from "./SubscribeNewletterAttraction";

export const metadata = {
  keywords:
    "newsletter free section,free newsletter tailwind,newsletter section",
  description:
    "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.",
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
    title: "Subscribe Newsletter attraction section",
    description:
      "Subscribe Newsletter attraction section.Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design. It is hero section",
    url: "https://makecomponents.com/subscribe-newsletter/subscribe-newsletter-attraction",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/subscribe-newsletter/subscribe-newsletter-attraction`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/news-letter/news-letter001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/news-letter/news-letter001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Subscribe Newsletter attraction section",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/subscribe-newsletter/subscribe-newsletter-attraction`
  ),
  title: {
    default: `Subscribe Newsletter attraction section`,
  },
  alternates: {
    canonical:
      "https://makecomponents.com/subscribe-newsletter/subscribe-newsletter-attraction",
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
        name: "Newsletter components",
        item: "https://makecomponents.com/subscribe-newsletter",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Subscribe Newsletter attraction section",
        item: "https://makecomponents.com/subscribe-newsletter/subscribe-newsletter-attraction",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SubscribeNewletterAttraction />
    </div>
  );
}
