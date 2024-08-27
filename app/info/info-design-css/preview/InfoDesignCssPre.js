"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function InfoDesignCssPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  dark:bg-[#1e1e1e]">
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/info/info-design-css">
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

    
      <div className="py-32">
        <div className=" container px-4 mx-auto">
          <section>
            <div className=" grid lg:grid-cols-8 h-full lge:grid-cols-8 md:grid-cols-5 mdsm:grid-cols-1 sm:grid-cols-1 lg:gap-6 lge:gap-6 md:gap-0 mdsm:gap-0 sm:gap-0">
              <div className=" col-span-3 h-full">
                <div className="lg:pr-10 lge:pr-10 md:pr-0 mdsm:pr-0 sm:pr-0">
                  <h4 className="  text-[#B80C09] rowdies  font-semibold text-3xl"><span className="rowdies text-5xl pr-4">01</span> Lorem ipsum</h4>
                  <p className=" dark:text-[#fcfcfc] raleway-font text-[#444] pt-4">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
                <div className="pr-10 pt-10">
                  <h4 className="  text-[#B80C09] rowdies  font-semibold text-3xl"><span className="rowdies text-5xl pr-4">02</span> Lorem ipsum</h4>
                  <p className=" dark:text-[#fcfcfc] raleway-font text-[#444] pt-4">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>

                <div className="pr-10 pt-10">
                  <h4 className="  text-[#B80C09] rowdies  font-semibold text-3xl"><span className="rowdies text-5xl pr-4">03</span> Lorem ipsum</h4>
                  <p className="dark:text-[#fcfcfc] raleway-font text-[#444] pt-4">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
      
            
              </div>
              <div className=" col-span-2 h-full relative">
                <div className="   bg-[#3772FF] border-[#B80C09] h-full rounded-t-full">
                  <img
                    src={`../../Image/overall/person/person007.png`}
                    className="w-full object-cover  h-full"
                    alt="person"
                  />
                  <img
                    src={`../../Image/overall/elements/right.png`}
                    className="top-4 h-[70px] -left-10  absolute "
                    alt="element"
                  />
                  
                </div>
              </div>
              <div className=" col-span-3 h-full">
                <div className="lg:pl-10 lge:pl-10 md:pl-0 mdsm:pl-0 sm:pl-0 lg:pt-0 lge:pt-0 md:pt-10 mdsm:pt-10 sm:pt-10">
                  <h4 className="  text-[#B80C09] rowdies  font-semibold text-3xl"><span className="rowdies text-5xl pr-4">04</span> Lorem ipsum</h4>
                  <p className="dark:text-[#fcfcfc] raleway-font text-[#444] pt-4">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
                <div className="lg:pl-10 lge:pl-10 md:pl-0 mdsm:pl-0 sm:pl-0 pt-10">
                  <h4 className="  text-[#B80C09] rowdies  font-semibold text-3xl"><span className="rowdies text-5xl pr-4">05</span> Lorem ipsum</h4>
                  <p className="dark:text-[#fcfcfc] raleway-font text-[#444] pt-4">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>

                <div className="lg:pl-10 lge:pl-10 md:pl-0 mdsm:pl-0 sm:pl-0 pt-10">
                  <h4 className="  text-[#B80C09] rowdies  font-semibold text-3xl"><span className="rowdies text-5xl pr-4">06</span> Lorem ipsum</h4>
                  <p className="dark:text-[#fcfcfc] raleway-font text-[#444] pt-4">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
      
            
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
