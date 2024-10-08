"use client";
import React, { useEffect } from "react";
import "../../../style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function TeamHoverCardPre() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={` container mx-auto py-20`}>
      <div className="py-10 flex justify-center items-center">
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/teams/team-circle-hover-card">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>

      </div>
      <div
        data-aos="fade-up"
        className={`  grid  lge:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 lg:gap-6 lge:gap-6 md:gap-16 mdsm:gap-16 sm:gap-16 lg:px-2 lge:px-2 md:px-2 mdsm:px-2 sm:px-2`}
      >
        <div className={`group  relative`}>
          <div className={` -top-12 left-[34%]  absolute`}>
            <img
              src={`../../Image/teams/Team001/person1.webp`}
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
              src={`../../Image/teams/Team001/person2.webp`}
              alt="person2"
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
              Michael Thompson
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
              src={`../../Image/teams/Team001/person3.webp`}
              alt="person3"
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
              Emily Parker
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
              src={`../../Image/teams/Team001/person4.webp`}
              alt="person4"
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
              James Anderson
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
      </div>
    </div>
  );
}
