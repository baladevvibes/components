"use client";
import React, { useState } from "react";
import "../../../style.css";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

export default function CurveCardDesignPre() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className=" relative  py-20 dark:bg-secondary ">
      <section className="container mx-auto">
        <div className=" sticky top-2 flex justify-end px-10 pb-10">
          <div onClick={() => darkModeHandler()}>
            <div className={` group`}>
              <div
                className={` ${
                  dark ? `bg-secondary` : ``
                } p-1.5 border  border-[#ccc]  group-hover:bg-secondary  cursor-pointer  rounded-md`}
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
