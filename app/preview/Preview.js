"use client";
import React, { useEffect, useState } from "react";
import "../style.css";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import {
  AiFillProduct,
  AiOutlineMenuFold,
  AiOutlineProduct,
} from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import {
  TiSocialFacebook,
  TiStarFullOutline,
  TiStarOutline,
} from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { LuInstagram, LuPhone } from "react-icons/lu";
import { VscEye } from "react-icons/vsc";
import {
  MdOutlineAlternateEmail,
  MdOutlineDateRange,
  MdPeopleAlt,
} from "react-icons/md";
import { RiAndroidLine } from "react-icons/ri";
import { MdOutlineSdStorage } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TbBrandApple } from "react-icons/tb";
import { RxDoubleArrowRight } from "react-icons/rx";
import { GoKey } from "react-icons/go";
import {
  FaAudioDescription,
  FaBloggerB,
  FaChargingStation,
  FaHeart,
  FaKey,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import {
  FaArrowUpShortWide,
  FaCloudArrowDown,
  FaHandHoldingDollar,
} from "react-icons/fa6";
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
import { HiOutlineSparkles } from "react-icons/hi";
import { RiEarthLine } from "react-icons/ri";
import { RiHeartAdd2Line } from "react-icons/ri";
import { RiInputField } from "react-icons/ri";
import { TbBrandCashapp } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
import { GrFingerPrint, GrLocationPin } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";
import { FiCodesandbox, FiCommand, FiDribbble, FiHeart } from "react-icons/fi";
import { IoBookOutline, IoStarOutline } from "react-icons/io5";

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

  const handlehome = () => {};
  return (
    <div className=" relative dark:bg-[#fb3640]">
      <div className=" py-10 container px-4 mx-auto">
        <div className=" sticky top-2 flex justify-end px-10 pb-10">
          <div onClick={() => darkModeHandler()}>
            <div className={` group`}>
              <div
                className={` ${
                  dark ? `bg-[#fb3640]` : ``
                } p-1.5 border  border-[#ccc]  group-hover:bg-[#fb3640]  cursor-pointer  rounded-md`}
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

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1 gap-10">
            <div>
            <img
                src="../../Image/card/card003/Image001.webp"
                alt="Car"
                className="h-[450px] w-full  object-cover"
              />
              <div className="-mt-20 bg-[#fff]">
      
              <div className=" w-[80%] bg-[#fff] relative pb-10  px-6 z-10 ">
                <h4 className="text-[24px] merriweather pt-6 pb-6 text-[#333333] font-semibold">New Arrivals</h4>
                <p className="bg-[#fff] text-[16px] leading-7 merriweather text-[#5a5a5a]">
                Discover the latest additions to our showroom! Featuring cutting-edge technology, modern design, and superior performance, our new arrivals are sure to impress. Be among the first to test drive these stunning vehicles.
                </p>
                </div>
              </div>
            </div>

            <div>
            <img
                src="../../Image/card/card003/Image002.webp"
                alt="Car"
                className="h-[450px] w-full  object-cover"
              />
              <div className="-mt-20 bg-[#fff]">
      
              <div className=" w-[80%] bg-[#fff] relative pb-10  px-6 z-10 ">
                <h4 className="text-[24px] merriweather pt-6 pb-6 text-[#333333] font-semibold">Customer Reviews</h4>
                <p className="bg-[#fff] text-[16px] leading-7 merriweather text-[#5a5a5a]">
                Our customers love us! Read real reviews and testimonials from satisfied buyers who found their perfect vehicle with us. Their experiences speak volumes about our commitment to quality and service.
                </p>
                </div>
              </div>
            </div>

            <div>
            <img
                src="../../Image/card/card003/Image003.webp"
                alt="Car"
                className="h-[450px] w-full  object-cover"
              />
              <div className="-mt-20 bg-[#fff]">
      
              <div className=" w-[80%] bg-[#fff] relative pb-10  px-6 z-10 ">
                <h4 className="text-[24px] merriweather pt-6 pb-6 text-[#333333] font-semibold">Special Offers </h4>
                <p className="bg-[#fff] text-[16px] leading-7 merriweather text-[#5a5a5a]">
                Take advantage of our limited-time special offers and drive away with incredible savings. From discounted prices to attractive financing options, there's never been a better time to buy your dream car.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-20 bg-[#f2f2f2] border-[#ccc] border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-2  sm:grid-cols-1  ">
            <h6 className=" text-[#5a5a5a] sm:flex sm:justify-center Volkhov text-[16px] pt-10">
              © 2024 makecomponents, Inc. All rights reserved.
            </h6>
            <div className="flex justify-end sm:justify-center">
              <div className="pt-10  ">
                <div className="flex  space-x-4">
                  <p className="text-[#5a5a5a] Volkhov">Follow us</p>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.2"
                    baseProfile="tiny"
                    viewBox="0 0 24 24"
                    class=" text-[20px] text-[#333] cursor-pointer hover:text-[#000] "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 10h3v3h-3v7h-3v-7h-3v-3h3v-1.255c0-1.189.374-2.691 1.118-3.512.744-.823 1.673-1.233 2.786-1.233h2.096v3h-2.1c-.498 0-.9.402-.9.899v2.101z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="  text-[16px] text-[#333] cursor-pointer hover:text-[#000] mt-0.5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class=" text-[16px] text-[#333] cursor-pointer hover:text-[#000] mt-0.5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-20">
        <div className=" container mx-auto">
          <div className=" grid lg:grid-cols-12  lge:grid-cols-12 md:grid-cols-1  mdsm:grid-cols-1 sm:grid-cols-1 lg:gap-2 lge:gap-2 md:gap-0 mdsm:gap-0 sm:gap-0">
            <div className=" col-span-3">
              <img
                src="../../Image/d-animals/dog/dog001.webp"
                alt="dog"
                className="h-[500px] w-full  object-cover"
              />
            </div>
            <div className=" col-span-6 lg:gap-2 lge:gap-2 md:gap-0 mdsm:gap-0 sm:gap-0 lg:pt-0 lge:pt-0 md:pt-2 mdsm:pt-2 sm:pt-2 ">
              <div className="h-[240px]">
                <div className=" grid grid-cols-2 lg:gap-2 lge:gap-2 md:gap-0 mdsm:gap-0 sm:gap-0">
                  <div>
                    <img
                      src="../../Image/d-animals/dog/dog003.webp"
                      alt="dog"
                      className="h-[240px] w-full  object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src="../../Image/d-animals/dog/dog002.webp"
                      alt="dog"
                      className="h-[240px]  w-full  object-cover lg:pl-0 lge:pl-0 md:pl-2 mdsm:pl-2 sm:pl-2"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[250px] lg:pt-2 lge:pt-2  md:pt-2 mdsm:pt-2 sm:pt-2">
                <img
                  src="../../Image/d-animals/dog/dog006.webp"
                  alt="dog"
                  className="h-[250px]  w-full  object-cover"
                />
              </div>
            </div>
            <div className=" col-span-3 lg:mt-0 lge:mt-0 md:mt-4 mdsm:mt-4 sm:mt-4">
              <img
                src="../../Image/d-animals/dog/dog005.webp"
                alt="dog"
                className="h-[500px]  w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 ">
        <div className=" container mx-auto">
          <div className="grid lg:grid-cols-2 lge:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 gap-10  p-10">
            <div className="">
              <div className="grid grid-cols-3 sm:grid-cols-1 sm:gap-0 gap-6 border border-[#dbdbdb]  rounded-xl shadow-2xl p-4">
                <div className="">
                  <img
                    src="../../Image/course/js.png"
                    alt="course"
                    className="rounded-xl h-full sm:h-[300px] sm:w-full object-cover"
                  />
                </div>
                <div className="   col-span-2">
                  <div className="flex pt-2 space-x-1">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" text-[#f8af1b] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" text-[#f8af1b] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" text-[#f8af1b] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class=" text-[#d5d5d5] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                      ></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class=" text-[#d5d5d5] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                      ></path>
                    </svg>
                  </div>

                  <h4 className="text-2xl pt-4 text-[#cf021a] REM-font">
                    Beginner Javascript projects
                  </h4>
                  <p className="text-[#444444] work pt-2">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print.
                  </p>

                  <div className="pt-2 flex space-x-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class="mt-3 text-[16px] text-[#878787]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96zm0 0v288"
                      ></path>
                    </svg>
                    <p className="pt-2  work text-[#878787] text-[16px]">
                      Lesson - 10
                    </p>
                  </div>

                  <div className="grid pt-4 grid-cols-2 gap-2">
                    <div className=" flex">
                      <img
                        src="https://makecomponents.com/Image/teams/Team001/person2.webp"
                        alt="person"
                        className="h-[50px]  object-cover w-[50px]  rounded-full"
                      />
                      <h5 className=" work text-[#323232] text-[14px] pt-4 pl-4">
                        Mathews
                      </h5>
                    </div>
                    <div className=" flex justify-end ">
                      <button className="bg-[#cf021a] work rounded-md text-[#fcfcfc] px-6 text-[16px]">
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 sm:grid-cols-1 sm:gap-0 gap-6  border border-[#dbdbdb]  rounded-xl shadow-2xl p-4">
                <div className="">
                  <img
                    src="../../Image/course/react.png"
                    alt="course"
                    className="rounded-xl h-full sm:h-[300px] sm:w-full object-cover"
                  />
                </div>
                <div className="   col-span-2">
                  <div className="flex pt-2 space-x-1">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" text-[#f8af1b] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" text-[#f8af1b] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" text-[#f8af1b] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class=" text-[#d5d5d5] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                      ></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class=" text-[#d5d5d5] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                      ></path>
                    </svg>
                  </div>

                  <h4 className="text-2xl REM-font pt-4 text-[#cf021a] ">
                    Beginner React projects
                  </h4>
                  <p className="text-[#444444] work pt-2">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print.
                  </p>

                  <div className="pt-2 flex space-x-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class="mt-3 text-[16px] text-[#878787]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96zm0 0v288"
                      ></path>
                    </svg>
                    <p className="pt-2  work text-[#878787] text-[16px]">
                      Lesson - 10
                    </p>
                  </div>

                  <div className="grid pt-4 grid-cols-2 gap-2">
                    <div className=" flex">
                      <img
                        src="https://makecomponents.com/Image/teams/Team001/person3.webp"
                        alt="person"
                        className="h-[50px]  object-cover w-[50px]  rounded-full"
                      />
                      <h5 className="work text-[#323232] text-[14px] pt-4 pl-4">
                        Emily Parker
                      </h5>
                    </div>
                    <div className=" flex justify-end ">
                      <button className="bg-[#cf021a] work rounded-md text-[#fcfcfc] px-6 text-[16px]">
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="py-20">
          <div className=" ">
            <div className=" grid  lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1  ">
              <div className="bg-[#006A67] h-[500px]">
                <div className="h-full flex justify-center items-center">
                  <div className="block">
                    <div className="flex space-x-4 px-10">
                      <div className="w-[20%]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 576 512"
                          class="text-[64px] ]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M336 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h320c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm208-320V80c0-8.84-7.16-16-16-16s-16 7.16-16 16v48h-32V80c0-8.84-7.16-16-16-16s-16 7.16-16 16v48h-16c-8.84 0-16 7.16-16 16v32c0 35.76 23.62 65.69 56 75.93v118.49c0 13.95-9.5 26.92-23.26 29.19C431.22 402.5 416 388.99 416 372v-28c0-48.6-39.4-88-88-88h-8V64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v352h288V304h8c22.09 0 40 17.91 40 40v24.61c0 39.67 28.92 75.16 68.41 79.01C481.71 452.05 520 416.41 520 372V251.93c32.38-10.24 56-40.17 56-75.93v-32c0-8.84-7.16-16-16-16h-16zm-283.91 47.76l-93.7 139c-2.2 3.33-6.21 5.24-10.39 5.24-7.67 0-13.47-6.28-11.67-12.92L167.35 224H108c-7.25 0-12.85-5.59-11.89-11.89l16-107C112.9 99.9 117.98 96 124 96h68c7.88 0 13.62 6.54 11.6 13.21L192 160h57.7c9.24 0 15.01 8.78 10.39 15.76z"></path>
                        </svg>
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-3xl merriweather font-semibold">
                          Charging Station{" "}
                        </h4>
                        <p className="pt-2 Kodchasan">
                          Lorem ipsum is placeholder text commonly used in the
                          graphic, print
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#3A6D8C] h-[500px]">
                <div className="h-full flex justify-center items-center">
                  <div className="block">
                    <div className="flex space-x-4 px-10">
                      <div className="w-[20%]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          class="text-[64px] ]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M162.925 238.709l8.822 30.655h-25.606l9.041-30.652c1.277-4.421 2.651-9.994 3.872-15.245 1.22 5.251 2.594 10.823 3.871 15.242zm166.474-32.099h-14.523v98.781h14.523c29.776 0 46.175-17.678 46.175-49.776 0-32.239-17.49-49.005-46.175-49.005zM512 112v288c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48zM245.459 336.139l-57.097-168A12.001 12.001 0 0 0 177 160h-35.894a12.001 12.001 0 0 0-11.362 8.139l-57.097 168C70.003 343.922 75.789 352 84.009 352h29.133a12 12 0 0 0 11.535-8.693l8.574-29.906h51.367l8.793 29.977A12 12 0 0 0 204.926 352h29.172c8.22 0 14.006-8.078 11.361-15.861zm184.701-80.525c0-58.977-37.919-95.614-98.96-95.614h-57.366c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12H331.2c61.041 0 98.96-36.933 98.96-96.386z"></path>
                        </svg>
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-3xl merriweather font-semibold">
                          AD{" "}
                        </h4>
                        <p className="pt-2 Kodchasan">
                          Lorem ipsum is placeholder text commonly used in the
                          graphic, print
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#AF47D2] h-[500px]">
                <div className="h-full flex justify-center items-center">
                  <div className="block">
                    <div className="flex space-x-4 px-10">
                      <div className="w-[20%]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          class="text-[64px] ]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M446.6 222.7c-1.8-8-6.8-15.4-12.5-18.5-1.8-1-13-2.2-25-2.7-20.1-.9-22.3-1.3-28.7-5-10.1-5.9-12.8-12.3-12.9-29.5-.1-33-13.8-63.7-40.9-91.3-19.3-19.7-40.9-33-65.5-40.5-5.9-1.8-19.1-2.4-63.3-2.9-69.4-.8-84.8.6-108.4 10C45.9 59.5 14.7 96.1 3.3 142.9 1.2 151.7.7 165.8.2 246.8c-.6 101.5.1 116.4 6.4 136.5 15.6 49.6 59.9 86.3 104.4 94.3 14.8 2.7 197.3 3.3 216 .8 32.5-4.4 58-17.5 81.9-41.9 17.3-17.7 28.1-36.8 35.2-62.1 4.9-17.6 4.5-142.8 2.5-151.7zm-322.1-63.6c7.8-7.9 10-8.2 58.8-8.2 43.9 0 45.4.1 51.8 3.4 9.3 4.7 13.4 11.3 13.4 21.9 0 9.5-3.8 16.2-12.3 21.6-4.6 2.9-7.3 3.1-50.3 3.3-26.5.2-47.7-.4-50.8-1.2-16.6-4.7-22.8-28.5-10.6-40.8zm191.8 199.8l-14.9 2.4-77.5.9c-68.1.8-87.3-.4-90.9-2-7.1-3.1-13.8-11.7-14.9-19.4-1.1-7.3 2.6-17.3 8.2-22.4 7.1-6.4 10.2-6.6 97.3-6.7 89.6-.1 89.1-.1 97.6 7.8 12.1 11.3 9.5 31.2-4.9 39.4z"></path>
                        </svg>
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-3xl merriweather font-semibold">
                          Blog{" "}
                        </h4>
                        <p className="pt-2 Kodchasan">
                          Lorem ipsum is placeholder text commonly used in the
                          graphic, print
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className=" grid  lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1  gap-10">
            <div className=" flex drop-shadow-xl rounded-l-lg  rounded-r-lg	">
              <div className="w-[30%] rounded-l-lg  overflow-hidden flex p-4 relative justify-center items-center bg-[#0267C1]">
                <div className="absolute -top-5 left-20 h-[100px] w-[100px] rounded-full bg-[#ffffff40]">
                  {" "}
                </div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-5xl text-[#fcfcfc]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <div className="w-[70%] border border-[#ccc] rounded-r-lg p-4 px-6 ">
                <h4 className="text-2xl Mulish text-[#2f2f2f] pt-2 font-semibold pb-2">
                  Lorem Ipsum
                </h4>
                <p className="pb-4 text-[#878787] outfit leading-6">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing .
                </p>
              </div>
            </div>

            <div className=" flex drop-shadow-xl rounded-l-lg  rounded-r-lg	">
              <div className="w-[30%] rounded-l-lg  overflow-hidden flex p-4 relative justify-center items-center bg-[#EFA00B]">
                <div className="absolute -top-5 left-20 h-[100px] w-[100px] rounded-full bg-[#ffffff40]">
                  {" "}
                </div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-5xl text-[#fcfcfc]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div className="w-[70%] border border-[#ccc] rounded-r-lg p-4 px-6 ">
                <h4 className="text-2xl Mulish text-[#2f2f2f] pt-2 font-semibold pb-2">
                  Lorem Ipsum
                </h4>
                <p className="pb-4 text-[#878787] outfit leading-6">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing .
                </p>
              </div>
            </div>

            <div className=" flex drop-shadow-xl rounded-l-lg  rounded-r-lg	">
              <div className="w-[30%] rounded-l-lg  overflow-hidden flex p-4 relative justify-center items-center bg-[#B8001F]">
                <div className="absolute -top-5 left-20 h-[100px] w-[100px] rounded-full bg-[#ffffff40]">
                  {" "}
                </div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-5xl text-[#fcfcfc]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg>
              </div>
              <div className="w-[70%] border border-[#ccc] rounded-r-lg p-4 px-6 ">
                <h4 className="text-2xl Mulish text-[#2f2f2f] pt-2 font-semibold pb-2">
                  Lorem Ipsum
                </h4>
                <p className="pb-4 text-[#878787] outfit leading-6">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto">
          <div className=" grid lg:grid-cols-4  lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-3 sm:grid-cols-1  gap-6">
            <div>
              <div className="bg-[#9ec4ef]   group cursor-pointer relative flex justify-center">
                <img
                  src="../../Image/overall/tshirt/Shirt001.png"
                  className=" h-[400px]   object-cover"
                  alt="Shirt 001"
                />
                <div className="absolute top-4 right-4 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class=" group-hover:text-[#003b80]  cursor-pointer text-[#ffff] text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                  </svg>
                </div>
              </div>
              <div className=" flex justify-center my-4">
                <button className=" py-2 px-10 bg-[#0064b0] hover:bg-[#003b80] rounded-full text-[#fcfcfc]">
                  Add to Cart
                </button>
              </div>
            </div>
            <div>
              <div className="bg-[#9ec4ef] group cursor-pointer relative flex justify-center">
                <img
                  src="../../Image/overall/tshirt/Shirt002.png"
                  className=" h-[400px] object-cover"
                  alt="Shirt 001"
                />
                <div className="absolute top-4 right-4 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class=" group-hover:text-[#003b80]  cursor-pointer text-[#ffff] text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                  </svg>
                </div>
              </div>
              <div className=" flex justify-center my-4">
                <button className=" py-2 px-10 bg-[#0064b0] hover:bg-[#003b80] rounded-full text-[#fcfcfc]">
                  Add to Cart
                </button>
              </div>
            </div>
            <div>
              <div className="bg-[#9ec4ef] group cursor-pointer relative flex justify-center">
                <img
                  src="../../Image/overall/tshirt/Shirt003.png"
                  className=" h-[400px] object-cover"
                  alt="Shirt 001"
                />
                <div className="absolute top-4 right-4 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class=" group-hover:text-[#003b80]  cursor-pointer text-[#ffff] text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                  </svg>
                </div>
              </div>
              <div className=" flex justify-center my-4">
                <button className=" py-2 px-10 bg-[#0064b0] hover:bg-[#003b80] rounded-full text-[#fcfcfc]">
                  Add to Cart
                </button>
              </div>
            </div>
            <div>
              <div className="bg-[#9ec4ef] group cursor-pointer relative flex justify-center">
                <img
                  src="../../Image/overall/tshirt/Shirt004.png"
                  className=" h-[400px] object-cover"
                  alt="Shirt 001"
                />
                <div className="absolute top-4 right-4 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class=" group-hover:text-[#003b80]  cursor-pointer text-[#ffff] text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                  </svg>
                </div>
              </div>
              <div className=" flex justify-center my-4">
                <button className=" py-2 px-10 bg-[#0064b0] hover:bg-[#003b80] rounded-full text-[#fcfcfc]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#16325B] py-20">
        <div className=" container mx-auto">
          <div className="grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1  gap-10 px-6">
            <div>
              <div className=" grid grid-cols-2 gap-4">
                <div className="w-full">
                  <img
                    src={`https://makecomponents.com/Image/about/about005/table.webp`}
                    alt="img"
                    className="h-[450px] w-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <img
                      src={`https://makecomponents.com/Image/login/001/login001.webp`}
                      alt="img"
                      className="h-[220px] w-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <img
                      src={`https://makecomponents.com/Image/overall/transport/truck001.webp`}
                      alt="img"
                      className="h-[220px] w-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h6 className="lg:pt-10 Kanit lge:pt-10 md:pt-0 mdsm:pt-0 sm:pt-0 text-1xl text-[#c99342] font-semibold  uppercase">
                About us
              </h6>
              <h4 className="text-3xl Kanit text-[#fcfcfc] font-semibold uppercase">
                Lorem ipsum is placeholder
              </h4>
              <p className="text-[16px] pt-4 leading-7 text-[#fcfcfc]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p className="text-[16px] pt-4 leading-7 text-[#fcfcfc]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>

              <button className="mt-6 py-2 px-8 bg-[#c99342] hover:bg-[#fcfcfc] text-[#fff] hover:text-[#c99342] rounded-full">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1  mdsm:grid-cols-1 sm:grid-cols-1">
            <div className=" p-10 sm:p-2">
              <h3 className="text-[#6256CA] font-semibold Kanit text-4xl">
                Contact us
              </h3>
              <p className=" text-1xl REM-font text-[#4f4f4f] pb-3  pt-2">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries{" "}
              </p>
              <div className="">
                <div className="pt-6">
                  <div className="flex">
                    <div className="h-[60px] flex   justify-center items-center bg-[#6256CA] w-[60px] rounded-lg">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class=" text-[#fff] text-2xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="mx-4">
                      <div className=" pt-2">
                        <p className=" Kanit text-[#4f4f4f] text-[16px]">
                          Phone Number
                        </p>
                      </div>
                      <div className="">
                        <p className="text-[16px] REM-font  text-[#4f4f4f] ">
                          0978456123
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex pt-6">
                    <div className="h-[60px] flex   justify-center items-center bg-[#6256CA] w-[60px] rounded-lg">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        class=" text-[#fff] text-2xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                      </svg>
                    </div>
                    <div className="mx-4">
                      <div className=" pt-2">
                        <p className=" Kanit text-[#4f4f4f] text-[16px]">
                          Email
                        </p>
                      </div>
                      <div className="">
                        <p className="text-[16px]  REM-font  text-[#4f4f4f] ">
                          dummymailid@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex pt-6">
                    <div className="h-[60px] flex   justify-center items-center bg-[#6256CA] w-[60px] rounded-lg">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        class=" text-[#fff] text-2xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z"></path>
                      </svg>
                    </div>
                    <div className="mx-4">
                      <div className=" pt-2">
                        <p className=" Kanit text-[#4f4f4f] text-[16px]">
                          Address
                        </p>
                      </div>
                      <div className="">
                        <p className="text-[16px] REM-font  text-[#4f4f4f] ">
                          56 High Street London W1B 2EL,
                          <br /> United Kingdom
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 sm:p-2 ">
              <div className="p-12 bg-[#edecf9] rounded-xl">
                <form>
                  <div>
                    <label className="text-[#4f4f4f] font-medium REM-font ">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="REM-font  text-[#4f4f4f] rounded-md mt-2  outline-1 outline-[#6054c9] border border-[#c2c2c2] py-2 w-full px-2"
                    />
                  </div>
                  <div className="pt-3">
                    <label className="text-[#4f4f4f] font-medium ">Email</label>
                    <input
                      type="text"
                      placeholder="email"
                      className="REM-font  text-[#4f4f4f] rounded-md mt-2  outline-1 outline-[#6054c9] border border-[#c2c2c2] py-2 w-full px-2"
                    />
                  </div>
                  <div className="pt-3">
                    <label className="text-[#4f4f4f]  font-medium ">
                      Message
                    </label>
                    <textarea
                      type="text"
                      placeholder="Message"
                      className="REM-font  text-[#4f4f4f] rounded-md mt-2  outline-1 outline-[#6054c9] border border-[#c2c2c2] py-2 w-full px-2"
                    ></textarea>
                  </div>

                  <div className=" w-full flex pt-4 mt-4 pb-0 justify-center ">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "http://makecomponents.com";
                      }}
                      className="REM-font  bg-[#6256CA] hover:bg-[#222]  delay-200 transition-all rounded-full text-[#fff]  px-10 py-2"
                    >
                      Submit{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 ">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2  mdsm:gris-cols-2 sm:grid-cols-1 gap-10">
            <div className="group  cursor-pointer ">
              <div className="overflow-hidden  relative">
                <img
                  src={`../Image/overall/hotel/hotel001.webp`}
                  alt="img"
                  className="group-hover:scale-125   duration-700 h-[350px] w-full object-cover"
                />

                <div class="absolute h-full top-0 w-full">
                  <div class="tranasition duration-300 bg-gradient-to-t from-[#222] h-full">
                    <div className=" absolute left-4 bottom-2">
                      <bold className="merriweather text-[12px] bg-[#fb3640] group-hover:bg-[#fcfcfc] group-hover:text-[#222]  text-[#fcfcfc] px-2 py-1">
                        world
                      </bold>

                      <bold className="merriweather text-[12px] mx-2 bg-[#fb3640] group-hover:bg-[#fcfcfc] group-hover:text-[#222] text-[#fcfcfc] px-2 py-1">
                        growth
                      </bold>
                    </div>
                    <div className="absolute right-4 bottom-2">
                      <span className="merriweather text-[#fcfcfc] px-2 py-1 bg-[#222] text-[12px] title">
                        by : Admin
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border border-[#e6e6e6] pb-4">
                <span className="merriweather pt-10 group-hover:text-secondary text-gray-700 font-semibold leading-10 title text-[12px] px-4 ">
                  24/10/2024
                </span>

                <h2 className="merriweather text-[18px] pt-0 group-hover:text-secondary px-4 leading-6  title font-semibold">
                  What to Do All Year Round
                </h2>
              </div>
            </div>

            <div className="group  cursor-pointer ">
              <div className="overflow-hidden  relative">
                <img
                  src={`../Image/overall/hotel/hotel002.webp`}
                  alt="img"
                  className="group-hover:scale-125   duration-700 h-[350px] w-full object-cover"
                />

                <div class="absolute h-full top-0 w-full">
                  <div class="tranasition duration-300 bg-gradient-to-t from-[#222] h-full">
                    <div className=" absolute left-4 bottom-2">
                      <bold className="merriweather text-[12px] bg-[#fb3640] group-hover:bg-[#fcfcfc] group-hover:text-[#222]  text-[#fcfcfc] px-2 py-1">
                        hidden
                      </bold>

                      <bold className="merriweather text-[12px] mx-2 bg-[#fb3640] group-hover:bg-[#fcfcfc] group-hover:text-[#222] text-[#fcfcfc] px-2 py-1">
                        gems
                      </bold>
                    </div>
                    <div className="absolute right-4 bottom-2">
                      <span className="merriweather text-[#fcfcfc] px-2 py-1 bg-[#222] text-[12px] title">
                        by : Admin
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border border-[#e6e6e6] pb-4">
                <span className="merriweather  pt-10 group-hover:text-secondary text-gray-700 font-semibold leading-10 title text-[12px] px-4 ">
                  24/10/2024
                </span>

                <h2 className="merriweather text-[18px] pt-0 group-hover:text-secondary px-4 leading-6  title font-semibold">
                  Uncover Hidden Gems
                </h2>
              </div>
            </div>

            <div className="group  cursor-pointer ">
              <div className="overflow-hidden  relative">
                <img
                  src={`../Image/overall/hotel/hotel003.webp`}
                  alt="img"
                  className="group-hover:scale-125   duration-700 h-[350px] w-full object-cover"
                />

                <div class="absolute h-full top-0 w-full">
                  <div class="tranasition duration-300 bg-gradient-to-t from-[#222] h-full">
                    <div className=" absolute left-4 bottom-2">
                      <bold className="merriweather text-[12px] bg-[#fb3640] group-hover:bg-[#fcfcfc] group-hover:text-[#222]  text-[#fcfcfc] px-2 py-1">
                        trip
                      </bold>

                      <bold className="merriweather text-[12px] mx-2 bg-[#fb3640] group-hover:bg-[#fcfcfc] group-hover:text-[#222] text-[#fcfcfc] px-2 py-1">
                        day
                      </bold>
                    </div>
                    <div className="absolute right-4 bottom-2">
                      <span className="merriweather text-[#fcfcfc] px-2 py-1 bg-[#222] text-[12px] title">
                        by : Admin
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border border-[#e6e6e6] pb-4">
                <span className="merriweather pt-10 group-hover:text-secondary text-gray-700 font-semibold leading-10 title text-[12px] px-4 ">
                  24/10/2024
                </span>

                <h2 className="merriweather text-[18px] pt-0 group-hover:text-secondary px-4 leading-6  title font-semibold">
                  The Ultimate Day Trip Itinerary
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#990033]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2  mdsm:gris-cols-2 sm:grid-cols-1 gap-10">
            <div className=" bg-[#ffffff]  relative shadow-xl px-10 rounded-3xl p-6">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="text-5xl text-[#FF9000]  absolute right-10 top-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
              <h4 className="text-3xl text-[#990033] acme-font font-semibold Mulish pt-4 pb-2">
                Lorem ipsum dolor sit amet
              </h4>
              <p className="text-[#434343] Mulish ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>

              <div className=" pt-4">
                <div className="flex">
                  <img
                    src="https://makecomponents.com/Image/card/card/person2.webp"
                    alt="person"
                    className="rounded-md mr-4 h-[60px] w-[60px] object-cover"
                  />
                  <div className="block">
                    <p className="pt-2 acme-font font-semibold text-[18px] text-[#990033]">
                      James Parker{" "}
                    </p>
                    <p className="text-[#434343] text-[12px] Mulish">
                      Software Engineer{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-[#ffffff]  relative shadow-xl px-10 rounded-3xl p-6">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="text-5xl text-[#FF9000]  absolute right-10 top-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
              <h4 className="text-3xl text-[#990033] acme-font font-semibold Mulish pt-4 pb-2">
                Lorem ipsum dolor sit amet
              </h4>
              <p className="text-[#434343] Mulish ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>

              <div className=" pt-4">
                <div className="flex">
                  <img
                    src="https://makecomponents.com/Image/card/card/person3.webp"
                    alt="person"
                    className="rounded-md mr-4 h-[60px] w-[60px] object-cover"
                  />
                  <div className="block">
                    <p className="pt-2 acme-font font-semibold text-[18px] text-[#990033]">
                      Emily Turner{" "}
                    </p>
                    <p className="text-[#434343] text-[12px] Mulish">
                      Marketing Manager{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-[#ffffff]  relative shadow-xl px-10 rounded-3xl p-6">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="text-5xl text-[#FF9000]  absolute right-10 top-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
              </svg>
              <h4 className="text-3xl text-[#990033] acme-font font-semibold Mulish pt-4 pb-2">
                Lorem ipsum dolor sit amet
              </h4>
              <p className="text-[#434343] Mulish ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>

              <div className=" pt-4">
                <div className="flex">
                  <img
                    src="https://makecomponents.com/Image/card/card/person1.webp"
                    alt="person"
                    className="rounded-md mr-4 h-[60px] w-[60px] object-cover"
                  />
                  <div className="block">
                    <p className="pt-2 acme-font font-semibold text-[18px] text-[#990033]">
                      Daniel Brooks{" "}
                    </p>
                    <p className="text-[#434343] text-[12px] Mulish">
                      Financial Analyst{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-10">
            <div className="">
              <img
                src="../Image/overall/hotel/hotel001.webp"
                alt="hotel"
                className=" rounded-3xl"
              />
              <div className="relative w-full flex justify-center">
                <div className="bg-[#fff] p-8 rounded-3xl absolute w-[80%]  -top-8">
                  <h3 className="text-center font-semibold Fira text-[#454545] mx-auto text-2xl">
                    Aurelia Heights
                  </h3>
                </div>
              </div>
            </div>
            <div className="">
              <img
                src="../Image/overall/hotel/hotel002.webp"
                alt="hotel"
                className=" rounded-3xl"
              />
              <div className="relative w-full flex justify-center">
                <div className="bg-[#fff] p-8 rounded-3xl absolute w-[80%]  -top-8">
                  <h3 className="text-center font-semibold Fira text-[#454545] mx-auto text-2xl">
                    Sovereign Bay Retreat
                  </h3>
                </div>
              </div>
            </div>
            <div className="">
              <img
                src="../Image/overall/hotel/hotel003.webp"
                alt="hotel"
                className=" rounded-3xl"
              />
              <div className="relative w-full flex justify-center">
                <div className="bg-[#fff] p-8 rounded-3xl absolute w-[80%]  -top-8">
                  <h3 className="text-center font-semibold Fira text-[#454545] mx-auto text-2xl">
                    Elysian Crown Resort
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-20">
        <div className=" container mx-auto">
          <div className="px-4 grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1 gap-10">
            <div>
              <img
                src="../Image/overall/about/about004.png"
                className="mx-auto h-[400px] w-[400px] lge:block lg:block md:hidden mdsm:hidden sm:block"
                alt="meeting"
              />
            </div>
            <div className="col-span-2">
              <h2 className="mt-12 font-semibold Comic text-[#091057] text-3xl ">
                What is Lorem Ipsum
              </h2>
              <p className=" text-[#434343] pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className=" grid grid-cols-2 sm:grid-cols-1">
                <div>
                  <ul className=" mt-6">
                    <li className="flex ">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>
                    <li className="flex mt-2">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>
                    <li className="flex mt-2">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>

                    <li className="flex mt-2">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className=" mt-6 sm:mt-2">
                    <li className="flex ">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>
                    <li className="flex mt-2">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>
                    <li className="flex mt-2">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>

                    <li className="flex mt-2">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="mx-6 hover:bg-[#222] text-[#fcfcfc] px-6 py-2 rounded-full bg-[#091057] mt-6">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="py-20">
        <section class="container mx-auto">
          <div class="sm:w-full overflow-auto px-4">
            <table class=" sm:w-[200%] md:w-[150%] mdsm:w-[150%] lge:w-full lg:w-full mx-auto">
              <thead>
                <tr className="  text-[#333]  font-bold border-b border-[#ccc]">
                  <td className=" sm:w-[100px] px-4 py-4">Order ID</td>
                  <td>Customer Name</td>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Date</td>
                  <td>Location</td>
                  <td className=" px-4">Status</td>
                </tr>
              </thead>
              <tbody>
                <tr className="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td className="px-4 font-bold py-4">#05122</td>
                  <td className=" py-4">Noah</td>
                  <td className=" py-4">Wireless Earbuds</td>
                  <td className=" py-4 font-semibold text-[green]">$33</td>
                  <td className=" py-4">19-10-2024</td>
                  <td className=" py-4">Cape Town, South Africa </td>
                  <td className="py-4 flex text-[green]">
                    {" "}
                    <div className="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[green]"></div>
                    Delivered{" "}
                  </td>
                </tr>
                <tr className="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td className="px-4 font-bold py-4">#5410</td>
                  <td className=" py-4">Alexander </td>
                  <td className=" py-4">Smart Doorbell Camera</td>
                  <td className=" py-4 font-semibold text-[green]">$53</td>
                  <td className=" py-4">19-10-2024</td>
                  <td className=" py-4">Cape Town, South Africa </td>
                  <td className="py-4 flex text-[green]">
                    {" "}
                    <div className="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[green]"></div>
                    Delivered{" "}
                  </td>
                </tr>
                <tr className="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td className="px-4 font-bold py-4">#95120</td>
                  <td className=" py-4">Fatima </td>
                  <td className=" py-4">Compact Air Fryer</td>
                  <td className=" py-4 font-semibold text-[green]">$64</td>
                  <td className=" py-4">19-10-2024</td>
                  <td className=" py-4">Sydney, Australia</td>
                  <td className="py-4 flex text-[#f5a524]">
                    {" "}
                    <div className="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[#f5a524]"></div>
                    On-Delivered{" "}
                  </td>
                </tr>
                <tr className="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td className="px-4 font-bold py-4">#85410</td>
                  <td className=" py-4">Sakura </td>
                  <td className=" py-4">Smart Water Bottle</td>
                  <td className=" py-4 font-semibold text-[green]">$10</td>
                  <td className=" py-4">19-10-2024</td>
                  <td className=" py-4">Rio de Janeiro, Brazil</td>
                  <td className="py-4 flex text-[#cf021a]">
                    {" "}
                    <div className="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[#cf021a]"></div>
                    Canceled{" "}
                  </td>
                </tr>
                <tr className="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td className="px-4 font-bold py-4">#06412</td>
                  <td className=" py-4">Zara </td>
                  <td className=" py-4">Power Bank</td>
                  <td className=" py-4 font-semibold text-[green]">$23</td>
                  <td className=" py-4">19-10-2024</td>
                  <td className=" py-4">Sydney, Australia</td>
                  <td className="py-4 flex text-[#f5a524]">
                    {" "}
                    <div className="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[#f5a524]"></div>
                    On-Delivered{" "}
                  </td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
        </section>
      </div>

      <div className="  container mx-auto py-32">
        <div className=" grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1">
          <div className=" bg-[#3066BE]">
            <div className=" grid grid-cols-2 sm:grid-cols-1">
              <div className=" p-6 pt-20">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" text-4xl text-[#FBFF12]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
                <p className=" text-[#f2f2f2] pt-4 work leading-8 font-semibold text-[24px] w-[130%] sm:w-full">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
                <h3 className="pt-4 text-[18px] work text-[#f2f2f2]">
                  - Sean Roldan
                </h3>
              </div>
              <div className=" w-full relative flex justify-end">
                <img
                  src="http://localhost:3000/Image/overall/person/person14.webp"
                  className=" h-[400px] sm:hidden absolute bottom-0"
                  alt="Person"
                />
              </div>
            </div>
          </div>
          <div className=" bg-[#9368B7]">
            <div className=" grid grid-cols-2 sm:grid-cols-1">
              <div className=" p-6 pt-20">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" text-4xl text-[#FBFF12]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
                <p className=" text-[#f2f2f2] pt-4 work leading-8 font-semibold text-[24px] w-[130%] sm:w-full">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
                <h3 className="pt-4 text-[18px] work text-[#f2f2f2]">
                  - Emma Watson
                </h3>
              </div>
              <div className=" w-full flex justify-end relative">
                <img
                  src="http://localhost:3000/Image/overall/person/person13.webp"
                  className=" h-[400px] sm:hidden absolute bottom-0"
                  alt="Person"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" container mx-auto px-4">
        <div className=" grid lg:grid-cols-4  lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-6">
          <div className=" bg-[#011936] p-6 shadow-2xl rounded-lg">
            <div className=" flex ">
              <div className=" w-1/2">
                <div className=" text-4xl concert text-[#f2f2f2]">500</div>
                <p className=" text-[#f2f2f2] plus-jakarta-sans-font">
                  Total Orders
                </p>
              </div>
              <div className="w-1/2 flex justify-end ">
                <div className=" h-[60px] flex justify-center items-center w-[60px] rounded-full bg-[#F9DC5C]">
                  <FaHandHoldingDollar className=" text-[40px] text-[#011936]" />
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[#011936] p-6 shadow-2xl rounded-lg">
            <div className=" flex ">
              <div className=" w-1/2">
                <div className=" text-4xl concert text-[#f2f2f2]">985</div>
                <p className=" text-[#f2f2f2] plus-jakarta-sans-font"> Sales</p>
              </div>
              <div className="w-1/2 flex justify-end ">
                <div className=" h-[60px] flex justify-center items-center w-[60px] rounded-full bg-[#F9DC5C]">
                  <FaArrowUpShortWide className=" text-[40px] text-[#011936]" />
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[#011936] p-6 shadow-2xl rounded-lg">
            <div className=" flex ">
              <div className=" w-1/2">
                <div className=" text-4xl concert text-[#f2f2f2]">52</div>
                <p className=" text-[#f2f2f2] plus-jakarta-sans-font">
                  {" "}
                  Product
                </p>
              </div>
              <div className="w-1/2 flex justify-end ">
                <div className=" h-[60px] flex justify-center items-center w-[60px] rounded-full bg-[#F9DC5C]">
                  <AiFillProduct className=" text-[40px] text-[#011936]" />
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[#011936] p-6 shadow-2xl rounded-lg">
            <div className=" flex ">
              <div className=" w-1/2">
                <div className=" text-4xl concert text-[#f2f2f2]">52K</div>
                <p className=" text-[#f2f2f2] plus-jakarta-sans-font">
                  {" "}
                  Visitors
                </p>
              </div>
              <div className="w-1/2 flex justify-end ">
                <div className=" h-[60px] flex justify-center items-center w-[60px] rounded-full bg-[#F9DC5C]">
                  <MdPeopleAlt className=" text-[40px] text-[#011936]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" container mx-auto">
        <div className=" grid grid-cols-4">
          <div>
            <div className=" text-center text-4xl">20K +</div>
            <div className=" text-center">Reviews</div>
          </div>
        </div>
      </div>

      <div className=" py-10">
        <div className=" container mx-auto py-20">
          <div className=" grid grid-cols-2">
            <div className=" ">
              <h3 className=" text-3xl">Ream Stay Logo</h3>
            </div>

            <div className=" grid grid-cols-2">
              <div>
                <ul>
                  <li className="pt-4">About us </li>
                  <li className="pt-4">Group </li>
                  <li className="pt-4">Responsiblity </li>
                  <li className="pt-4 pb-8">Blog </li>
                </ul>
              </div>

              <div>
                Follow us
                <div className=" flex  space-x-4 mt-2">
                  <div className=" h-[40px] w-[40px] rounded-full border border-[#222]"></div>
                  <div className=" h-[40px] w-[40px] rounded-full border border-[#222]"></div>

                  <div className=" h-[40px] w-[40px] rounded-full border border-[#222]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 border-t-[1px] grid grid-cols-2">
            <div> Copyright.All right reserved. </div>
            <div className=" grid grid-cols-2">
              <div>Terms and Ploicy</div>
              <div>+91 90123456789</div>
            </div>
          </div>
        </div>

        <div>Hello</div>
      </div>

      <div className=" container mx-auto">
        <div className=" grid grid-cols-4 gap-4">
          <div className="bg-[#f2f2f2] px-10 py-20">
            <img
              src={`../Image/overall/icons/hospital.png`}
              className=" mx-auto"
            />
            <div className=" text-center pt-4 text-[20px]">Hospital</div>
          </div>
          <div className="bg-[#f2f2f2] px-10 py-20">
            <img src={`../Image/overall/icons/bed.png`} className=" mx-auto" />
            <div className=" text-center pt-4 text-[20px]">Hospital</div>
          </div>
          <div className="bg-[#f2f2f2] px-10 py-20">
            <img
              src={`../Image/overall/icons/level.png`}
              className=" mx-auto"
            />
            <div className=" text-center pt-4 text-[20px]">Hospital</div>
          </div>
          <div className="bg-[#f2f2f2] px-10 py-20">
            <img
              src={`../Image/overall/icons/x-ray.png`}
              className=" mx-auto"
            />
            <div className=" text-center pt-4 text-[20px]">Hospital</div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className=" container mx-auto">
          <div className="gap-6 grid grid-cols-4">
            <div>
              <img
                src={`../Image/overall/country/USA.png`}
                alt="USA"
                className="  rounded-2xl"
              />
              <div className=" p-4 ">
                <div className=" grid grid-cols-2">
                  <div>USA</div>
                  <div>
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={`../Image/overall/country/Australia.png`}
                alt="USA"
                className="mt-8  rounded-2xl"
              />
            </div>
            <div>
              <img
                src={`../Image/overall/country/London.png`}
                alt="USA"
                className="  rounded-2xl"
              />
            </div>
            <div>
              <img
                src={`../Image/overall/country/Paris.png`}
                alt="USA"
                className="mt-8  rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" py-32">
        <section className=" container px-4 mx-auto">
          <div className=" grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-3 mdsm:grid-cols-2 sm:grid-cols-1">
            <div className="bg-[#F7D002]">
              <img
                src="../Image/overall/person/person009.webp"
                alt="Person 009"
                className="  h-[300px] object-cover"
              />
            </div>
            <div className="bg-[#F71735]">
              <img
                src="../Image/overall/person/person010.webp"
                alt="Person 010"
                className="  h-[300px] object-cover"
              />
            </div>
            <div className="bg-[#06BCC1]">
              <img
                src="../Image/overall/person/person011.webp"
                alt="Person 011"
                className="  h-[300px] object-cover"
              />
            </div>
            <div className="bg-[#363537]">
              <img
                src="../Image/overall/person/person012.webp"
                alt="Person 012"
                className="  h-[300px] object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      <div className=" py-32">
        <section className=" container px-4 mx-auto">
          <div className=" relative">
            <div className=" absolute top-0 h-full w-full bg-[#101010ab] flex justify-center items-center">
              <div className=" block p-4">
                <h4 className=" text-[#F9F9F9] tracking-wider c font-semibold  text-center text-4xl pb-4">
                  Slot your seats{" "}
                </h4>
                <p className="lg:w-[70%] tracking-wide leading-7 lge:w-[70%] md:w-[80%] mdsm:w-full sm:w-full jost-font text-center text-[20px] mx-auto text-[#F9F9F9]">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
                <div className="flex justify-center items-center mt-4 ">
                  <button className=" bg-[#fcfcfc] hover:bg-[#5AA9E6] hover:text-[#f9f9f9] jost-font px-10 py-2 rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <img
              src="../../Image/overall/places/beach.jpg"
              alt="beach "
              className=" h-[400px] object-cover w-full"
            />
          </div>
        </section>
      </div>

      <div>
        <section className=" container px-4 mx-auto">
          <div className=" lg:flex lge:flex md:block mdsm:block sm:block h-full">
            <div className=" lg:w-[70%]  lge:w-[70%] md:w-full mdsm:w-full sm:w-full">
              <img
                src="../../Image/overall/transport/truck001.webp"
                alt="truck001"
              />
            </div>
            <div className=" lg:w-[30%] lge:w-[30%] md:w-full mdsm:w-full sm:w-full relative flex justify-center items-center ">
              <div className=" h-full  lg:absolute lge:absolute md:relative mdsm:relative sm:relative   lg:w-[140%] lge:w-[140%] md:w-full mdsm:w-full sm:w-full  lg:right-10 lge:right-10 md:right-0 mdsm:right-0 sm:right-0 ">
                <div className="bg-[#f2f2f2]   dark:bg-[#454545] p-10  block">
                  <h4 className=" text-4xl title text-[#EF2917]  Prompt font-semibold pb-4 ">
                    {" "}
                    Lorem ipsum
                  </h4>

                  <p className=" dark:text-[#fcfcfc] outfit  text-[#444444] leading-7">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.Lorem ipsum is placeholder text
                    commonly used in the graphic, print.
                  </p>
                  <p className="dark:text-[#fcfcfc]  outfit text-[#444444]  pt-4 leading-7">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.Lorem ipsum is placeholder text
                    commonly used in the graphic, print. and publishing
                    industries for previewing layouts and visual mockups.Lorem
                    ipsum is placeholder text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and
                    visual mockups.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className=" flex h-full" >
            <div className=" w-[70%] h-full">
              <img
                src="../../Image/overall/transport/truck001.webp"
                alt="truck001"
              />
            </div>
            <div className=" w-[35%]  relative h-full">
              <div className=" bg-primary h-full   w-[130%] right-20 p-10">
                <h4 className=" text-4xl  "> Lorem ipsum</h4>

                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.Lorem ipsum is
                  placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual
                  mockups.Lorem ipsum is placeholder text commonly used in the
                  graphic, print, and publishing industries for previewing
                  layouts and visual mockups.Lorem ipsum is placeholder text
                  commonly used in the graphic, print, and publishing industries
                  for previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          </div> */}
        </section>
      </div>

      <div className="py-32">
        <div className=" container px-4 mx-auto">
          <section>
            <div className=" grid lg:grid-cols-8 h-full lge:grid-cols-8 md:grid-cols-5 mdsm:grid-cols-1 sm:grid-cols-1 lg:gap-6 lge:gap-6 md:gap-0 mdsm:gap-0 sm:gap-0">
              <div className=" col-span-3 h-full">
                <div className="lg:pr-10 lge:pr-10 md:pr-0 mdsm:pr-0 sm:pr-0">
                  <h4 className="  text-[#B80C09] rowdies  font-semibold text-3xl">
                    <span className="rowdies text-5xl pr-4">01</span> Lorem
                    ipsum
                  </h4>
                  <p className=" dark:text-[#fcfcfc] raleway-font text-[#444] pt-4">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
                <div className="pr-10 pt-10">
                  <h4 className="  text-[#B80C09] rowdies  font-semibold text-3xl">
                    <span className="rowdies text-5xl pr-4">02</span> Lorem
                    ipsum
                  </h4>
                  <p className=" dark:text-[#fcfcfc] raleway-font text-[#444] pt-4">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>

                <div className="pr-10 pt-10">
                  <h4 className="  text-[#B80C09] rowdies  font-semibold text-3xl">
                    <span className="rowdies text-5xl pr-4">03</span> Lorem
                    ipsum
                  </h4>
                  <p className="dark:text-[#fcfcfc] raleway-font text-[#444] pt-4">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
              </div>
              <div className=" col-span-2 h-full relative">
                <div className="   bg-[#3772FF] border-[#B80C09] h-full rounded-t-full">
                  <img
                    src={`../../Image/overall/person/person007.png`}
                    className="w-full object-cover  h-full"
                    alt="person"
                  />
                  <img
                    src={`../../Image/overall/elements/right.png`}
                    className="top-4 h-[70px] -left-10  absolute "
                    alt="element"
                  />
                </div>
              </div>
              <div className=" col-span-3 h-full">
                <div className="lg:pl-10 lge:pl-10 md:pl-0 mdsm:pl-0 sm:pl-0 lg:pt-0 lge:pt-0 md:pt-10 mdsm:pt-10 sm:pt-10">
                  <h4 className="  text-[#B80C09] rowdies  font-semibold text-3xl">
                    <span className="rowdies text-5xl pr-4">04</span> Lorem
                    ipsum
                  </h4>
                  <p className="dark:text-[#fcfcfc] raleway-font text-[#444] pt-4">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
                <div className="lg:pl-10 lge:pl-10 md:pl-0 mdsm:pl-0 sm:pl-0 pt-10">
                  <h4 className="  text-[#B80C09] rowdies  font-semibold text-3xl">
                    <span className="rowdies text-5xl pr-4">05</span> Lorem
                    ipsum
                  </h4>
                  <p className="dark:text-[#fcfcfc] raleway-font text-[#444] pt-4">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>

                <div className="lg:pl-10 lge:pl-10 md:pl-0 mdsm:pl-0 sm:pl-0 pt-10">
                  <h4 className="  text-[#B80C09] rowdies  font-semibold text-3xl">
                    <span className="rowdies text-5xl pr-4">06</span> Lorem
                    ipsum
                  </h4>
                  <p className="dark:text-[#fcfcfc] raleway-font text-[#444] pt-4">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className=" py-32">
        <section className="h-full container mx-auto px-6">
          <div className=" grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 lg:gap-10 lge:gap-10 md:gap-0 mdsm:gap-0 sm:gap-0">
            <div className="h-full  col-span-3">
              <div>
                <h2 className="pt-0 text-4xl  font-semibold dosis-font text-[#720026] ">
                  About us
                </h2>
                <p className=" dark:text-[#fcfcfc] text-[#333]  leading-7 pt-2 pb-6 text-1xl">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>

                <div className=" grid grid-cols-2 sm:grid-cols-1 gap-10">
                  <div>
                    <RiHeartAdd2Line className=" text-[#720026] text-[50px]" />
                    <p className="text-[#333] dark:text-[#fcfcfc] leading-7 pt-2">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print
                    </p>
                  </div>
                  <div>
                    <RiInputField className=" text-[#720026] text-[50px]" />
                    <p className="text-[#333] dark:text-[#fcfcfc] leading-7 pt-2">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print
                    </p>
                  </div>
                </div>
                <img
                  src={`../../Image/overall/person/person005.webp`}
                  className="w-full lg:mt-0 lg:hidden lge:hidden md:block mdsm:block sm:block lge:mt-0 md:mt-12 mdsm:mt-12 sm:mt-10"
                  alt="Gym"
                />
                <button className=" hover:bg-[#333] duration-700  mt-10 bg-[#720026] px-16 py-2 text-[#fcfcfc]">
                  Read More
                </button>
              </div>
            </div>
            <div className="h-full  col-span-2 lg:block lge:block md:hidden mdsm:hidden sm:hidden">
              <img
                src={`../../Image/overall/person/person005.webp`}
                className="w-full h-full  lg:mt-0  lge:mt-0 md:mt-12 mdsm:mt-12 sm:mt-10"
                alt="Gym"
              />
            </div>
          </div>
        </section>
      </div>

      {/* <div className=" py-48 container mx-auto">
        <section>
          <div className=" grid lg:grid-cols-5  lge:grid-cols-5 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 h-full lg:gap-10 lge:gap-10 md:gap-0 mdsm:gap-0 sm:gap-0">
            <div className=" col-span-2 h-full ">
              <div className=" relative h-full">
                <div className=" bg-[#646076] p-10 h-[550px] w-full  ">
                  <img
                    src="../Image/contact/contact002/contact002.jpeg"
                    alt=""
                    className="mt-10 h-[550px] object-cover w-full "
                  />
                  
                </div>
              </div>
            </div>
            <div className=" col-span-3  px-4 h-full">
              <div className="h-full">
                <form className=" block">
                  <h3 className=" dark:text-[#fcfcfc] text-[#646076] catamaran lg:pt-10 lge:pt-10 md:pt-24 mdsm:pt-24 sm:pt-24 lg:mt-0 lge:mt-0 md:mt-10 mdsm:mt-10 sm:mt-10 pb-4 lg:text-4xl lge:text-4xl md:text-3xl mdsm:text-3xl sm:text-3xl ">
                    Contact us
                  </h3>

                  <p className=" tracking-wide dark:text-[#fcfcfc] text-[#333] lg:text-[18px] lge:text-[18px] catamaran md:text-[16px] mdsm:text-[16px] sm:text-[16px] pb-10">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>

                  <div className=" grid grid-cols-2 gap-10">
                    <div>
                      <input
                        type="text"
                        placeholder="First name"
                        className=" border catamaran border-[#ccc] text-[#444545]  focus:outline-none bg-[#f2f2f2]  w-full py-2 px-2"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last name"
                        className=" border catamaran border-[#ccc]  focus:outline-none bg-[#f2f2f2]  w-full py-2 px-2"
                        required
                      />
                    </div>
                  </div>
                  <div className=" pt-6">
                    <input
                      type="text"
                      placeholder="Email"
                      className=" border catamaran border-[#ccc]  focus:outline-none bg-[#f2f2f2]  w-full py-2 px-2"
                      required
                    />
                  </div>
                  <div className=" pt-6">
                    <textarea
                      type="text"
                      placeholder="Message"
                      className=" border catamaran border-[#ccc]  focus:outline-none bg-[#f2f2f2]  w-full py-2 px-2"
                      required
                    />
                  </div>
                  <div className=" pt-6">
                    <button className=" bg-[#646076] catamaran hover:bg-[#DECDF5] hover:text-[#534D56] text-[#fcfcfc] px-10 py-2">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      {/* <section>
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
      </section> */}

      {/* <section className=" lg:block lge:block md:hidden mdsm:hidden sm:hidden py-32">
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
      </section> */}

      {/* <section className=" lg:hidden lge:hidden md:block mdsm:block sm:block py-32">
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
      </section> */}

      {/* <div className=" container mx-auto">
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
      </div> */}

      {/* <div role="status" class="max-w-sm animate-pulse">
        <div class="h-2.5 bg-[#cccccc]  rounded-full dark:bg-[#374151] w-48 mb-4"></div>
        <div class="h-2 bg-[#cccccc] rounded-full dark:bg-[#374151] max-w-[360px] mb-2.5"></div>
        <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] mb-2.5"></div>
        <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-[330px] mb-2.5"></div>
        <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-[300px] mb-2.5"></div>
        <div class="h-2 bg-[#cccccc]  rounded-full dark:bg-[#374151] max-w-[360px]"></div>
        <span class="sr-only">Loading...</span>
      </div> */}

      {/* <div className="py-32">
        <section className=" container mx-auto">
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

                
              </div>
            </div>
          </div>
        </section>
      </div> */}

      {/* <div className=" relative bg-[url(/Image/overall/building/building4.webp)] bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
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
      </div> */}

      {/* <div className="py-[100px]   w-full">
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
            </div>
          </div>
        </section>
      </div> */}

      {/* <div className="text-center container mx-auto">
        {buttonData?.map((v, i) => {
          return (
            <>
              <div>{v?.name}</div>
            </>
          );
        })}
        <button onClick={() => handleMore()}>more </button>
      </div> */}

      {/* <div className="py-40 container mx-auto">
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
      </div> */}

      {/* <div className=" container mx-auto">
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
      </div> */}

      {/* <div className=" py-[150px] container mx-auto">
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
      </div> */}

      {/* <div className=" container mx-auto">
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
      </div> */}

      {/* <section className="py-40 container mx-auto px-4">
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
      </section> */}

      {/* <section className="  container mx-auto px-4">
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
      </section> */}

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

      {/* <section className=" container mx-auto my-20">
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
      </section> */}
    </div>
  );
}
