"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function HighLightSectionCssPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  dark:bg-[#1e1e1e]">
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/highlight/highlight-section-css">
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

    
      <div className=" py-32">
        <section className=" container px-4 mx-auto">
          <div className=" lg:flex lge:flex md:block mdsm:block sm:block h-full">
            <div className=" lg:w-[70%]  lge:w-[70%] md:w-full mdsm:w-full sm:w-full">
              <img
                src="../../Image/overall/transport/truck001.webp"
                alt="truck001"
              />
            </div>
            <div className=" lg:w-[30%] lge:w-[30%] md:w-full mdsm:w-full sm:w-full relative flex justify-center items-center ">
              <div className=" h-full  lg:absolute lge:absolute md:relative mdsm:relative sm:relative   lg:w-[140%] lge:w-[140%] md:w-full mdsm:w-full sm:w-full  lg:right-10 lge:right-10 md:right-0 mdsm:right-0 sm:right-0 ">
                <div className="bg-[#f2f2f2]   dark:bg-[#454545] p-10  block">
                  <h4 className=" text-4xl title text-[#EF2917]  Prompt font-semibold pb-4 ">
                    {" "}
                    Lorem ipsum
                  </h4>

                  <p className=" dark:text-[#fcfcfc] outfit  text-[#444444] leading-7">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.Lorem ipsum is placeholder text
                    commonly used in the graphic, print.
                  </p>
                  <p className="dark:text-[#fcfcfc]  outfit text-[#444444]  pt-4 leading-7">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.Lorem ipsum is placeholder text
                    commonly used in the graphic, print. and publishing
                    industries for previewing layouts and visual mockups.Lorem
                    ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className=" flex h-full" >
            <div className=" w-[70%] h-full">
              <img
                src="../../Image/overall/transport/truck001.webp"
                alt="truck001"
              />
            </div>
            <div className=" w-[35%]  relative h-full">
              <div className=" bg-primary h-full   w-[130%] right-20 p-10">
                <h4 className=" text-4xl  "> Lorem ipsum</h4>

                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.Lorem ipsum is
                  placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual
                  mockups.Lorem ipsum is placeholder text commonly used in the
                  graphic, print, and publishing industries for previewing
                  layouts and visual mockups.Lorem ipsum is placeholder text
                  commonly used in the graphic, print, and publishing industries
                  for previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
}
