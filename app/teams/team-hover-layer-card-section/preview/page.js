import React from 'react'
import TeamHoverLayerCardSectionPre from './TeamHoverLayerCardSectionPre'


export const metadata = {
    title: "Team hover layer card section preview",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Team section preview "  ,
    keywords:
      "team section ,free components,free code, make components, make component",
    openGraph: {
      title: "Team hover layer card sectio previewn",
      description:
        "This component create using CSS framework tailwindcss. It full responsive component. This template used for Team section preview",
      url: "https://makecomponents.com/teams/team-hover-layer-card-section/preview",
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
  return (
    <div>
        <TeamHoverLayerCardSectionPre/>
    </div>
  )
}
