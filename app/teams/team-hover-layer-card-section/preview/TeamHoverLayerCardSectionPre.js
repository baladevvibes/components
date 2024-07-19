import React from "react";
import "../../../style.css";

export default function TeamHoverLayerCardSectionPre() {
  return (
    <div>
      <section>
        <div className={` container mx-auto py-16`}>
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
