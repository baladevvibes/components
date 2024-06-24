import React from 'react'
import PageNotFoundPre from './PageNotFoundPre'

export const metadata = {
    title: "404 page not found tailwind css",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for 404 section Preview",
    keywords:
      "Page Not Found section,free components,free code, make components, make component",
    openGraph: {
      title: "404 page not found tailwind css",
      description:
        "This component create using CSS framework tailwindcss. It full responsive component. This template used for 404 section Preview",
      url: "https://makecomponents.com/404/page-not-found/preview",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/404/page-not-found/preview`,
      },
      images: [
        {
          url: "hhttps://makecomponents.com/Image/404/404001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/404/404001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Page Not Found",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };

export default function page() {
  return (
    <div>
    <PageNotFoundPre/>
    </div>
  )
}
