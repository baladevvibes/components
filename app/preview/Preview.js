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
