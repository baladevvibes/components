import React from 'react'
import GreenForestInfoTemplate from './GreenForestInfoTemplate';

export const metadata = {
    title: "Green Forest Info Template",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Info section",
      keywords:"info section,free components,free code, make components, make component",
    openGraph: {
      title: "Green Forest Info Template",
      description: "This component create using CSS framework tailwindcss. It full responsive component. This template used for Info section",
      url: "https://www.makecomponents.com/info/green-forest-info-template",
      siteName: "www.makecomponents.com",
      images: [
        {
          url: "https://www.makecomponents.com/Image/info/info001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://www.makecomponents.com/Image/card/card001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Three Grid card Template",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
export default function page() {
  return (
    <div>
        <GreenForestInfoTemplate/>
    </div>
  )
}
