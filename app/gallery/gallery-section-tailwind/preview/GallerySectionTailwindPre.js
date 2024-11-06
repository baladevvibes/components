
"use client"
import "../../../style.css"
import React from "react";
import AdsterraAds from "../../../components/AdsterraAds";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function GallerySectionTailwindPre() {
  return (
    <div>
           <div className=" pt-10 flex justify-center items-center">
            
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
          <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/gallery/gallery-section-tailwind">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
   
      </div>

      <div className=" py-20">
        <div className=" container mx-auto">
          <div className=" grid lg:grid-cols-12  lge:grid-cols-12 md:grid-cols-1  mdsm:grid-cols-1 sm:grid-cols-1 lg:gap-2 lge:gap-2 md:gap-0 mdsm:gap-0 sm:gap-0">
            <div className=" col-span-3">
              <img
                src="../../Image/d-animals/dog/dog001.webp"
                alt="dog"
                className="h-[500px] w-full  object-cover"
              />
            </div>
            <div className=" col-span-6 lg:gap-2 lge:gap-2 md:gap-0 mdsm:gap-0 sm:gap-0 lg:pt-0 lge:pt-0 md:pt-2 mdsm:pt-2 sm:pt-2 ">
              <div className="h-[240px]">
                <div className=" grid grid-cols-2 lg:gap-2 lge:gap-2 md:gap-0 mdsm:gap-0 sm:gap-0">
                  <div>
                    <img
                      src="../../Image/d-animals/dog/dog003.webp"
                      alt="dog"
                      className="h-[240px] w-full  object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src="../../Image/d-animals/dog/dog002.webp"
                      alt="dog"
                      className="h-[240px]  w-full  object-cover lg:pl-0 lge:pl-0 md:pl-2 mdsm:pl-2 sm:pl-2"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[250px] lg:pt-2 lge:pt-2  md:pt-2 mdsm:pt-2 sm:pt-2">
                <img
                  src="../../Image/d-animals/dog/dog006.webp"
                  alt="dog"
                  className="h-[250px]  w-full  object-cover"
                />
              </div>
            </div>
            <div className=" col-span-3 lg:mt-0 lge:mt-0 md:mt-4 mdsm:mt-4 sm:mt-4">
              <img
                src="../../Image/d-animals/dog/dog005.webp"
                alt="dog"
                className="h-[500px]  w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
