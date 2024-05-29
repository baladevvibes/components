import React from 'react'
import TeamHoverCardPre from './TeamHoverCardPre'
export const metadata = {
  title: "Team Circle Hover Card Preview",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for Team section Preview",
  keywords:
    "team section preview,free components,free code, make components, make component",
  openGraph: {
    title: "Team Circle Hover Card Preview",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Team section Preview",
    url: "https://www.makecomponents.com/teams/team-circle-hover-card/preview",
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
    <div>
      <TeamHoverCardPre/>
    </div>
  )
}
