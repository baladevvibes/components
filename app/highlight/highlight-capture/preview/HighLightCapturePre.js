"use client"
import React from "react";
import "../../../style.css"
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";
export default function HighLightCapturePre() {
  return (
    <div className=" ">
        <div className="pt-10 flex justify-center items-center">
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/highlight/highlight-capture">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
     
      </div>
      <div className="bg-[#ccf7ff] ">
      <div className="my-10  container mx-auto">
        <section>
          <div className={` grid lg:grid-cols-2  lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1`}>
            <div className=" relative">
              <img
                src={`../../Image/highlight/001/sideImage.webp`}
                alt="house"
                className=" mx-auto lg:-top-20 lge:-top-20 md:top-0 mdsm:top-0 sm:top-0 lg:h-[500px] lg:w-[500px] lge:h-[500px] lge:w-[500px] md:h-[500px] md:w-[500px] mdsm:h-[400px] mdsm:-[400px] sm:h-[400px] sm:w-[400px] h-[500px] w-[500px] absolute md:relative lg:absolute lge:absolute  mdsm:relative sm:relative  object-cover"
              />
            </div>
            <div className=" lg:py-20 lge:py-20 md:py-10 mdsm:py-10 sm:py-10 px-4">
              <h1 className="dosis-font text-4xl text-[#00333d] font-semibold">Get the Best Home Design Tips! </h1>
              <p className="varela-font  text-[20px] pt-6 text-[#001e24]" >
                Transform your living space with expert advice and stay ahead
                with the latest trends. Join our community today!
              </p>
              <div className="mt-4 lg:flex lge:flex md:flex mdsm:block sm:block  pt-4">
              <input type="text" placeholder=" Get in touch" className="varela-font text-[#333] lg:w-[50%] lge:w-[50%] md:w-[50%]  mdsm:w-full sm:w-full outline-none px-4 py-3 border	 border-[#fff] "/>
                <button className="bg-[#00333d] lg:w-auto lge:w-auto md:w-auto mdsm:w-full varela-font py-3 px-16 lg:mx-10 lge:mx-10 md:mx-10 mdsm:mx-0  lg:mt-0 lge:mt-0 md:mt-0 mdsm:mt-4 sm:mt-4 sm:w-full sm:mx-0 hover:border hover:border-[#00333d] hover:bg-[#fff] hover:text-[#00333d] text-[#fff]">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
}
