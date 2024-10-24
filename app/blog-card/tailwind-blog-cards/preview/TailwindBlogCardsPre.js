"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function TailwindBlogCardsPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  dark:bg-[#1e1e1e]">
      
      <div className=" flex pt-10 justify-center items-center">
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/blog-card/tailwind-blog-cards/">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
        {/* <div className=" flex justify-end">
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
        </div> */}

        
      </div>

      <div>
      <div className="py-20 ">
        <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2  mdsm:gris-cols-2 sm:grid-cols-1 gap-10">
          <div className="group  cursor-pointer " >
            <div className="overflow-hidden  relative">
              <img
                src={`../../Image/overall/hotel/hotel001.webp`}
                alt="img"
                className="group-hover:scale-125   duration-700 h-[350px] w-full object-cover"
              />

              <div class="absolute h-full top-0 w-full">
                <div class="tranasition duration-300 bg-gradient-to-t from-[#222] h-full">
                  <div className=" absolute left-4 bottom-2">
                    <bold className="merriweather text-[12px] bg-[#fb3640] group-hover:bg-[#fcfcfc] group-hover:text-[#222]  text-[#fcfcfc] px-2 py-1">
                   world
                    </bold>

                    <bold className="merriweather text-[12px] mx-2 bg-[#fb3640] group-hover:bg-[#fcfcfc] group-hover:text-[#222] text-[#fcfcfc] px-2 py-1">
                    growth
                    </bold>
                  </div>
                  <div className="absolute right-4 bottom-2">
                    <span className="merriweather text-[#fcfcfc] px-2 py-1 bg-[#222] text-[12px] title">
                      by : Admin
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" border border-[#e6e6e6] pb-4">
              <span className="merriweather pt-10 group-hover:text-secondary text-gray-700 font-semibold leading-10 title text-[12px] px-4 ">
                24/10/2024
              </span>

              <h2 className="merriweather text-[18px] pt-0 group-hover:text-secondary px-4 leading-6  title font-semibold">
              What to Do All Year Round
              </h2>
            </div>
          </div>

          <div className="group  cursor-pointer " >
            <div className="overflow-hidden  relative">
              <img
                src={`../../Image/overall/hotel/hotel002.webp`}
                alt="img"
                className="group-hover:scale-125   duration-700 h-[350px] w-full object-cover"
              />

              <div class="absolute h-full top-0 w-full">
                <div class="tranasition duration-300 bg-gradient-to-t from-[#222] h-full">
                  <div className=" absolute left-4 bottom-2">
                    <bold className="merriweather text-[12px] bg-[#fb3640] group-hover:bg-[#fcfcfc] group-hover:text-[#222]  text-[#fcfcfc] px-2 py-1">
                    hidden
                    </bold>

                    <bold className="merriweather text-[12px] mx-2 bg-[#fb3640] group-hover:bg-[#fcfcfc] group-hover:text-[#222] text-[#fcfcfc] px-2 py-1">
                    gems
                    </bold>
                  </div>
                  <div className="absolute right-4 bottom-2">
                    <span className="merriweather text-[#fcfcfc] px-2 py-1 bg-[#222] text-[12px] title">
                      by : Admin
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" border border-[#e6e6e6] pb-4">
              <span className="merriweather  pt-10 group-hover:text-secondary text-gray-700 font-semibold leading-10 title text-[12px] px-4 ">
                24/10/2024
              </span>

              <h2 className="merriweather text-[18px] pt-0 group-hover:text-secondary px-4 leading-6  title font-semibold">
              Uncover Hidden Gems
              </h2>
            </div>
          </div>

          <div className="group  cursor-pointer " >
            <div className="overflow-hidden  relative">
              <img
                src={`../../Image/overall/hotel/hotel003.webp`}
                alt="img"
                className="group-hover:scale-125   duration-700 h-[350px] w-full object-cover"
              />

              <div class="absolute h-full top-0 w-full">
                <div class="tranasition duration-300 bg-gradient-to-t from-[#222] h-full">
                  <div className=" absolute left-4 bottom-2">
                    <bold className="merriweather text-[12px] bg-[#fb3640] group-hover:bg-[#fcfcfc] group-hover:text-[#222]  text-[#fcfcfc] px-2 py-1">
                    trip
                    </bold>

                    <bold className="merriweather text-[12px] mx-2 bg-[#fb3640] group-hover:bg-[#fcfcfc] group-hover:text-[#222] text-[#fcfcfc] px-2 py-1">
                    day
                    </bold>
                  </div>
                  <div className="absolute right-4 bottom-2">
                    <span className="merriweather text-[#fcfcfc] px-2 py-1 bg-[#222] text-[12px] title">
                      by : Admin
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" border border-[#e6e6e6] pb-4">
              <span className="merriweather pt-10 group-hover:text-secondary text-gray-700 font-semibold leading-10 title text-[12px] px-4 ">
                24/10/2024
              </span>

              <h2 className="merriweather text-[18px] pt-0 group-hover:text-secondary px-4 leading-6  title font-semibold">
              The Ultimate Day Trip Itinerary
              </h2>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>

   
    </div>
  );
}
