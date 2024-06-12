import React from 'react'
import LandingPageFooterPre from './LandingPageFooterPre'
export const metadata = {
    title: "Landing page footer section preview",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for footer section preview",
      keywords:"footer section,free components,free code, make components, make component",
    openGraph: {
      title: "Landing page footer section preview" ,
      description: "This component create using CSS framework tailwindcss. It full responsive component. This template used for footer section preview",
      url: "https://makecomponents.com/footer/landing-page-footer/preview",
      siteName: "makecomponents.com",
      images: [
        {
          url: "https://makecomponents.com/Image/footer/footer001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/footer/footer001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Landing page footer section",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };

export default function page() {
  return (
    <div>
        <LandingPageFooterPre/>
    </div>
  )
}
