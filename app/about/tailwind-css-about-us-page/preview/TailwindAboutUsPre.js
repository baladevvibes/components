"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { RiHeartAdd2Line, RiInputField } from "react-icons/ri";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";
import { GiCheckMark } from "react-icons/gi";

export default function TailwindAboutUsPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  dark:bg-[#1e1e1e]">
      <section className="container  mx-auto px-4 py-10">

        <div className=" flex justify-center items-center">
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/about/tailwind-css-about-us-page">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
        <div className=" flex justify-end">
          {/* <div onClick={() => darkModeHandler()}>
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
          </div> */}
        </div>
      </div>

      <div className=" py-10">
        <div className=" container mx-auto">
          <div className="px-4 grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1 gap-10">
            <div>
              <img
                src="../../Image/overall/about/about004.png"
                className="mx-auto h-[400px] w-[400px] lge:block lg:block md:hidden mdsm:hidden sm:block"
                alt="meeting"
              />
            </div>
            <div className="col-span-2">
              <h2 className="mt-12 font-semibold Comic text-[#091057] text-3xl ">
                What is Lorem Ipsum
              </h2>
              <p className=" text-[#434343] pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className=" grid grid-cols-2 sm:grid-cols-1">
                <div>
                  <ul className=" mt-6">
                    <li className="flex ">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>
                    <li className="flex mt-2">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>
                    <li className="flex mt-2">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>

                    <li className="flex mt-2">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className=" mt-6 sm:mt-2">
                    <li className="flex ">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>
                    <li className="flex mt-2">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>
                    <li className="flex mt-2">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>

                    <li className="flex mt-2">
                      <GiCheckMark className=" mx-4 text-[#091057]" />
                      <p className=" text-[#434343]">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="mx-6 hover:bg-[#222] text-[#fcfcfc] px-6 py-2 rounded-full bg-[#091057] mt-6">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
