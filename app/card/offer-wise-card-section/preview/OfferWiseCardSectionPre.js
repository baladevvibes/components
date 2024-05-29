import React from "react";
import "../../../font.css";

export default function OfferWiseCardSectionPre() {
  return (
    <div className={` container  mx-auto py-32`}>
      <section>
        <div className={` grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-2 p-2`}>
          <div className={` col-span-2 `}>
            <div className={` group relative `}>
              <div
                className={` cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 `}
              >
                <div className={` group-hover:block hidden`}>
                  <div
                    className={` freeman-font transition delay-300  tracking-wide text-6xl text-[#fff]  `}
                  >
                    New York
                  </div>
                </div>
              </div>
              <img
                src={`https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                className={` object-cover h-[400px] sm:w-full w-full`}
                alt="New York"
              />
            </div>
          </div>
          <div className={` col-span-3 h-full gap-2 `}>
            <div
              className={`lg:h-[40%] lge:h-[40%] md:h-[400px] mdsm:h-[400px] sm:h-[400px] relative group bg-[url('https://images.pexels.com/photos/1721747/pexels-photo-1721747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] overflow-hidden bg-primary  bg-hero bg-no-repeat bg-cover bg-center `}
            >
              <div className=" cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
                <div className={` group-hover:block hidden`}>
                  <div
                    className={` uppercase freeman-font transition delay-300  tracking-wide text-6xl text-[#fff]  `}
                  >
                    INDIA{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className={` h-[58%] mt-2 overflow-hidden `}>
              <div className={` grid grid-cols-2 gap-2  h-full `}>
                <div className={`group relative h-full  `}>
                  <img
                    src={`https://images.pexels.com/photos/2915957/pexels-photo-2915957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    alt=""
                    className={` h-full object-cover`}
                  />
                  <div
                    className={` cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 `}
                  >
                    <div className={` group-hover:block hidden`}>
                      <div
                        className={` uppercase freeman-font transition delay-300  tracking-wide text-6xl text-[#fff]  `}
                      >
                        China{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={` group relative h-full` }>
                  <img
                    src={`https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    alt=""
                    className={` h-full object-cover`}
                  />
                  <div
                    className={` cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 `}
                  >
                    <div className={` group-hover:block hidden`}>
                      <div
                        className={` uppercase freeman-font transition delay-300  tracking-wide text-6xl text-[#fff]  `}
                      >
                        Paris{" "}
                      </div>
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
