import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Make Components",
  description: "This compoenets is easy and make a website",
  icons: {
    icon: "https://www.makecomponents.com/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-adsense-account" content="ca-pub-2500160320143617"></meta>

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2500160320143617"
        crossorigin="anonymous"
      ></script>
      </head>
   
      <body className={inter.className}>{children}</body>
    </html>
  );
}
