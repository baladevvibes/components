"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { RiHeartAdd2Line, RiInputField } from "react-icons/ri";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function AboutusPageTempPre() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  dark:bg-[#1e1e1e]">
      <section className="container  mx-auto px-4 py-20">
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/about/about-page-tailwind-css">
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

        <div className="py-28">
          <section className="h-full container mx-auto px-6">
            <div className=" grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 lg:gap-10 lge:gap-10 md:gap-0 mdsm:gap-0 sm:gap-0">
              <div className="h-full  col-span-3">
                <div>
                  <h2 className="pt-0 text-4xl  font-semibold dosis-font text-[#720026] ">
                    About us
                  </h2>
                  <p className=" dark:text-[#fcfcfc] text-[#333]  leading-7 pt-2 pb-6 text-1xl">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.Lorem ipsum is placeholder text
                    commonly used in the graphic, print, and publishing
                    industries for previewing layouts and visual mockups.
                  </p>

                  <div className=" grid grid-cols-2 sm:grid-cols-1 gap-10">
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        class=" text-[#720026] text-[50px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 9C4 6.49238 5.71351 5 7.5 5C9.40609 5 10.7537 6.58211 12 7.82843C13.2463 6.58211 14.5939 5 16.5 5C18.3158 5 20 6.48356 20 9C20 10.1222 19.7639 11.1501 19.3509 12.1019L21.1856 12.8981C21.7005 11.7114 22 10.4135 22 9C22 5.49592 19.5337 3 16.5 3C14.5905 3 13.1464 3.9848 12 5.02802C10.8536 3.9848 9.40952 3 7.5 3C4.50355 3 2 5.49623 2 9C2 12.0199 3.36207 14.4702 5.20346 16.445C7.03313 18.4073 9.38528 19.955 11.4916 21.1985L12.5084 19.4762C10.441 18.2557 8.29313 16.8259 6.66623 15.0811C5.05106 13.3489 4 11.3626 4 9ZM19 17V14H17V17H14V19H16.999L17 22H19L18.999 19H22V17H19Z"></path>
                      </svg>
                      <p className="text-[#333] dark:text-[#fcfcfc] leading-7 pt-2">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print
                      </p>
                    </div>
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        class=" text-[#720026] text-[50px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5H11V19H8V21H16V19H13V5H16V3H8V5ZM2 7C1.44772 7 1 7.44772 1 8V16C1 16.5523 1.44772 17 2 17H8V15H3V9H8V7H2ZM16 9H21V15H16V17H22C22.5523 17 23 16.5523 23 16V8C23 7.44772 22.5523 7 22 7H16V9Z"></path>
                      </svg>
                      <p className="text-[#333] dark:text-[#fcfcfc] leading-7 pt-2">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print
                      </p>
                    </div>
                  </div>
                  <img
                    src={`../../Image/overall/person/person005.webp`}
                    className="w-full lg:mt-0 object-cover lg:hidden lge:hidden md:block mdsm:block sm:block lge:mt-0 md:mt-12 mdsm:mt-12 sm:mt-10"
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
                  className="w-full h-full object-cover lg:mt-0  lge:mt-0 md:mt-12 mdsm:mt-12 sm:mt-10"
                  alt="Gym"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
