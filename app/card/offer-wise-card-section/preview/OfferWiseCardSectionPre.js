"use client"
import React from "react";
import "../../../style.css";
import AdsterraAds from "../../../components/AdsterraAds";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function OfferWiseCardSectionPre() {
  return (
    <div className={` container  mx-auto py-16`}>
            <div className=" flex justify-center items-center">
            
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
          <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/card/offer-wise-card-section/">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
  
      </div>
      <section>
        <div
          className={` grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-2 p-2`}
        >
          <div className={` col-span-2 `}>
            <div className={` group relative `}>
              <div
                className={` cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 `}
              >
                <div className={` group-hover:block hidden`}>
                  <div
                    className={` freeman-font transition delay-300  tracking-wide text-6xl text-[#fff]  `}
                  >
                    New York
                  </div>
                </div>
              </div>
              <img
                src={`../../Image/overall/wonders/new-york.webp`}
                className={` object-cover h-[400px] sm:w-full w-full`}
                alt="New York"
              />
            </div>
          </div>
          <div className={` col-span-3 h-full gap-2 `}>
            <div
              className={`lg:h-[40%] lge:h-[40%] md:h-[400px] mdsm:h-[400px] sm:h-[400px] relative group bg-[url('/Image/overall/wonders/india.webp')] overflow-hidden bg-primary  bg-hero bg-no-repeat bg-cover bg-center `}
            >
              <div className=" cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
                <div className={` group-hover:block hidden`}>
                  <div
                    className={` uppercase freeman-font transition delay-300  tracking-wide text-6xl text-[#fff]  `}
                  >
                    INDIA{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className={` h-[58%] mt-2 overflow-hidden `}>
              <div className={` grid grid-cols-2 gap-2  h-full `}>
                <div className={`group relative h-full  `}>
                  <img
                    src={`../../Image/overall/wonders/china.webp`}
                    alt="china"
                    className={` h-full object-cover`}
                  />
                  <div
                    className={` cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 `}
                  >
                    <div className={` group-hover:block hidden`}>
                      <div
                        className={` uppercase freeman-font transition delay-300  tracking-wide text-6xl text-[#fff]  `}
                      >
                        China{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={` group relative h-full`}>
                  <img
                    src={`../../Image/overall/wonders/paris.webp`}
                    alt="paris"
                    className={` h-full object-cover`}
                  />
                  <div
                    className={` cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 `}
                  >
                    <div className={` group-hover:block hidden`}>
                      <div
                        className={` uppercase freeman-font transition delay-300  tracking-wide text-6xl text-[#fff]  `}
                      >
                        Paris{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
