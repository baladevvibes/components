import React from 'react'
import ContactUsPageDesign from './ContactUsPageDesign'
export const metadata = {
    keywords: "Contact us page design tailwind css , Contact us page design tailwind css template, Contact us page Tailwind CSS free",
    description:
      "Contact us page design, Tailwind CSS, and with clean design and proper color code. It is fully responsive.",
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
      title: "Contact us page design tailwind css",
      description:
        "Contact us page design, Tailwind CSS, and with clean design and proper color code. It is fully responsive.",
      url: "https://makecomponents.com/contact/contact-us-page-design",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/contact/contact-us-page-design`,
      },
      images: [
        {
          url: "https://makecomponents.com/Image/contact/contact003.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/contact/contact003.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Contact us page design tailwind css",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(`https://makecomponents.com/contact/contact-us-page-design`),
    title: {
      default: "Contact us page design tailwind css ",
    },
    alternates: {
      canonical: "https://makecomponents.com/contact/contact-us-page-design",
    },
  };

export default function page() {
    const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    name: "Contact us page design tailwind css",
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
        name: "contact tailwind components",
        item: "https://makecomponents.com/contact",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact us page design tailwind css",
        item: "https://makecomponents.com/contact/contact-us-page-design",
      },
    ],
  };
  return (
    <div>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <ContactUsPageDesign/>
    </div>
  )
}
