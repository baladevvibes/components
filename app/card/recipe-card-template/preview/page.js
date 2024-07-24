import React from 'react'
import RecipeCardTempPre from './RecipeCardTempPre'
export const metadata = {
    keywords:
      "recipe card template tailwind css, tailwind css card example,Tailwind css card example html",
    description:
      "It will be attractive and move you to read more about the recipe section. It will give a good impression for your websites.preview section",
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
      title: "Recipe card template preview",
      description:
        "It will be attractive and move you to read more about the recipe section. It will give a good impression for your websites.preview section",
      url: "https://makecomponents.com/card/recipe-card-template/preview",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/card/recipe-card-template/preview`,
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
      `https://makecomponents.com/card/recipe-card-template/preview`
    ),
    title: {
      default: `Recipe card template`,
    },
    alternates: {
      canonical: "https://makecomponents.com/card/recipe-card-template/preview",
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
          {
            "@type": "ListItem",
            position: 4,
            name: "Recipe card template preview section",
            item: "https://makecomponents.com/card/recipe-card-template/preview",
          },
        ],
      };
  return (
    <div>
              <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <RecipeCardTempPre/>
    </div>
  )
}
