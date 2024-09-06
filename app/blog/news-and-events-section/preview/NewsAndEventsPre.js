"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";
export default function NewsAndEventsPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className=" py-8 dark:bg-[#1e1e1e]">
         <div className=" flex justify-center items-center">
            
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/blog/news-and-events-section">
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
      <div className="py-12">
        <section className=" container px-4 mx-auto">
   
          <div className="   relative lg:w-[40%] lge:w-[40%] md:w-[60%] mdsm:w-[90%] sm:w-full mx-auto">
            <h4 className="varela-round-font font-semibold text-center text-[#26547C] text-3xl pb-4">
              News and Events
            </h4>
            <div className="flex mb-2 w-full">
              <div className="relative w-[20%]">
                <div className=" py-1 varela-round-font bg-[#FFD166] border-t-[1px]  border-[#FFD166]  px-2 text-center">
                  12 Aug
                </div>
                <div className=" py-1  varela-round-font bg-[#26547C]  border-b-[1px]  border-[#26547C] text-[#fcfcfc] px-2 text-center">
                  2024
                </div>
              </div>
              <div className=" border-b-[1px] border-t-[1px] border-r-[1px]  border-[#ccc]  relative px-4 flex w-[80%]">
                <div className=" block">
                  <div className=" py-1 pt-2 dark:text-[#fcfcfc] varela-round-font  px-2 text-left">
                    Lorem ipsum is placeholder.
                  </div>
                  <div className=" text-[#26547C] dark:text-[#FFD166] jost-font   px-2 text-left">
                    Alumni
                  </div>
                </div>

                <div></div>
              </div>
            </div>

            <div className="flex mb-2 w-full">
              <div className="relative w-[20%]">
                <div className=" py-1 bg-[#FFD166] border-t-[1px]  varela-round-font  border-[#FFD166]  px-2 text-center">
                  14 Aug
                </div>
                <div className=" py-1 bg-[#26547C]  border-b-[1px]  varela-round-font  border-[#26547C] text-[#fcfcfc] px-2 text-center">
                  2024
                </div>
              </div>
              <div className=" border-b-[1px] border-t-[1px] border-r-[1px]  border-[#ccc]  relative px-4 flex w-[80%]">
                <div className=" block">
                  <div className=" py-1 pt-2 dark:text-[#fcfcfc]  varela-round-font  px-2 text-left">
                    Lorem ipsum is placeholder.
                  </div>
                  <div className=" text-[#26547C] dark:text-[#FFD166] jost-font px-2 text-left">
                    Sports
                  </div>
                </div>

                <div></div>
              </div>
            </div>

            <div className="flex mb-2 w-full">
              <div className="relative w-[20%]">
                <div className=" py-1 bg-[#FFD166] border-t-[1px]  varela-round-font  border-[#FFD166]  px-2 text-center">
                  17 Aug
                </div>
                <div className=" py-1 bg-[#26547C]  border-b-[1px]   varela-round-font border-[#26547C] text-[#fcfcfc] px-2 text-center">
                  2024
                </div>
              </div>
              <div className=" border-b-[1px] border-t-[1px] border-r-[1px]  border-[#ccc]  relative px-4 flex w-[80%]">
                <div className=" block">
                  <div className=" py-1 pt-2 dark:text-[#fcfcfc]  varela-round-font  px-2 text-left">
                    Lorem ipsum is placeholder.
                  </div>
                  <div className=" text-[#26547C] dark:text-[#FFD166] px-2 text-left">
                    Meeting
                  </div>
                </div>

                <div></div>
              </div>
            </div>

            <div className="flex mb-2 w-full">
              <div className="relative w-[20%]">
                <div className=" py-1 bg-[#FFD166] border-t-[1px]  varela-round-font  border-[#FFD166]  px-2 text-center">
                  4 Sep
                </div>
                <div className=" py-1 bg-[#26547C]  border-b-[1px]  varela-round-font border-[#26547C] text-[#fcfcfc] px-2 text-center">
                  2024
                </div>
              </div>
              <div className=" border-b-[1px] border-t-[1px] border-r-[1px]  border-[#ccc]  relative px-4 flex w-[80%]">
                <div className=" block">
                  <div className=" py-1 pt-2 dark:text-[#fcfcfc]  varela-round-font px-2 text-left">
                    Lorem ipsum is placeholder.
                  </div>
                  <div className=" text-[#26547C] dark:text-[#FFD166] px-2 text-left">
                    Social
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
