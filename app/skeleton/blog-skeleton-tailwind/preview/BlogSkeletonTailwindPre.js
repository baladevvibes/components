"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function BlogSkeletonTailwindPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  dark:bg-[#1e1e1e]">
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/skeleton/blog-skeleton-tailwind">
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

      <div className="px-4 container mx-auto py-48">
        <section>
          <div className=" grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-4">
            <div role="card" class=" animate-pulse">
              <div class="h-48 w-full bg-[#cccccc] dark:bg-[#374151] flex justify-center items-center  rounded-lg mb-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class=" text-5xl text-[#fcfcfc]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"></path>
                </svg>
              </div>

              <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-full mb-2.5"></div>
              <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-full mb-2.5"></div>
              <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-full mb-2.5"></div>
            </div>
            <div role="card" class=" animate-pulse">
              <div class="h-48 w-full bg-[#cccccc] dark:bg-[#374151] flex justify-center items-center  rounded-lg mb-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class=" text-5xl text-[#fcfcfc]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"></path>
                </svg>
              </div>
              <div class="h-2.5 bg-[#cccccc] mt-2 rounded-full dark:bg-[#374151] w-48 mb-4"></div>
              <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-full mb-2.5"></div>
              <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-full mb-2.5"></div>
            </div>
            <div role="card" class=" animate-pulse">
              <div class="h-48 w-full bg-[#cccccc] dark:bg-[#374151] flex justify-center items-center  rounded-lg mb-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class=" text-5xl text-[#fcfcfc]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"></path>
                </svg>
              </div>
              <div class="h-2.5 bg-[#cccccc] mt-2 rounded-full dark:bg-[#374151] w-48 mb-4"></div>
              <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-full mb-2.5"></div>
              <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-full mb-2.5"></div>
            </div>
            <div role="card" class=" animate-pulse">
              <div class="h-48 w-full bg-[#cccccc] dark:bg-[#374151] flex justify-center items-center  rounded-lg mb-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class=" text-5xl text-[#fcfcfc]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"></path>
                </svg>
              </div>
              <div class="h-2.5 bg-[#cccccc] mt-2 rounded-full dark:bg-[#374151] w-48 mb-4"></div>
              <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-full mb-2.5"></div>
              <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-full mb-2.5"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
