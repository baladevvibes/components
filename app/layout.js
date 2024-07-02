"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import SchemaData from "./HomePage/SchemaData";
import { useEffect, useState } from "react";

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
  const [schemaData, setSchemData] = useState();
  useEffect(() => {
    SchemaData?.forEach((el) => {
      if (el.url === window.location.href) {
        setSchemData(schemaData?.schema);
      }
      console.log(el.url=== window.location.href, schemaData?.schema ,"data");
    });
    addSchema()
    function addSchema() {
      return {
        __html: schemaData,
      };
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="google-adsense-account" content="ca-pub-2500160320143617" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2500160320143617"
          crossorigin="anonymous"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addSchema()}
          key="product-jsonld"
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
