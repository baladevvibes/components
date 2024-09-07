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
import AdsterraAds from "../../../components/AdsterraAds";

export default function HideandShowDesignPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className=" py-[100px] dark:bg-[#1e1e1e]">
         <div className=" flex justify-center items-center">
            
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/highlight/hide-and-show-design">
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

      <section className=" lg:block lge:block md:hidden mdsm:hidden sm:hidden py-32">
        <div className="dark:bg-[#454545] bg-[#f2f2f2]">
          <div className=" container mx-auto">
            <div className="group grid grid-cols-12 py-10">
              <div className=" col-span-9 cursor-pointer flex space-x-6 ">
                <h4 className=" dark:text-[#aaaaaa] dark:group-hover:text-[#f2f2f2] text-4xl text-[#444]  group-hover:text-[#222] title-font">
                  Lorem ipsum is placeholder text commonly
                </h4>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#444] dark:text-[#aaaaaa] dark:group-hover:text-[#f2f2f2]  group-hover:text-[#222] text-5xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                </svg>
              </div>
              <div className=" relative col-span-3">
                <img
                  src="https://makecomponents.com/Image/hero/hero001/hero001.webp"
                  alt="imgaes"
                  className=" absolute hidden group-hover:block duration-200 -top-20 h-[200px] rounded-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" dark:bg-[#454545] bg-[#f2f2f2]">
          <div className=" container mx-auto">
            <div className="group grid grid-cols-12 py-10">
              <div className=" col-span-9 cursor-pointer flex space-x-6 ">
                <h4 className=" dark:text-[#aaaaaa] dark:group-hover:text-[#f2f2f2] text-4xl text-[#444]  group-hover:text-[#222] title-font">
                  Lorem ipsum is placeholder text commonly
                </h4>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#444] dark:text-[#aaaaaa] dark:group-hover:text-[#f2f2f2]  group-hover:text-[#222] text-5xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                </svg>
              </div>
              <div className=" relative col-span-3">
                <img
                  src="https://makecomponents.com/Image/about/about004/004.webp"
                  alt="imgaes"
                  className=" absolute hidden group-hover:block duration-200 -top-20 h-[200px] rounded-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" dark:bg-[#454545] bg-[#f2f2f2]">
          <div className=" container mx-auto">
            <div className="group grid grid-cols-12 py-10">
              <div className=" col-span-9 cursor-pointer flex space-x-6 ">
                <h4 className=" dark:text-[#aaaaaa] dark:group-hover:text-[#f2f2f2] text-4xl text-[#444]  group-hover:text-[#222] title-font">
                  Lorem ipsum is placeholder text commonly
                </h4>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#444] dark:text-[#aaaaaa] dark:group-hover:text-[#f2f2f2]   group-hover:text-[#222] text-5xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                </svg>
              </div>
              <div className=" relative col-span-3">
                <img
                  src="https://makecomponents.com/Image/hero/hero003/hero.webp"
                  alt="imgaes"
                  className=" absolute hidden group-hover:block duration-200 -top-20 h-[200px] rounded-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" dark:bg-[#454545] bg-[#f2f2f2]">
          <div className=" container mx-auto">
            <div className="group grid grid-cols-12 py-10">
              <div className=" col-span-9 cursor-pointer flex space-x-6 ">
                <h4 className=" dark:text-[#aaaaaa] dark:group-hover:text-[#f2f2f2] text-4xl text-[#444]  group-hover:text-[#222] title-font">
                  Lorem ipsum is placeholder text commonly
                </h4>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#444] dark:text-[#aaaaaa] dark:group-hover:text-[#f2f2f2]  group-hover:text-[#222] text-5xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                </svg>
              </div>
              <div className=" relative col-span-3">
                <img
                  src="https://makecomponents.com/Image/card/card004/Succulent.webp"
                  alt="imgaes"
                  className=" absolute hidden group-hover:block duration-200 -top-20 h-[200px] rounded-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lg:hidden lge:hidden md:block mdsm:block sm:block py-32">
        <div className=" container px-4 mx-auto">
          <div className=" grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10">
            <div className="cursor-pointer  group">
              <img
                src="https://makecomponents.com/Image/hero/hero001/hero001.webp"
                alt="Images"
                className=" rounded-t-lg h-[250px] w-full  object-cover"
              />
              <div>
                <div className=" py-4  dark:bg-[#454545] bg-[#f2f2f2] rounded-b-lg ">
                  <h4 className="  px-4 dark:text-[#aaaaaa] text-[#444] flex group-hover:text-[#222] dark:group-hover:text-[#f2f2f2] title-font">
                    Lorem ipsum is placeholder text commonly{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] ml-2 dark:text-[#aaaaaa] group-hover:text-[#222] dark:group-hover:text-[#f2f2f2] text-4xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                    </svg>
                  </h4>
                </div>
              </div>
            </div>

            <div className="cursor-pointer  group">
              <img
                src="https://makecomponents.com/Image/about/about004/004.webp"
                alt="Images"
                className=" rounded-t-lg h-[250px] w-full  object-cover"
              />
              <div>
                <div className=" py-4 dark:bg-[#454545]  bg-[#f2f2f2] rounded-b-lg ">
                  <h4 className="  px-4 text-[#444] dark:text-[#aaaaaa] flex group-hover:text-[#222] dark:group-hover:text-[#f2f2f2] title-font">
                    Lorem ipsum is placeholder text commonly{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] ml-2 dark:text-[#aaaaaa] group-hover:text-[#222] dark:group-hover:text-[#f2f2f2] text-4xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                    </svg>
                  </h4>
                </div>
              </div>
            </div>

            <div className="cursor-pointer  group">
              <img
                src="https://makecomponents.com/Image/hero/hero003/hero.webp"
                alt="Images"
                className=" rounded-t-lg h-[250px] w-full  object-cover"
              />
              <div>
                <div className=" py-4 dark:bg-[#454545]  bg-[#f2f2f2] rounded-b-lg ">
                  <h4 className="  px-4 text-[#444]  dark:text-[#aaaaaa] dark:group-hover:text-[#f2f2f2] flex group-hover:text-[#222] title-font">
                    Lorem ipsum is placeholder text commonly{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] ml-2  dark:text-[#aaaaaa] group-hover:text-[#222]  dark:group-hover:text-[#f2f2f2] text-4xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                    </svg>
                  </h4>
                </div>
              </div>
            </div>

            <div className="cursor-pointer  group">
              <img
                src="https://makecomponents.com/Image/card/card004/Succulent.webp"
                alt="Images"
                className=" rounded-t-lg h-[250px] w-full  object-cover"
              />
              <div>
                <div className=" py-4 dark:bg-[#454545]  bg-[#f2f2f2] rounded-b-lg ">
                  <h4 className="  px-4 text-[#444] dark:text-[#aaaaaa] flex group-hover:text-[#222] dark:group-hover:text-[#f2f2f2] title-font">
                    Lorem ipsum is placeholder text commonly{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] ml-2 dark:text-[#aaaaaa] group-hover:text-[#222] dark:group-hover:text-[#f2f2f2] text-4xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                    </svg>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
