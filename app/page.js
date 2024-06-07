"use client";
import Image from "next/image";
import Header from "./components/Header";
import "./style.css";
import "./style.css";
import HomeComponents from "./HomePage/HomeComponents";
import HomeCard from "./HomePage/HomeCard";
import Footer from "./components/Footer";
import Head from "next/head";
import AdSense from "react-adsense";
import { BsDisplay } from "react-icons/bs";

// import Adsense, { AdUnit } from "@eisberg-labs/next-google-adsense";

export default function Home() {
  return (
    <main className=" relative">
      <div className={` `}>
        <Header />

        <AdSense.Google
          client="ca-pub-2500160320143617"
          slot="7792904426"
          style={{ display: "block" }}
          format="auto"
          responsive="true"
        />

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

        <AdSense.Google
          client="ca-pub-2500160320143617"
          slot="9781506038"
          style={{ display: "block" }}
        />


        {/* <Adsense client_id="2500160320143617"/>
      <AdUnit className="adsbygoogle block"
          //  style="display:block"
                 data-ad-format="autorelaxed"
                 data-ad-client="ca-pub-2500160320143617"
                 data-ad-slot="9781506038"/> */}
        <Footer />
      </div>
    </main>
  );
}
