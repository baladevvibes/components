"use client"
import React from 'react'
import AdsterraAds from '../../../components/AdsterraAds'
import { IoReturnDownBackSharp } from 'react-icons/io5'

export default function TableWithSortPre() {
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
          <a href="/table/table-with-sort">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
    
      </div>
        <div className={` container mx-auto`}>
      <div className={` py-10 px-10`}>
        <div className=" sm:w-full overflow-auto">
          <table className={` w-full`}>
            <thead>
              <tr
                className={`bg-[#e5f3ff] border border-t-[#e4ebff] border-b-[#e4ebff] border-r-[#fdfdfd00] border-l-[#fdfdfd00]`}
              >
                <th
                  className={` py-2 sm:text-xs lg:w-auto lge:w-auto md:w-[60px] mdsm:w-w-[60px] sm:w-auto  lg:py-2 lge:py-2 md:py-4 mdsm:p-4  sm:py-4 flex text-sm font-medium leading-4.2 px-2`}
                >
                  S.No
                </th>
                <th className={`py-2  `}>
                  <div className={` sm:w-[250px]  lg:auto lge:auto md:w-[300px] mdsm:w-[300px] flex px-2 `}>
                    <div
                      className={`sm:text-xs  text-sm font-medium leading-4.3 `}
                    >
                      Invoice{" "}
                    </div>
                    <div className={`mt-0.5 `}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className={`py-2  `}>
                  <div
                    className={`  sm:w-[150px] lg:w-auto lge:w-[100px] md:w-[100px] mdsm:w-[150px] sm:text-xs    text-sm font-medium leading-4.3  flex px-2`}
                  >
                    <div
                      className={` `}
                    >
                      Due Date{" "}
                    </div>
                    <div className={`mt-0.5 `}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className={`py-2  `}>
                  <div className={` flex px-2 `}>
                    <div
                      className={`sm:text-xs  text-sm font-medium leading-4.3 `}
                    >
                      Status
                    </div>
                    <div className={`mt-0.5 `}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className={`py-2  `}>
                  <div className={` flex justify-end px-2`}>
                    <div
                      className={`sm:text-xs  text-sm font-medium leading-4.3 `}
                    >
                      Amount
                    </div>
                    <div className={`mt-0.5 `}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                      </svg>
                    </div>
                  </div>
                </th>
                <th className={`py-2  w-[200px]  `}>
                  <div className={`flex px-2`}>
                    <div
                      className={`sm:text-xs  text-sm font-medium leading-4.2 `}
                    >
                      Actions{" "}
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                title="TechCorp Solutions	"
                className="border  border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
              >
                <td className="py-3 px-2 text-sm text-[#333]"> 001</td>
                <td className="py-3 px-2  text-sm text-[#333] font-semibold">
                  TechCorp Solutions
                </td>
                <td className="py-3 px-2  text-sm text-[#333] ">22 Feb 2024</td>
                <td className="py-3 px-2  text-sm text-[#333] ">
                  <div className="py-1 px-2 bg-[#ffa8a3] text-[#8f0700] rounded-full w-16 text-sm">
                    Unpaid
                  </div>
                </td>
                <td className="py-3 px-4  text-right text-sm text-[#333] ">
                  $5.6
                </td>
                <td className="py-4 px-4  flex  space-x-12 text-sm text-[#333] ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class=" text-[#008cff] hover:text-[#0000ca]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-[#444] hover:text-[#0b6c00]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[#444] hover:text-[#c20000]  cursor-pointer delay-200 transition-all text-[18px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
                  </svg>
                </td>
              </tr>
              <tr
                title="TransGlobal Logistics"
                className="border  border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
              >
                <td className="py-3 px-2 text-sm text-[#333]"> 002</td>
                <td className="py-3 px-2  text-sm text-[#333] font-semibold">
                  TransGlobal Logistics
                </td>
                <td className="py-3 px-2  text-sm text-[#333] ">22 Feb 2024</td>
                <td className="py-3 px-2  text-sm text-[#333] ">
                  <div className="py-1 px-2 bg-[#b4ff8e] text-center text-[#0b6c00] rounded-full w-16">
                    paid
                  </div>
                </td>
                <td className="py-3 px-4  text-right text-sm text-[#333] ">
                  $559.6
                </td>
                <td className="py-4 px-4  flex  space-x-12 text-sm text-[#333] ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class=" text-[#008cff] hover:text-[#0000ca]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-[#444] hover:text-[#0b6c00]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[#444] hover:text-[#c20000]  cursor-pointer delay-200 transition-all text-[18px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
                  </svg>
                </td>
              </tr>
              <tr
                title="AquaPure Water Co."
                className="border  border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
              >
                <td className="py-3 px-2 text-sm text-[#333]"> 003</td>
                <td className="py-3 px-2  text-sm text-[#333] font-semibold">
                  AquaPure Water Co.
                </td>
                <td className="py-3 px-2  text-sm text-[#333] ">22 Feb 2024</td>
                <td className="py-3 px-2  text-sm text-[#333] ">
                  <div className="py-1 px-2 bg-[#b4ff8e] text-center text-[#0b6c00] rounded-full w-16">
                    paid
                  </div>
                </td>
                <td className="py-3 px-4  text-right text-sm text-[#333] ">
                  $785.6
                </td>
                <td className="py-4 px-4  flex  space-x-12 text-sm text-[#333] ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class=" text-[#008cff] hover:text-[#0000ca]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-[#444] hover:text-[#0b6c00]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[#444] hover:text-[#c20000]  cursor-pointer delay-200 transition-all text-[18px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
                  </svg>
                </td>
              </tr>
              <tr
                title="VirtuaVista Entertainment	"
                className="border  border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
              >
                <td className="py-3 px-2 text-sm text-[#333]"> 004</td>
                <td className="py-3 px-2  text-sm text-[#333] font-semibold">
                  VirtuaVista Entertainment
                </td>
                <td className="py-3 px-2  text-sm text-[#333] ">22 Feb 2024</td>
                <td className="py-3 px-2  text-sm text-[#333] ">
                  <div className="py-1 px-2 bg-[#ffa8a3] text-[#8f0700] rounded-full w-16 text-sm">
                    Unpaid
                  </div>
                </td>
                <td className="py-3 px-4  text-right text-sm text-[#333] ">
                  $54.6
                </td>
                <td className="py-4 px-4  flex  space-x-12 text-sm text-[#333] ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class=" text-[#008cff] hover:text-[#0000ca]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-[#444] hover:text-[#0b6c00]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[#444] hover:text-[#c20000]  cursor-pointer delay-200 transition-all text-[18px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
                  </svg>
                </td>
              </tr>
              <tr
                title="GreenTech Innovations"
                className="border  border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
              >
                <td className="py-3 px-2 text-sm text-[#333]"> 005</td>
                <td className="py-3 px-2  text-sm text-[#333] font-semibold">
                  GreenTech Innovations
                </td>
                <td className="py-3 px-2  text-sm text-[#333] ">22 Feb 2024</td>
                <td className="py-3 px-2  text-sm text-[#333] ">
                  <div className="py-1 px-2 bg-[#b4ff8e] text-center text-[#0b6c00] rounded-full w-16">
                    paid
                  </div>
                </td>
                <td className="py-3 px-4  text-right text-sm text-[#333] ">
                  $785.6
                </td>
                <td className="py-4 px-4  flex  space-x-12 text-sm text-[#333] ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class=" text-[#008cff] hover:text-[#0000ca]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                  </svg>

                  <svg
                    title="edit"
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-[#444] hover:text-[#0b6c00]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[#444] hover:text-[#c20000]  cursor-pointer delay-200 transition-all text-[18px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
                  </svg>
                </td>
              </tr>
              <tr
                title="Quantum Finance Corp"
                className="border  border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
              >
                <td className="py-3 px-2 text-sm text-[#333]"> 006</td>
                <td className="py-3 px-2  text-sm text-[#333] font-semibold">
                  Quantum Finance Corp
                </td>
                <td className="py-3 px-2  text-sm text-[#333] ">22 Feb 2024</td>
                <td className="py-3 px-2  text-sm text-[#333] ">
                  <div className="py-1 px-2 bg-[#b4ff8e] text-center text-[#0b6c00] rounded-full w-16">
                    paid
                  </div>
                </td>
                <td className="py-3 px-4  text-right text-sm text-[#333] ">
                  $945.6
                </td>
                <td className="py-4 px-4  flex  space-x-12 text-sm text-[#333] ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class=" text-[#008cff] hover:text-[#0000ca]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-[#444] hover:text-[#0b6c00]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[#444] hover:text-[#c20000]  cursor-pointer delay-200 transition-all text-[18px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
                  </svg>
                </td>
              </tr>
              <tr
                title="UrbanEats Culinary Group"
                className="border  border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
              >
                <td className="py-3 px-2 text-sm text-[#333]"> 007</td>
                <td className="py-3 px-2  text-sm text-[#333] font-semibold">
                  UrbanEats Culinary Group
                </td>
                <td className="py-3 px-2  text-sm text-[#333] ">22 Feb 2024</td>
                <td className="py-3 px-2  text-sm text-[#333] ">
                  <div className="py-1 px-2 bg-[#ffa8a3] text-[#8f0700] rounded-full w-16 text-sm">
                    Unpaid
                  </div>
                </td>
                <td className="py-3 px-4  text-right text-sm text-[#333] ">
                  $40.6
                </td>
                <td className="py-4 px-4  flex  space-x-12 text-sm text-[#333] ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class=" text-[#008cff] hover:text-[#0000ca]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-[#444] hover:text-[#0b6c00]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[#444] hover:text-[#c20000]  cursor-pointer delay-200 transition-all text-[18px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
                  </svg>
                </td>
              </tr>
              <tr
                title="NaturaLife Organics"
                className="border  border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
              >
                <td className="py-3 px-2 text-sm text-[#333]"> 008</td>
                <td className="py-3 px-2  text-sm text-[#333] font-semibold">
                  NaturaLife Organics
                </td>
                <td className="py-3 px-2  text-sm text-[#333] ">22 Feb 2024</td>
                <td className="py-3 px-2  text-sm text-[#333] ">
                  <div className="py-1 px-2 text-center bg-[#b4ff8e] text-[#0b6c00] rounded-full w-16">
                    paid
                  </div>
                </td>
                <td className="py-3 px-4  text-right text-sm text-[#333] ">
                  $715.6
                </td>
                <td className="py-4 px-4  flex  space-x-12 text-sm text-[#333] ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class=" text-[#008cff] hover:text-[#0000ca]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-[#444] hover:text-[#0b6c00]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[#444] hover:text-[#c20000]  cursor-pointer delay-200 transition-all text-[18px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
                  </svg>
                </td>
              </tr>
              <tr
                title="AeroSpace Dynamics"
                className="border  border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
              >
                <td className="py-3 px-2 text-sm text-[#333]"> 009</td>
                <td className="py-3 px-2  text-sm text-[#333] font-semibold">
                  AeroSpace Dynamics
                </td>
                <td className="py-3 px-2  text-sm text-[#333] ">22 Feb 2024</td>
                <td className="py-3 px-2  text-sm text-[#333] ">
                  <div className="py-1 px-2  text-center bg-[#b4ff8e] text-[#0b6c00] rounded-full w-16">
                    paid
                  </div>
                </td>
                <td className="py-3 px-4  text-right text-sm text-[#333] ">
                  $625.6
                </td>
                <td className="py-4 px-4  flex  space-x-12 text-sm text-[#333] ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class=" text-[#008cff] hover:text-[#0000ca]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-[#444] hover:text-[#0b6c00]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[#444] hover:text-[#c20000]  cursor-pointer delay-200 transition-all text-[18px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
                  </svg>
                </td>
              </tr>
              <tr
                title="EcoWave Energy"
                className="border  border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
              >
                <td className="py-3 px-2 text-sm text-[#333]"> 010</td>
                <td className="py-3 px-2  text-sm text-[#333] font-semibold">
                  EcoWave Energy
                </td>
                <td className="py-3 px-2  text-sm text-[#333] ">22 Feb 2024</td>
                <td className="py-3 px-2  text-sm text-[#333] ">
                  <div className="py-1 px-2 text-center bg-[#b4ff8e] text-[#0b6c00] rounded-full w-16">
                    paid
                  </div>
                </td>
                <td className="py-3 px-4  text-right text-sm text-[#333] ">
                  $555.6
                </td>
                <td className="py-4 px-4  flex  space-x-12 text-sm text-[#333] ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class=" text-[#008cff] hover:text-[#0000ca]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-[#444] hover:text-[#0b6c00]  cursor-pointer delay-200 transition-all text-[16px]"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[#444] hover:text-[#c20000]  cursor-pointer delay-200 transition-all text-[18px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}
