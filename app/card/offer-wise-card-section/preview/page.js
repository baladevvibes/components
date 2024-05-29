import React from 'react'
import OfferWiseCardSectionPre from './OfferWiseCardSectionPre'

export const metadata = {
  title: "Offer wise card section Preview",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for Card section Preview",
  keywords:
    "card section,free components,free code, make components, make component",
  openGraph: {
    title: "Offer wise card section Preview",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Card section Preview",
    url: "https://www.makecomponents.com/card/offer-wise-card-section/preview",
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
        alt: "Hero Banner With Searching Options",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <div><OfferWiseCardSectionPre/></div>
  )
}
