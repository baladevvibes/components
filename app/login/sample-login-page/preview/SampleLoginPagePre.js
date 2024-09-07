"use client"
import React from "react";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function SampleLoginPagePre() {
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
          <a href="/login/sample-login-page">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
     
      </div>

    <div className=" bg-[#1589ee]">
    <div className=" container mx-auto">
      <div>
        <div className="p-16 lg:h-[100vh] lge:h-[100vh] md:h-[100vh] mdsm:h-[140vh] sm:h-[100vh] sm:p-4 background  ">
          <div className=" grid  grid-cols-1 sm:flex sm:justify-center sm:items-center sm:h-full">
            <div></div>
            <div className="p-8 sm:p-2 ">
              <div className=" lg:w-[34%] lge:w-[40%] md:w-[60%] mx-auto bg-white rounded-lg">
                <img
                  src={"../../Image/login/002/login.webp"}
                  className="w-full h-[40vh] object-cover"
                />
                <div className="px-4 pb-4 pt-4">
                  <div className="pb-2 ">
                    <div className="  text-[#1589ee]  tracking-wide text-dashboard text-[20px] font-semibold">
                      Login in
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute top-1 left-1">
                      <div className="h-[30px] file: w-[30px] bg-[#b3d6f4] rounded-[4px] flex justify-center items-center">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#1589ee] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                      </div>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="User Email ID"
                      className={` outline-none focus:border-[#878787]  border placeholder:text-[#9a9a9a]  duration-300 border-[#ccc] text-sm rounded-[4px] p-3 pl-10 py-2 text-[#9195a1]  w-[100%]`}
                      required
                    />
                  </div>

                  <div className="relative mt-3 mb-3 group">
                    <div className="absolute top-1 left-1">
                      <div className="h-[30px] file: w-[30px] bg-[#b3d6f4] rounded-[4px] flex justify-center items-center">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#1589ee]  " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM5 10V20H19V10H5ZM11 14H13V16H11V14ZM7 14H9V16H7V14ZM15 14H17V16H15V14ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z"></path></svg>
                      </div>
                    </div>
                    <input
                      placeholder="Password"
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      className={` outline-none focus:border-[#878787]  border placeholder:text-[#9a9a9a]  duration-300 border-[#ccc] text-sm rounded-[4px] p-3 pl-10 py-2 text-[#9195a1]  w-[100%]`}
                      required
                    />
                  </div>

                  <div className="flex justify-center mb-0 ">
                    <button
                      type="submit"
                      className="py-1  bg-[#1589ee] hover:bg-[#005dbb] text-[18px] duration-300 tracking-wider hover:bg-dashboard-hover w-full bg-dashboard text-white rounded-[4px]"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </>
  );
}
