import React from 'react'
import IconSideAlignmentPre from './IconSideAlignmentPre'


export const metadata = {
  keywords:
    "services section,services section website design,our services section design, service section design,section design",
  openGraph: {
    title: "Services section template preview",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Login section preview",
    url: "https://makecomponents.com/services/icon-side-alignment/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/services/icon-side-alignment/preview`,
    },
    images: [
      {
        url: "hhttps://makecomponents.com/Image/services/services002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/services/services002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Page Not Found",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/services/icon-side-alignment/preview`
  ),
  title: {
    template: "services template tailwind css preview",
    default: `services template tailwind css preview`,
  },
  alternates: {
    canonical: "https://makecomponents.com/services/icon-side-alignment/preview",
  },
};

export default function page() {
  return (
    <div>
        <IconSideAlignmentPre/>
    </div>
  )
}
