import React from 'react'
import TwoGridContactUs from './TwoGridContactUs'


export const metadata = {
  title: "Two grid Contact section ",
  description: "Free Components tailwind Components",
  keywords:
    "contact section,free components,free code, make components, make component",
  openGraph: {
    title: "Two grid Contact section ",
    description: "Free Components tailwind Components",
    url: "https://makecomponents.com/contact/two-gird-contact-us",
    siteName: "makecomponents.com",
    images: [
      {
        url: "https://makecomponents.com/Image/contact/contact001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/contact/contact001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Two grid Contact section",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function page() {
  return (
    <div>

        <TwoGridContactUs/>
    </div>
  )
}
