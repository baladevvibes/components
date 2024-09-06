"use client";
import React, { useState } from "react";
import "../../../style.css";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function CurveCardDesignPre() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className=" relative  py-20 dark:bg-secondary ">
      <section className="container mx-auto">
      <div className=" flex justify-center items-center">
            
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>

          <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/card/curve-card-design">
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
        
        <div className=" grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 px-4 gap-10">
          <div>
            <div className=" h-[450px] overflow-hidden rounded-2xl relative">
              <img
                src="../../Image/overall/building/building1.webp"
                alt="building"
                className="  w-full"
              />
            </div>
            <div className="">
              <h3 className=" text-[#3b3b3b] dark:text-[#fff]  text-2xl pt-6 bakbak-one-font">
                Emphasis on Functionality and Simplicity
              </h3>
              <p className="pt-2 text-[#5a5a5a] dark:text-[#fff]  roboto">
                Modern architecture prioritizes the functionality of spaces,
                often embracing minimalist designs. This approach emphasizes
                clean lines, open floor plans, and the use of materials like
                steel, glass, and concrete to create efficient and
                straightforward structures.
              </p>
            </div>
          </div>

          <div>
            <div className=" h-[450px] overflow-hidden rounded-2xl">
              <img
                src="../../Image/overall/building/building2.webp"
                alt="building"
                className="  w-full"
              />
            </div>
            <div className="">
              <h3 className=" text-[#3b3b3b] dark:text-[#fff]  text-2xl pt-6 bakbak-one-font">
                Integration of Sustainable Practices
              </h3>
              <p className="pt-2 text-[#5a5a5a] dark:text-[#fff]  roboto">
                Sustainability is a cornerstone of modern architecture.
                Architects incorporate eco-friendly materials, energy-efficient
                systems, and green building techniques to reduce environmental
                impact. Innovations such as green roofs, solar panels, and
                passive heating and cooling systems are commonly integrated into
                modern designs.
              </p>
            </div>
          </div>

          <div>
            <div className=" h-[450px] overflow-hidden rounded-2xl">
              <img
                src="../../Image/overall/building/building3.webp"
                alt="building"
                className="  w-full"
              />
            </div>
            <div className=" ">
              <h3 className=" text-[#3b3b3b]  dark:text-[#fff]  text-2xl pt-6 bakbak-one-font">
                Influence of Technology and Digital Tools
              </h3>
              <p className="pt-2 text-[#5a5a5a] dark:text-[#fff]  roboto">
                Advancements in technology have significantly influenced modern
                architecture. Digital design tools and software, such as
                Building Information Modeling (BIM), allow architects to create
                more precise and complex structures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
