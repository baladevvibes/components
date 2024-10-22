import React from 'react'
import TestimonialsTailwindDesign from './TestimonialsTailwindDesign'

export const metadata = {
  keywords: "Testimonials tailwind design ,Testimonials tailwind design css,Testimonials Tailwind React",
  description:
    "Testimonials tailwind design and with clean design and proper color code. It is fully responsive.",
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
    title: "Testimonials tailwind design",
    description:
      "Testimonials tailwind design and with clean design and proper color code. It is fully responsive.",
    url: "https://makecomponents.com/testimonials/testimonials-tailwind-design",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/testimonials/testimonials-tailwind-design`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/testimonials/testimonials003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/testimonials/testimonials003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Testimonials tailwind design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com/testimonials/testimonials-tailwind-design`),
  title: {
    default: "Testimonials tailwind design ",
  },
  alternates: {
    canonical: "https://makecomponents.com/testimonials/testimonials-tailwind-design",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Testimonials tailwind design",
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
        name: "Testimonials tailwind design",
        item: "https://makecomponents.com/testimonials/testimonials-tailwind-design",
      },
    ],
  };
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <TestimonialsTailwindDesign/>
    </div>
  )
}
