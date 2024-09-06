"use client";
import React, { useState } from "react";
import "../../../style.css";
// import { faMoon } from "@fortawesome/free-regular-svg-icons";
// import React from "react";
import { IoMoon, IoReturnDownBackSharp } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

import { IconContext } from "react-icons";
import AdsterraAds from "../../../components/AdsterraAds";
import { CiDark, CiLight } from "react-icons/ci";
export default function BackgroundCubeSectionPre() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div>
      <section className=" py-12 dark:bg-secondary relative">
        <div className=" container mx-auto px-4">
           <div className=" ">
        <div className=" flex justify-center items-center">
            
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>

        </div>
        <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/about/background-cube-about-section">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
        <div className=" flex justify-end">
          <div onClick={() => darkModeHandler()}>
            <div className={` group`}>
              <div
                className={` ${
                  dark ? `bg-secondary` : ``
                } p-1.5 border  border-[#ccc] z-40 mx-4  group-hover:bg-secondary  cursor-pointer  rounded-md`}
              >
                {dark ? (
                  <>
                    <CiLight
                      className={` ${dark ? ` text-[#fff] text-[16px]` : ``}`}
                    />
                  </>
                ) : (
                  <>
                    <CiDark
                      className={`  group-hover:text-[#fff] text-[16px]`}
                    />
                  </>
                )}
              </div>

              <p className={` text-sm text-center dark:text-[#fff]`}>
                {dark ? "Da" : "Li"}
              </p>
            </div>
          </div>
        </div>
      </div>
          <div className=" grid lg:grid-cols-12 lge:grid-cols-12 md:grid-cols-12 mdsm:grid-cols-1 sm:grid-cols-1 gap-10">
            <div className=" lg:block lge:block  md:hidden mdsm:hidden sm:hidden"></div>
            <div className=" lg:col-span-4 lge:col-span-4 md:col-span-full mdsm:col-span-full sm:col-span-full relative px-6">
              <div className="  h-[400px]  mx-auto">
                <img
                  src={`../../Image/overall/person/person1.webp`}
                  className=" h-[400px] object-cover  mx-auto relative z-20"
                />
                <div className=" absolute top-0 w-full right-2 z-10 border-[10px] border-[#ff0056] h-full "></div>
              </div>
            </div>
            <div className=" h-full  lg:col-span-6 lge:col-span-6 md:col-span-full mdsm:col-span-full sm:col-span-full ">
              <div className=" h-full justify-center items-center flex">
                <div className=" block">
                  <h2 className="signika text-[48px] font-semibold  text-[#ff0056]">
                    About Us
                  </h2>
                  <p className="titillium dark:text-[#f2f2f2] font-semibold text-[24px] text-[#454545]">
                    Welcome to Freelance Services!
                  </p>
                  <p className="pt-2 dark:text-[#f2f2f2] titillium text-[18px] leading-[24px] text-[#454545]">
                    At Freelance Services, we are dedicated to providing
                    top-notch writing, graphic design, web development, seo,
                    Services side support and etc to help you achieve your
                    business goals. With a passion for creativity and a
                    commitment to excellence, we strive to deliver high-quality
                    work that exceeds your expectations.
                  </p>
                </div>
              </div>
            </div>
            <div className=" lg:block lge:block  md:hidden mdsm:hidden sm:hidden"></div>
          </div>

     
        </div>
      </section>
    </div>
  );
}
