"use client";
import Image from "next/image";
import Header from "./components/Header";
import "./style.css";
import "./style.css";
import HomeComponents from "./HomePage/HomeComponents";
import HomeCard from "./HomePage/HomeCard";
import Footer from "./components/Footer";
import Head from "next/head";
import { BsDisplay } from "react-icons/bs";
import { useEffect } from "react";
import { DatasetJsonLd } from "next-seo";
import { BiAlignLeft } from "react-icons/bi";
export default function HomeRender() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error", e);
      }
    }
  }, []);
  return (
    <div>
      <div className={` relative `}>
        {/* <div className=" absolute top-0 h-full bg-[#0000009e] w-[100%] z-50">
          Hello
        </div> */}
        <div
          data-aos="fade-down"
          className={`z-10 fixed top-0 w-full bg-[#fff] py-2`}
        >
          <div className={` container mx-auto `}>
            <div className={` grid grid-cols-2 sm:grid-cols-1`}>
              <div>
                <div className=" flex">
                  <a href="/">
                    <img
                      src={`https://makecomponents.com/Image/logo.png`}
                      alt="make components"
                      className={`h-[60px]`}
                    />
                  </a>
                  <a href="/">
                    <h2
                      className={`title-font text-secondary font-semibold text-2xl px-2 mt-5 `}
                    >
                      Make Components
                    </h2>
                  </a>
                </div>
              </div>
              <div className={`pt-7 sm:block flex justify-end space-x-6`}></div>
            </div>
            {/* <div className=" absolute top-6 right-6">
              <BiAlignLeft className=" text-2xl" />
            </div> */}
          </div>
          <div className={`bg-primary`}>
            <div className={` container mx-auto px-2 py-1`}></div>
          </div>
        </div>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2500160320143617"
          data-ad-slot="2477731086"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <div className={`pt-[150px] sm:px-4 container mx-auto py-6`}>
          <div className="px-6 tags space-x-10">
            <a href="/hero" className=" hover:brightness-125 tracking-wide">Hero</a>
            <a href="/card" className=" hover:brightness-125 tracking-wide">Card</a>
            <a href="/about" className=" hover:brightness-125 tracking-wide">About</a>
          </div>
          <h1
            className={` title-font pt-16 pb-10 text-center text-secondary text-2xl font-semibold aos-init aos-animate`}
          >
            Make Components
          </h1>

          <div
            className={` grid lg:grid-cols-3 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 sm:px-2 gap-5`}
          >
            {HomeComponents?.map((v, i) => {
              return (
                <HomeCard
                  title={v?.title}
                  img={v?.image}
                  tag={v?.tag}
                  link={v?.link}
                />
              );
            })}
          </div>
        </div>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2500160320143617"
          data-ad-slot="2477731086"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <Footer />
      </div>
    </div>
  );
}
