"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import AdsterraAds from "../../../components/AdsterraAds";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function BlogCardDesignPre() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div>
      <div className=" py-12 dark:bg-[#1e1e1e]">
        <div className=" flex justify-center items-center">
          <AdsterraAds
            id="37bfd45a34f36324b962f1e32736a540"
            height="90"
            width="728"
          />
        </div>
        <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/blog/blog-card-design">
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
        <section className="  container mx-auto px-4 py-10">
          <div className=" grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1  mdsm:grid-cols-1 sm:grid-cols-1 gap-4">
            <div className=" border border-[#e2e2e2] dark:border-[#454545] rounded-lg ">
              <div className="group grid  md:grid-cols-3  mdsm:grid-cols-1 sm:grid-cols-1">
                <div className=" overflow-hidden  md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none mdsm:rounded-tl-lg mdsm:rounded-tr-lg sm:rounded-tl-lg sm:rounded-tr-lg ">
                  <img
                    src="../../Image/blog/001/satellite.webp"
                    alt="satellites "
                    className=" md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none  mdsm:rounded-tl-lg  mdsm:rounded-tr-lg sm:rounded-tl-lg sm:rounded-tr-lg object-cover group-hover:scale-125  duration-700 h-[200px] w-full"
                  />
                </div>
                <div className=" col-span-2 px-4 py-4">
                  <h2 className=" text-2xl text-[#1e1e1e] leading-6 Anek-Tamil font-semibold pt-4 dark:text-[#f2f2f2] ">
                    Own satellites against US
                  </h2>
                  <p className="pt-2 varela-round-font  dark:text-[#9b9b9b] leading-6  text-[#424242]">
                    They're using our own satellites against us. And the clock
                    is ticking. This thing comes fully loaded. AM/FM radio.
                  </p>
                  <button className="varela-round-font group hover:underline hover:underline-offset-2 flex pt-3 text-[#0064b0] hover:text-[#003b80]  duration-700 ">
                    Read more...
                  </button>
                </div>
              </div>
            </div>

            <div className=" border border-[#e2e2e2] dark:border-[#454545] rounded-lg ">
              <div className="group grid  md:grid-cols-3  mdsm:grid-cols-1 sm:grid-cols-1">
                <div className=" overflow-hidden  md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none mdsm:rounded-tl-lg mdsm:rounded-tr-lg sm:rounded-tl-lg sm:rounded-tr-lg ">
                  <img
                    src="../../Image/blog/001/dinosaurs.webp"
                    alt="dinosaurs"
                    className=" md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none  mdsm:rounded-tl-lg  mdsm:rounded-tr-lg sm:rounded-tl-lg sm:rounded-tr-lg object-cover group-hover:scale-125  h-[200px] w-full  duration-700"
                  />
                </div>
                <div className=" col-span-2 px-4 py-4">
                  <h2 className=" text-2xl text-[#1e1e1e] leading-6 Anek-Tamil font-semibold pt-4 dark:text-[#f2f2f2] ">
                    God destroys dinosaurs
                  </h2>
                  <p className="pt-2 varela-round-font  leading-6 dark:text-[#9b9b9b]  text-[#424242]">
                    God creates dinosaurs. God destroys dinosaurs. God creates
                    Man. Man destroys God. Man creates Dinosaurs.
                  </p>
                  <button className="varela-round-font group hover:underline hover:underline-offset-2 flex pt-3 text-[#0064b0] hover:text-[#003b80]  duration-700 ">
                    Read more...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
