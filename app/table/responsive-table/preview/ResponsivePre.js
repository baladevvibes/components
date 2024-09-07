"use client";
import React, { useState } from "react";
import "../../../style.css";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function ResponsivePre() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="py-20 dark:bg-[#1e1e1e]">
      
      <div className=" flex justify-center items-center">
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/table/responsive-table">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
   
      </div>
      <section className=" container mx-auto ">
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
                      className={` ${
                        dark ? `text-[#fff] ` : ``
                      } group-hover:text-[#fff] text-[16px]`}
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
        <div className=" sm:w-full overflow-auto px-4">
          <table className=" md:w-[80%]  mdsm:w-full sm:w-full mx-auto">
            <thead className=" bg-[#0349ff] text-left text-[#f2f2f2] ">
              <tr>
                <th className="px-4 py-2"> ID</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Shipping</th>
                <th className=" text-center py-2">Status</th>
              </tr>
            </thead>
            <tbody className="border-[#e6e6e6] dark:border-[#5a5a5a]  border-[1px] ">
              <tr className=" border-b-[1px] group dark:border-[#5a5a5a]   dark:text-[#f2f2f2]  border-[#e6e6e6] group text-left  text-sm text-[#3b3b3b] py-2">
                <td className=" py-2 dark:text-[#f2f2f2] text-[#3b3b3b] font-semibold  px-4">
                  RTDWQ052
                </td>
                <td className="  py-2  px-4">Apple Watch </td>
                <td className=" py-2 px-4">Henry</td>
                <td className=" py-2 px-4">Sydney</td>
                <td className=" py-2  flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2]  text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr className=" group text-left dark:border-[#5a5a5a]  dark:text-[#f2f2f2] dark:bg-[#5a5a5a]  text-sm text-[#3b3b3b] py-2">
                <td className="  odd:bg-[#ebf4fe] dark:bg-[#5a5a5a] dark:text-[#f2f2f2] py-2 text-[#3b3b3b] font-semibold px-4">
                  HDDBHS687
                </td>
                <td className=" px-4 even:bg-[#ebf4fe] dark:bg-[#5a5a5a] py-2">
                  Apple Watch
                </td>
                <td className="px-4 odd:bg-[#ebf4fe] dark:bg-[#5a5a5a] py-2">
                  Alexander
                </td>
                <td className="px-4 even:bg-[#ebf4fe] dark:bg-[#5a5a5a] py-2">
                  Berlin
                </td>
                <td className="px-4 odd:bg-[#ebf4fe]  dark:bg-[#5a5a5a] py-2 flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2]  text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr className=" border-b-[1px] group dark:border-[#5a5a5a]   border-[#e6e6e6] group text-left  dark:text-[#f2f2f2] text-sm text-[#3b3b3b] py-2">
                <td className=" py-2 text-[#3b3b3b] font-semibold dark:text-[#f2f2f2]  px-4">
                  OJDE121UB
                </td>
                <td className="  py-2  px-4">Samsung Galaxy</td>
                <td className="px-4 py-2 ">Olivia</td>
                <td className="px-4 py-2 ">Paris</td>
                <td className=" py-2  flex justify-center items-center ">
                  <div className=" rounded-3xl  dark:bg-[#f2f2f2] text-[#a51f1fd6] bg-[#f70a0a69] px-4">
                    Cancel
                  </div>
                </td>
              </tr>

              <tr className="group text-left dark:border-[#5a5a5a]  dark:text-[#f2f2f2] dark:bg-[#5a5a5a]  text-sm text-[#3b3b3b] py-2">
                <td className="dark:text-[#f2f2f2]  dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 text-[#3b3b3b] font-semibold px-4">
                  JKSL0945
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  Vacuum Cleaner
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2">
                  Benjamin
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  New York
                </td>
                <td className=" odd:bg-[#ebf4fe] dark:bg-[#5a5a5a] py-2 flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2] text-[#9f9300] bg-[#e3d20863] px-4">
                    Pending
                  </div>
                </td>
              </tr>

              <tr className=" dark:text-[#f2f2f2]  dark:border-[#5a5a5a] border-b-[1px] group   border-[#e6e6e6] group text-left  text-sm text-[#3b3b3b] py-2">
                <td className="dark:text-[#f2f2f2]  py-2 text-[#3b3b3b] font-semibold  px-4">
                  JHDDC021
                </td>
                <td className="  py-2  px-4">PlayStation</td>
                <td className="px-4 py-2 ">Emma</td>
                <td className="px-4 py-2 ">Barcelona</td>
                <td className=" py-2  flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2]  text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr className=" group text-left dark:border-[#5a5a5a]  dark:text-[#f2f2f2] dark:bg-[#5a5a5a]  text-sm text-[#3b3b3b] py-2">
                <td className="dark:text-[#f2f2f2]  dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 text-[#3b3b3b] font-semibold px-4">
                  POIBVV021
                </td>
                <td className="dark:bg-[#5a5a5a] px-4 even:bg-[#ebf4fe] py-2">
                  Coffee Machine
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2">
                  William
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  Rio
                </td>
                <td className="dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2] text-[#a51f1fd6] bg-[#f70a0a69] px-4">
                    Cancel
                  </div>
                </td>
              </tr>

              <tr className=" dark:text-[#f2f2f2] dark:border-[#5a5a5a] border-b-[1px] group   border-[#e6e6e6] group text-left  text-sm text-[#3b3b3b] py-2">
                <td className="dark:text-[#f2f2f2]  py-2 text-[#3b3b3b] font-semibold  px-4">
                  ZSDFCV201
                </td>
                <td className="  py-2  px-4">Nike Air Max</td>
                <td className="px-4 py-2 ">Sophia</td>
                <td className="px-4 py-2 ">Dubai</td>
                <td className=" py-2  flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2]  text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr className=" group text-left dark:border-[#5a5a5a]  dark:text-[#f2f2f2] dark:bg-[#5a5a5a]  text-sm text-[#3b3b3b] py-2">
                <td className="dark:text-[#f2f2f2]  dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 text-[#3b3b3b] font-semibold px-4">
                  MLYTRV01
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  GoPro Camera
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2">
                  James
                </td>
                <td className="px-4 dark:bg-[#5a5a5a] even:bg-[#ebf4fe] py-2">
                  London
                </td>
                <td className="dark:bg-[#5a5a5a] odd:bg-[#ebf4fe] py-2 flex justify-center items-center ">
                  <div className=" rounded-3xl dark:bg-[#f2f2f2] text-[#9f9300] bg-[#e3d20863] px-4">
                    Pending
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
