import React from "react";
import CardInfoSectionEightGrid from "./CardInfoSectionEightGrid";

export const metadata = {
  title: "Card Info Section Eight Grid",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for Info section",
  keywords:
    "info section,free components,free code, make components, make component",
  openGraph: {
    title: "Card Info Section Eight Grid",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for info section",
    url: "https://makecomponents.com/info/card-info-section-eight-grid",
    siteName: "makecomponents.com",
    images: [
      {
        url: "https://makecomponents.com/Image/info/info001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/info/info001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Card Info Section Eight Grid",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function page() {
  return <div>
    <CardInfoSectionEightGrid/>
  </div>;
}
