import React from 'react'
import IconServicesSectionPre from './IconServicesSectionPre'
export const metadata = {
    keywords:
      "our services section design, section design, about section design",
    openGraph: {
      title: "services section design Preview ",
      description:
        "This component create using CSS framework tailwindcss. It full responsive component. This template used for Preview section ",
      url: "https://makecomponents.com/services/icon-services-section/preview",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/services/icon-services-section/preview`,
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
      `https://makecomponents.com/services/icon-services-section/preview`
    ),
    title: {
      template: "services template tailwind css Preview",
      default: `services template tailwind css Preview `,
    },
    alternates: {
      canonical: "https://makecomponents.com/services/icon-services-section/preview",
    },
  };
export default function page() {
  return (
    <div>
        <IconServicesSectionPre/>
    </div>
  )
}
