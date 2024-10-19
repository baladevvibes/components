"use client";
import React, { useState } from "react";
import "../../../style.css";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function TableDesignPre() {
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
          <a href="/table/table-design">
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
     
        <div class="py-2">
        <section class="container mx-auto">
          <div class="sm:w-full overflow-auto px-4">
            <table class=" sm:w-[200%] md:w-[150%] mdsm:w-[150%] lge:w-full lg:w-full mx-auto">
              <thead>
                <tr className="  text-[#333]  font-bold border-b border-[#ccc]">
                  <td className=" sm:w-[100px] px-4 py-4">Order ID</td>
                  <td>Customer Name</td>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Date</td>
                  <td>Location</td>
                  <td className=" px-4">Status</td>
                </tr>
              </thead>
              <tbody>
                <tr className="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td className="px-4 font-bold py-4">#05122</td>
                  <td className=" py-4">Noah</td>
                  <td className=" py-4">Wireless Earbuds</td>
                  <td className=" py-4 font-semibold text-[green]">$33</td>
                  <td className=" py-4">19-10-2024</td>
                  <td className=" py-4">Cape Town, South Africa </td>
                  <td className="py-4 flex text-[green]">
                    {" "}
                    <div className="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[green]"></div>
                    Delivered{" "}
                  </td>
                </tr>
                <tr className="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td className="px-4 font-bold py-4">#5410</td>
                  <td className=" py-4">Alexander </td>
                  <td className=" py-4">Smart Doorbell Camera</td>
                  <td className=" py-4 font-semibold text-[green]">$53</td>
                  <td className=" py-4">19-10-2024</td>
                  <td className=" py-4">Cape Town, South Africa </td>
                  <td className="py-4 flex text-[green]">
                    {" "}
                    <div className="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[green]"></div>
                    Delivered{" "}
                  </td>
                </tr>
                <tr className="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td className="px-4 font-bold py-4">#95120</td>
                  <td className=" py-4">Fatima </td>
                  <td className=" py-4">Compact Air Fryer</td>
                  <td className=" py-4 font-semibold text-[green]">$64</td>
                  <td className=" py-4">19-10-2024</td>
                  <td className=" py-4">Sydney, Australia</td>
                  <td className="py-4 flex text-[#f5a524]">
                    {" "}
                    <div className="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[#f5a524]"></div>
                    On-Delivered{" "}
                  </td>
                </tr>
                <tr className="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td className="px-4 font-bold py-4">#85410</td>
                  <td className=" py-4">Sakura </td>
                  <td className=" py-4">Smart Water Bottle</td>
                  <td className=" py-4 font-semibold text-[green]">$10</td>
                  <td className=" py-4">19-10-2024</td>
                  <td className=" py-4">Rio de Janeiro, Brazil</td>
                  <td className="py-4 flex text-[#cf021a]">
                    {" "}
                    <div className="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[#cf021a]"></div>
                    Canceled{" "}
                  </td>
                </tr>
                <tr className="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td className="px-4 font-bold py-4">#06412</td>
                  <td className=" py-4">Zara  </td>
                  <td className=" py-4">Power Bank</td>
                  <td className=" py-4 font-semibold text-[green]">$23</td>
                  <td className=" py-4">19-10-2024</td>
                  <td className=" py-4">Sydney, Australia</td>
                  <td className="py-4 flex text-[#f5a524]">
                    {" "}
                    <div className="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[#f5a524]"></div>
                    On-Delivered{" "}
                  </td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
        </section>
      </div>

      </section>
    </div>
  );
}
