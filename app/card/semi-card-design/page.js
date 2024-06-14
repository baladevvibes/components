import React from 'react'
import SemiCardDesign from './SemiCardDesign'

export const metadata = {
    title: "Semi Circle Design",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for card section",
      keywords:"card section,free components,free code, make components, make component",
    openGraph: {
      title: "Semi Circle Design",
      description: "This component create using CSS framework tailwindcss. It full responsive component. This template used for card section",
      url: "https://makecomponents.com/card/semi-card-design",
      siteName: "makecomponents.com",
      images: [
        {
          url: "https://makecomponents.com/Image/card/card004.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/card/card004.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Semi Circle Design",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };

export default function page() {
  return (
    <div>
        <SemiCardDesign/>
    </div>
  )
}
