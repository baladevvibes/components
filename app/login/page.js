import React from 'react'
import LoginPage from './LoginPage'

export const metadata = {
  keywords:
    "login page template, Login page template tailwind css, Login page template tailwind css free",
  description:
    "Login sections using Tailwind CSS There are many more card component templates on this page. take reference and code. It is useful for the developer and designer, too.",
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
    title: "Login section tailwind css",
    description:
      "Login sections using Tailwind CSS There are many more card component templates on this page. take reference and code. It is useful for the developer and designer, too.",
    url: "https://makecomponents.com/login",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/login`,
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
  metadataBase: new URL(`https://makecomponents.com/login`),
  title: {
    default: `Login section tailwind css`,
  },
  alternates: {
    canonical: "https://makecomponents.com/login",
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
    ],
  };
  return (
    <div>
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LoginPage/>
    </div>
  )
}
