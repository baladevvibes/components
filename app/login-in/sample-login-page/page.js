import React from 'react'
import { Metadata } from "next";
import SampleLoginPage from './SampleLoginPage';

export const metadata = {
  title: "tailwind login page free",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for Login section preview",
  keywords:
    "tailwind login page example,tailwind login page template	,login form tailwind,login page tailwind css, tailwind css login page",
  openGraph: {
    title: "tailwind login page free",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Login section preview",
    siteName: "makecomponents.com",
    images: [
      {
        url: "hhttps://makecomponents.com/Image/login/login002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/login/login002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Login page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/login-in/sample-login-page`
  ),
  title: {
    template: "tailwind login page free",
    default: `tailwind login page free`,
  },
  alternates: {
    canonical: "https://makecomponents.com/login-in/sample-login-page",
  },
};
export default function page() {
  return (
    <div>
      <SampleLoginPage/>
    </div>
  )
}
