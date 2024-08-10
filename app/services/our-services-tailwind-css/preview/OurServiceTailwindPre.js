"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function OurServiceTailwindPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="dark:bg-[#1e1e1e]">
      <div className=" sticky top-2 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <div className=" group flex">
            <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
            <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
              Back
            </p>
          </div>
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
      <div className=" container mx-auto py-[200px] px-4">
        <section>
          <div className=" grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10">
            <div className=" group grid grid-cols-5 gap-5 ">
              <div className=" flex justify-end">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="group-hover:text-[#222]  text-4xl text-[#C42021] dark:group-hover:text-[#f2f2f2]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"></path>
                </svg>
              </div>
              <div className=" col-span-4">
                <h3 className="bakbak-one-font group-hover:text-[#222]  text-3xl text-[#C42021] dark:group-hover:text-[#f2f2f2]">
                  Key
                </h3>
                <p className=" pt-3 Fira text-[#374B4A] leading-7 dark:text-[#f2f2f2]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>

            <div className="group grid grid-cols-5 gap-5 ">
              <div className=" flex justify-end">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="group-hover:text-[#222]  text-4xl text-[#C42021] dark:group-hover:text-[#f2f2f2]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
                </svg>
              </div>
              <div className=" col-span-4">
                <h3 className="bakbak-one-font group-hover:text-[#222]  text-3xl text-[#C42021] dark:group-hover:text-[#f2f2f2]">
                  Secure
                </h3>
                <p className=" pt-3 Fira text-[#374B4A] leading-7 dark:text-[#f2f2f2]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>

            <div className="group grid grid-cols-5 gap-5 ">
              <div className=" flex justify-end">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  class="group-hover:text-[#222]  text-4xl text-[#C42021] dark:group-hover:text-[#f2f2f2]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"></path>
                </svg>
              </div>
              <div className=" col-span-4">
                <h3 className="bakbak-one-font group-hover:text-[#222]  text-3xl text-[#C42021] dark:group-hover:text-[#f2f2f2]">
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
    </div>
  );
}
