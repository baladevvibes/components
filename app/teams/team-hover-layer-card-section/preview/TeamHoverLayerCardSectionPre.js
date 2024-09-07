"use client"
import React from "react";
import "../../../style.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import AdsterraAds from "../../../components/AdsterraAds";

export default function TeamHoverLayerCardSectionPre() {
  return (
    <div>
      <section>
        <div className={` container mx-auto py-16`}>
        <div className=" flex justify-center items-center">
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/teams/team-hover-layer-card-section">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>
  
      </div>
          <h1
            className={`text-[#101820] text-center w-full text-6xl pt-4 font-bold freeman-font`}
          >
            Mentors
          </h1>
          <div
            className={`  grid lg:grid-cols-4  lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-4 py-6`}
          >
            <div className={` p-2`}>
              <div
                className={` h-[400px] group cursor-pointer relative overflow-hidden w-full`}
              >
                <img
                     src={`../../Image/teams/Team002/person1.webp`}
                  alt="person1"
                  className="lg:h-[400px] lge:h-[400px] md:h-[500px] mdsm:h-[500px] sm:h-[600px]  w-full object-cover "
                />

                <div className={`absolute  h-full top-0 w-full `}>
                  <div
                    className={` tranasition duration-300  group-hover:bg-gradient-to-t from-[#293f54] h-full`}
                  ></div>

                  <div className=" px-4 w-full b-white absolute group-hover:visible invisible   bottom-8">
                    <div
                      className={`bg-[#101820] py-2 text-center text-white   tracking-wider`}
                    >
                      <span className=" text-2xl leading-10 freeman-font">
                        Johnathan Reynolds
                      </span>{" "}
                      <br />
                      CEO
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={` p-2`}>
              <div
                className={` h-[400px] group cursor-pointer relative overflow-hidden w-full`}
              >
                <img
                     src={`../../Image/teams/Team002/person2.webp`}
                  alt="person2"
                  className="lg:h-[400px] lge:h-[400px] md:h-[500px] mdsm:h-[500px] sm:h-[600px]  w-full object-cover "
                />

                <div className={`absolute  h-full top-0 w-full `}>
                  <div
                    className={` tranasition duration-300  group-hover:bg-gradient-to-t from-[#293f54] h-full`}
                  ></div>

                  <div className=" px-4 w-full b-white absolute group-hover:visible invisible   bottom-8">
                    <div
                      className={`bg-[#101820] py-2 text-center text-white   tracking-wider`}
                    >
                      <span className=" text-2xl leading-10 freeman-font">
                      Michael Harrison

                      </span>{" "}
                      <br />
                      Associate CEO
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={` p-2`}>
              <div
                className={` h-[400px] group cursor-pointer relative overflow-hidden w-full`}
              >
                <img
                   src={`../../Image/teams/Team002/person3.webp`}
                  alt="person3"
                  className="lg:h-[400px] lge:h-[400px] md:h-[500px] mdsm:h-[500px] sm:h-[600px]  w-full object-cover "
                />

                <div className={`absolute  h-full top-0 w-full `}>
                  <div
                    className={` tranasition duration-300  group-hover:bg-gradient-to-t from-[#293f54] h-full`}
                  ></div>

                  <div className=" px-4 w-full b-white absolute group-hover:visible invisible   bottom-8">
                    <div
                      className={`bg-[#101820] py-2 text-center text-white   tracking-wider`}
                    >
                      <span className=" text-2xl leading-10 freeman-font">
                      Jennifer Collins
                      </span>{" "}
                      <br />
                      HR
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={` p-2`}>
              <div
                className={` h-[400px] group cursor-pointer relative overflow-hidden w-full`}
              >
                <img
                   src={`../../Image/teams/Team002/person4.webp`}
                  alt="person4"
                  className="lg:h-[400px] lge:h-[400px] md:h-[500px] mdsm:h-[500px] sm:h-[600px]  w-full object-cover "
                />

                <div className={`absolute  h-full top-0 w-full `}>
                  <div
                    className={` tranasition duration-300  group-hover:bg-gradient-to-t from-[#293f54] h-full`}
                  ></div>

                  <div className=" px-4 w-full b-white absolute group-hover:visible invisible   bottom-8">
                    <div
                      className={`bg-[#101820] py-2 text-center text-white   tracking-wider`}
                    >
                      <span className=" text-2xl leading-10 freeman-font">
                      David Montgomery</span>{" "}
                      <br />
                      Team Leader
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
