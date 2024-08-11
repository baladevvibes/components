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
import { useEffect, useState } from "react";
import { DatasetJsonLd } from "next-seo";
import { BiAlignLeft } from "react-icons/bi";
import { MdOutlineCancelPresentation } from "react-icons/md";


export default function HomeRender() {
  const [buttonData, setButtonData] = useState();
  const [buttonNum, setButtonNum] = useState(1);
  const [calculator, setCalculator] = useState();
  const [buttonState, setButtonState] = useState(false);
  const [forceRender,setForceRender] =useState(false)
  const [smDevice,setSmDevice]=useState(false)

  const handleMore = () => {
    setButtonNum(buttonNum + 1);
    let cal = 11 * buttonNum + 11;
    let arr = [];
    HomeComponents?.forEach((el, i) => {
      if (cal >= i) {
        arr.push(el);
      }
    });
    if (buttonData.length === HomeComponents.length) {
      setButtonState(true);
    }
    setCalculator(cal);
    setButtonData(arr);
  };
  useEffect(() => {
    let arr = [];
    let cal = 11 * buttonNum;
    setCalculator(cal);
    setButtonData(2);
    HomeComponents?.forEach((el, i) => {
      if (buttonNum === 1) {
        if (cal >= i) {
          arr.push(el);
        }
      }
    });
    setButtonData(arr);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error", e);
      }
    }
  }, []);

const handleSmDevices = () =>{
  setSmDevice(!smDevice)
  setForceRender(!forceRender)
}
  return (
    <div>
      <div className={` relative `}>
        {smDevice? <>
          <div className="  fixed top-0 h-full bg-[#0000009e] w-[100%] z-50">
          <div className=" flex h-full overflow-auto">
            <div className=" h-full  w-[90%] bg-primary">
              <h3
                className={`title-font px-4 pt-6 text-secondary font-semibold text-2xl`}
              >
                Make Components
              </h3>

              <ul className="pt-6 px-4">
                <li><a href="/terms-and-condition">terms and conditions</a></li>
                <li><a href="/legal">legal</a></li>
                <li><a href="mailto:makecomponents7202@gmail.com">contact</a></li>
              </ul>
            </div>
            <div className=" w-[10%]">
              <div className="w-full flex justify-center " onClick={()=>{
            handleSmDevices()
            }}>
              <MdOutlineCancelPresentation className=" mt-6 hover:text-primary cursor-pointer  text-[30px]"/>

              </div>
            </div>
          </div>
        </div>
        </> :null}
       
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
              <div className={`pt-7 sm:hidden flex justify-end space-x-6`}></div>
            </div>
            {smDevice? null :<>
              <div onClick={()=>{
            handleSmDevices()
            }} className=" absolute lg:hidden lge:hidden md:hidden mdsm:block sm:block top-8 right-6">
              <BiAlignLeft className=" cursor-pointer text-2xl" />
            </div>
            </>}
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
            <a href="/hero" className=" hover:brightness-125 tracking-wide">
              Hero
            </a>
            <a href="/card" className=" hover:brightness-125 tracking-wide">
              Card
            </a>
            <a href="/about" className=" hover:brightness-125 tracking-wide">
              About
            </a>
          </div>
          <h1
            className={` title-font pt-16 pb-10 text-center text-secondary text-2xl font-semibold aos-init aos-animate`}
          >
            Make Components
          </h1>

          <div
            className={` grid lg:grid-cols-3 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 sm:px-2 gap-5`}
          >
            {buttonData?.map((v, i) => {
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
          {buttonState ? null : (
            <>
              <div className="my-6 flex justify-center">
                <button
                  className=" bg-primary py-2 px-12 tracking-wider hover:brightness-125 text-white rounded-lg"
                  onClick={() => handleMore()}
                >
                  More Components
                </button>
              </div>
            </>
          )}
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
