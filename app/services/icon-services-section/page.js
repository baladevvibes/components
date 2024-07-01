import React from 'react'
import IconServicesSection from './IconServicesSection'

export const metadata = {
    keywords:
      "our services section design, section design, about section design",
    openGraph: {
      title: "services section design",
      description:
        "This component create using CSS framework tailwindcss. It full responsive component. This template used for Services section ",
      url: "https://makecomponents.com/services/icon-services-section",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/services/icon-services-section`,
      },
      images: [
        {
          url: "hhttps://makecomponents.com/Image/services/services003.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/services/services003.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Page Not Found",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(
      `https://makecomponents.com/services/icon-services-section`
    ),
    title: {
      template: "services template tailwind css",
      default: `services template tailwind css `,
    },
    alternates: {
      canonical: "https://makecomponents.com/services/icon-services-section",
    },
  };

export default function page() {
  return (
    <div>
        <IconServicesSection/>
    </div>
  )
}
