"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function CssCardDesignCodePre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
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
          <a href="/card/css-card-design-code">
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

      <div className="py-20 dark:bg-[#1e1e1e]">
        <div className=" container mx-auto px-4">
          <div className="gap-6 grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-3 mdsm:grid-cols-2 sm:grid-cols-1 ">
            <div className="group relative">
              <div className=" cursor-pointer absolute top-0 z-10 w-full hidden  group-hover:block   duration-300   h-[350px] bg-gradient-to-t from-[#8338EC]  rounded-2xl">
                <div className="NewsCycle absolute bottom-6 w-full text-[#fcfcfc] text-center text-3xl">
                  USA
                </div>
              </div>
              <img
                src={`../../Image/overall/country/USA.png`}
                alt="USA"
                className=" h-[350px] rounded-2xl w-full sm:w-[450px] sm:object-cover"
              />
            </div>
            <div className="group relative">
              <div className="mt-8  cursor-pointer absolute top-0 z-10 w-full hidden  group-hover:block   duration-300   h-[350px] bg-gradient-to-t from-[#8338EC]  rounded-2xl">
                <div className="NewsCycle absolute bottom-6 w-full text-[#fcfcfc] text-center text-3xl">
                Australia
                </div>
              </div>
              <img
                src={`../../Image/overall/country/Australia.png`}
                alt="Australia"
                className="mt-8 h-[350px] rounded-2xl  w-full sm:w-[450px] sm:object-cover"
              />
            </div>
            <div className="group relative">
              <div className=" cursor-pointer absolute top-0 z-10 w-full hidden  group-hover:block   duration-300   h-[350px] bg-gradient-to-t from-[#8338EC]  rounded-2xl">
                <div className=" absolute NewsCycle bottom-6 w-full text-[#fcfcfc] text-center text-3xl">
                London
                </div>
              </div>
              <img
                src={`../../Image/overall/country/London.png`}
                alt="london"
                className=" h-[350px] rounded-2xl  w-full sm:w-[450px] sm:object-cover"
              />
            </div>
            <div className="group relative">
              <div className="mt-8  cursor-pointer absolute top-0 z-10 w-full hidden  group-hover:block   duration-300   h-[350px] bg-gradient-to-t from-[#8338EC]  rounded-2xl">
                <div className="NewsCycle absolute bottom-6 w-full text-[#fcfcfc] text-center text-3xl">
                Paris
                </div>
              </div>
              <img
                src={`../../Image/overall/country/Paris.png`}
                alt="Paris"
                className="mt-8 h-[350px] rounded-2xl  w-full sm:w-[450px] sm:object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
