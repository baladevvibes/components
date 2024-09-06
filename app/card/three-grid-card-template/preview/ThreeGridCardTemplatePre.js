"use client"
import React from "react";
import AdsterraAds from "../../../components/AdsterraAds";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function ThreeGridCardTemplatePre() {
  return (
    <div>
      <section className=" my-20">
      <div className=" flex justify-center items-center">
            
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
          <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/card/three-grid-card-template">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
      
      </div>
        <div className={``}>
          <div
            className={` grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1`}
          >
            <div
              className={` h-[400px] bg-[#f71418] flex justify-center items-center`}
            >
              <h1
                className={` text-5xl acme-font font-semibold  text-center text-white`}
              >
                Our
                <br /> Campus
              </h1>
            </div>
            <div className={` h-[400px] relative`}>
              <div
                className={`top-0 bg-[#080808cc]  flex justify-center items-center w-full h-full absolute p-5 `}
              >
                <p className={` acme-font  font-semibold text-white text-5xl`}>
                  Library
                </p>
              </div>
              <img
                src={`../../Image/overall/places/Library.webp`}
                alt="library"
                className={` object-cover h-[400px]`}
              />
            </div>
            <div className={` h-[400px] relative`}>
              <div
                className={`top-0 bg-[#fbc02da8]  flex justify-center items-center w-full h-full absolute p-5 `}
              >
                <p className={` acme-font  font-semibold text-white text-5xl`}>
                  Play ground
                </p>
              </div>
              <img
                src={`../../Image/overall/places/Play-ground.webp`}
                alt="playground"
                className={` object-cover h-[400px]`}
              />
            </div>
            <div className={` h-[400px] relative`}>
              <div
                className={`top-0 bg-[#080808cc]  flex justify-center items-center w-full h-full absolute p-5 `}
              >
                <p className={` acme-font  font-semibold text-white text-5xl`}>
                  Higher Education
                </p>
              </div>
              <img
                src={`../../Image/overall/places/Higher-Education.webp`}
                alt="college"
                className={` object-cover h-[400px]`}
              />
            </div>
            <div className={` h-[400px] relative`}>
              <div
                className={`top-0 bg-[#bf3503ba]  flex justify-center items-center w-full h-full absolute p-5 `}
              >
                <p className={` acme-font  font-semibold text-white text-5xl`}>
                  Canteen
                </p>
              </div>
              <img
                src={`../../Image/overall/places/Canteen.webp`}
                alt="canteen"
                className={` object-cover h-[400px]`}
              />
            </div>
            <div className={` h-[400px] relative`}>
              <div
                className={`top-0 bg-[#080808cc]  flex justify-center items-center w-full h-full absolute p-5 `}
              >
                <p className={` acme-font  font-semibold text-white text-5xl`}>
                  Classroom
                </p>
              </div>
              <img
                src={`../../Image/overall/places/Classroom.webp`}
                alt="classroom"
                className={` object-cover h-[400px]`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
