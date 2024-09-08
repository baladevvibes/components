"use client";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useState } from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function FooterDesignHtmlPre() {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div>
      <div className="pt-10 flex justify-center items-center">
        <AdsterraAds
          id="37bfd45a34f36324b962f1e32736a540"
          height="90"
          width="728"
        />
      </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/footer/footer-design-html-css">
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

      <div className=" bg-[#161925] ">
        <div className=" container mx-auto px-4 ">
          <div className=" grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1  pt-10">
            <div className=" ">
              <h3 className="text-[#a3986c] acme-font text-5xl"> Logo</h3>
            </div>

            <div className=" grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1">
              <div>
                <ul>
                  <li className="pt-2 varela-round-font text-[#fcfcfc] tracking-wide hover:text-[#a3986c] cursor-pointer">
                    About us{" "}
                  </li>
                  <li className="pt-2 varela-round-font  text-[#fcfcfc] tracking-wide hover:text-[#a3986c] cursor-pointer">
                    Our services{" "}
                  </li>
                  <li className="pt-2 varela-round-font text-[#fcfcfc] tracking-wide hover:text-[#a3986c] cursor-pointer">
                    Responsiblity{" "}
                  </li>
                  <li className="pt-2 varela-round-font text-[#fcfcfc] tracking-wide hover:text-[#a3986c] cursor-pointer pb-6">
                    Blog{" "}
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="varela-round-font text-[#fcfcfc]">Follow us</h4>

                <div className=" flex lg:mb-0 lge:mb-0 md:mb-0 mdsm:mb-6 sm:mb-6  space-x-4 mt-2">
                  <div className=" flex justify-center items-center h-[35px] w-[35px] hover:bg-[#a3986c] cursor-pointer rounded-lg border border-[#ccc]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" text-[20px] text-[#fff] group-hover:text-[#191919]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 10h3v3h-3v7h-3v-7h-3v-3h3v-1.255c0-1.189.374-2.691 1.118-3.512.744-.823 1.673-1.233 2.786-1.233h2.096v3h-2.1c-.498 0-.9.402-.9.899v2.101z"></path>
                    </svg>
                  </div>
                  <div className=" flex justify-center items-center h-[35px] w-[35px] hover:bg-[#a3986c] cursor-pointer rounded-lg border border-[#ccc]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="  text-[16px] text-[#fff] group-hover:text-[#191919]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
                    </svg>
                  </div>
                  <div className=" flex justify-center items-center h-[35px] w-[35px] hover:bg-[#a3986c] cursor-pointer rounded-lg border border-[#ccc]">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class=" text-[16px] text-[#fff] group-hover:text-[#191919]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 pb-6 border-[#ccc] border-t-[1px] grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1">
            <div>
              {" "}
              <p className="varela-round-font text-[12px] text-[#fcfcfc] tracking-wider">
                Copyright.All right reserved.
              </p>{" "}
            </div>
            <div className=" grid grid-cols-2">
              <div>
                <p className="varela-round-font text-[12px] text-[#fcfcfc] tracking-wider">
                  Terms and Ploicy
                </p>
              </div>
              <div>
                <p className="varela-round-font px-2 text-[12px] text-[#fcfcfc] tracking-wider">
                  {" "}
                  90123456789
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
