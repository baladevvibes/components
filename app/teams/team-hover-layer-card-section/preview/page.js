import React from "react";
import TeamHoverLayerCardSectionPre from "./TeamHoverLayerCardSectionPre";

export const metadata = {
  keywords:
    "team card section tailwind css, Team card section tailwind css example, Tailwind css cards codepen",
  description:
    "Card layer section. hover the card means content will display other wise it will be hidden.",
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
    title: "Team hover layer card section perview",
    description:
      "Card layer section. hover the card means content will display other wise it will be hidden.",
    url: "https://makecomponents.com/teams/team-hover-layer-card-section/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/teams/team-hover-layer-card-section/preview`,
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
    `https://makecomponents.com/teams/team-hover-layer-card-section/preview`
  ),
  title: {
    default: "Team hover layer card section perview",
  },
  alternates: {
    canonical:
      "https://makecomponents.com/teams/team-hover-layer-card-section/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Card design tailwind css",
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
        {
          "@type": "ListItem",
          position: 4,
          name: "Team hover layer card section preview",
          item: "https://makecomponents.com/teams/team-hover-layer-card-section/preview",
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
        {
          "@type": "ListItem",
          position: 4,
          name: "Team hover layer card section preview",
          item: "https://makecomponents.com/teams/team-hover-layer-card-section/preview",
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
      <TeamHoverLayerCardSectionPre />
    </div>
  );
}
