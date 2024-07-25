"use client";
import React, { useState } from "react";
import "../style.css";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { AiOutlineMenuFold } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { VscEye } from "react-icons/vsc";

export default function Preview() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className=" relative dark:bg-secondary">
      <div className=" container mx-auto">
        <div className=" sticky top-2 flex justify-end px-10 pb-10">
          <div onClick={() => darkModeHandler()}>
            <div className={` group`}>
              <div
                className={` ${
                  dark ? `bg-secondary` : ``
                } p-1.5 border  border-[#ccc]  group-hover:bg-secondary  cursor-pointer  rounded-md`}
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

      <section className=" container px-4  mx-auto">
        <h3 className="text-[#434343] dark:text-[#f2f2f2] rowdies lg:text-4xl lge:text-4xl md:text-3xl mdsm:text-2xl  sm:text-2xl  text-center pb-10 ">
          Frequently Asked Questions
        </h3>
        <div className="lg:w-[50%] lge:w-[50%] md:w-[80%] mdsm:w-[80%] sm:w-[100%] mx-auto">
          <details class="group  border-b-[1px] border-b-[#ccc] pb-2">
            <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
              <span className="dark:text-[#c0c0c0] leading-7 dark:font-normal text-[#434343] font-semibold">
                {" "}
                What are the top attractions in the city?
              </span>
              <span class="transition group-open:rotate-180">
                <svg
                className=" dark:text-[#c0c0c0]"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-[#5a5a5a] dark:text-[#c0c0c0] leading-7">
              A perfect spot for picnics, strolls, and enjoying nature.
            </p>
          </details>

          <details class="group  border-b-[1px] border-b-[#ccc] pb-2">
            <summary class="flex mt-4  cursor-pointer list-none items-center justify-between font-medium">
              <span className="text-[#434343] font-semibold dark:font-normal dark:text-[#c0c0c0] leading-7 ">
                {" "}
                What is the best way to get around the city?
              </span>
              <span class="transition group-open:rotate-180">
                <svg
                    className=" dark:text-[#c0c0c0]"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-[#5a5a5a] dark:text-[#c0c0c0]  leading-7">
              Ride-Sharing and Taxis: Easily accessible for quick trips.
            </p>
          </details>

          <details class="group  border-b-[1px] border-b-[#ccc] pb-2">
            <summary class="flex mt-4  cursor-pointer list-none items-center justify-between font-medium">
              <span className="text-[#434343] font-semibold dark:font-normal dark:text-[#c0c0c0] leading-7" >
                {" "}
                When is the best time to visit?
              </span>
              <span class="transition group-open:rotate-180">
                <svg
                    className=" dark:text-[#c0c0c0]"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-[#5a5a5a] dark:text-[#c0c0c0] leading-7">
              (September to November): Comfortable temperatures and colorful
              foliage.
            </p>
          </details>

          <details class="group  border-b-[1px] border-b-[#ccc] pb-2">
            <summary class="flex mt-4  cursor-pointer list-none items-center justify-between font-medium">
              <span className="text-[#434343] font-semibold dark:font-normal dark:text-[#c0c0c0] leading-7" >
                {" "}
                Are there any local customs or etiquette I should be aware of?
              </span>
              <span class="transition group-open:rotate-180">
                <svg
                    className=" dark:text-[#c0c0c0]"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-[#5a5a5a] dark:text-[#c0c0c0] leading-7">
              Be mindful of noise levels and personal space in public areas.
            </p>
          </details>
        </div>
      </section>

      <section className=" py-20 container mx-auto px-4">
        <div className=" grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1">
          <div className="  relative group overflow-hidden ">
            <div className=" absolute group-hover:opacity-100  scale-150  transition-5 duration-300  opacity-0 w-full bg-[#211e1e7a] flex justify-center items-center	h-full">
              <div className=" cursor-pointer h-[30px] w-[30px] rounded-full hover:bg-[#FF9800] bg-[#eeee] hover:text-[#eeee] text-[#FF9800] flex justify-center items-center">
                <VscEye className=" group-hover:opacity-100 text-[16px] " />
              </div>
            </div>
            <img
              src="../Image/overall/food/food1.webp"
              className="h-[400px] object-cover w-full"
            />
          </div>
          <div className="  relative group overflow-hidden ">
            <div className=" absolute group-hover:opacity-100  scale-150  transition-5 duration-300  opacity-0 w-full bg-[#211e1e7a] flex justify-center items-center	h-full">
              <div className=" cursor-pointer h-[30px] w-[30px] rounded-full hover:bg-[#FF9800] bg-[#eeee] hover:text-[#eeee] text-[#FF9800] flex justify-center items-center">
                <VscEye className=" group-hover:opacity-100 text-[16px] " />
              </div>
            </div>
            <img
              src="../Image/overall/food/food2.webp"
              className="h-[400px] object-cover w-full"
            />
          </div>

          <div className="  relative group overflow-hidden ">
            <div className=" absolute group-hover:opacity-100  scale-150  transition-5 duration-300  opacity-0 w-full bg-[#211e1e7a] flex justify-center items-center	h-full">
              <div className="  cursor-pointer h-[30px] w-[30px] rounded-full hover:bg-[#FF9800] bg-[#eeee] hover:text-[#eeee] text-[#FF9800] flex justify-center items-center">
                <VscEye className=" group-hover:opacity-100 text-[16px] " />
              </div>
            </div>
            <img
              src="../Image/overall/food/food3.webp"
              className="h-[400px] object-cover w-full"
            />
          </div>

          <div className="  relative  group overflow-hidden ">
            <div className=" absolute group-hover:opacity-100  scale-150  transition-5 duration-300  opacity-0 w-full bg-[#211e1e7a] flex justify-center items-center	h-full">
              <div className=" cursor-pointer h-[30px] w-[30px] rounded-full hover:bg-[#FF9800] bg-[#eeee] hover:text-[#eeee] text-[#FF9800] flex justify-center items-center">
                <VscEye className=" group-hover:opacity-100 text-[16px] " />
              </div>
            </div>
            <img
              src="../Image/overall/food/food4.webp"
              className="h-[400px] object-cover w-full"
            />
          </div>
        </div>
      </section>

      <section className=" bg-[#191919] py-20">
        <footer className=" container mx-auto px-4">
          <div className=" grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1">
            <div>
              <h3 className=" text-[#fff] sedan-sc-font text-4xl">Logo</h3>

              <h5 className=" text-[#d0d0d0] font-semibold raleway-font  tracking-wide text-[14px] mt-6">
                Follow us
              </h5>
              <div className="mt-2 flex space-x-2">
                <div className="group cursor-pointer ">
                  <div className=" h-[30px] w-[30px] rounded-full flex justify-center items-center  group-hover:bg-[#fff] border border-[#fff]">
                    <TiSocialFacebook className=" text-[20px] text-[#fff] group-hover:text-[#191919]" />
                  </div>
                </div>

                <div className="group cursor-pointer ">
                  <div className=" h-[30px] w-[30px] rounded-full flex justify-center items-center  group-hover:bg-[#fff] border border-[#fff]">
                    <RiTwitterXFill className=" text-[16px] text-[#fff] group-hover:text-[#191919]" />
                  </div>
                </div>

                <div className="group cursor-pointer ">
                  <div className=" h-[30px] w-[30px] rounded-full flex justify-center items-center  group-hover:bg-[#fff] border border-[#fff]">
                    <LuInstagram className=" text-[16px] text-[#fff] group-hover:text-[#191919]" />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div className=" lg:pt-0 lge:pt-0 md:pt-6 mdsm:pt-6 sm:pt-6">
              <ul className=" mt-4">
                <li className="group raleway-font  tracking-wide text-[#fff] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  {" "}
                  About{" "}
                </li>
                <li className="group raleway-font  tracking-wide mt-2 text-[#fff] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  {" "}
                  Services{" "}
                </li>
                <li className="group raleway-font  tracking-wide mt-2 text-[#fff] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  {" "}
                  project
                </li>
                <li className="group raleway-font  tracking-wide mt-2 text-[#fff] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  {" "}
                  Contant
                </li>
                <li className="group raleway-font  tracking-wide mt-2 text-[#fff] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  {" "}
                  Blog
                </li>
              </ul>
            </div>
            <div className=" lg:pt-0 lge:pt-0 md:pt-6 mdsm:pt-6 sm:pt-6">
              <h5 className=" text-[#d0d0d0] font-semibold   raleway-font  tracking-wide text-[14px] mt-4">
                Call us
              </h5>
              <div className=" text-[#fff] pt-2 raleway-font hover:underline hover:underline-offset-4">
                <a href="telto:+0090123456789">+00 090123456789 </a>
              </div>

              <h5 className="text-[#d0d0d0] font-semibold  raleway-font  tracking-wide text-[14px] mt-4">
                Address
              </h5>
              <div className=" text-[#fff] pt-2 raleway-font">
                960 Blanche Terrace, Lake Judeside, <br />
                WA 93970-1195
              </div>
            </div>
          </div>
        </footer>
      </section>

      <section className=" dark:bg-[#1e1e1e] container px-4 py-10  mx-auto">
        <div className=" relative rounded-2xl  overflow-hidden ">
          <img
            src={`../Image/overall/building/uilding4.webp`}
            alt="building"
            className="rounded-2xl h-[70vh] w-full object-cover"
          />
          <div className=" absolute top-0 p-6 w-full ">
            <div className=" flex justify-end ">
              <div className=" bg-[#fff] p-2 lg:hidden lge:hidden md:hidden mdsm:block sm:block cursor-pointer group">
                <AiOutlineMenuFold className=" text-[#333] group-hover:text-[#000]" />
              </div>
            </div>
            <div className=" lg:block lge:block md:block  mdsm:hidden sm:hidden">
              <div className=" grid  grid-cols-12 ">
                <div className=" bg-[#fff] text-[#333] font-bold px-6 rounded-lg titillium text-center">
                  Logo
                </div>
                <div className=" col-span-6"></div>
                <div className="rounded-lg col-span-5">
                  <div className=" rounded-lg text-[#333]   font-bold  flex justify-end space-x-10">
                    <div className="bg-[#fff] dark:bg-[#1e1e1e]  dark:text-[#d1d1d1] dark:hover:text-[#fff]  hover:text-[#898989] cursor-pointer  rounded-lg titillium px-6 text-center">
                      About
                    </div>
                    <div className="bg-[#fff] dark:bg-[#1e1e1e]  dark:text-[#d1d1d1] dark:hover:text-[#fff]  hover:text-[#898989] cursor-pointer  rounded-lg titillium px-6 text-center">
                      Services
                    </div>

                    <div className="bg-[#fff]  dark:bg-[#1e1e1e]  dark:text-[#d1d1d1]  dark:hover:text-[#fff] hover:text-[#898989] cursor-pointer  rounded-lg titillium px-6 text-center">
                      Contact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl px-6 py-2 sm:px-0 mt-6">
          <h2 className=" text-[#333] dark:text-[#fff] font-bold text-[64px] titillium">
            Bright City
          </h2>
          <h4 className=" lg:text-[24px] lge:text-[24px] md:text-[24px] mdsm:text-[22px] font-normal sm:text-[20px]  pt-2 text-[#898989] jost-font ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h4>
        </div>
      </section>
    </div>
  );
}
