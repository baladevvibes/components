import React from "react";
import SampleLoginPagePre from "./SampleLoginPagePre";
import { Metadata } from "next";

export const metadata = {
  keywords:
    "responsive login page in tailwind css, Login Tailwind CSS, Login tailwind css example",
  description:
    "Sample login page for user-friendly. It's very simple and makes the user's attraction, and it's professional.",
  icons: {
    icon: "../../favicon.ico",
    shortcut: "../../favicon.ico",
    apple: "../../favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "../../favicon.ico",
    },
  },
  openGraph: {
    title: "Sample login page preview",
    description:
      "Sample login page for user-friendly. It's very simple and makes the user's attraction, and it's professional.",
    url: "https://makecomponents.com/login/sample-login-page/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/login/sample-login-page/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/login/login002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/login/login002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "card components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/login/sample-login-page/preview`
  ),
  title: {
    default: `Sample login page preview`,
  },
  alternates: {
    canonical: "https://makecomponents.com/login/sample-login-page/preview",
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
      {
        "@type": "ListItem",
        position: 4,
        name: "Sample login page preview",
        item: "https://makecomponents.com/login/sample-login-page/preview",
      },
    ],
  };
  return (
    <div>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SampleLoginPagePre />
    </div>
  );
}
