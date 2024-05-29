"use client"
import React, { useEffect } from "react";
import "../../../font.css"
import AOS from "aos";
import "aos/dist/aos.css";

export default function TeamHoverCardPre() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={` container mx-auto py-48`}>
      <div data-aos="fade-up" className={`  grid  lge:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 lg:gap-6 lge:gap-6 md:gap-16 mdsm:gap-16 sm:gap-16 lg:px-2 lge:px-2 md:px-2 mdsm:px-2 sm:px-2`}>
        <div className={`group  relative`}>
          <div className={` -top-12 left-[34%]  absolute`}>
            <img
              src={`https://images.pexels.com/photos/7444396/pexels-photo-7444396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              className={`rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]`}
            />
          </div>

          <div
            className={` group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4`}
          >
            <h2
             data-aos="fade-up"
              className={`raleway-font group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold`}
            >
              David Nguyen
            </h2>
            <p
             data-aos="fade-up"
              className={` group-hover:text-white  transition delay-200 jost-font pb-10 text-[#001f2e] pt-4 leading-6 text-center  text-base	`}
            >
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>

        <div className={`group  relative`}>
          <div className={` -top-12 left-[34%]  absolute`}>
            <img
              src={`https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              className={`rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]`}
            />
          </div>

          <div
            className={` group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4`}
          >
            <h2 data-aos="fade-up"
              className={`raleway-font group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold`}
            >
              Michael Thompson
            </h2>
            <p data-aos="fade-up"
              className={` group-hover:text-white  transition delay-200 jost-font pb-10 text-[#001f2e] pt-4 leading-6 text-center  text-base	`}
            >
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>

        <div className={`group  relative`}>
          <div className={` -top-12 left-[34%]  absolute`}>
            <img
              src={`https://images.pexels.com/photos/8297161/pexels-photo-8297161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              className={`rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]`}
            />
          </div>

          <div
            className={` group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4`}
          >
            <h2 data-aos="fade-up"
              className={`raleway-font group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold`}
            >
              Emily Parker
            </h2>
            <p data-aos="fade-up"
              className={` group-hover:text-white  transition delay-200 jost-font pb-10 text-[#001f2e] pt-4 leading-6 text-center  text-base	`}
            >
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>

        <div className={`group  relative`}>
          <div className={` -top-12 left-[34%]  absolute`}>
            <img
              src={`https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              className={`rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]`}
            />
          </div>

          <div
            className={` group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4`}
          >
            <h2 data-aos="fade-up"
              className={`raleway-font group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold`}
            >
              James Anderson
            </h2>
            <p data-aos="fade-up"
              className={` group-hover:text-white  transition delay-200 jost-font pb-10 text-[#001f2e] pt-4 leading-6 text-center  text-base	`}
            >
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
