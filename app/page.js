import HomeRender from "./HomeRender";

// import Adsense, { AdUnit } from "@eisberg-labs/next-google-adsense";
export const metadata = {
  keywords: "tailwind free components, tailwind components, free components",
  // icons: {
  //   icon: '/favicon.ico',
  // },
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
export default function Home() {
  return (
    <main className=" relative">

      
      <HomeRender />
    </main>
  );
}
