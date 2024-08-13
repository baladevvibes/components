import React from 'react'
import TestimonialsDesign from './TestimonialsDesign'

export const metadata = {
  keywords:
    "testimonials tailwind component, Testimonials tailwind component react, Testimonials tailwind example",
  description:
    "Testimonials Design Example design was available and free code. It looks professional, using fundamental design for the images.",
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
    title: "Testimonials Design Example ",
    description:
      "Testimonials Design Example design was available and free code. It looks professional, using fundamental design for the images.",
    url: "https://makecomponents.com/testimonials/testimonials-design-examples",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/testimonials/testimonials-design-examples`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/testimonials/testimonials001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/testimonials/testimonials001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Testimonials Design Example",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/testimonials/testimonials-design-examples`
  ),
  title: {
    default: "Testimonials Design Example",
  },
  alternates: {
    canonical:
      "https://makecomponents.com/testimonials/testimonials-design-examples",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Testimonials Design Example",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Testimonials Design Example",
        item: "https://makecomponents.com/testimonials/testimonials-design-examples",
      },
    ],
  };
  return (
    <div>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TestimonialsDesign/>
    </div>
  )
}
