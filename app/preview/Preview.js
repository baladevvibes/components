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

      <section>
        <div className=" grid py-40 lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1">
          <div className=" bg-[#8fa8ae] py-20 px-10 overflow-hidden relative ">
            <img
              src={`../Image/overall/mesh/redmi.png`}
              alt="redmi"
              className="sm:hidden right-0 top-12 rotate-[340deg] absolute h-[350px] "
            />
            <div>
              <h2 className=" text-5xl  font-normal merriweather text-[#002b33]">
                {" "}
                Xiaomi{" "}
              </h2>
              <h4 className=" text-2xl merriweather font-semibold pt-3 text-[#002b33]">
                Redmi 9{" "}
                <span className="  font-normal merriweather">pictures</span>
              </h4>
              <h6 className=" text-1xl font-normal pt-3 text-[#00000c]"></h6>

              <div className="pt-6">
                <div className=" flex space-x-2  pt-3">
                  <MdOutlinePhoneAndroid className=" text-[20px] text-[#002b33]" />{" "}
                  <p className="merriweather text-1xl font-normal text-[#00000c]">
                    194g, 9mm thickness
                  </p>
                </div>

                <div className=" flex space-x-2  pt-3">
                  <RiAndroidLine className=" text-[20px] text-[#002b33]" />{" "}
                  <p className="merriweather text-1xl font-normal text-[#00000c]">
                    Android 10, MIUI 12
                  </p>
                </div>
                <div className=" flex space-x-2  pt-3">
                  <MdOutlineSdStorage className=" text-[20px] text-[#002b33]" />{" "}
                  <p className="merriweather text-1xl font-normal text-[#00000c]">
                    64GB/128GB storage, microSDXC
                  </p>
                </div>
                <div className=" flex space-x-2  pt-3">
                  <MdOutlineDateRange className=" text-[20px] text-[#002b33]" />{" "}
                  <p className="merriweather text-1xl font-normal text-[#00000c]">
                    Released 2020, August 31
                  </p>
                </div>
              </div>

              <button className="mt-6 merriweather text-2xl text-[#f2f2f2] bg-[#002b33] py-2 px-16 rounded-full"> 	$ 138 </button>
            </div>
          </div>
          <div className=" bg-[#ff9580] py-20 px-10 overflow-hidden relative ">
            <img
              src={`../Image/overall/mesh/redmi.png`}
              alt="redmi"
              className="sm:hidden right-0 top-12 rotate-[340deg] absolute h-[350px] "
            />
            <div>
              <h2 className=" text-5xl  font-normal merriweather text-[#002b33]">
                {" "}
                Xiaomi{" "}
              </h2>
              <h4 className=" text-2xl merriweather font-semibold pt-3 text-[#000]">
              1.08 m LS03D 
                <span className="  font-normal merriweather">The Frame QLED 4K Smart TV</span>
              </h4>
              <h6 className=" text-1xl font-normal pt-3 text-[#00000c]"></h6>

              <div className="pt-6">
                <div className=" flex space-x-2  pt-3">
                  <MdOutlinePhoneAndroid className=" text-[20px] text-[#002b33]" />{" "}
                  <p className="merriweather text-1xl font-normal text-[#00000c]">
                    194g, 9mm thickness
                  </p>
                </div>

                <div className=" flex space-x-2  pt-3">
                  <RiAndroidLine className=" text-[20px] text-[#002b33]" />{" "}
                  <p className="merriweather text-1xl font-normal text-[#00000c]">
                    Android 10, MIUI 12
                  </p>
                </div>
                <div className=" flex space-x-2  pt-3">
                  <MdOutlineSdStorage className=" text-[20px] text-[#002b33]" />{" "}
                  <p className="merriweather text-1xl font-normal text-[#00000c]">
                    64GB/128GB storage, microSDXC
                  </p>
                </div>
                <div className=" flex space-x-2  pt-3">
                  <MdOutlineDateRange className=" text-[20px] text-[#002b33]" />{" "}
                  <p className="merriweather text-1xl font-normal text-[#00000c]">
                    Released 2020, August 31
                  </p>
                </div>
              </div>

              <button className="mt-6 merriweather text-2xl text-[#f2f2f2] bg-[#002b33] py-2 px-16 rounded-full"> 	$ 138 </button>
            </div>
          </div>
        </div>
      </section>

      <section className=" relative">
        <div className=" absolute w-full top-0">
          <div className="h-full container mx-auto w-full ">
            <div className="  w-[100%]">
              <h2 className=" min-h-[100vh] text-5xl Volkhov text-center flex justify-center items-center">
                Poppins Geometric sans serif typefaces
              </h2>
            </div>
          </div>
        </div>
        <img
          src={`../Image/overall/mesh/mesh1.png`}
          className=" w-full min-h-[100vh]"
          alt="mesh"
        />
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
              <span className="text-[#434343] font-semibold dark:font-normal dark:text-[#c0c0c0] leading-7">
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
              <span className="text-[#434343] font-semibold dark:font-normal dark:text-[#c0c0c0] leading-7">
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
                  {" "}
                  About{" "}
                </li>
                <li className="group raleway-font  tracking-wide mt-2 text-[#f2f2f2] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  {" "}
                  Services{" "}
                </li>
                <li className="group raleway-font  tracking-wide mt-2 text-[#f2f2f2] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  {" "}
                  project
                </li>
                <li className="group raleway-font  tracking-wide mt-2 text-[#f2f2f2] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  {" "}
                  Contant
                </li>
                <li className="group raleway-font  tracking-wide mt-2 text-[#f2f2f2] cursor-pointer hover:underline hover:underline-offset-4 flex space-x-5">
                  {" "}
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
