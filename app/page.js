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

// import Adsense, { AdUnit } from "@eisberg-labs/next-google-adsense";

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error', e);
      }
    }
  }, []);
  return (
    <main className=" relative">
      <div className={` `}>
       
        <Header />
        <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2500160320143617"
        data-ad-slot="2477731086"
        data-ad-format="auto"
        data-full-width-responsive="true"

      ></ins>
   

        {/* <ins
        className="adsbygoogle"
        style={{ width: 500, height: 300, float: 'left' }}
        data-ad-client="ca-pub-7292810486004926"
        data-ad-slot="7806394673"
        data-ad-format="auto"
      ></ins> */}
        {/* <AdSense.Google
  client='ca-pub-7292810486004926'
  slot='7806394673'
  style={{ width: 500, height: 300, float: 'left' }}
  format=''
/> */}

        {/* <Adsense client_id="2500160320143617"/>
      <AdUnit className="adsbygoogle block"
          //  style="display:block"
                data-ad-client="ca-pub-2500160320143617"
                data-ad-slot="7792904426"
                data-ad-format="auto"
                data-full-width-responsive="true"/> */}
        <div className={`pt-[150px] sm:px-4 container mx-auto py-6`}>
          <div
            className={` grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 sm:px-2 gap-5`}
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
    </main>
  );
}
