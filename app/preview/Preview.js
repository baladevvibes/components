"use client";
import React, { useEffect, useState } from "react";
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
import { RxDoubleArrowRight } from "react-icons/rx";
import { GoKey } from "react-icons/go";
import { FaKey } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FaCloudArrowDown } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiGlobeLine } from "react-icons/ri";
import { BiBroadcast } from "react-icons/bi";
import { BsBinoculars } from "react-icons/bs";
import { RiAirplayLine } from "react-icons/ri";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { RiUserFollowLine } from "react-icons/ri";
import { RiBillLine } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";

export default function Preview() {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState([
    { id: 0, name: "0" },
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "6" },
    { id: 7, name: "7" },
    { id: 8, name: "8" },
    { id: 9, name: "9" },
    { id: 10, name: "10" },
    { id: 11, name: "11" },
  ]);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  const [buttonData, setButtonData] = useState();
  const [buttonNum, setButtonNum] = useState(1);
  const [calculator, setCalculator] = useState();

  const handleMore = () => {
    setButtonNum(buttonNum + 1);
    let cal = 4 * buttonNum + 2;
    let arr = [];
    data?.forEach((el, i) => {
      if (cal >= i) {
        arr.push(el);
        console.log(el);
      }
    });
    setCalculator(cal);
    setButtonData(arr);
  };
  useEffect(() => {
    let arr = [];
    let cal = 2 * buttonNum;
    setCalculator(cal);
    setButtonData(2);
    data?.forEach((el, i) => {
      if (buttonNum === 1) {
        if (cal >= i) {
          arr.push(el);
        }
      }
    });
    setButtonData(arr);
  }, []);
  return (
    <div className=" relative dark:bg-secondary">
      <div className=" py-10 container mx-auto">
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

      <div className=" py-48 container mx-auto">
        <section>
          <div className=" grid grid-cols-5">
            <div className=" col-span-2"></div>
            <div className=" col-span-3">
              <div>
                <form>
                  <div className=" grid grid-cols-2 gap-10">
                    <div>
                      <input
                        type="text"
                        placeholder="First name"
                        className=" border work border-[#ccc] text-[#444545]  focus:outline-none bg-[#f2f2f2]  w-full py-2 px-2"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last name"
                        className=" border work border-[#ccc]  focus:outline-none bg-[#f2f2f2]  w-full py-2 px-2"
                        required
                      />
                    </div>
                  </div>
                  <div className=" pt-6">
                  <input
                        type="text"
                        placeholder="Email"
                        className=" border work border-[#ccc]  focus:outline-none bg-[#f2f2f2]  w-full py-2 px-2"
                        required
                      />
                  </div>
                  <div className=" pt-6">
                  <textarea
                        type="text"
                        placeholder="Message"
                        className=" border work border-[#ccc]  focus:outline-none bg-[#f2f2f2]  w-full py-2 px-2"
                        required
                      />
                  </div>
                  <div className=" pt-6">
                    <button className=" bg-[#656176] work hover:bg-[#DECDF5] hover:text-[#534D56] text-[#fcfcfc] px-10 py-2">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className=" px-4 container mx-auto">
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

      <section className=" lg:block lge:block md:hidden mdsm:hidden sm:hidden py-32">
        <div className=" bg-[#f2f2f2]">
          <div className=" container mx-auto">
            <div className="group grid grid-cols-12 py-10">
              <div className=" col-span-9 cursor-pointer flex space-x-6 ">
                <h4 className=" text-4xl text-[#444]  group-hover:text-[#222] title-font">
                  Lorem ipsum is placeholder text commonly
                </h4>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#444] group-hover:text-[#222] text-5xl"
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
        <div className=" bg-[#f2f2f2]">
          <div className=" container mx-auto">
            <div className="group grid grid-cols-12 py-10">
              <div className=" col-span-9 cursor-pointer flex space-x-6 ">
                <h4 className=" text-4xl text-[#444]  group-hover:text-[#222] title-font">
                  Lorem ipsum is placeholder text commonly
                </h4>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#444] group-hover:text-[#222] text-5xl"
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
        <div className=" bg-[#f2f2f2]">
          <div className=" container mx-auto">
            <div className="group grid grid-cols-12 py-10">
              <div className=" col-span-9 cursor-pointer flex space-x-6 ">
                <h4 className=" text-4xl text-[#444]  group-hover:text-[#222] title-font">
                  Lorem ipsum is placeholder text commonly
                </h4>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#444] group-hover:text-[#222] text-5xl"
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
        <div className=" bg-[#f2f2f2]">
          <div className=" container mx-auto">
            <div className="group grid grid-cols-12 py-10">
              <div className=" col-span-9 cursor-pointer flex space-x-6 ">
                <h4 className=" text-4xl text-[#444]  group-hover:text-[#222] title-font">
                  Lorem ipsum is placeholder text commonly
                </h4>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[#444] group-hover:text-[#222] text-5xl"
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
                <div className=" py-4 bg-[#f2f2f2] rounded-b-lg ">
                  <h4 className="  px-4 text-[#444] flex group-hover:text-[#222] title-font">
                    Lorem ipsum is placeholder text commonly{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] ml-2 group-hover:text-[#222] text-4xl"
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
                <div className=" py-4 bg-[#f2f2f2] rounded-b-lg ">
                  <h4 className="  px-4 text-[#444] flex group-hover:text-[#222] title-font">
                    Lorem ipsum is placeholder text commonly{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] ml-2 group-hover:text-[#222] text-4xl"
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
                <div className=" py-4 bg-[#f2f2f2] rounded-b-lg ">
                  <h4 className="  px-4 text-[#444] flex group-hover:text-[#222] title-font">
                    Lorem ipsum is placeholder text commonly{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] ml-2 group-hover:text-[#222] text-4xl"
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
                <div className=" py-4 bg-[#f2f2f2] rounded-b-lg ">
                  <h4 className="  px-4 text-[#444] flex group-hover:text-[#222] title-font">
                    Lorem ipsum is placeholder text commonly{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] ml-2 group-hover:text-[#222] text-4xl"
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

      <div className=" container mx-auto">
        <section>
          <div className=" lg:grid grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-4">
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

      {/* <div role="status" class="max-w-sm animate-pulse">
        <div class="h-2.5 bg-[#cccccc]  rounded-full dark:bg-[#374151] w-48 mb-4"></div>
        <div class="h-2 bg-[#cccccc] rounded-full dark:bg-[#374151] max-w-[360px] mb-2.5"></div>
        <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] mb-2.5"></div>
        <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-[330px] mb-2.5"></div>
        <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-[300px] mb-2.5"></div>
        <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-[360px]"></div>
        <span class="sr-only">Loading...</span>
      </div> */}

      <div className="py-32">
        <section className=" container mx-auto">
          {/* <marquee> */}
          <div className="   relative w-[40%] mx-auto">
            <h4 className="varela-round-font font-semibold text-center text-[#26547C] text-3xl pb-4">
              News and Events
            </h4>
            <div className="flex mb-2 w-full">
              <div className="relative w-[20%]">
                <div className=" py-1 varela-round-font bg-[#FFD166] border-t-[1px]  border-[#FFD166]  px-2 text-center">
                  12 Aug
                </div>
                <div className=" py-1  varela-round-font bg-[#26547C]  border-b-[1px]  border-[#26547C] text-[#fcfcfc] px-2 text-center">
                  2024
                </div>
              </div>
              <div className=" border-b-[1px] border-t-[1px] border-r-[1px]  border-[#ccc]  relative px-4 flex w-[80%]">
                <div className=" block">
                  <div className=" py-1 pt-2 dark:text-[#fcfcfc] varela-round-font  px-2 text-left">
                    Lorem ipsum is placeholder text commonly.
                  </div>
                  <div className=" text-[#26547C] dark:text-[#FFD166] jost-font   px-2 text-left">
                    Alumni
                  </div>
                </div>

                <div></div>
              </div>
            </div>

            <div className="flex mb-2 w-full">
              <div className="relative w-[20%]">
                <div className=" py-1 bg-[#FFD166] border-t-[1px]  border-[#FFD166]  px-2 text-center">
                  14 Aug
                </div>
                <div className=" py-1 bg-[#26547C]  border-b-[1px]  border-[#26547C] text-[#fcfcfc] px-2 text-center">
                  2024
                </div>
              </div>
              <div className=" border-b-[1px] border-t-[1px] border-r-[1px]  border-[#ccc]  relative px-4 flex w-[80%]">
                <div className=" block">
                  <div className=" py-1 pt-2 dark:text-[#fcfcfc]  px-2 text-left">
                    Lorem ipsum is placeholder text commonly.
                  </div>
                  <div className=" text-[#26547C] dark:text-[#FFD166] px-2 text-left">
                    Sports
                  </div>
                </div>

                <div></div>
              </div>
            </div>

            <div className="flex mb-2 w-full">
              <div className="relative w-[20%]">
                <div className=" py-1 bg-[#FFD166] border-t-[1px]  border-[#FFD166]  px-2 text-center">
                  17 Aug
                </div>
                <div className=" py-1 bg-[#26547C]  border-b-[1px]  border-[#26547C] text-[#fcfcfc] px-2 text-center">
                  2024
                </div>
              </div>
              <div className=" border-b-[1px] border-t-[1px] border-r-[1px]  border-[#ccc]  relative px-4 flex w-[80%]">
                <div className=" block">
                  <div className=" py-1 pt-2 dark:text-[#fcfcfc]  px-2 text-left">
                    Lorem ipsum is placeholder text commonly.
                  </div>
                  <div className=" text-[#26547C] dark:text-[#FFD166] px-2 text-left">
                    Meeting
                  </div>
                </div>

                <div></div>
              </div>
            </div>

            <div className="flex mb-2 w-full">
              <div className="relative w-[20%]">
                <div className=" py-1 bg-[#FFD166] border-t-[1px]  border-[#FFD166]  px-2 text-center">
                  4 Sep
                </div>
                <div className=" py-1 bg-[#26547C]  border-b-[1px]  border-[#26547C] text-[#fcfcfc] px-2 text-center">
                  2024
                </div>
              </div>
              <div className=" border-b-[1px] border-t-[1px] border-r-[1px]  border-[#ccc]  relative px-4 flex w-[80%]">
                <div className=" block">
                  <div className=" py-1 pt-2 dark:text-[#fcfcfc]  px-2 text-left">
                    Lorem ipsum is placeholder text commonly.
                  </div>
                  <div className=" text-[#26547C] dark:text-[#FFD166] px-2 text-left">
                    Social
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
          {/* </marquee> */}
        </section>
      </div>

      <div className=" relative bg-[url(/Image/overall/building/building4.webp)] bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
        <div className=" py-[70px] bg-[#ff0014c9]">
          <div className=" container  mx-auto">
            <div className=" grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10">
              <div>
                <div className=" h-[100px] bg-[#fff] flex mx-auto justify-center items-center	 w-[100px] rounded-full   ">
                  <RiAirplayLine className=" text-[40px] text-[#ff0014c9]" />
                </div>
                <h4 className=" text-center pt-6 Fira text-[#fff] text-3xl">
                  Design
                </h4>
              </div>
              <div>
                <div className=" h-[100px] bg-[#fff] flex mx-auto justify-center items-center	 w-[100px] rounded-full   ">
                  <RiBarChartGroupedLine className=" text-[40px] text-[#ff0014c9]" />
                </div>
                <h4 className=" text-center pt-6 Fira text-[#fff] text-3xl">
                  Chart
                </h4>
              </div>
              <div>
                <div className="  h-[100px] bg-[#fff] flex mx-auto justify-center items-center	 w-[100px] rounded-full   ">
                  <RiBillLine className=" text-[40px] text-[#ff0014c9]" />
                </div>
                <h4 className=" text-center pt-6 Fira text-[#fff] text-3xl">
                  Readability
                </h4>
              </div>
              <div>
                <div className=" h-[100px] bg-[#fff] flex mx-auto justify-center items-center	 w-[100px] rounded-full   ">
                  <RiUserFollowLine className=" text-[40px] text-[#ff0014c9]" />
                </div>
                <h4 className=" text-center pt-6 Fira text-[#fff] text-3xl">
                  User
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[100px]   w-full">
        <section className="container mx-auto">
          <div className=" grid lg:grid-cols-4  lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10">
            <div className="bg-[#f2f2f2] dark:bg-[#313131] relative p-4 border-[#fff] dark:border-[#313131] border">
              <div className=" grid grid-cols-2">
                <div className=" pt-6">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class=" text-5xl  text-[#294f7f]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </div>
              <div className=" italic Mulish dark:text-[#f2f2f2] text-[18px] pt-6  text-[#07172a]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </div>
              <div className=" pt-10 flex pb-4 space-x-2">
                <img
                  src={`../Image/overall/person/person3.webp`}
                  alt="person"
                  className="h-[50px] object-cover w-[50px] rounded-full bg-[#294f7f]"
                />
                <div></div>
                <div>
                  <h3 className="font-semibold dark:text-[#f2f2f2] Cambay pt-2 text-[#222] text-left  text-[16px]">
                    Williams
                  </h3>
                  <h3 className="font-normal Cambay dark:text-[#f2f2f2] text-[#07172a]  text-[12px] text-left">
                    Founder
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-[#f2f2f2] dark:bg-[#313131] relative p-4 border-[#fff] dark:border-[#313131] border">
              <div className=" grid grid-cols-2">
                <div className=" pt-6">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class=" text-5xl  text-[#940027]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </div>
              <div className=" italic Mulish dark:text-[#f2f2f2] text-[18px] pt-6  text-[#07172a]">
                Ac accumsan per mollis cubilia consequat proin pharetra aptent.
                Amet elit donec erat ligula blandit dapibus metus. Per congue
                torquent ac tincidunt proin platea inceptos maximus.
              </div>
              <div className=" pt-10 flex pb-4 space-x-2">
                <img
                  src={`../../Image/teams/Team001/person2.webp`}
                  alt="person"
                  className="h-[50px] object-cover w-[50px] rounded-full bg-[#294f7f]"
                />
                <div></div>
                <div>
                  <h3 className="font-semibold dark:text-[#f2f2f2] Cambay pt-2 text-[#222] text-left  text-[16px]">
                    Michael Harrison
                  </h3>
                  <h3 className="font-normal Cambay dark:text-[#f2f2f2] text-[#07172a]  text-[12px] text-left">
                    Associate CEO
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-[#f2f2f2] dark:bg-[#313131] relative p-4 border-[#fff] dark:border-[#313131] border">
              <div className=" grid grid-cols-2">
                <div className=" pt-6">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class=" text-5xl  text-[#294f7f]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </div>
              <div className=" italic Mulish  dark:text-[#f2f2f2] text-[18px] pt-6  text-[#07172a]">
                Ac accumsan per mollis cubilia consequat proin pharetra aptent.
                Amet elit donec erat ligula blandit dapibus metus. Per congue
                torquent ac tincidunt proin platea inceptos maximus.
              </div>
              <div className=" pt-10 flex pb-4 space-x-2">
                <img
                  src={`../../Image/teams/Team001/person3.webp`}
                  alt="person"
                  className="h-[50px] object-cover w-[50px] rounded-full bg-[#294f7f]"
                />
                <div></div>
                <div>
                  <h3 className="font-semibold dark:text-[#f2f2f2] Cambay pt-2 text-[#222] text-left  text-[16px]">
                    Emily Parker
                  </h3>
                  <h3 className="font-normal Cambay dark:text-[#f2f2f2] text-[#07172a]  text-[12px] text-left">
                    Team
                  </h3>
                </div>
              </div>
            </div>

            <div className=" relative h-full w-full flex justify-center items-center ">
              <img
                src={`../Image/overall/person/person4.png`}
                alt="person"
                className="h-[300px] mx-auto"
              />
              {/* <img src={`../Image/overall/svg/arrow.svg`} alt="arrow"  className=""/> */}

              {/* <div className="h-[150px] object-cover w-[150px] rounded-full bg-[#940027] absolute bottom-0">
              <img
                src={`../Image/overall/person/person1.webp`}
                alt="person"
                className="h-[130px] mt-4 ml-4 object-cover w-[130px] rounded-full "
              />
              </div> */}
            </div>
          </div>
        </section>
      </div>
      <div className="text-center container mx-auto">
        {buttonData?.map((v, i) => {
          return (
            <>
              <div>{v?.name}</div>
            </>
          );
        })}
        <button onClick={() => handleMore()}>more </button>
      </div>

      <div className="py-40 container mx-auto">
        <section>
          <div className=" grid lg:grid-cols-4 lge:grid-cols-3 md:grid-cols-3 mdsm:grid-cols-2 sm:grid-cols-1 gap-10 ">
            <div className=" bg-[#5700c9] w-56  mx-auto  p-8 px-4 rounded-lg">
              <div className=" flex justify-end">
                <RiGlobeLine className=" text-[60px] text-[#7812ff]" />
              </div>
              <p className="pt-16 NewsCycle text-2xl text-[#f2f2f2]">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <div className=" bg-[#6C0345] w-56 mx-auto  p-8 px-4 rounded-lg">
              <div className=" flex justify-end">
                <MdSecurity className=" text-[60px] text-[#ffedc57a]" />
              </div>
              <p className="pt-16 NewsCycle text-2xl text-[#f2f2f2]">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <div className=" bg-[#cf021a] w-56  mx-auto  p-8 px-4 rounded-lg">
              <div className=" flex justify-end">
                <BiBroadcast className=" text-[60px] text-[#f569797a]" />
              </div>
              <p className="pt-16 NewsCycle text-2xl text-[#f2f2f2]">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <div className=" bg-[#5a5a5a] w-56 mx-auto  p-8 px-4 rounded-lg">
              <div className=" flex justify-end">
                <BsBinoculars className=" text-[60px] text-[#a9a8a857]" />
              </div>
              <p className="pt-16 NewsCycle text-2xl text-[#f2f2f2]">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className=" container mx-auto">
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
              </tbody>
            </table>
          </div>
        </div>

        {/* <div role="status" class="max-w-sm animate-pulse">
          <div class="h-2.5 bg-[#cccccc]  rounded-full dark:bg-[#374151] w-48 mb-4"></div>
          <div class="h-2 bg-[#cccccc] rounded-full dark:bg-[#374151] max-w-[360px] mb-2.5"></div>
          <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] mb-2.5"></div>
          <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-[330px] mb-2.5"></div>
          <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-[300px] mb-2.5"></div>
          <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-[360px]"></div>
          <span class="sr-only">Loading...</span>
        </div> */}
      </div>

      <div className=" py-[150px] container mx-auto">
        <section className=" w-[80%] mx-auto">
          <details class="group  relative pb-2">
            <summary class="flex relative mt-4 border-[1px] border-[#ccc] dark:border-[#5a5a5a] py-3 px-3 cursor-pointer list-none font-medium">
              <span class="transition flex justify-center items-center group-open:rotate-90">
                <RxDoubleArrowRight className="text-[#5a5a5a] dark:text-[#cecece] " />
              </span>
              <span class="text-[#5a5a5a] dark:text-[#cecece] px-4 font-semibold  leading-7 ">
                Apple
              </span>
            </summary>
            <span className=" absolute w-auto top-3 right-5 flex justify-end">
              <div className=" group">
                <RiDeleteBinLine className="text-[#5a5a5a] dark:text-[#cecece] cursor-pointer dark:hover:text-[#e5051f] hover:text-[#e5051f] text-[22px] mt-[2px]" />
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
                <RxDoubleArrowRight className="text-[#5a5a5a] dark:text-[#cecece] " />
              </span>
              <span class="text-[#5a5a5a] dark:text-[#cecece] px-4 font-semibold  leading-7 ">
                Redmi
              </span>
            </summary>
            <span className=" absolute w-auto top-3 right-5 flex justify-end">
              <div className=" group">
                <RiDeleteBinLine className="text-[#5a5a5a] dark:text-[#cecece] cursor-pointer dark:hover:text-[#e5051f] hover:text-[#e5051f] text-[22px] mt-[2px]" />
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
                <RxDoubleArrowRight className="text-[#5a5a5a] dark:text-[#cecece] " />
              </span>
              <span class="text-[#5a5a5a] dark:text-[#cecece] px-4 font-semibold  leading-7 ">
                Samsung
              </span>
            </summary>
            <span className=" absolute w-auto top-3 right-5 flex justify-end">
              <div className=" group">
                <RiDeleteBinLine className="text-[#5a5a5a] dark:text-[#cecece] cursor-pointer dark:hover:text-[#e5051f] hover:text-[#e5051f] text-[22px] mt-[2px]" />
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

      <div className=" container mx-auto">
        <section>
          <div className=" grid grid-cols-3">
            <div className=" grid grid-cols-5 gap-5 ">
              <div className=" flex justify-end">
                <FaKey className=" text-4xl text-[#C42021]" />
              </div>
              <div className=" col-span-4">
                <h3 className="bakbak-one-font text-3xl text-[#C42021]">Key</h3>
                <p className=" pt-3 Fira text-[#374B4A] leading-7 dark:text-[#f2f2f2]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>

            <div className=" grid grid-cols-5 gap-5 ">
              <div className=" flex justify-end">
                <MdSecurity className=" text-4xl text-[#C42021]" />
              </div>
              <div className=" col-span-4">
                <h3 className="bakbak-one-font text-3xl text-[#C42021]">
                  Secure
                </h3>
                <p className=" pt-3 Fira text-[#374B4A] leading-7 dark:text-[#f2f2f2]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>

            <div className=" grid grid-cols-5 gap-5 ">
              <div className=" flex justify-end">
                <FaCloudArrowDown className=" text-4xl text-[#C42021]" />
              </div>
              <div className=" col-span-4">
                <h3 className="bakbak-one-font text-3xl text-[#C42021]">
                  Cloud
                </h3>
                <p className=" pt-3 Fira text-[#374B4A] leading-7 dark:text-[#f2f2f2]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-40 container mx-auto px-4">
        <div className=" grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 gap-10">
          <div>
            <h3 className="pt-14 text-5xl text-[#333533] font-semibold REM-font sm:text-4xl dark:text-[#F5CB5C] ">
              About us
            </h3>
            <p className="pt-6 text-[#333] merriweather lg:w-[80%] lge:w-[80%] md:w-full  dark:text-[#e6e6e6] mdsm:w-full sm:w-full text-[16px] leading-7 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p className="pt-2 text-[#333] merriweather lg:w-[80%] lge:w-[80%] md:w-full   mdsm:w-full sm:w-full dark:text-[#e6e6e6] text-[16px] leading-7 text-justify">
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className=" flex justify-end relative">
            <div className=" h-[80px] w-[80px]  bg-[#F5CB5C] text-4xl flex justify-center items-center  rounded-full absolute top-6 left-28 text-[#333533] font-semibold milonga-font">
              25<sup className=" text-[16px] mb-6 milonga-font">+</sup>
            </div>
            <div className=" absolute left-1 z-10 bottom-6 ">
              <div className=" relative">
                <div className=" absolute -top-10 -left-16 -z-20 ">
                  <img
                    src={`../Image/about/about005/vector.png`}
                    className=" "
                  />
                </div>

                <img
                  src={`../Image/about/about005/table.webp`}
                  alt="table"
                  className=" w-[100%] h-[250px]  object-cover p-4 rounded-lg bg-[#fff] "
                />
              </div>
            </div>
            <img
              src={`../Image/about/about005/tea-shop.webp`}
              alt="tea-shop"
              className=" w-[60%] sm:w-[80%] h-[450px]  object-cover"
            />
          </div>
        </div>
      </section>

      <section className="  container mx-auto px-4">
        <div className=" grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1  mdsm:grid-cols-1 sm:grid-cols-1 gap-4">
          <div className=" border border-[#e2e2e2] dark:border-[#454545] rounded-lg ">
            <div className="group grid  md:grid-cols-3  mdsm:grid-cols-1 sm:grid-cols-1">
              <div className=" overflow-hidden  md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none mdsm:rounded-tl-lg mdsm:rounded-tr-lg sm:rounded-tl-lg sm:rounded-tr-lg ">
                <img
                  src="../Image/blog/001/satellite.webp"
                  alt="satellites "
                  className=" md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none  mdsm:rounded-tl-lg  mdsm:rounded-tr-lg sm:rounded-tl-lg sm:rounded-tr-lg h-full object-cover group-hover:scale-125  duration-700"
                />
              </div>
              <div className=" col-span-2 px-4 py-4">
                <h2 className=" text-2xl text-[#1e1e1e] leading-6 Anek-Tamil font-semibold">
                  Own satellites against US
                </h2>
                <p className="pt-2 varela-round-font  dark:text-[#f2f2f2] leading-6  text-[#424242]">
                  They're using our own satellites against us. And the clock is
                  ticking. This thing comes fully loaded. AM/FM radio.
                </p>
                <button className="varela-round-font group hover:underline hover:underline-offset-2 flex pt-3 text-[#0064b0] hover:text-[#003b80]  duration-700 ">
                  Read more...
                </button>
              </div>
            </div>
          </div>

          <div className=" border border-[#e2e2e2] dark:border-[#454545] rounded-lg ">
            <div className="group grid  md:grid-cols-3  mdsm:grid-cols-1 sm:grid-cols-1">
              <div className=" overflow-hidden  md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none mdsm:rounded-tl-lg mdsm:rounded-tr-lg sm:rounded-tl-lg sm:rounded-tr-lg ">
                <img
                  src="../Image/blog/001/dinosaurs.webp"
                  alt="dinosaurs"
                  className=" md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none  mdsm:rounded-tl-lg  mdsm:rounded-tr-lg sm:rounded-tl-lg sm:rounded-tr-lg h-full object-cover group-hover:scale-125  duration-700"
                />
              </div>
              <div className=" col-span-2 px-4 py-4">
                <h2 className=" text-2xl text-[#1e1e1e] leading-6 Anek-Tamil font-semibold">
                  God destroys dinosaurs
                </h2>
                <p className="pt-2 varela-round-font  leading-6 dark:text-[#f2f2f2]  text-[#424242]">
                  God creates dinosaurs. God destroys dinosaurs. God creates
                  Man. Man destroys God. Man creates Dinosaurs.
                </p>
                <button className="varela-round-font group hover:underline hover:underline-offset-2 flex pt-3 text-[#0064b0] hover:text-[#003b80]  duration-700 ">
                  Read more...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* <section className=" relative">
        <div className=" absolute z-10 w-full top-0">
          <div className="h-full container mx-auto w-full ">
            <div className="  w-[100%]">
              <div className=" min-h-[100vh]   text-center flex justify-center items-center">
                <div className=" block">
                  <h2 className="dark:text-[#f2f2f2] text-5xl Archivo">
                    
                    Innovate
                    <span className="text-5xl Archivo font-normal">
                      with Us
                    </span>
                  </h2>

                  <h3 className=" text-2xl dark:text-[#f2f2f2] text-[#434343] w-[60%] mx-auto work pt-4">
                    The Future of Technology Starts Here.Leading the Way in
                    <span className=" font-semibold dark:text-[#f2f2f2] text-[#000]">
                      Technological Advancements
                    </span>
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
      </section> */}

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
