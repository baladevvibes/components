"use client";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
     data-aos="fade-up"
      className={`mt-6 sm:px-4 bg-secondary border border-[#ccc] border-l-0 border-r-0 border-b-0  py-4 `}
    >
      <div className={`  container mx-auto`}>
        <div className={` grid grid-cols-2`}>
          <div>
            <h1
                 data-aos="fade-up"
              className={`title-font text-white font-semibold text-2xl px-2  `}
            >
              Make Components
            </h1>
            <div className=" w-full">

       
            <div      data-aos="fade-up" className={` text-white text-sm px-2 pt-2 flex `}>
              Contact {" "}
              <div className="text-white px-2 hover:text-primary cursor-pointer">
                makecomponents7202@gmail.com
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-2 sm:grid-cols-1">
          <div>
          <div      data-aos="fade-up" className="text-white px-2 pt-4 text-[12px] ">
              © 2024 makecomponents. All Rights Reserved
            </div>
          </div>
          <div className="pt-4 flex space-x-5 justify-end sm:justify-start">
          <div      data-aos="fade-up" className="text-white px-2 hover:text-primary text-[12px] tracking-widest cursor-pointer">
              <a href="/terms-and-condition">terms and conditions</a>
            </div>
            <div      data-aos="fade-up" className="text-white px-2 hover:text-primary text-[12px] tracking-widest cursor-pointer">
              <a href="/legal">legal</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
