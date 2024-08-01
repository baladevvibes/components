"use client"
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from 'react'
import "../../../style.css"

export default function TailwindBackgroundPre() {
    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
    };
  return (
    <>
    <div className=" dark:bg-[#1e1e1e]">
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
        <section className=" relative">
        <div className=" absolute z-10 w-full top-0">
          <div className="h-full container px-4 mx-auto w-full ">
            <div className="  w-[100%]">
              <div className=" min-h-[100vh]   text-center flex justify-center items-center">
                <div className=" block">
                  <h2 className="dark:text-[#f2f2f2] text-5xl sm:text-4xl Archivo">
                    {" "}
                    Innovate{" "}
                    <span className="text-5xl  sm:text-4xl Archivo font-normal">
                      with Us
                    </span>{" "}
                  </h2>

                  <h3 className=" text-2xl sm:text-[20px] dark:text-[#f2f2f2] text-[#434343] md:w-[60%] mdsm:w-[80%] sm:w-full mx-auto work pt-4">
                    The Future of Technology Starts Here.Leading the Way in{" "}
                    <span className=" font-semibold dark:text-[#f2f2f2] text-[#000]">
                      Technological Advancements
                    </span>{" "}
                  </h3>
                  <div className= "  relative z-10 mt-8">
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
          <div className=" absolute top-40  left-40 bg-[#c7295e] h-[300px] w-[300px] rounded-full blur-[250px]"></div>
          <div className=" absolute top-40  right-40 bg-[#4b91e2] h-[300px] w-[300px] rounded-full blur-[250px]"></div>
        </div>
      </section>
    </div>
    </>
  )
}
