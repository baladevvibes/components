
import React from 'react'
import StandardLoginPage from './StandardLoginPage'
import { Metadata } from 'next'
 
export const metadata = {
  keywords:
    "standard login page design, Login page template tailwind, Login page template tailwind css free",
  description:
    "Standard login page it useful for the login session or sign in session. It fully resposive and clear design.",
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
    title: "Standard login page",
    description:
      "Standard login page it useful for the login session or sign in session. It fully resposive and clear design.",
    url: "https://makecomponents.com/login/standard-login-page",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/login/standard-login-page`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/login/login001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/login/login001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "login components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/login/standard-login-page`),
  title: {
    default: `Standard login page`,
  },
  alternates: {
    canonical: "https://makecomponents.com/login/standard-login-page",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "name":"Login components",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://makecomponents.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Login Components",
        item: "https://makecomponents.com/login",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Standard login page",
        item: "https://makecomponents.com/login/standard-login-page",
      },
    ],
  };
  return (
    <div>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <StandardLoginPage/>
    </div>
  )
}
