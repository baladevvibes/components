import React from 'react'
import HighLightCapturePre from './HighLightCapturePre'


export const metadata = {
  title: "Highlight Capture preview",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for About section",
  keywords:
    "highlight section,free components,free code, make components, make component",
  openGraph: {
    title: "Highlight Capture preview",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for About section",
    url: "https://makecomponents.com/highlight/highlight-capture/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/highlight/highlight-capture/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/highlight/highlight003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/highlight/highlight003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Highlight Capture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
        <HighLightCapturePre/>
    </div>
  )
}
