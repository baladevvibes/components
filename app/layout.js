"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

// import Adsense, { AdUnit } from "@eisberg-labs/next-google-adsense";

const inter = Inter({ subsets: ["latin"] });
const HotjarSnippet = () => {

  return (
    <div>
      <Script id="hotjar-snippet">
        {`
           (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5125258,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </div>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="0_8nUfS62JANS7DjAQvnWbUXHFVLMaymMQdf_UlSQ9Q"
        />
        <meta name="google-adsense-account" content="ca-pub-2500160320143617" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2500160320143617"
          crossorigin="anonymous"
        ></script>
        <script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script
          async="async"
          data-cfasync="false"
          src="//pl24116206.highratecpm.com/c3d10aadb78d1e6613b3fc5333e31d3e/invoke.js"
        ></script>
        <script>
       
        </script>



        {/* <script
          async="async"
          data-cfasync="false"
          src="//pl24116206.highratecpm.com/c3d10aadb78d1e6613b3fc5333e31d3e/invoke.js"
        ></script> */}

        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2500160320143617"
          crossorigin="anonymous"
        ></script> */}
        <GoogleAnalytics gaId="G-5ES4FTLQ2V" />
      </head>

      <body className={inter.className}>{children}

      <HotjarSnippet />
      </body>
    </html>
  );
}
