import React from "react";
import ThreeGridCardTemplate from "./ThreeGridCardTemplate";

export const metadata = {
  title: "Three Grid card Template",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for card section",
    keywords:"card section,free components,free code, make components, make component",
  openGraph: {
    title: "Three Grid card Template",
    description: "This component create using CSS framework tailwindcss. It full responsive component. This template used for card section",
    url: "https://www.makecomponents.com/card/three-grid-card-template",
    siteName: "www.makecomponents.com",
    images: [
      {
        url: "https://www.makecomponents.com/Image/card/card001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://www.makecomponents.com/Image/card/card001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Three Grid card Template",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function page() {
  return (
    <div>
      <ThreeGridCardTemplate />
    </div>
  );
}
