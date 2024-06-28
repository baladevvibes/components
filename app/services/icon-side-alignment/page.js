import React from "react";
import IconSideAligment from "./IconSideAligment";
import { Metadata } from "next";

export const metadata = {
  keywords:
    "services section,services section website design,our services section design, service section design,section design",
  openGraph: {
    title: "Services section template",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Login section preview",
    url: "https://makecomponents.com/services/icon-side-alignment",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/services/icon-side-alignment`,
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
    `https://makecomponents.com/services/icon-side-alignment`
  ),
  title: {
    template: "services template tailwind css",
    default: `services template tailwind css`,
  },
  alternates: {
    canonical: "https://makecomponents.com/services/icon-side-alignment",
  },
};

export default function page() {
  return (
    <div>
      <IconSideAligment />
    </div>
  );
}
