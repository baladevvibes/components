"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeCard from "../HomePage/HomeCard";
import HomeComponents from "../HomePage/HomeComponents";
import TagData from "./TagData";
import Link from "next/link";
export default function Tag() {
  return (
    <div>
      <Header />
      <div className=" container mx-auto">
        <div className=" pt-[100px] container mx-auto px-2 sm:px-3">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-2500160320143617"
            data-ad-slot="2477731086"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <h1 class=" title-font pt-16 pb-10 text-center text-secondary text-2xl font-semibold aos-init aos-animate">
            Tag
          </h1>

          <div
            className={` grid lg:grid-cols-3 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 sm:px-2 gap-5`}
          >
            {TagData?.map((v, i) => {
              return (
                <div data-aos="fade-up">
                  <Link href={v?.link}>
                    <div
                      // onClick={() => handleClick(tag)}
                      className={`group cursor-pointer relative  drop-css rounded-lg`}
                    >
                      <div
                        className={`w-full rounded-t-lg overflow-hidden duration-700	 relative`}
                      >
                        <img
                          src={v?.image}
                          alt={v?.title}
                          className={`group-hover:scale-90 duration-700 `}
                        />
                      </div>

                      <div className={`rounded-b-lg`}>
                        <h2
                          className={`group-hover:text-secondary group-hover:bg-primary group-hover:rounded-b-lg  text-center text-[18px] duration-700 pb-2	py-2 px-4 text-textcolor text-base pt-2 font-semibold`}
                        >
                          {v?.tag}
                        </h2>
                        {/* <div className="pb-2 px-4"> */}
                        <div
                          className={` absolute text-center duration-700	 group-hover:bg-primary group-hover:text-secondary top-2 right-2 px-2 py-1 rounded-md bg-secondary text-white title-font text-lg`}
                        >
                          {v?.count}
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
