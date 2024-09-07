"use client"
import React from "react";

import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";
export default function TwoGridHeroSectionPre() {
  return (
    <div>
        <div className=" flex pt-10 justify-center items-center">
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/hero/two-grid-hero-section">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
     
      </div>
      <header>
        <div
          className={`grid grid-cols-3  portrait:h-[100vh]  landscape:lg:h-[100vh] landscape:lge:h-[100vh] landscape:md:h-[100vh] landscape:mdsm:h-[140vh] landscape:sm:h-auto landscape:h-auto h-[100vh] overflow-hidden relative`}
        >
          <nav className={` absolute z-20 top-0 w-full py-4`}>
            <div className={` container mx-auto`}>
              <div className={` grid grid-cols-12`}>
                <div
                  className={`lg:col-span-4 lge:col-span-4 md:col-span-4 mdsm:col-span-full sm:col-span-full px-4`}
                >
                  <div className={` relative`}>
                    <div
                      className={`pt-2 cinzel-font lg:text-[#fff] lge:text-[#fff] md:text-[#181818] mdsm:text-[#181818] sm:text-[#181818] font-semibold lg:text-5xl lge:text-5xl md:text-5xl mdsm:text-5xl sm:text-3xl lg:text-left lge:text-left md:text-left mdsm:text-left sm:text-left  `}
                    >
                      Logo
                    </div>
                    <div
                      className={`lg:hidden lge:hidden md:hidden mdsm:block sm:block absolute top-4 right-4 flex justify-end`}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-[30px] sm:text-[24px]"
                      >
                        <path d="M4 19h16v2H4zm0-4h11v2H4zm0-4h16v2H4zm0-8h16v2H4zm0 4h11v2H4z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={` col-span-8`}>
                  <div
                    className={` lg:block lge:block md:block mdsm:hidden sm:hidden`}
                  >
                    <div className={`  flex space-x-16 justify-end px-4 py-4`}>
                      <div
                        className={`alegreya-font text-[22px] text-[#181818] relative after:w-[0%] cursor-pointer hover:after:content-[""] hover:after:h-[4px] hover:after:bg-[#181818] hover:after:w-[70%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 `}
                      >
                        Home
                      </div>
                      <div
                        className={`alegreya-font text-[22px]  text-[#181818] relative after:w-[0%] cursor-pointer hover:after:content-[""] hover:after:h-[4px] hover:after:bg-[#181818] hover:after:w-[70%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 `}
                      >
                        About
                      </div>

                      <div
                        className={`alegreya-font text-[22px] text-[#181818] relative after:w-[0%] cursor-pointer hover:after:content-[""] hover:after:h-[4px] hover:after:bg-[#181818] hover:after:w-[70%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 `}
                      >
                        Services
                      </div>
                      <div
                        className={`alegreya-font text-[22px] text-[#181818] relative after:w-[0%] cursor-pointer hover:after:content-[""] hover:after:h-[4px] hover:after:bg-[#181818] hover:after:w-[70%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 `}
                      >
                        Contact
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="bg-[#181818] lg:block lge:block md:hidden mdsm:hidden sm:hidden h-full relative">
            <div className={` `}>
              <div
                className={` absolute flex justify-center items-center h-full  left-0 bottom-50 z-10  mx-4`}
              >
                <div>
                  <div className={` group cursor-pointer mt-8`}>
                    <div
                      className={`border hover:border-[#fff] group-hover:bg-[#181818] bg-[#fff] p-2`}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        class="text-[20px] group-hover:text-[#fff] text-[#181818]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"></path>
                      </svg>
                    </div>
                  </div>

                  <div className={`mt-6 group cursor-pointer`}>
                    <div
                      className={` border hover:border-[#fff] group-hover:bg-[#181818] bg-[#fff] p-2`}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        class="text-[20px] group-hover:text-[#fff] text-[#181818]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </div>
                  </div>

                  <div className={`mt-6 group cursor-pointer`}>
                    <div
                      className={`border hover:border-[#fff] group-hover:bg-[#181818] bg-[#fff] p-2`}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        class="text-[20px] group-hover:text-[#fff] text-[#181818]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` px-4 flex justify-center items-center h-full  lg:mt-6 lge:mt-0 ml-24 z-10`}
            >
              <div className={` block`}>
                <h1 className="  text-[#fff] ml-14 text-[50px] cinzel-font font-semibold ">
                  Collect
                </h1>
                {/* Hello */}
                <img
                  src={`../../Image/hero/hero002/shirts.webp`}
                  className={`h-[50vh]  mt-2 w-full  object-cover`}
                  alt="shirts"
                />
              </div>
            </div>
          </div>

          <div
            className={` lg:col-span-2 lge:col-span-2 md:col-span-full mdsm:col-span-full sm:col-span-full h-full relative`}
          >
            <div
              className={` h-full absolute top-0  w-full bg-[#f2f2f2ad]`}
            ></div>
            <div className={`  container mx-auto`}>
              <div
                className={`absolute h-full flex justify-start items-center`}
              >
                <div className={` block`}>
                  <h1
                    className={` text-[#181818] lg:mt-6 lge:mt-10  relative lg:text-[50px] lge:text-[50px] md:text-[30px] mdsm:text-[30px] sm:text-[30px] px-4    font-semibold cinzel-font `}
                  >
                    Clothes and T-shirts
                  </h1>
                  <p
                    className={`pt-1 alegreya-font  text-[#333] font-semibold text-justify lg:text-[24px] lge:text-[24px] md:text-[24px] mdsm:text-[20px] sm:text-[20px] lg:w-[70%] lge:w-[70%] md:w-[90%] mdsm:w-[90%] sm:w-[100%] px-4`}
                  >
                    Explore the latest trends in fashion with our exclusive
                    collection of clothes and t-shirts. Whether you're looking
                    for casual comfort or stylish elegance, we've got you
                    covered.
                  </p>
                  <p
                    className={`pt-2 alegreya-font text-[#333] font-semibold text-justify lg:text-[24px] lge:text-[24px] md:text-[24px] mdsm:text-[20px] sm:text-[20px] lg:w-[70%] lge:w-[70%] md:w-[90%] mdsm:w-[90%] sm:w-[100%] px-4`}
                  >
                    Stay ahead of the fashion curve with our weekly new
                    arrivals. Each piece is designed with you in mind, blending
                    comfort, quality, and style.
                  </p>

                  <button
                    className={`alegreya-font lg:text-[22px] lge:text-[22px] md:text-[22px] mdsm:text-[18px] sm:text-[16px] font-semibold tracking-widest mx-4 bg-[#181818] text-base mt-4 hover:bg-[#fff] border-2 border-[#181818]  hover:font-semibold hover:text-[#181818] px-16 py-3 text-[#fff]`}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            <img
              src={`https://images.unsplash.com/photo-1608739872119-f78feab7f976?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              className={` h-full object-cover`}
              alt="clothes"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
