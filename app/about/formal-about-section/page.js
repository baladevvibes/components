import React from 'react'
import FormalAboutSection from './FormalAboutSection'
export const metadata = {
  title: "Formal About Section",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for About section",
  keywords:
    "about section,free components,free code, make components, make component",
  openGraph: {
    title: "Formal About Section",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for About section",
    url: "https://makecomponents.com/about/formal-about-section",
    siteName: "makecomponents.com",
    images: [
      {
        url: "https://makecomponents.com/Image/about/about002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/about/about002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Formal About Section",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function page() {
  return (
    <div>

        <FormalAboutSection/>
    </div>
  )
}
