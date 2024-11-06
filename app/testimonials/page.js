import React from 'react'
import TestimonialsCard from './TestimonialsCard';


export const metadata = {
  keywords:
    "Testimonials Components tailwind css, Testimonials Components tailwind,  Testimonials Components",
  description:
    "Testimonials Components tailwind css and neat and clear design in tailwind css",
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
    title: "Testimonials Components tailwind css",
    description:
      "Testimonials Components tailwind css and neat and clear design in tailwind css",
    url: "https://makecomponents.com/testimonials",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/testimonials`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/testimonials/testimonials002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        secure_url:"https://makecomponents.com/Image/testimonials/testimonials002.webp"
      },
      {
        url: "https://makecomponents.com/Image/testimonials/testimonials002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Testimonials Components",
        secure_url:"https://makecomponents.com/Image/testimonials/testimonials002.webp"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/testimonials`),
  title: {
    default: `Testimonials Components tailwind css`,
  },
  alternates: {
    canonical: "https://makecomponents.com/testimonials",
  },
};


export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Testimonials Components",
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
        name: "Testimonials Components",
        item: "https://makecomponents.com/testimonials",
      },
    ],
  };
  return (
    <div>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <TestimonialsCard/>
    </div>
  )
}
