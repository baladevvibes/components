import HomeRender from "./HomeRender";
export const metadata = {
  keywords: "tailwind free components, tailwind components, free components",
    description:
    "Free Componenets for tailwind. This compoenets is easy and make a website. It will helpfull for all the developer, It most use front end developer for design the webpage.",
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
    title: "Tailwind css free components",
    description:
      "Free Componenets for tailwind. This compoenets is easy and make a website. It will helpfull for all the developer, It most use front end developer for design the webpage.",
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
    default: `Tailwind css free components`,
  },
  alternates: {
    canonical: "https://makecomponents.com",
  },
};

// import Adsense, { AdUnit } from "@eisberg-labs/next-google-adsense";

export default function Home() {
  return (
    <main className=" relative">
      <HomeRender />
    </main>
  );
}
