
"use client"
import "../../../style.css"
import React from "react";
import AdsterraAds from "../../../components/AdsterraAds";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function TailwindAboutUsPageFreePre() {
  return (
    <div>
           <div className=" pt-10 flex justify-center items-center">
            
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
          <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/about/tailwind-about-us-page-free">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
   
      </div>

      <div className="bg-[#16325B] mb-20 py-20">
        <div className=" container mx-auto">
          <div className="grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1  gap-10 px-6">
            <div>
              <div className=" grid grid-cols-2 gap-4">
                <div className="w-full">
                  <img
                    src={`https://makecomponents.com/Image/about/about005/table.webp`}
                    alt="img"
                    className="h-[450px] w-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <img
                      src={`https://makecomponents.com/Image/login/001/login001.webp`}
                      alt="img"
                      className="h-[220px] w-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <img
                      src={`https://makecomponents.com/Image/overall/transport/truck001.webp`}
                      alt="img"
                      className="h-[220px] w-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h6 className="lg:pt-10 Kanit lge:pt-10 md:pt-0 mdsm:pt-0 sm:pt-0 text-1xl text-[#c99342] font-semibold  uppercase">
                About us
              </h6>
              <h4 className="text-3xl Kanit text-[#fcfcfc] font-semibold uppercase">
                Lorem ipsum is placeholder
              </h4>
              <p className="text-[16px] pt-4 leading-7 text-[#fcfcfc]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p className="text-[16px] pt-4 leading-7 text-[#fcfcfc]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>

              <button onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href =
                                      "http://makecomponents.com/about/tailwind-about-us-page-free/preview";
                                  }} className="mt-6 py-2 px-8 bg-[#c99342] hover:bg-[#fcfcfc] text-[#fff] hover:text-[#c99342] rounded-full">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
