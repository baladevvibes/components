"use client"
import "../../../style.css"
import React from "react";
import AdsterraAds from "../../../components/AdsterraAds";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function TwoGridContactUsPre() {
  return (
    <div className=" pb-10">
   <div className="pt-10 flex justify-center items-center">
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
          <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/contact/two-gird-contact-us">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>

      </div>
   
    <div className={` bg-[#8d465b] `}>
      <div className=" container  mx-auto py-20 lg:overflow-hidden lge:overflow-hidden md:overflow-auto mdsm:overflow-hidden sm:overflow-hidden ">
        <div
          className={` grid lg:grid-cols-2  lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1`}
        >
          <div className={` lg:px-10 lge:px-10 md:px-0 mdsm:px-0 sm:px-0`}>
            <div className={` rounded-xl p-6`}>
              <form>
                <div>
                  <h2 className=" transition mt-16 pt-3  mb-6 relative after:content-[''] after:absolute after:h-full after:top-0 after:left-0  after:inline-block after:w-[16%] after:bg-[#5c1931] after:-z-10 z-10 playwrite px-1.5 tracking-wide pb-4 text-3xl text-[#fff] font-semibold">
                    Get in Touch!
                  </h2>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={` Name`}
                    className={`w-full  merriweather border-4 border-[#8d465b]  focus:border-4 focus:border-[rgb(99,47,73)] text-[#222] placeholder:text-[#ccc] px-4 py-2 outline-none rounded-xl  `}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={` Email`}
                    className={`w-full merriweather border-4 border-[#8d465b]  focus:border-4 focus:border-[rgb(99,47,73)] mt-4 text-[#222] placeholder:text-[#ccc] px-4 py-2 outline-none rounded-xl `}
                    required
                  />
                </div>

                <div>
                  <textarea
                    type="text"
                    placeholder={` Message`}
                    className={`w-full merriweather border-4 border-[#8d465b]  focus:border-4 focus:border-[rgb(99,47,73)] flex h-[100px] mt-4 text-[#222] placeholder:text-[#ccc] px-4 py-2 outline-none rounded-xl `}
                    required
                  />
                </div>

                <div className={` mt-4 flex`}>
                  <button
                    className={`bg-[#fff] merriweather border-4 hover:bg-[#ebc0ad] font-semibold tracking-wide rounded-xl  py-4 px-10 text-[#8d465b]`}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className={` px-10`}>
            <div className={`pt-24  flex space-x-2`}>
              <img
                src={`https://images.pexels.com/photos/2065201/pexels-photo-2065201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                alt="make up"
                className="h-[350px] lg:-rotate-12 lge:-rotate-12 md:-rotate-12 mdsm:-rotate-12 sm:-rotate-12 w-[200px] object-cover  rounded-t-[50px] rounded-b-[50px]  border-4 border-[#fff]"
              />

              <img
                src={`https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                alt="make up"
                className={`h-[350px] lg:rotate-6 lge:rotate-6 md:rotate-6 mdsm:rotate-6 sm:rotate-6 w-full object-cover  rounded-t-[50px] rounded-b-[50px]  border-4 border-[#fff]`}
              />
            </div>

            <div className={` flex justify-center`}>
              <div className={`pt-4 flex  space-x-4`}>
                <div className=" p-4 px-4 hover:bg-[#ebc0ad]  rounded-xl bg-[#fff]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.2"
                    baseProfile="tiny"
                    viewBox="0 0 24 24"
                    class=" cursor-pointer text-[#8d465b] text-[24px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 10h3v3h-3v7h-3v-7h-3v-3h3v-1.255c0-1.189.374-2.691 1.118-3.512.744-.823 1.673-1.233 2.786-1.233h2.096v3h-2.1c-.498 0-.9.402-.9.899v2.101z"></path>
                  </svg>
                </div>

                <div className=" p-4 px-5 hover:bg-[#ebc0ad] rounded-xl bg-[#fff]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" cursor-pointer text-[#8d465b] text-[18px] mt-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
                  </svg>
                </div>

                <div className=" p-4 px-5 hover:bg-[#ebc0ad] rounded-xl bg-[#fff]">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class=" cursor-pointer text-[#8d465b] text-[18px] mt-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
