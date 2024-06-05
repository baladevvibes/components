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
                  src={`https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
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
                  src={`https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
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
                  src={`https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
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
                  src={`https://images.pexels.com/photos/3460134/pexels-photo-3460134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
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
