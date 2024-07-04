import React from "react";
import BackgroundLayerSectionPre from "./BackgroundLayerSectionPre";

export const metadata = {
  keywords:
    "free hero section,tailwind css hero section, background layer hero section",
    description:
    "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design.It is hero section preview",
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
    title: "Background layer hero section preview",
    description:
      "Tailwind css free components and use the config file for responsive tailwind css. it will easy to work and give more idea for design you can make change the design. It is hero section preview",
    url: "https://makecomponents.com/hero/background-layer-hero-section/preview",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com/hero/background-layer-hero-section/preview`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/hero/hero003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/hero/hero003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "hero components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    `https://makecomponents.com/hero/background-layer-hero-section/preview`
  ),
  title: {
    default: `Background layer hero section`,
  },
  alternates: {
    canonical: "https://makecomponents.com/hero/background-layer-hero-section/preview",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "Home",
      "item": "https://makecomponents.com/"  
    },{
      "@type": "ListItem", 
      "position": 2, 
      "name": "Hero components",
      "item": "https://makecomponents.com/hero"  
    },{
      "@type": "ListItem", 
      "position": 3, 
      "name": "Background layer hero section",
      "item": "https://makecomponents.com/hero/background-layer-hero-section/preview"  
    },{
      "@type": "ListItem", 
      "position": 4, 
      "name": "Background layer hero section preview",
      "item": "https://makecomponents.com/hero/background-layer-hero-section/preview"  
    }]
  }
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BackgroundLayerSectionPre />
    </div>
  );
}
