import React from 'react'
import HeroWithSearchBarPre from './HeroWithSearchBarPre'

export const metadata = {
  title: "Hero Banner With Searching Options Preview",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for Hero section Preview",
  keywords:
    "hero section,free components,free code, make components, make component",
  openGraph: {
    title: "Hero Banner With Searching Options Preview",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Hero section Preview",
    url: "https://www.makecomponents.com/hero/hero-with-searchbar/preview",
    siteName: "www.makecomponents.com",
    images: [
      {
        url: "https://www.makecomponents.com/Image/hero/hero001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://www.makecomponents.com/Image/hero/hero001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Hero Banner With Searching Options",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
      <HeroWithSearchBarPre/>
    </div>
  )
}
