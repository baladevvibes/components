import React from 'react'
import CourseCardDesignTailwindCssPre from './CourseCardDesignTailwindCssPre'


export const metadata = {
  keywords: "Course card design tailwind css preview ,Course card design tailwind css preview css,Card Tailwind React",
  description:
    "Course card design tailwind css preview and with clean design and proper color code. It is fully responsive.",
  icons: {
    icon: "../../favicon.ico",
    shortcut: "../../favicon.ico",
    apple: "../../favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "../../favicon.ico",
    },
  },
  openGraph: {
    title: "Course card design tailwind css preview",
    description:
      "Course card design tailwind css preview and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/card/course-card-design-tailwind-css/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/course-card-design-tailwind-css/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/card/card010.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/card/card010.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Course card design tailwind css preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/card/course-card-design-tailwind-css/preview`),
  title: {
    default: "Course card design tailwind css preview ",
  },
  alternates: {
    canonical: "https://makecomponents.com/card/course-card-design-tailwind-css/preview",
  },
};



export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Course card design tailwind css preview",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://makecomponents.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "card components",
        item: "https://makecomponents.com/card",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Course card design tailwind css",
        item: "https://makecomponents.com/card/course-card-design-tailwind-css",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Course card design tailwind css preview",
        item: "https://makecomponents.com/card/course-card-design-tailwind-css/preview",
      },
    ],
  };
  return (
    <div>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
       <CourseCardDesignTailwindCssPre/>
    </div>
  )
}
