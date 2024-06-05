import React from 'react'
import PartnersHoverEffectScale from './PartnersHoverEffectScale'
import Head from 'next/head';

export const metadata = {
  title: "Partners Hover effect scale section",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for Partners section Preview",
  keywords:
    "Partners Hover effect scale section,free components,free code, make components, make component",
  openGraph: {
    title: "Partners Hover effect scale section",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Partners section Preview",
    url: "https://makecomponents.com/partners/partners-hover-effects-scale",
    siteName: "makecomponents.com",
    canonical:"https://makecomponents.com/partners/partners-hover-effects-scale",
    images: [
      {
        url: "https://makecomponents.com/Image/partners/partners001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/partners/partners001.webp", // Must be an absolute URL
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
    
        <PartnersHoverEffectScale/>
    </div>
  )
}
