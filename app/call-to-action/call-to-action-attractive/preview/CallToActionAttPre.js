"use client";
import React, { useState } from "react";
import "../../../style.css";


export default function CallToActionAttPre() {

  return (
    <>
      <div className=" py-[300px] dark:bg-secondary">
        <section
          className={`  relative py-10 bg-[url('/Image/call-to-action/001/001.webp')] h-[300px] bg-no-repeat bg-cover bg-center `}
        >
          <div className="absolute w-full bottom-0 mx-auto px-4">
            <div className="  container mx-auto ">
              <div className=" grid lg:grid-cols-3  lge:grid-cols-3 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 ">
                <div>
                  <div className="lg:block lge:block md:hidden mdsm:hidden sm:hidden ">
                    <img
                      src="../../Image/overall/person/person2.webp"
                      alt="person "
                      className="  h-[500px] mx-auto "
                    />
                  </div>
                </div>
                <div className=" col-span-2 relative ">
                  <div className=" absolute bottom-0 py-10">
                    <h3 className=" text-[#c7b130] sm:text-2xl  relative after:bg-[#fff] after:w-[10%] text-4xl font-semibold sedan-sc-font  pb-4">
                      Get a Free Quote
                    </h3>
                    <h4 className="merriweather text-[#fff]  text-[20px] ">
                      Looking for reliable logistics solutions? Get a free,
                      no-obligation quote today and discover how we can
                      streamline your supply chain.{" "}
                      <span className=" text-[#c7b130] merriweather underline underline-[#fff] underline-offset-2 ">
                        {" "}
                        Request your quote now!
                      </span>
                    </h4>
                    <button className=" bg-[#c7b130]  rounded-lg merriweather  py-2 px-16 mt-4 hover:bg-[#fff] ">
                      Call Now{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
