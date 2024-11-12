
"use client"
import "../../../style.css"
import React from "react";
import AdsterraAds from "../../../components/AdsterraAds";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function MordernCardDesignTailwindCssPre() {
  return (
    <div>
           <div className=" pt-10 flex justify-center items-center">
            
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
          <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/footer/simple-footer-design">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
   
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1 gap-10">
            <div>
            <img
                src="../../Image/card/card003/Image001.webp"
                alt="Car"
                className="h-[450px] w-full  object-cover"
              />
              <div className="-mt-20 bg-[#fff]">
      
              <div className=" w-[80%] bg-[#fff] relative pb-10  px-6 z-10 ">
                <h4 className="text-[24px] merriweather pt-6 pb-6 text-[#333333] font-semibold">New Arrivals</h4>
                <p className="bg-[#fff] text-[16px] leading-7 merriweather text-[#5a5a5a]">
                Discover the latest additions to our showroom! Featuring cutting-edge technology, modern design, and superior performance, our new arrivals are sure to impress. Be among the first to test drive these stunning vehicles.
                </p>
                </div>
              </div>
            </div>

            <div>
            <img
                src="../../Image/card/card003/Image002.webp"
                alt="Car"
                className="h-[450px] w-full  object-cover"
              />
              <div className="-mt-20 bg-[#fff]">
      
              <div className=" w-[80%] bg-[#fff] relative pb-10  px-6 z-10 ">
                <h4 className="text-[24px] merriweather pt-6 pb-6 text-[#333333] font-semibold">Customer Reviews</h4>
                <p className="bg-[#fff] text-[16px] leading-7 merriweather text-[#5a5a5a]">
                Our customers love us! Read real reviews and testimonials from satisfied buyers who found their perfect vehicle with us. Their experiences speak volumes about our commitment to quality and service.
                </p>
                </div>
              </div>
            </div>

            <div>
            <img
                src="../../Image/card/card003/Image003.webp"
                alt="Car"
                className="h-[450px] w-full  object-cover"
              />
              <div className="-mt-20 bg-[#fff]">
      
              <div className=" w-[80%] bg-[#fff] relative pb-10  px-6 z-10 ">
                <h4 className="text-[24px] merriweather pt-6 pb-6 text-[#333333] font-semibold">Special Offers </h4>
                <p className="bg-[#fff] text-[16px] leading-7 merriweather text-[#5a5a5a]">
                Take advantage of our limited-time special offers and drive away with incredible savings. From discounted prices to attractive financing options, there's never been a better time to buy your dream car.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
