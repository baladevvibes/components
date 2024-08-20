"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";

export default function TabSectionTailwindPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  dark:bg-[#1e1e1e]">
      
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/tab/tab-section-tailwind">
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
      <section>
        <div className=" px-4 container mx-auto py-48">
          <div className=" w-full mx-auto">
            <div className=" lg:flex lge:flex md:flex mdsm:block sm:block  lg:space-x-8  lge:space-x-8 md:space-x-4 mdsm:space-x-0 sm:space-x-0px-4   ">
              <div className=" bg-[#cfe1f7] cursor-pointer  py-3 text-[#086bdd] font-normal border-b px-10 border-[#086bdd] boder-[2px] ">
                Profile
              </div>
              <div className=" cursor-pointer duration-700 hover:bg-[#cfe1f7] hover:border-[#086bdd] hover:text-[#086bdd]  py-3 text-[#b0b0b0] font-normal border-b px-10 border-[#b0b0b0] boder-[2px] ">
                Account
              </div>
              <div className=" cursor-pointer duration-700 hover:bg-[#cfe1f7] hover:border-[#086bdd] hover:text-[#086bdd]  py-3 text-[#b0b0b0] font-normal border-b px-10 border-[#b0b0b0] boder-[2px] ">
                Notification
              </div>
              <div className="cursor-pointer duration-700 hover:bg-[#cfe1f7] hover:border-[#086bdd] hover:text-[#086bdd]  py-3 text-[#b0b0b0] font-normal border-b px-10 border-[#b0b0b0] boder-[2px] ">
                Amount
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
