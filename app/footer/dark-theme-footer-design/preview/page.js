import React from 'react'
import DarkThemeFooterPre from './DarkThemeFooterPre'

export const metadata = {
    keywords:
      "React tailwind footer css, Tailwind footer template free,React tailwind footer example",
    description:
      "This footer preview section was created by the dark theme-based. It will be easy for a website dark theme-based. ",
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
      title: "Dark theme footer design preview",
      description:
        "This footer preview section was created by the dark theme-based. It will be easy for a website dark theme-based.",
      url: "https://makecomponents.com/footer/dark-theme-footer-design/preview",
      siteName: "makecomponents.com",
      alternates: {
        canonical: `https://makecomponents.com/footer/dark-theme-footer-design/preview`,
      },
      images: [
        {
          url: "https://makecomponents.com/Image/footer/footer002.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://makecomponents.com/Image/footer/footer002.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "foote components",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    metadataBase: new URL(
      `https://makecomponents.com/footer/dark-theme-footer-design/preview`
    ),
    title: {
      default: `Dark theme footer design preview `,
    },
    alternates: {
      canonical: "https://makecomponents.com/footer/dark-theme-footer-design/preview",
    },
  };
export default function page() {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        name: "Footer components",
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
            name: "Footer components",
            item: "https://makecomponents.com/footer",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Dark theme footer design",
            item: "https://makecomponents.com/footer/dark-theme-footer-design",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Dark theme footer design preview",
            item: "https://makecomponents.com/footer/dark-theme-footer-design/preview",
          },
        ],
      };
  return (
    <div>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <DarkThemeFooterPre/>
    </div>
  )
}
