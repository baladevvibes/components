import React from "react";
import TeamHoverLayerCardSection from "./TeamHoverLayerCardSection";

export const metadata = {
  keywords:
    "hero section design template, Hero section design template word, Hero section design template free",
  description:
    "Card layer section. hover the card means content will display other wise it will be hidden.",
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
    title: "Team hover layer card section",
    description:
      "Card layer section. hover the card means content will display other wise it will be hidden.",
    url: "https://makecomponents.com/teams/team-hover-layer-card-section",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/teams/team-hover-layer-card-section`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/teams/Teams002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/teams/Teams002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "card components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/teams/team-hover-layer-card-section`
  ),
  title: {
    default:  "Team hover layer card section",
  },
  alternates: {
    canonical:
      "https://makecomponents.com/teams/team-hover-layer-card-section",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "name": "Card design tailwind css",
    itemListElement: [
      [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://makecomponents.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Team components",
          item: "https://makecomponents.com/teams",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Team hover layer card section",
          item: "https://makecomponents.com/teams/team-hover-layer-card-section",
        },
      ],
      [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://makecomponents.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Card Components",
          item: "https://makecomponents.com/card",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Team hover layer card section",
          item: "https://makecomponents.com/teams/team-hover-layer-card-section",
        },  
      ],
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TeamHoverLayerCardSection />
    </div>
  );
}
