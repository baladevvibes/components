"use client";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeComponents from "../HomePage/HomeComponents";
import HomeCard from "../HomePage/HomeCard";
import AdsterraAds from "../components/AdsterraAds";
import TagRender from "../tag/TagRender";


export default function DashboardCard() {
  const [data, setData] = useState(HomeComponents);
  var keyword = ["dashboard-info",];

  useEffect(() => {
    let localData = [];
    HomeComponents?.forEach((el) => {
      if (el?.tag === keyword[0] || el?.tag === keyword[1]) {
        localData.push(el);
      }
    });
    setData(localData);
  }, []);
  return (
    <div>
 <div>
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
          <h1 class=" title-font pt-16 pb-10 text-center text-secondary text-2xl font-semibold aos-init aos-animate">
            Dashboard Components
          </h1>
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
        </div>

        <div className=" pb-8">
            <TagRender tag="dashboard-info"/>
            </div>

<div id="container-c3d10aadb78d1e6613b3fc5333e31d3e"></div>

        <Footer />
      </div>
    </div>
    </div>
  )
}
