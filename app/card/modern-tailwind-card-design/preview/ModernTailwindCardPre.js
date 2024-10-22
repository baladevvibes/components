
"use client"
import "../../../style.css"
import React from "react";
import AdsterraAds from "../../../components/AdsterraAds";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function ModernTailwindCardPre() {
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
          <a href="/card/modern-tailwind-card-design">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
   
      </div>

      <div className="py-4">
        <div className="container mx-auto">
          <div className="grid px-4 lg:grid-cols-3  lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10">
            <div className="lg:pt-0 lge:pt-0 mdsm:pt-0 md:pt-10 sm:pt-16">
              <img
                src="../../Image/overall/hotel/hotel001.webp"
                alt="hotel"
                className=" rounded-3xl"
              />
              <div className="relative w-full flex justify-center">
                <div className="bg-[#fff] p-8 rounded-3xl absolute w-[80%]  -top-8">
                  <h3 className="text-center font-semibold Fira text-[#454545] mx-auto sm:text-1xl text-2xl">Aurelia Heights</h3>
                </div>
              </div>
            </div>
            <div className=" lg:pt-0 lge:pt-0 mdsm:pt-0 md:pt-10 sm:pt-16">
              <img
                src="../../Image/overall/hotel/hotel002.webp"
                alt="hotel"
                className=" rounded-3xl"
              />
              <div className="relative w-full flex justify-center">
                <div className="bg-[#fff] p-8 rounded-3xl absolute w-[80%]  -top-8">
                  <h3 className="text-center font-semibold Fira text-[#454545] mx-auto sm:text-1xl text-2xl">Sovereign Bay Retreat</h3>
                </div>
              </div>
            </div>
            <div className="lg:pt-0 lge:pt-0 mdsm:pt-0 md:pt-10 sm:pt-16">
              <img
                src="../../Image/overall/hotel/hotel003.webp"
                alt="hotel"
                className=" rounded-3xl"
              />
              <div className="relative w-full flex justify-center">
                <div className="bg-[#fff] p-8 rounded-3xl absolute w-[80%]  -top-8">
                  <h3 className="text-center font-semibold Fira text-[#454545] mx-auto sm:text-1xl text-2xl">Elysian Crown Resort</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
