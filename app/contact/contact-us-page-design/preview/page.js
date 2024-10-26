import React from 'react'
import ContactUsPageDesignPre from './ContactUsPageDesignPre'

export const metadata = {
    keywords: "Contact form Tailwind React, Contact form CSS, Tailwind contact page templatet",
    description:
      "Contact us page design preview, Tailwind CSS, and with clean design and proper color code. It is fully responsive.",
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
      title: "Contact us page design tailwind css",
      description:
        "Contact us page design preview, Tailwind CSS, and with clean design and proper color code. It is fully responsive.",
      url: "https://makecomponents.com/contact/contact-us-page-design/preview",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/contact/contact-us-page-design/preview`,
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
          alt: "Contact us page design tailwind css preview",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(`https://makecomponents.com/contact/contact-us-page-design/preview`),
    title: {
      default: "Contact us page design tailwind css preview",
    },
    alternates: {
      canonical: "https://makecomponents.com/contact/contact-us-page-design/preview",
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
          {
            "@type": "ListItem",
            position: 4,
            name: "Contact us page design tailwind css preview",
            item: "https://makecomponents.com/contact/contact-us-page-design/preview",
          },
        ],
      };
  return (
    <div>
              <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <ContactUsPageDesignPre/>
    </div>
  )
}
