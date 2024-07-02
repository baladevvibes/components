// "use client";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  keywords: "tailwind free components, tailwind components, free components",
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  openGraph: {
    title: "Tailwind css free components",
    description:
      "Free Componenets for tailwind. This compoenets is easy and make a website.",
    url: "https://makecomponents.com",
    siteName: "makecomponents.com",
    alternates: {
      canonical: `https://makecomponents.com`,
    },
    images: [
      {
        url: "https://makecomponents.com/Image/logo.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://makecomponents.com/Image/logo.png", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "make components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`https://makecomponents.com`),
  title: {
    default: `Tailwind css free components`,
  },
  alternates: {
    canonical: "https://makecomponents.com",
  },
};
// import Adsense, { AdUnit } from "@eisberg-labs/next-google-adsense";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Tailwind css free components",
//   description:
//     "Free Componenets for tailwind. This compoenets is easy and make a website",

//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export default function RootLayout({ children }) {
  function addProductJsonLd() {
    return {
      __html: `{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Make Components",
  "url": "https://makecomponents.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://makecomponents.com/{search_term_string}",
    "query-input": "required name=search_term_string"
  }
}`,
    };
  }
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="google-adsense-account" content="ca-pub-2500160320143617" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2500160320143617"
          crossorigin="anonymous"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
