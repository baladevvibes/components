import React from 'react'
import PageNotFound from './PageNotFound'

export const metadata = {
  keywords:
    "page not found section,free components,free code, make components, make component",
  icons: {
    icon: "../favicon.ico",
    shortcut: "../favicon.ico",
    apple: "../favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "../favicon.ico",
    },
  },
  openGraph: {
    title: "404 page not found tailwind css",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for 404 section ",
    url: "https://makecomponents.com/404/page-not-found/",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/404/page-not-found/`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/404/404001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/404/404001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "make components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/404/page-not-found/`
  ),
  title: {
    default: `404 page not found tailwind css`,
  },
  alternates: {
    canonical: "https://makecomponents.com/404/page-not-found/",
  },
};

export default function page() {

 
  return (
    <div>
    
        <PageNotFound/>
    </div>
  )
}
