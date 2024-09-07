"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function TeamSectionDesignPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  dark:bg-[#1e1e1e]">
         <div className=" pt-10 flex justify-center items-center">
            
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/teams/team-section-design">
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

      
      <div className=" py-20">
        <section className=" container px-4 mx-auto">
        <div className=" grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-3 mdsm:grid-cols-2 sm:grid-cols-1">
          <div className="bg-[#F7D002]">
            <img src="../../Image/overall/person/person009.webp" alt="Person 009" className="  h-[300px] object-cover"/>
          </div>
          <div className="bg-[#F71735]">
            <img src="../../Image/overall/person/person010.webp" alt="Person 010" className="  h-[300px] object-cover"/>
          </div>
          <div className="bg-[#06BCC1]"> 
            <img src="../../Image/overall/person/person011.webp" alt="Person 011" className="  h-[300px] object-cover"/>
          </div>
          <div className="bg-[#363537]">
            <img src="../../Image/overall/person/person012.webp" alt="Person 012" className="  h-[300px] object-cover"/>
          </div>

        </div>

        </section>

      </div>

    
     
    </div>
  );
}
