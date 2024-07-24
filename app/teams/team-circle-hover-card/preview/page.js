import React from "react";
import TeamHoverCardPre from "./TeamHoverCardPre";

export const metadata = {
  keywords:
    "tailwind profile card, tailwind team card, tailwind card component",
  description:
    "This component create using CSS framework tailwindcss. It fully responsive component.",
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
    title: "Team circle hover card preview",
    description:
    "This component create using CSS framework tailwindcss. It fully responsive component.",
    url: "https://makecomponents.com/teams/team-circle-hover-card/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/teams/team-circle-hover-card/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/teams/Teams001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/teams/Teams001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "card components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/teams/team-circle-hover-card/preview`
  ),
  title: {
    default: "Team circle hover card preview",
  },
  alternates: {
    canonical:
      "https://makecomponents.com/teams/team-circle-hover-card/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Tailwind  card design",
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
          name: "Team circle hover card",
          item: "https://makecomponents.com/teams/team-circle-hover-card",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Team circle hover card preview",
          item: "https://makecomponents.com/teams/team-circle-hover-card/preview",
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
          name: "Team circle hover card",
          item: "https://makecomponents.com/teams/team-circle-hover-card",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Team circle hover card preview",
          item: "https://makecomponents.com/teams/team-circle-hover-card/preview",
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
      <TeamHoverCardPre />
    </div>
  );
}
