import React from 'react'
import GalleryFrameAboutUs from './GalleryFrameAboutUs'

export const metadata = {
  title: "Gallery frame About us",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for About section",
  keywords:
    "about section,free components,free code, make components, make component",
  openGraph: {
    title: "Gallery frame About us",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for About section",
    url: "https://www.makecomponents.com/about/gallery-frame-aboutus",
    siteName: "www.makecomponents.com",
    images: [
      {
        url: "https://www.makecomponents.com/Image/about/about001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://www.makecomponents.com/Image/about/about001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Gallery frame About us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <div><GalleryFrameAboutUs/></div>
  )
}
