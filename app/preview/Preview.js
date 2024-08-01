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
import { MdOutlineDateRange } from "react-icons/md";
import { RiAndroidLine } from "react-icons/ri";
import { MdOutlineSdStorage } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TbBrandApple } from "react-icons/tb";

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
                      className={` ${
                        dark ? ` text-[#f2f2f2] text-[16px]` : ``
                      }`}
                    />
                  </>
                ) : (
                  <>
                    <CiDark
                      className={`  group-hover:text-[#f2f2f2] text-[16px]`}
                    />
                  </>
                )}
              </div>

              <p className={` text-sm text-left  dark:text-[#f2f2f2]`}>
                {dark ? "Da" : "Li"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <section>
        <div className=" grid py-40 lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1">
          <div className=" bg-[#8fa8ae] dark:bg-[#151515] py-20 px-10 overflow-hidden relative ">
            <img
              src={`../Image/overall/product/redmi.webp`}
              alt="redmi"
              className="sm:hidden lg:-right-10 lge:-right-52 md:right-20 mdsm:right-10 top-20 rotate-[340deg] absolute h-[350px] "
            />
            <div>
              <h2 className=" text-5xl  dark:text-[#f2f2f2] font-semibold merriweather text-[#002b33]">
                Xiaomi
              </h2>
              <h4 className=" text-2xl dark:text-[#f2f2f2] merriweather font-thin pt-3 text-[#002b33]">
                Redmi 9
                <span className=" dark:text-[#f2f2f2]  font-thin merriweather">
                  pictures
                </span>
              </h4>

              <div className="pt-6">
                <div className=" flex space-x-2  pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-[20px] text-[#002b33] dark:text-[#f2f2f2]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z"></path>
                  </svg>
                  <p className="merriweather text-1xl font-normal dark:text-[#f2f2f2] text-[#00000c]">
                    194g, 9mm thickness
                  </p>
                </div>

                <div className=" flex space-x-2  pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-[20px] text-[#002b33] dark:text-[#f2f2f2]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 13H5V20H19V13ZM19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11H19ZM6.38231 3.9681C7.92199 2.73647 9.87499 2 12 2C14.125 2 16.078 2.73647 17.6177 3.9681L19.0711 2.51472L20.4853 3.92893L19.0319 5.38231C20.2635 6.92199 21 8.87499 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 8.87499 3.73647 6.92199 4.9681 5.38231L3.51472 3.92893L4.92893 2.51472L6.38231 3.9681ZM9 9C8.44772 9 8 8.55228 8 8C8 7.44772 8.44772 7 9 7C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9ZM15 9C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9Z"></path>
                  </svg>
                  <p className="merriweather text-1xl font-normal dark:text-[#f2f2f2] text-[#00000c]">
                    Android 10, MIUI 12
                  </p>
                </div>
                <div className=" flex space-x-2  pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-[20px] text-[#002b33] dark:text-[#f2f2f2]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M18 4v16H6V8.83L10.83 4H18m0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z"></path>
                  </svg>
                  <p className="merriweather text-1xl font-normal text-[#00000c] dark:text-[#f2f2f2]">
                    64GB/128GB storage
                  </p>
                </div>
                <div className=" flex space-x-2  pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-[20px] text-[#002b33] dark:text-[#f2f2f2]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"></path>
                  </svg>
                  <p className="merriweather text-1xl font-normal text-[#00000c] dark:text-[#f2f2f2]">
                    Released 2020, August 31
                  </p>
                </div>
              </div>

              <button className="mt-6 merriweather text-2xl dark:bg-[#555555] dark:hover:bg-[#f2f2f2] dark:hover:text-[#4e4e4e] text-[#f2f2f2] hover:bg-[#002b3373] bg-[#002b33] py-2 px-16 rounded-full">
                $ 138
              </button>
            </div>
          </div>
          <div className=" bg-[#ff9580] dark:bg-[#1f1f1f] py-20 px-10 overflow-hidden relative ">
            <img
              src={`../Image/overall/product/apple.webp`}
              alt="redmi"
              className="sm:hidden lg:-right-10 lge:-right-52 md:right-10 mdsm:right-10 top-20 rotate-[340deg] absolute h-[350px] "
            />
            <div>
              <h2 className=" text-5xl  font-semibold merriweather text-[#151515] dark:text-[#f2f2f2]">
                Apple
                <span className=" text-2xl dark:text-[#f2f2f2]  font-normal merriweather text-[#151515]">
                  (iphone)
                </span>
              </h2>
              <h4 className=" text-2xl merriweather font-thin pt-3 dark:text-[#f2f2f2] text-[#151515]">
                15 Pro max
              </h4>

              <div className="pt-6">
                <div className=" flex space-x-2  pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-[20px]  text-[#330800] dark:text-[#f2f2f2]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z"></path>
                  </svg>
                  <p className="merriweather text-1xl font-normal text-[#00000c] dark:text-[#f2f2f2]">
                    221g, 8.3mm thickness
                  </p>
                </div>

                <div className=" flex space-x-2  pt-3">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class=" text-[22px] text-[#330800] dark:text-[#f2f2f2]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z"></path>
                    <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2"></path>
                  </svg>
                  <p className="merriweather text-1xl font-normal text-[#00000c] dark:text-[#f2f2f2]">
                    iOS 17, up to iOS 17.5.1
                  </p>
                </div>
                <div className=" flex space-x-2  pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-[20px] text-[#330800] dark:text-[#f2f2f2]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M18 4v16H6V8.83L10.83 4H18m0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z"></path>
                  </svg>
                  <p className="merriweather text-1xl font-normal text-[#00000c] dark:text-[#f2f2f2]">
                    256GB/512GB/1TB storage
                  </p>
                </div>
                <div className=" flex space-x-2  pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-[20px] text-[#330800] dark:text-[#f2f2f2]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"></path>
                  </svg>
                  <p className="merriweather text-1xl font-normal text-[#00000c] dark:text-[#f2f2f2]">
                    Released 2023, September 22
                  </p>
                </div>
              </div>

              <button className="mt-6 merriweather text-2xl dark:bg-[#555555] dark:hover:bg-[#f2f2f2] dark:hover:text-[#4e4e4e] text-[#f2f2f2] hover:bg-[#6d23156b] bg-[#330800] py-2 px-16 rounded-full">
                $ 999
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <section className=" relative">
        <div className=" absolute z-10 w-full top-0">
          <div className="h-full container mx-auto w-full ">
            <div className="  w-[100%]">
              <div className=" min-h-[100vh]   text-center flex justify-center items-center">
                <div className=" block">
                  <h2 className="dark:text-[#f2f2f2] text-5xl Archivo">
                    {" "}
                    Innovate{" "}
                    <span className="text-5xl Archivo font-normal">
                      with Us
                    </span>{" "}
                  </h2>

                  <h3 className=" text-2xl dark:text-[#f2f2f2] text-[#434343] w-[60%] mx-auto work pt-4">
                    The Future of Technology Starts Here.Leading the Way in{" "}
                    <span className=" font-semibold dark:text-[#f2f2f2] text-[#000]">
                      Technological Advancements
                    </span>{" "}
                  </h3>
                  <div className=" relative z-10 mt-8">
                    <button className="bg-[#000] hover:bg-[#434343] text-[#f2f2f2] px-16 py-3 rounded-full">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" min-h-[100vh] relative">
          <div className=" absolute top-10  left-20 bg-[#c7295e] h-[300px] w-[300px] rounded-full blur-[250px]"></div>
          <div className=" absolute right-40  bg-[#4b91e2] h-[300px] w-[300px] rounded-full blur-[250px]"></div>
        </div>
        {/* <img
          src={`../Image/overall/mesh/mesh1.png`}
          className=" w-full h-[100vh]"
          alt="mesh"
        /> */}
      </section>

      <section className=" container mx-auto my-20">
        <div className=" sm:w-full overflow-auto px-4">
          <table className=" md:w-[80%]  mdsm:w-full sm:w-full mx-auto">
            <thead className=" bg-[#0349ff] text-left text-[#f2f2f2] ">
              <tr>
                <th className="px-4 py-2"> ID</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Shipping</th>
                <th className=" text-center py-2">Status</th>
              </tr>
            </thead>
            <tbody className="border-[#e6e6e6] dark:border-[#5a5a5a]  border-[1px] ">
              <tr className=" border-b-[1px] group dark:border-[#5a5a5a]   dark:text-[#f2f2f2]  border-[#e6e6e6] group text-left  text-sm text-[#3b3b3b] py-2">
                <td className=" py-2 dark:text-[#f2f2f2] text-[#3b3b3b] font-semibold  px-4">
                  RTDWQ052
                </td>
                <td className="  py-2  px-4">Apple Watch </td>
                <td className=" py-2 px-4">Henry</td>
                <td className=" py-2 px-4">Sydney</td>
                <td className=" py-2  flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2]  text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr className=" group text-left dark:border-[#5a5a5a]  dark:text-[#f2f2f2] dark:bg-[#5a5a5a]  text-sm text-[#3b3b3b] py-2">
                <td className="  odd:bg-[#ebf4fe] dark:bg-[#5a5a5a] dark:text-[#f2f2f2] py-2 text-[#3b3b3b] font-semibold px-4">
                  HDDBHS687
                </td>
                <td className=" px-4 even:bg-[#ebf4fe] dark:bg-[#5a5a5a] py-2">
                  Apple Watch
                </td>
                <td className="px-4 odd:bg-[#ebf4fe] dark:bg-[#5a5a5a] py-2">
                  Alexander
                </td>
                <td className="px-4 even:bg-[#ebf4fe] dark:bg-[#5a5a5a] py-2">
                  Berlin
                </td>
                <td className="px-4 odd:bg-[#ebf4fe]  dark:bg-[#5a5a5a] py-2 flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2]  text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr className=" border-b-[1px] group dark:border-[#5a5a5a]   border-[#e6e6e6] group text-left  dark:text-[#f2f2f2] text-sm text-[#3b3b3b] py-2">
                <td className=" py-2 text-[#3b3b3b] font-semibold dark:text-[#f2f2f2]  px-4">
                  OJDE121UB
                </td>
                <td className="  py-2  px-4">Samsung Galaxy</td>
                <td className="px-4 py-2 ">Olivia</td>
                <td className="px-4 py-2 ">Paris</td>
                <td className=" py-2  flex justify-center items-center ">
                  <div className=" rounded-3xl  dark:bg-[#f2f2f2] text-[#a51f1fd6] bg-[#f70a0a69] px-4">
                    Cancel
                  </div>
                </td>
              </tr>

              <tr className="group text-left dark:border-[#5a5a5a]  dark:text-[#f2f2f2] dark:bg-[#5a5a5a]  text-sm text-[#3b3b3b] py-2">
                <td className="dark:text-[#f2f2f2]  dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 text-[#3b3b3b] font-semibold px-4">
                  JKSL0945
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  Vacuum Cleaner
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2">
                  Benjamin
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  New York
                </td>
                <td className=" odd:bg-[#ebf4fe] dark:bg-[#5a5a5a] py-2 flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2] text-[#9f9300] bg-[#e3d20863] px-4">
                    Pending
                  </div>
                </td>
              </tr>

              <tr className=" dark:text-[#f2f2f2]  dark:border-[#5a5a5a] border-b-[1px] group   border-[#e6e6e6] group text-left  text-sm text-[#3b3b3b] py-2">
                <td className="dark:text-[#f2f2f2]  py-2 text-[#3b3b3b] font-semibold  px-4">
                  JHDDC021
                </td>
                <td className="  py-2  px-4">PlayStation</td>
                <td className="px-4 py-2 ">Emma</td>
                <td className="px-4 py-2 ">Barcelona</td>
                <td className=" py-2  flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2]  text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr className=" group text-left dark:border-[#5a5a5a]  dark:text-[#f2f2f2] dark:bg-[#5a5a5a]  text-sm text-[#3b3b3b] py-2">
                <td className="dark:text-[#f2f2f2]  dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 text-[#3b3b3b] font-semibold px-4">
                  POIBVV021
                </td>
                <td className="dark:bg-[#5a5a5a] px-4 even:bg-[#ebf4fe] py-2">
                  Coffee Machine
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2">
                  William
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  Rio
                </td>
                <td className="dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2] text-[#a51f1fd6] bg-[#f70a0a69] px-4">
                    Cancel
                  </div>
                </td>
              </tr>

              <tr className=" dark:text-[#f2f2f2] dark:border-[#5a5a5a] border-b-[1px] group   border-[#e6e6e6] group text-left  text-sm text-[#3b3b3b] py-2">
                <td className="dark:text-[#f2f2f2]  py-2 text-[#3b3b3b] font-semibold  px-4">
                  ZSDFCV201
                </td>
                <td className="  py-2  px-4">Nike Air Max</td>
                <td className="px-4 py-2 ">Sophia</td>
                <td className="px-4 py-2 ">Dubai</td>
                <td className=" py-2  flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2]  text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr className=" group text-left dark:border-[#5a5a5a]  dark:text-[#f2f2f2] dark:bg-[#5a5a5a]  text-sm text-[#3b3b3b] py-2">
                <td className="dark:text-[#f2f2f2]  dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 text-[#3b3b3b] font-semibold px-4">
                  MLYTRV01
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  GoPro Camera
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2">
                  James
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  London
                </td>
                <td className="dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2] text-[#9f9300] bg-[#e3d20863] px-4">
                    Pending
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className=" container   mx-auto">
        <h3 className="text-[#434343] dark:text-[#f2f2f2] rowdies lg:text-4xl lge:text-4xl md:text-3xl mdsm:text-2xl  sm:text-2xl  text-left  pb-10 ">
          Frequently Asked Questions
        </h3>
        <div className="lg:w-[50%] lge:w-[50%] md:w-[80%] mdsm:w-[80%] sm:w-[100%] mx-auto">
          <details class="group  border-b-[1px] border-b-[#ccc] pb-2">
            <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
              <span className="dark:text-[#c0c0c0] leading-7 dark:font-normal text-[#434343] font-semibold">
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
              <span className="text-[#434343] font-semibold dark:font-normal dark:text-[#c0c0c0] leading-7">
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
              <span className="text-[#434343] font-semibold dark:font-normal dark:text-[#c0c0c0] leading-7">
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

      <section className=" py-20 container mx-auto ">
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
        <footer className=" container mx-auto ">
          <div className=" grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1">
            <div>
              <h3 className=" text-[#f2f2f2] sedan-sc-font text-4xl">Logo</h3>

              <h5 className=" text-[#d0d0d0] font-semibold raleway-font  tracking-wide text-[14px] mt-6">
                Follow us
              </h5>
              <div className="mt-2 flex space-x-2">
                <div className="group cursor-pointer ">
                  <div className=" h-[30px] w-[30px] rounded-full flex justify-center items-center  group-hover:bg-[#f2f2f2] border border-[#f2f2f2]">
                    <TiSocialFacebook className=" text-[20px] text-[#f2f2f2] group-hover:text-[#191919]" />
                  </div>
                </div>

                <div className="group cursor-pointer ">
                  <div className=" h-[30px] w-[30px] rounded-full flex justify-center items-center  group-hover:bg-[#f2f2f2] border border-[#f2f2f2]">
                    <RiTwitterXFill className=" text-[16px] text-[#f2f2f2] group-hover:text-[#191919]" />
                  </div>
                </div>

                <div className="group cursor-pointer ">
                  <div className=" h-[30px] w-[30px] rounded-full flex justify-center items-center  group-hover:bg-[#f2f2f2] border border-[#f2f2f2]">
                    <LuInstagram className=" text-[16px] text-[#f2f2f2] group-hover:text-[#191919]" />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div className=" lg:pt-0 lge:pt-0 md:pt-6 mdsm:pt-6 sm:pt-6">
              <ul className=" mt-4">
                <li className="group raleway-font  tracking-wide text-[#f2f2f2] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  About
                </li>
                <li className="group raleway-font  tracking-wide mt-2 text-[#f2f2f2] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  Services
                </li>
                <li className="group raleway-font  tracking-wide mt-2 text-[#f2f2f2] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  project
                </li>
                <li className="group raleway-font  tracking-wide mt-2 text-[#f2f2f2] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  Contant
                </li>
                <li className="group raleway-font  tracking-wide mt-2 text-[#f2f2f2] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  Blog
                </li>
              </ul>
            </div>
            <div className=" lg:pt-0 lge:pt-0 md:pt-6 mdsm:pt-6 sm:pt-6">
              <h5 className=" text-[#d0d0d0] font-semibold   raleway-font  tracking-wide text-[14px] mt-4">
                Call us
              </h5>
              <div className=" text-[#f2f2f2] pt-2 raleway-font hover:underline hover:underline-offset-4">
                <a href="telto:+0090123456789">+00 090123456789 </a>
              </div>

              <h5 className="text-[#d0d0d0] font-semibold  raleway-font  tracking-wide text-[14px] mt-4">
                Address
              </h5>
              <div className=" text-[#f2f2f2] pt-2 raleway-font">
                960 Blanche Terrace, Lake Judeside, <br />
                WA 93970-1195
              </div>
            </div>
          </div>
        </footer>
      </section>

      <section className=" dark:bg-[#1e1e1e] container  py-10  mx-auto">
        <div className=" relative rounded-2xl  overflow-hidden ">
          <img
            src={`../Image/overall/building/uilding4.webp`}
            alt="building"
            className="rounded-2xl h-[70vh] w-full object-cover"
          />
          <div className=" absolute top-0 p-6 w-full ">
            <div className=" flex justify-end ">
              <div className=" bg-[#f2f2f2] p-2 lg:hidden lge:hidden md:hidden mdsm:block sm:block cursor-pointer group">
                <AiOutlineMenuFold className=" text-[#333] group-hover:text-[#000]" />
              </div>
            </div>
            <div className=" lg:block lge:block md:block  mdsm:hidden sm:hidden">
              <div className=" grid  grid-cols-12 ">
                <div className=" bg-[#f2f2f2] text-[#333] font-bold  rounded-lg titillium text-left ">
                  Logo
                </div>
                <div className=" col-span-6"></div>
                <div className="rounded-lg col-span-5">
                  <div className=" rounded-lg text-[#333]   font-bold  flex justify-end space-x-10">
                    <div className="bg-[#f2f2f2] dark:bg-[#1e1e1e]  dark:text-[#d1d1d1] dark:hover:text-[#f2f2f2]  hover:text-[#898989] cursor-pointer  rounded-lg titillium  text-left ">
                      About
                    </div>
                    <div className="bg-[#f2f2f2] dark:bg-[#1e1e1e]  dark:text-[#d1d1d1] dark:hover:text-[#f2f2f2]  hover:text-[#898989] cursor-pointer  rounded-lg titillium  text-left ">
                      Services
                    </div>

                    <div className="bg-[#f2f2f2]  dark:bg-[#1e1e1e]  dark:text-[#d1d1d1]  dark:hover:text-[#f2f2f2] hover:text-[#898989] cursor-pointer  rounded-lg titillium  text-left ">
                      Contact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl  py-2  px-4sm:px-0 mt-6">
          <h2 className=" text-[#333] dark:text-[#f2f2f2] font-bold text-[64px] titillium">
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
