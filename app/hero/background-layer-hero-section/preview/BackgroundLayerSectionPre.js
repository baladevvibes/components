"use client";
import React from "react";

import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function BackgroundLayerSectionPre() {

  return (
    <>
      <section>
      <div className=" pt-10 flex justify-center items-center">
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/hero/background-layer-hero-section">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
   
      </div>
        <div className=" relative">
          <div className=" z-10 absolute w-full top-0 py-4  ">
            <div className=" container mx-auto">
              <div className="sm:px-4 grid grid-cols-3">
                <div className=" text-[#fff] lg:pt-1 lge:pt-1 md:pt-2 mdsm:pt-2 sm:pt-2 text-4xl font-semibold dosis-font">
                  Logo
                </div>{" "}
                <div className=" col-span-2">
                  <div className=" flex justify-end space-x-20 py-4">
                    <div className="lg:block lge:block  md:hidden mdsm:hidden sm:hidden text-[#fff] font-semibold cursor-pointer">
                      Home
                    </div>
                    <div className="lg:block lge:block  md:hidden mdsm:hidden sm:hidden text-[#fff] font-semibold  cursor-pointer">
                      About{" "}
                    </div>
                    <div className="lg:block lge:block  md:hidden mdsm:hidden sm:hidden text-[#fff] font-semibold  cursor-pointer">
                      Gallery
                    </div>
                    <div className=" lg:block lge:block  md:hidden mdsm:hidden sm:hidden text-[#fff] font-semibold  cursor-pointer">
                      Contact
                    </div>
                    <div className=" lg:hidden lge:hidden  md:block mdsm:block sm:block">
                      <div className=" group">
                        <div className=" group-hover:bg-[#fff] bg-[#222] cursor-pointer p-2">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class=" group-hover:text-[#222] text-[#fff]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 19h16v2H4zm3-4h10v2H7zm-3-4h16v2H4zm0-8h16v2H4zm3 4h10v2H7z"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` relative  min-h-[100vh] max-h-[140vh] lg:bg-[url('/Image/hero/hero003/hero.webp')] lge:bg-[url('/Image/hero/hero003/hero.webp')] md:bg-[url('/Image/hero/hero003/sm-hero.webp')] mdsm:bg-[url('/Image/hero/hero003/sm-hero.webp')] sm:bg-[url('/Image/hero/hero003/sm-hero.webp')] bg-no-repeat bg-cover bg-center bg-fixed px-4`}
          >
            <div className="relative  min-h-[100vh] max-h-[140vh] container mx-auto">

            <div className="h-full absolute sm:bottom-0 ">
                 
              <div className=" h-full  grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1">
                <div className=" h-full flex justify-center items-center pt-20">
                  <div className=" block">
                    {" "}
                    <h2 className=" text-[#fff] rowdies lg:text-[64px] lgE:text-[64px] md:text-[40px] mdsm:text-[40px] sm:text-[38px]">
                      Plan Move Deliver
                    </h2>
                    <p className=" text-[#fff] lg:w-full lge:w-full md:w-[90%] mdsm:w-[90%] sm:w-full lg:text-2xl lge:text-2xl md:text-1xl mdsm:text-1xl sm:text-1xl">
                      Storing goods until they are needed. This includes
                      inventory management, which ensures that the right amount
                      of stock is available at the right time
                    </p>
                    <button className=" mt-4 hover:bg-[#222] hover:text-[#fff] bg-[#fff] px-20 py-3">
                      Get Started
                    </button>
                  </div>
                </div>

              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
