"use client";
import React, { useState } from "react";
import "../../../style.css";
import AdsterraAds from "../../../components/AdsterraAds";
import { IoReturnDownBackSharp } from "react-icons/io5";


export default function CallToActionAttPre() {

  return (
    <>
   <div className="pt-10 flex justify-center items-center">
            
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" py-[200px] dark:bg-secondary">
   

          <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/call-to-action/call-to-action-attractive">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
     
      </div>
        <section
          className={`  relative py-10 bg-[url('/Image/call-to-action/001/001.webp')] h-[300px] bg-no-repeat bg-cover bg-center `}
        >
          <div className="absolute w-full bottom-0 mx-auto px-4">
            <div className="  container mx-auto ">
              <div className=" grid lg:grid-cols-3  lge:grid-cols-3 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 ">
                <div>
                  <div className="lg:block lge:block md:hidden mdsm:hidden sm:hidden ">
                    <img
                      src="../../Image/overall/person/person2.webp"
                      alt="person "
                      className="  h-[500px] mx-auto "
                    />
                  </div>
                </div>
                <div className=" col-span-2 relative ">
                  <div className=" absolute bottom-0 py-10">
                    <h3 className=" text-[#c7b130] sm:text-2xl   relative after:bg-[#fff] after:w-[10%] text-4xl font-semibold sedan-sc-font  pb-4">
                      Get a Free Quote
                    </h3>
                    <h4 className="merriweather text-[#fff] sm:text-sm  text-[20px] ">
                      Looking for reliable logistics solutions? Get a free,
                      no-obligation quote today and discover how we can
                      streamline your supply chain.{" "}
                      <span className=" text-[#c7b130] sm:text-sm merriweather underline underline-[#fff] underline-offset-2 ">
                        {" "}
                        Request your quote now!
                      </span>
                    </h4>
                    <button className=" bg-[#c7b130] sm:text-sm  rounded-lg merriweather  py-2 px-16 mt-4 hover:bg-[#fff] ">
                      Call Now{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
