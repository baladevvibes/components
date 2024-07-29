import React from 'react'
import { Metadata } from "next";
import SampleLoginPage from './SampleLoginPage';

export const metadata = {
  keywords:
    "login page template, Login page template tailwind css, Login page template tailwind css free",
  description:
    "Sample login page for user-friendly. It's very simple and makes the user's attraction, and it's professional.",
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
    title: "Sample login page",
    description:
      "Sample login page for user-friendly. It's very simple and makes the user's attraction, and it's professional.",
    url: "https://makecomponents.com/login/sample-login-page",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/login/sample-login-page`,
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
        alt: "card components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/login/sample-login-page`),
  title: {
    default: `Sample login page`,
  },
  alternates: {
    canonical: "https://makecomponents.com/login/sample-login-page",
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
        name: "Sample login page",
        item: "https://makecomponents.com/login/sample-login-page",
      },
    ],
  };
  return (
    <div>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SampleLoginPage/>
    </div>
  )
}
