import React from 'react'
import TestimonialsTailwind from './TestimonialsTailwind'

export const metadata = {
  keywords: "Testimonial tailwind component html ,Tailwind testimonial component,testimonial examples",
  description:
    "Testimonial tailwind component html and with clean design and proper color code. It is fully responsive.",
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
    title: "Testimonial tailwind component html",
    description:
      "Testimonial tailwind component html and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/testimonials/testimonials-tailwind",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/testimonials/testimonials-tailwind`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/testimonials/testimonials002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/testimonials/testimonials002.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Testimonial tailwind component html",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/testimonials/testimonials-tailwind`),
  title: {
    default: "Testimonial tailwind component html ",
  },
  alternates: {
    canonical: "https://makecomponents.com/testimonials/testimonials-tailwind",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Testimonial tailwind component html",
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
        name: "Testimonial tailwind components",
        item: "https://makecomponents.com/testimonials",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Testimonial tailwind component html",
        item: "https://makecomponents.com/testimonials/testimonials-tailwind",
      },
    ],
  };
  return (
    <div>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <TestimonialsTailwind/>
    </div>
  )
}
