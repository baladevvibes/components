import React from 'react'
import StandardLoginPage from './StandardLoginPage'

export const metadata = {
  title: "tailwind css login page template free",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for Login section preview",
  keywords:
    "Page Not Found section,free components,free code, make components, make component",
  openGraph: {
    title: "tailwind css login page template free",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Login section preview",
    url: "https://makecomponents.com/login-in/standard-login-page",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/login-in/standard-login-page`,
    },
    images: [
      {
        url: "hhttps://makecomponents.com/Image/login/login001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/login/login001.webp", // Must be an absolute URL
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
        <StandardLoginPage/>
    </div>
  )
}
