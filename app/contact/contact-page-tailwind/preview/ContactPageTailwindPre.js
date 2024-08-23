"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";

export default function ContactPageTailwindPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  dark:bg-[#1e1e1e]">
      
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/contact/contact-page-tailwind">
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



      <div className=" pb-48 container mx-auto">
        <section>
          <div className=" grid lg:grid-cols-5  lge:grid-cols-5 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 h-full lg:gap-10 lge:gap-10 md:gap-0 mdsm:gap-0 sm:gap-0">
            <div className=" col-span-2 h-full ">
              <div className=" relative h-full">
                <div className=" bg-[#646076] p-10 h-[550px] w-full  ">
                  <img
                    src="../../Image/contact/contact002/contact002.jpeg"
                    alt="contact"
                    className="mt-10 h-[550px] object-cover w-full "
                  />
                  <div></div>
                </div>
              </div>
            </div>
            <div className=" col-span-3  px-4 h-full">
              <div className="h-full">
                <form className=" block">
                  <h3 className=" dark:text-[#fcfcfc] text-[#646076] catamaran lg:pt-10 lge:pt-10 md:pt-24 mdsm:pt-24 sm:pt-24 lg:mt-0 lge:mt-0 md:mt-10 mdsm:mt-10 sm:mt-10 pb-4 lg:text-4xl lge:text-4xl md:text-3xl mdsm:text-3xl sm:text-3xl ">
                    Contact us
                  </h3>

                  <p className=" tracking-wide dark:text-[#fcfcfc] text-[#333] lg:text-[18px] lge:text-[18px] catamaran md:text-[16px] mdsm:text-[16px] sm:text-[16px] pb-10">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>

                  <div className=" grid grid-cols-2 gap-10">
                    <div>
                      <input
                        type="text"
                        placeholder="First name"
                        className=" border catamaran border-[#ccc] text-[#444545]  focus:outline-none bg-[#f2f2f2]  w-full py-2 px-2"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last name"
                        className=" border catamaran border-[#ccc]  focus:outline-none bg-[#f2f2f2]  w-full py-2 px-2"
                        required
                      />
                    </div>
                  </div>
                  <div className=" pt-6">
                    <input
                      type="text"
                      placeholder="Email"
                      className=" border catamaran border-[#ccc]  focus:outline-none bg-[#f2f2f2]  w-full py-2 px-2"
                      required
                    />
                  </div>
                  <div className=" pt-6">
                    <textarea
                      type="text"
                      placeholder="Message"
                      className=" border catamaran border-[#ccc]  focus:outline-none bg-[#f2f2f2]  w-full py-2 px-2"
                      required
                    />
                  </div>
                  <div className=" pt-6">
                    <button className=" bg-[#646076] catamaran hover:bg-[#DECDF5] hover:text-[#534D56] text-[#fcfcfc] px-10 py-2">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
