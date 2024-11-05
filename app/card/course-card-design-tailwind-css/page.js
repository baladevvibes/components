import React from 'react'
import CourseCardDesignTailwindCss from './CourseCardDesignTailwindCss'
export const metadata = {
  keywords: "Course card design tailwind css ,Course card design tailwind css css,Card Tailwind React",
  description:
    "Course card design tailwind css and with clean design and proper color code. It is fully responsive.",
  icons: {
    icon: "../favicon.ico",
    shortcut: "../favicon.ico",
    apple: "../favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "../favicon.ico",
    },
  },
  openGraph: {
    title: "Course card design tailwind css",
    description:
      "Course card design tailwind css and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/card/course-card-design-tailwind-css",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/card/course-card-design-tailwind-css`,
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
        alt: "Course card design tailwind css",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/card/course-card-design-tailwind-css`),
  title: {
    default: "Course card design tailwind css ",
  },
  alternates: {
    canonical: "https://makecomponents.com/card/course-card-design-tailwind-css",
  },
};

export default function page() {

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Course card design tailwind css",
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
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <CourseCardDesignTailwindCss/>
    </div>
  )
}
