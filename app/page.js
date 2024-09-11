import HomeRender from "./HomeRender";
export const metadata = {
  keywords: "tailwind free components, tailwind components, free components",
    description:
    "50+ Tailwind css free components. This components is easy and make a website. It will helpfull for all the developer, It most use front end developer for design the webpage. Code was free you just copy and paste.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.ico",
    },
  },
  openGraph: {
    title: "50+ Tailwind css free components",
    description:
      "50+ Tailwind css free components. This components is easy and make a website. It will helpfull for all the developer, It most use front end developer for design the webpage. Code was free you just copy and paste.",
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
  metadataBase: new URL(
    `https://makecomponents.com`
  ),
  title: {
    default: `50+ Tailwind css free components`,
  },
  alternates: {
    canonical: "https://makecomponents.com",
  },
};

// import Adsense, { AdUnit } from "@eisberg-labs/next-google-adsense";

export default function Home() {
  return (
    <main className=" relative overflow-hidden">
      <HomeRender />
    </main>
  );
}
