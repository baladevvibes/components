"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function CallToActionSectionPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  dark:bg-[#1e1e1e]">
            <div className="pt-10 flex justify-center items-center">
            
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/call-to-action/call-to-action-section">
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

    
      <div className=" py-32">
        <section className=" container px-4 mx-auto">
          <div className=" relative">
            <div className=" absolute top-0 h-full w-full bg-[#101010ab] flex justify-center items-center">
              <div className=" block p-4">
                <h4 className=" text-[#F9F9F9] tracking-wider Actor font-semibold  text-center text-4xl pb-4">
                  Slot your seats{" "}
                </h4>
                <p className="lg:w-[70%] tracking-wide leading-7 lge:w-[70%] md:w-[80%] mdsm:w-full sm:w-full jost-font text-center text-[20px] mx-auto text-[#F9F9F9]">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
                <div className="flex justify-center items-center mt-4 ">
                  <button className=" bg-[#fcfcfc] hover:bg-[#5AA9E6] hover:text-[#f9f9f9] jost-font px-10 py-2 rounded-md">Book Now</button>
                </div>
              </div>
            </div>
            <img
              src="../../Image/overall/places/beach.jpg"
              alt="beach "
              className=" h-[400px] object-cover w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
