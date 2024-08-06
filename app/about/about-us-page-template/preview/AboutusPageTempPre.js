"use client"
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from 'react'
import "../../../style.css"

export default function AboutusPageTempPre() {
    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
    };
  return (
    <div className="  dark:bg-[#1e1e1e]">
      <section className="container  mx-auto px-4 py-20">
      <div className=" sticky top-2  z-50 flex justify-end px-10 pb-10">
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
        <div className="py-20  grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 gap-10">
          <div>
            <h3 className="pt-14 text-5xl text-[#333533] font-semibold REM-font sm:text-4xl dark:text-[#F5CB5C] ">
              About us
            </h3>
            <p className="pt-6 text-[#333] Mulish lg:w-[80%] lge:w-[80%] md:w-full  dark:text-[#e6e6e6] mdsm:w-full sm:w-full text-[18px] leading-7 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p className="pt-2 text-[#333] Mulish lg:w-[80%] lge:w-[80%] md:w-full   mdsm:w-full sm:w-full dark:text-[#e6e6e6] text-[18px] leading-7 text-justify">
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
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
                    src={`../../Image/about/about005/vector.png`}
                    className=" "
                    alt="vector"
                  />
                </div>

                <img
                  src={`../../Image/about/about005/table.webp`}
                  alt="table"
                  className=" w-[100%] h-[250px]  object-cover p-4 rounded-lg bg-[#fff] "
                />
              </div>
            </div>
            <img
              src={`../../Image/about/about005/tea-shop.webp`}
              alt="tea-shop"
              className=" w-[60%] sm:w-[80%] h-[450px]  object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
