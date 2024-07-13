"use client";
import React, { useState } from "react";
import "../../../style.css";
// import { faMoon } from "@fortawesome/free-regular-svg-icons";
// import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

import { IconContext } from "react-icons";
export default function BackgroundCubeSectionPre() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div>
      <section className=" py-32 dark:bg-secondary relative">
        <div className=" container mx-auto px-4">
          <div className=" flex justify-end w-full">
            <div>
              <button
                onClick={() => darkModeHandler()}
                className="  w-full sticky top-5 right-8"
              >
                {dark && <IoSunny className=" dark:text-[#fff]" />}
                {!dark && <IoMoon className=" dark:text-[#fff]" />}
              </button>
            </div>
          </div>
          <div className=" grid lg:grid-cols-12 lge:grid-cols-12 md:grid-cols-12 mdsm:grid-cols-1 sm:grid-cols-1 gap-10">
            <div className=" lg:block lge:block  md:hidden mdsm:hidden sm:hidden"></div>
            <div className=" lg:col-span-4 lge:col-span-4 md:col-span-full mdsm:col-span-full sm:col-span-full relative px-6">
              <div className="  h-[400px]  mx-auto">
                <img
                  src={`../../Image/overall/person/person5.png`}
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
