import React from 'react'
import SideHalfGridAbout from './SideHalfGridAbout'


export const metadata = {
    title: "Side Half Grid About Section",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for About section",
    keywords:
      "about section,free components,free code, make components, make component",
    openGraph: {
      title: "Side Half Grid About Section",
      description:
        "This component create using CSS framework tailwindcss. It full responsive component. This template used for About section",
      url: "https://makecomponents.com/about/side-half-grid-about-section",
      siteName: "makecomponents.com",
      images: [
        {
          url: "https://makecomponents.com/Image/about/about003.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/about/about003.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Side Half Grid About Section",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
export default function page() {
  return (
    <div>
        <SideHalfGridAbout/>
    </div>
  )
}
