import React from 'react'
import TwoGridHeroSectionPre from './TwoGridHeroSectionPre'

export const metadata = {
  title: "Two Grid Hero Section preview",
  description:
    "This component create on 10/06/2024 using CSS framework tailwindcss. It full responsive component. This template used for Hero section preview",
  keywords:
    "hero section,free components,free code, make components, make component",
  openGraph: {
    title: "Two Grid Hero Section preview",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Hero section preview",
    url: "https://makecomponents.com/hero/two-grid-hero-section/preview",
    siteName: "makecomponents.com",
    images: [
      {
        url: "https://makecomponents.com/Image/hero/hero002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/hero/hero002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Two Grid Hero Section",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
        <TwoGridHeroSectionPre/>
    </div>
  )
}
