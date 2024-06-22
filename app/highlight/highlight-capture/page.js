import React from 'react'
import HighLightCapture from './HighLightCapture'
export const metadata = {
  title: "Highlight Capture",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for About section",
  keywords:
    "highlight section,free components,free code, make components, make component",
  openGraph: {
    title: "Highlight Capture",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for About section",
    url: "https://makecomponents.com/highlight/highlight-capture",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/highlight/highlight-capture`,
    },
    images: [
      {
        url: "hhttps://makecomponents.com/Image/highlight/highlight001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/highlight/highlight001.webp", // Must be an absolute URL
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
        <HighLightCapture/>
    </div>
  )
}
