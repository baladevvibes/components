"use client";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeComponents from "../HomePage/HomeComponents";
import HomeCard from "../HomePage/HomeCard";
import AdsterraAds from "../components/AdsterraAds";
import TagRender from "../tag/TagRender";

export default function Tablecard() {
  const [data, setData] = useState(HomeComponents);
  var keyword = "table";
  useEffect(() => {
    let localData = [];
    HomeComponents?.forEach((el) => {
      if (el?.tag === keyword) {
        localData.push(el);
      }
    });
    setData(localData);
  }, []);

//   useEffect(() => {
//     var ads = document.getElementsByClassName("adsbygoogle").length;
//     for (var i = 0; i < ads; i++) {
//       try {
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//       } catch (e) {}
//     }
//   }, []);
  return (
    <div>
   
      {/* <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
      <div className={` `}>
        {/* <DatasetJsonLd
      description="The description needs to be at least 50 characters long"
      name="name of the dataset"
      license="https//www.example.com"
    /> */}
        <Header />
        {/* <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2500160320143617"
          data-ad-slot="2477731086"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins> */}

        <div className={`pt-[150px] sm:px-4 container mx-auto py-6`}>
        <div className=" flex justify-center items-center">
        <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
            </div>
          <h2 class=" title-font pt-16 pb-10 text-center text-secondary text-2xl font-semibold aos-init aos-animate">
            Table Components design 
          </h2>
          <div
            className={` grid lg:grid-cols-3 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 sm:px-2 gap-5`}
          >
            {data?.map((v, i) => {
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
          <div className=" pb-8">
            <TagRender tag="table" />
          </div>
        </div>
        <div id="container-c3d10aadb78d1e6613b3fc5333e31d3e"></div>
        {/* <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2500160320143617"
          data-ad-slot="2477731086"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins> */}

        <Footer />
      </div>
    </div>
  );
}