import React from 'react'
import DashboardPercentageInfo from './DashboardPercentageInfo'

export const metadata = {
    title: "Dashboard Percentage Into Component",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Info section",
    keywords:
      "dashboard-info,free components,free code, make components, make component",
    openGraph: {
      title: "Dashboard Percentage Into Component",
      description:
        "This component create using CSS framework tailwindcss. It full responsive component. This template used for Info section",
      url: "https://makecomponents.com/dashboard-info/dashbaord-percentage-info",
      siteName: "makecomponents.com",
      images: [
        {
          url: "https://makecomponents.com/Image/dashboard-info/dashboard-info001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/dashboard-info/dashboard-info001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Dashbaord Percentage Info Component",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };

export default function page() {
  return (
    <div>
        <DashboardPercentageInfo/>
    </div>
  )
}
