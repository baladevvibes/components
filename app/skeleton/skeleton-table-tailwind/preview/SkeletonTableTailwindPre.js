"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function SkeletonTableTailwindPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  dark:bg-[#1e1e1e]">
      
      <div className=" flex pt-10 justify-center items-center">
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/services/our-services-tailwind-css">
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

      <div className=" container px-4 mx-auto py-[20px]">
        <div className=" overflow-auto">
        <div role="table" className="animate-pulse">
          <table className=" w-full">
            <thead className=" bg-[#f2f2f2] dark:bg-[#6277993b]">
              <tr className=" border-[1px] border-[#ccc]">
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-24 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-48 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-48 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-24 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-24 mb-4"></div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-[1px] border-t-0 border-[#ccc]">
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-10 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
              </tr>
              <tr className=" border-[1px] border-t-0 border-[#ccc]">
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-10 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
              </tr>

              <tr className=" border-[1px] border-t-0 border-[#ccc]">
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-10 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
              </tr>

              <tr className=" border-[1px] border-t-0 border-[#ccc]">
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-10 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
              </tr>


              <tr className=" border-[1px] border-t-0 border-[#ccc]">
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-10 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
              </tr>

              <tr className=" border-[1px] border-t-0 border-[#ccc]">
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-10 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
              </tr>


              <tr className=" border-[1px] border-t-0 border-[#ccc]">
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-10 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
              </tr>

              <tr className=" border-[1px] border-t-0 border-[#ccc]">
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-10 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-32 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
                <td>
                  <div class="h-2.5 bg-[#cccccc] mx-4  rounded-full mt-4 dark:bg-[#374151] w-14 mb-4"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>

      </div>
    </div>
  );
}
