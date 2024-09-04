import React from 'react'
import TeamSectionDesignPre from './TeamSectionDesignPre'

export const metadata = {
  keywords:
  "Team section design preview,responsive Team section design preview, background layer Team section design preview",
  description:
    "Team section design preview and with clean design proper color code. It fully responsive.",
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
    title: "Team section design preview ",
    description:
      "Team section design preview and with clean design proper color code. It fully responsive.",
    url: "https://makecomponents.com/teams/team-section-design/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/teams/team-section-design/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/teams/Teams003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/teams/Teams003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Team section design preview ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/teams/team-section-design/preview`),
  title: {
    default: "Team section design preview",
  },
  alternates: {
    canonical: "https://makecomponents.com/teams/team-section-design/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Team section design preview",
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
        name: "Team components",
        item: "https://makecomponents.com/teams",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Team section design preview",
        item: "https://makecomponents.com/teams/team-section-design",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Team section design preview",
        item: "https://makecomponents.com/teams/team-section-design/preview",
      },
    ],
  };
  return (
    <div>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <TeamSectionDesignPre/>
    </div>
  )
}
