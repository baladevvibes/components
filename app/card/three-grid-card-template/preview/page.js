import React from "react";
import "../../../font.css";


export const metadata = {
  title: "Three Grid card Template",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for card section",
    keywords:"card section,free components,free code, make components, make component",
  openGraph: {
    title: "Three Grid card Template",
    description: "This component create using CSS framework tailwindcss. It full responsive component. This template used for card section",
    url: "https://www.makecomponents.com/card/three-grid-card-template/preview",
    siteName: "www.makecomponents.com",
    images: [
      {
        url: "https://www.makecomponents.com/Image/card/card003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://www.makecomponents.com/Image/card/card003.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Three Grid card Template",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <section>
      <div className={``}>
        <div className={` grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1`}>
          <div className={` h-[400px] bg-[#f71418] flex justify-center items-center`}>
            <h1
              className={` text-5xl acme-font font-semibold  text-center text-white`}
            >
              Our
              <br /> Campus
            </h1>
          </div>
          <div className={` h-[400px] relative`}>
            <div
              className={`top-0 bg-[#080808cc]  flex justify-center items-center w-full h-full absolute p-5 `}
            >
              <p className={` acme-font  font-semibold text-white text-5xl`}>
                Library
              </p>
            </div>
            <img
              src={` https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="library"
              className={` object-cover h-[400px]`}
            />
          </div>
          <div className={` h-[400px] relative`}>
          <div
              className={`top-0 bg-[#fbc02da8]  flex justify-center items-center w-full h-full absolute p-5 `}
            >
              <p className={` acme-font  font-semibold text-white text-5xl`}>
                Play ground
              </p>
            </div>
            <img
              src={` https://images.pexels.com/photos/186239/pexels-photo-186239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="playground"
              className={` object-cover h-[400px]`}
            />
          </div>
          <div className={` h-[400px] relative`}>
          <div
              className={`top-0 bg-[#080808cc]  flex justify-center items-center w-full h-full absolute p-5 `}
            >
              <p className={` acme-font  font-semibold text-white text-5xl`}>
                Higher Education
              </p>
            </div>
            <img
              src={`https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="college"
              className={` object-cover h-[400px]`}
            />
          </div>
          <div className={` h-[400px] relative`}>
          <div
              className={`top-0 bg-[#bf3503ba]  flex justify-center items-center w-full h-full absolute p-5 `}
            >
              <p className={` acme-font  font-semibold text-white text-5xl`}>
                Canteen
              </p>
            </div>
            <img
              src={` https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="canteen"
              className={` object-cover h-[400px]`}
            />
          </div>
          <div className={` h-[400px] relative`}>
          <div
              className={`top-0 bg-[#080808cc]  flex justify-center items-center w-full h-full absolute p-5 `}
            >
              <p className={` acme-font  font-semibold text-white text-5xl`}>
                Classroom
              </p>
            </div>
            <img
              src={`https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="classroom"
              className={` object-cover h-[400px]`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
