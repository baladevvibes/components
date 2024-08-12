"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";

export default function FaqTableTailwindPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  dark:bg-[#1e1e1e]">
      
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/faq/faq-table-tailwind">
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
      <div className=" py-[150px] container mx-auto">
        <section className=" w-[96%] mx-auto ">
          <details class="group overflow-auto  relative pb-2">
            <summary class="flex relative mt-4 border-[1px] border-[#ccc] dark:border-[#5a5a5a] py-3 px-3 cursor-pointer list-none font-medium">
              <span class="transition flex justify-center items-center group-open:rotate-90">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 15 15"
                  class="text-[#5a5a5a] dark:text-[#cecece] "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span class="text-[#5a5a5a] dark:text-[#cecece] px-4 font-semibold  leading-7 ">
                Apple
              </span>
            </summary>
            <span className=" absolute w-auto top-7 right-5 flex justify-end">
              <div className=" group">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#5a5a5a] dark:text-[#cecece] cursor-pointer dark:hover:text-[#e5051f] hover:text-[#e5051f] text-[22px] mt-[2px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                </svg>
              </div>
            </span>
            <div class=" border-[1px] border-t-0 border-[#ccc] dark:border-[#5a5a5a] py-3 px-4 ">
              <table className="border-[1px] border-[#ccc] w-full">
                <thead className="dark:bg-[#9b9b9b] bg-[#f2f2f2]">
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] font-semibold  border-[#ccc] dark:text-[#242424] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Product
                    </td>
                    <td className="border-[1px] font-semibold  border-[#ccc] dark:text-[#242424] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Price
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-[1px] relative border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:text-[#cecece] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      MacBook Pro 14” and 16” M3, M3 Pro or M3 Max chip
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:text-[#cecece] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      ₹169900.00
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc]  dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc]  dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      iPad Pro
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹99900.00
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      iPhone 15 Pro
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹129800.00
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Apple Watch SE
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹29900.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
          <details class="group  relative pb-2">
            <summary class="flex relative  border-[1px] border-[#ccc] dark:border-[#5a5a5a] py-3 px-3 cursor-pointer list-none font-medium">
              <span class="transition flex justify-center items-center group-open:rotate-90">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 15 15"
                  class="text-[#5a5a5a] dark:text-[#cecece] "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span class="text-[#5a5a5a] dark:text-[#cecece] px-4 font-semibold  leading-7 ">
                Redmi
              </span>
            </summary>
            <span className=" absolute w-auto top-3 right-5 flex justify-end">
              <div className=" group">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#5a5a5a] dark:text-[#cecece] cursor-pointer dark:hover:text-[#e5051f] hover:text-[#e5051f] text-[22px] mt-[2px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                </svg>
              </div>
            </span>
            <div class=" border-[1px] border-t-0 border-[#ccc] dark:border-[#5a5a5a] py-3 px-4">
              <table className="border-[1px] border-[#ccc] w-full">
                <thead className="dark:bg-[#9b9b9b] bg-[#f2f2f2]">
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] font-semibold  border-[#ccc] dark:text-[#242424] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Product
                    </td>
                    <td className="border-[1px] font-semibold  border-[#ccc] dark:text-[#242424] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Price
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-[1px] relative border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:text-[#cecece] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Xiaomi 14 Ultra
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:text-[#cecece] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      ₹99,999
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc]  dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc]  dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Redmi Note 13 Pro+ 5G
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹29,999
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Redmi Note 13 Pro
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹24,999
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Redmi Note 13 5G
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹16,999
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
          <details class="group  relative pb-2">
            <summary class="flex relative  border-[1px] border-[#ccc] dark:border-[#5a5a5a] py-3 px-3 cursor-pointer list-none font-medium">
              <span class="transition flex justify-center items-center group-open:rotate-90">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 15 15"
                  class="text-[#5a5a5a] dark:text-[#cecece] "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span class="text-[#5a5a5a] dark:text-[#cecece] px-4 font-semibold  leading-7 ">
                Samsung
              </span>
            </summary>
            <span className=" absolute w-auto top-3 right-5 flex justify-end">
              <div className=" group">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#5a5a5a] dark:text-[#cecece] cursor-pointer dark:hover:text-[#e5051f] hover:text-[#e5051f] text-[22px] mt-[2px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                </svg>
              </div>
            </span>
            <div class=" border-[1px] border-t-0 border-[#ccc] dark:border-[#5a5a5a] py-3 px-4">
              <table className="border-[1px] border-[#ccc] w-full">
                <thead className="dark:bg-[#9b9b9b] bg-[#f2f2f2]">
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] font-semibold  border-[#ccc] dark:text-[#242424] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Product
                    </td>
                    <td className="border-[1px] font-semibold  border-[#ccc] dark:text-[#242424] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Price
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-[1px] relative border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:text-[#cecece] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      Samsung Galaxy M35 5G
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:text-[#cecece] dark:border-[#5a5a5a] text-[#5a5a5a] px-6 py-2">
                      ₹19,999
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc]  dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc]  dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Samsung Galaxy S24 Ultra
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹107,298
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Samsung Galaxy A35 5G
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹23,765
                    </td>
                  </tr>
                  <tr className="border-[1px] border-[#ccc] dark:border-[#5a5a5a]">
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      Samsung Galaxy M34
                    </td>
                    <td className="border-[1px] border-[#ccc] dark:border-[#5a5a5a] dark:text-[#cecece] text-[#5a5a5a] px-6 py-2">
                      ₹34,280
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
        </section>
      </div>
    </div>
  );
}
