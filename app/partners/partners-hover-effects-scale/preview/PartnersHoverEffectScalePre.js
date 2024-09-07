"use client"
import React from "react";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function PartnersHoverEffectScalePre() {
  return (
    <>
      <div className="pt-10 flex justify-center items-center">
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/partners/partners-hover-effects-scale">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
    
      </div>
      <div className={` bg-[#f2f2f2] my-10`}>
      <section className={` container sm:overflow-hidden mx-auto py-16`}>
        <div
          className={` grid lg:grid-cols-7 lge:grid-cols-7 md:grid-cols-4 mdsm:grid-cols-4 sm:grid-cols-2  gap-2`}
        >
          <div>
            <img
              src={`../../Image/partners/bg/dell.webp`}
              alt="Dell"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>

          <div>
            <img
              src={`../../Image/partners/bg/infosys.webp`}
              alt="Infosys"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>

          <div>
            <img
              src={`../../Image/partners/bg/mirosoft.webp`}
              alt="mirosoft"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>

          <div>
            <img
              src={`../../Image/partners/bg/google.webp`}
              alt="google"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>

          <div>
            <img
              src={`../../Image/partners/bg/adidas.webp`}
              alt="adidas"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>

          <div>
            <img
              src={`../../Image/partners/bg/tata.webp`}
              alt="tata"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>

          <div>
            <img
              src={`../../Image/partners/bg/IBM.webp`}
              alt="IBM"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>
        </div>
      </section>
    </div>
    </>
  
  );
}
