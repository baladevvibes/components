"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { RxDoubleArrowRight } from "react-icons/rx";
import {
  RiAirplayLine,
  RiBarChartGroupedLine,
  RiBillLine,
  RiDeleteBinLine,
  RiUserFollowLine,
} from "react-icons/ri";

export default function HighlightSectionTailwindPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className=" py-[100px] dark:bg-[#1e1e1e]">
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/highlight/highlight-section-tailwind">
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
      <div className="] relative bg-[url(/Image/overall/building/building4.webp)] bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
        <div className=" py-[70px]  dark:bg-[#393939f2] bg-[#ff0014c9]">
          <div className=" container px-4  mx-auto">
            <div className=" grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10">
              <div className=" group">
                <div className=" h-[100px] bg-[#fff] flex mx-auto justify-center items-center	 w-[100px] rounded-full   ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-[40px] text-[#ff0014c9]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.4 13.5333L17.4 20.2C17.5657 20.4209 17.5209 20.7343 17.3 20.9C17.2135 20.9649 17.1082 21 17 21H7C6.72386 21 6.5 20.7761 6.5 20.5C6.5 20.3918 6.53509 20.2865 6.6 20.2L11.6 13.5333C11.7657 13.3124 12.0791 13.2676 12.3 13.4333C12.3379 13.4618 12.3716 13.4954 12.4 13.5333ZM12 16.33L10 19H14L12 16.33ZM18 19V17H20V5H4V17H6V19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H18Z"></path>
                  </svg>
                </div>
                <h4 className=" text-center pt-6 title-font text-[#fff] text-3xl">
                  Design
                </h4>
              </div>
              <div>
                <div className=" h-[100px] bg-[#fff] flex mx-auto justify-center items-center	 w-[100px] rounded-full   ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-[40px] text-[#ff0014c9]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 12H4V21H2V12ZM5 14H7V21H5V14ZM16 8H18V21H16V8ZM19 10H21V21H19V10ZM9 2H11V21H9V2ZM12 4H14V21H12V4Z"></path>
                  </svg>
                </div>
                <h4 className=" text-center pt-6 title-font text-[#fff] text-3xl">
                  Chart
                </h4>
              </div>
              <div>
                <div className="  h-[100px] bg-[#fff] flex mx-auto justify-center items-center	 w-[100px] rounded-full   ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-[40px] text-[#ff0014c9]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z"></path>
                  </svg>
                </div>
                <h4 className=" text-center pt-6 title-font text-[#fff] text-3xl">
                  Readability
                </h4>
              </div>
              <div>
                <div className=" h-[100px] bg-[#fff] flex mx-auto justify-center items-center	 w-[100px] rounded-full   ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-[40px] text-[#ff0014c9]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z"></path>
                  </svg>
                </div>
                <h4 className=" text-center pt-6 title-font text-[#fff] text-3xl">
                  User
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
