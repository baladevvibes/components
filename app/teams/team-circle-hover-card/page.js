import React from 'react'
import Teams001 from '../../card/offer-wise-card-section/page'
import TeamHoverCard from './TeamHoverCard'

export const metadata = {
  title: "Team Circle Hover Card",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for Team section",
  keywords:
    "team section,free components,free code, make components, make component",
  openGraph: {
    title: "Team Circle Hover Card",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Team section",
    url: "https://www.makecomponents.com/teams/team-circle-hover-card",
    siteName: "www.makecomponents.com",
    images: [
      {
        url: "https://www.makecomponents.com/Image/teams/Teams001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://www.makecomponents.com/Image/teams/Teams001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Team Circle Hover Card",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <div><TeamHoverCard/></div>
  )
}
