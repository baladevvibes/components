import React from "react";
import RecipeCardTemp from "./RecipeCardTemp";

export const metadata = {
  keywords:
    "recipe card template tailwind css, tailwind css card example,Tailwind css card example html",
  description:
    "It will be attractive and move you to read more about the recipe section. It will give a good impression for your websites.",
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
    title: "Recipe card template",
    description:
      "It will be attractive and move you to read more about the recipe section. It will give a good impression for your websites.",
    url: "https://makecomponents.com/card/recipe-card-template",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/recipe-card-template`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/card/card007.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/card/card007.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "card components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/card/recipe-card-template`
  ),
  title: {
    default: `Recipe card template`,
  },
  alternates: {
    canonical: "https://makecomponents.com/card/recipe-card-template",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Recipe card template",
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
        name: "Recipe card template",
        item: "https://makecomponents.com/card/recipe-card-template",
      },
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RecipeCardTemp />
    </div>
  );
}
