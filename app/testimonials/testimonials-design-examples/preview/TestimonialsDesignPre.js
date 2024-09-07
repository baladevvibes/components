"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function TestimonialsDesignPre() {
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
          <a href="/testimonials/testimonials-design-examples">
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
      <div className="py-[20px]   w-full">
        <section className="container px-4 mx-auto">
          <div className=" grid lg:grid-cols-4  lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10">
            <div className="bg-[#f2f2f2] dark:bg-[#313131] relative p-4 border-[#fff] dark:border-[#313131] border">
              <div className=" grid grid-cols-2">
                <div className=" pt-6">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class=" text-5xl  text-[#294f7f]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </div>
              <div className=" italic Mulish dark:text-[#f2f2f2] text-[18px] pt-6  text-[#07172a]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </div>
              <div className=" pt-10 flex pb-4 space-x-2">
                <img
                  src={`../../Image/overall/person/person3.webp`}
                  alt="person"
                  className="h-[50px] object-cover w-[50px] rounded-full bg-[#294f7f]"
                />
                <div></div>
                <div>
                  <h3 className="font-semibold dark:text-[#f2f2f2] Cambay pt-2 text-[#222] text-left  text-[16px]">
                    Williams
                  </h3>
                  <h3 className="font-normal Cambay dark:text-[#f2f2f2] text-[#07172a]  text-[12px] text-left">
                    Founder
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-[#f2f2f2] dark:bg-[#313131] relative p-4 border-[#fff] dark:border-[#313131] border">
              <div className=" grid grid-cols-2">
                <div className=" pt-6">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class=" text-5xl  text-[#940027]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </div>
              <div className=" italic Mulish dark:text-[#f2f2f2] text-[18px] pt-6  text-[#07172a]">
                Ac accumsan per mollis cubilia consequat proin pharetra aptent.
                Amet elit donec erat ligula blandit dapibus metus. Per congue
                torquent ac tincidunt proin platea inceptos maximus.
              </div>
              <div className=" pt-10 flex pb-4 space-x-2">
                <img
                  src={`../../Image/teams/Team001/person2.webp`}
                  alt="person"
                  className="h-[50px] object-cover w-[50px] rounded-full bg-[#294f7f]"
                />
                <div></div>
                <div>
                  <h3 className="font-semibold dark:text-[#f2f2f2] Cambay pt-2 text-[#222] text-left  text-[16px]">
                    Michael Harrison
                  </h3>
                  <h3 className="font-normal Cambay dark:text-[#f2f2f2] text-[#07172a]  text-[12px] text-left">
                    Associate CEO
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-[#f2f2f2] dark:bg-[#313131] relative p-4 border-[#fff] dark:border-[#313131] border">
              <div className=" grid grid-cols-2">
                <div className=" pt-6">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class=" text-5xl  text-[#294f7f]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </div>
              <div className=" italic Mulish  dark:text-[#f2f2f2] text-[18px] pt-6  text-[#07172a]">
                Ac accumsan per mollis cubilia consequat proin pharetra aptent.
                Amet elit donec erat ligula blandit dapibus metus. Per congue
                torquent ac tincidunt proin platea inceptos maximus.
              </div>
              <div className=" pt-10 flex pb-4 space-x-2">
                <img
                  src={`../../Image/teams/Team001/person3.webp`}
                  alt="person"
                  className="h-[50px] object-cover w-[50px] rounded-full bg-[#294f7f]"
                />
                <div></div>
                <div>
                  <h3 className="font-semibold dark:text-[#f2f2f2] Cambay pt-2 text-[#222] text-left  text-[16px]">
                    Emily Parker
                  </h3>
                  <h3 className="font-normal Cambay dark:text-[#f2f2f2] text-[#07172a]  text-[12px] text-left">
                    Team
                  </h3>
                </div>
              </div>
            </div>

            <div className=" relative h-full w-full flex justify-center items-center ">
              <img
                src={`../../Image/overall/person/person4.png`}
                alt="person"
                className="h-[300px] mx-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
