import React from 'react'
import HalfBackgroundLayerCardPre from './HalfBackgroundLayerCardPre'

export const metadata = {
    title: "Half Background layer services sections preview",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Services section",
    keywords:
      "services section,free components,free code, make components, make component",
    openGraph: {
      title: "Half Background layer services sections preview",
      description:
        "This component create using CSS framework tailwindcss. It full responsive component. This template used for Services section",
      url: "https://makecomponents.com/card/half-background-layer-card/preview",
      siteName: "makecomponents.com",
      images: [
        {
          url: "https://makecomponents.com/Image/services/services001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/services/services001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Half Background layer services sections preview",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };

export default function page() {
  return (
    <div>
        <HalfBackgroundLayerCardPre/>
    </div>
  )
}
