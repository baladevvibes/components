import React from "react";
import "../../../font.css";

export const metadata = {
    title: "Gallery frame About us Preview",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for About section Preview",
    keywords:
      "about section preview,free components,free code, make components, make component",
    openGraph: {
      title: "Gallery frame About us Preview",
      description:
        "This component create using CSS framework tailwindcss. It full responsive component. This template used for About section Preview",
      url: "https://www.makecomponents.com/about/gallery-frame-aboutus/preview",
      siteName: "www.makecomponents.com",
      images: [
        {
          url: "https://www.makecomponents.com/Image/about/about001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://www.makecomponents.com/Image/about/about001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Gallery frame About us",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };

export default function GalleryFrameAboutUsPre() {
  return (
    <section>
      <div className={` container mx-auto py-36 `}>
        <div className={` grid grid-cols-12 gap-10 sm:gap-0 sm:px-2`}>
          <div
            className={` lg:col-span-5 lge:col-span-5 md:col-span-12 mdsm:col-span-12 sm:col-span-12 p-10 sm:p-6 relative`}
          >
            <div
              className={` absolute h-36 w-36 sm:top-0 sm:left-0 -z-10 top-4 left-4 bg-[#009e4f]`}
            ></div>
            <div
              className={` absolute h-36 w-36 sm:right-0 sm:bottom-0 -z-10 bottom-4 right-4 bg-[#009e4f]`}
            ></div>

            <img
              src={`https://images.pexels.com/photos/840719/pexels-photo-840719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              className="lg:h-[300px] lge:h-[300px]  md:h-[450px] mdsm:h-[400px] sm:h-[350px] sm:w-full w-full object-cover"
            />
          </div>
          <div
            className={` lg:col-span-7  lge:col-span-7 md:col-span-12 mdsm:col-span-12  sm:col-span-12 px-0 md:px-2 mdsm:px-2`}
          >
            <h1
              className={`lg:pt-16 lge:pt-12 md:pt-4 mdsm:pt-4 sm:pt-4 md:text-center mdsm:text-center lg:text-left lge:text-left sm:text-center text-4xl text-[#009e4f] freeman-font`}
            >
              About us{" "}
            </h1>
            <p className={`pt-4 dm-sans-font text-base text-[#5a5a5a]`}>
              Welcome to <b>Traveller GHJ,</b> where we craft unforgettable
              journeys across the United States. With a passion for exploration
              and a commitment to exceptional service, we strive to create
              unique travel experiences that inspire, delight, and create
              lasting memories for our clients. From iconic landmarks to hidden
              gems, our expert team curates every aspect of your journey,
              ensuring seamless logistics and personalized touches. Join us on a
              voyage of discovery, as we explore the rich tapestry of cultures,
              landscapes, and adventures that await across this remarkable
              nation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
