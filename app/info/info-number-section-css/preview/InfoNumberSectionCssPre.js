"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function InfoNumberSectionCssPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div>
      <div className="pt-10 flex justify-center items-center">
        <AdsterraAds
          id="37bfd45a34f36324b962f1e32736a540"
          height="90"
          width="728"
        />
      </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/info/info-number-section-css">
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

     <div className=" bg-[#054A91] dark:bg-[#3b3b3b]  relative overflow-hidden">
      <img src="../../Image/overall/svg/background-path.svg" alt=" " className="h-full w-full object-cover absolute top-0"/>
        <section className="py-20 container mx-auto">
            <div className=" grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1">
                <div>
                   
                    <h4 className=" text-center relative z-10 rowdies   text-5xl text-[#fcfcfc]">1 M</h4>
                    <p className=" text-xl  mt-2  relative z-10   text-center text-[#fcfcfc]">Users</p>
                </div>
                <div>
                   
                   <h4 className=" text-center rowdies relative z-10  text-5xl text-[#fcfcfc]">50+</h4>
                   <p className=" text-xl  mt-2 relative z-10   text-center text-[#fcfcfc]">Faculties</p>
               </div>
               <div>
                   
                   <h4 className=" text-center rowdies relative z-10  text-5xl text-[#fcfcfc]">100+</h4>
                   <p className=" text-xl  mt-2 relative z-10   text-center text-[#fcfcfc]">Program</p>
               </div>
               <div>
                   
                   <h4 className=" text-center relative z-10  rowdies  text-5xl text-[#fcfcfc]">200+</h4>
                   <p className=" text-xl  mt-2 relative z-10   text-center text-[#fcfcfc]">Task</p>
               </div>
            </div>
        </section>
     </div>
    </div>
  );
}
