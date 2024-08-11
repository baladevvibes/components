"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import "../style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiAlignLeft } from "react-icons/bi";
import { MdOutlineCancelPresentation } from "react-icons/md";

export default function Header() {
  const [forceRender,setForceRender] =useState(false)
  const [smDevice,setSmDevice]=useState(false)

  const handleSmDevices = () =>{
    setSmDevice(!smDevice)
    setForceRender(!forceRender)
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
    <div className={` relative `}>
      {smDevice? <>
        <div className="  fixed top-0 h-full bg-[#0000009e] w-[100%] z-50">
        <div className=" flex h-full overflow-auto">
          <div className=" h-full  w-[90%] bg-primary">
            <h3
              className={`title-font px-4 pt-6 text-secondary font-semibold text-2xl`}
            >
              Make Components
            </h3>

            <ul className="pt-6 px-4">
              <li><a href="/terms-and-condition">terms and conditions</a></li>
              <li><a href="/legal">legal</a></li>
              <li><a href="mailto:makecomponents7202@gmail.com">contact</a></li>
            </ul>
          </div>
          <div className=" w-[10%]">
            <div className="w-full flex justify-center " onClick={()=>{
          handleSmDevices()
          }}>
            <MdOutlineCancelPresentation className=" mt-6 hover:text-primary cursor-pointer  text-[30px]"/>

            </div>
          </div>
        </div>
      </div>
      </> :null}
     
      <div
        data-aos="fade-down"
        className={`z-10 fixed top-0 w-full bg-[#fff] py-2`}
      >
        <div className={` container mx-auto `}>
          <div className={` grid grid-cols-2 sm:grid-cols-1`}>
            <div>
              <div className=" flex">
                <a href="/">
                  <img
                    src={`https://makecomponents.com/Image/logo.png`}
                    alt="make components"
                    className={`h-[60px]`}
                  />
                </a>
                <a href="/">
                  <h2
                    className={`title-font text-secondary font-semibold text-2xl px-2 mt-5 `}
                  >
                    Make Components
                  </h2>
                </a>
              </div>
            </div>
            <div className={`pt-7 sm:hidden flex justify-end space-x-6`}></div>
          </div>
          {smDevice? null :<>
            <div onClick={()=>{
          handleSmDevices()
          }} className=" absolute lg:hidden lge:hidden md:hidden mdsm:block sm:block top-8 right-6">
            <BiAlignLeft className=" cursor-pointer text-2xl" />
          </div>
          </>}
        </div>
        <div className={`bg-primary`}>
          <div className={` container mx-auto px-2 py-1`}></div>
        </div>
      </div>
    </div>
  </div>
  );
}
