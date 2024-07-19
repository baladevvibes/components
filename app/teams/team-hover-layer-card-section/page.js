import React from "react";
import TeamHoverLayerCardSection from "./TeamHoverLayerCardSection";

export const metadata = {
  title: "Team hover layer card section",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for Team section",
  keywords:
    "team section,free components,free code, make components, make component",
  openGraph: {
    title: "Team hover layer card section",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Team section",
    url: "https://makecomponents.com/teams/team-hover-layer-card-section",
    siteName: "makecomponents.com",
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
        alt: "Team hover layer card section",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "name":"Subscribe Newsletter",
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
        name: "Subscribe Newsletter components",
        item: "https://makecomponents.com/card",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Subscribe Newsletter components",
        item: "https://makecomponents.com/teams",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Highlight Capture",
        item: "https://makecomponents.com/teams/team-hover-layer-card-section",
      },
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
