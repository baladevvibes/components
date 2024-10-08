"use client"
import React from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function SubscribeNewsletterAttractionpre() {
  return (
    <div>

      
<div className="pt-10 flex justify-center items-center">
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/subscribe-newsletter/subscribe-newsletter-attraction">
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
        <div className=" my-10 container mx-auto px-4">
          <div className=" bg-[#0f67f5] overflow-hidden py-10  px-10 rounded-lg relative">
            <div className=" absolute  bg-[#70a1ff] -left-6 -top-4 z-10 h-[100px] w-[100px]  rounded-full"></div>
            <div
              className={` grid  lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1`}
            >
              <div className=" col-span-2">
                <h2 className=" text-[#fff] z-20  relative concert text-4xl">
                  Subscribe Newsletter
                </h2>
                <h2 className="pt-2 catamaran z-20  relative text-[18px] text-[#fff] ">
                  Get the latest industry news, trends, and exclusive content
                  delivered directly to your inbox.
                </h2>
              </div>
              <div>
                <div className=" relative lg:mt-0 lge:mt-0 md:mt-4 mdsm:mt-4 sm:mt-4">
                  <form>
                    <label className="text-[#fff] catamaran">e-mail</label>
                    <input
                      type="text"
                      className="w-full  py-2 text-[#434343] px-3  catamaran outline-none border border-[#fff]"
                      required
                    />
                    <div className=" sm:relative sm:w-full sm:mt-4 absolute z-20 group bottom-0 right-0 ">
                      <button className=" w-full justify-center group-hover:bg-[#fff] group-hover:text-[#0f67f5] group-hover:border-[#0f67f5] flex space-x-1 text-[#fff] bg-[#0f67f5] border border-[#fff] catamaran px-10 py-2">
                        Subscribe{" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 256 256"
                          class=" mx-1 mt-1"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M227.57,27.7a7,7,0,0,0-7.13-1.22L17.78,105.79a12.23,12.23,0,0,0,2.1,23.39L74,139.81V200a14,14,0,0,0,24.08,9.71l26.64-27.63,41.58,36.45a13.9,13.9,0,0,0,9.2,3.49,14.33,14.33,0,0,0,4.36-.69,13.86,13.86,0,0,0,9.34-10.17L229.82,34.57A7,7,0,0,0,227.57,27.7ZM22.05,117.37h0a.46.46,0,0,1,0-.32.51.51,0,0,1,.15-.08L181.91,54.45l-103.3,74L22.2,117.41Zm67.39,84A2,2,0,0,1,86,200V148.11l29.69,26Zm88.07,7.08a1.93,1.93,0,0,1-1.34,1.44,2,2,0,0,1-2-.4L89.64,135.34,215,45.5Z"></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
