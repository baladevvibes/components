"use client"
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { IoReturnDownBackSharp } from 'react-icons/io5';
import AdsterraAds from '../../../components/AdsterraAds';

export default function CardInfoSectionEightGridPre() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div>
        <div className="pt-10 flex justify-center items-center">
            <AdsterraAds
              id="37bfd45a34f36324b962f1e32736a540"
              height="90"
              width="728"
            />
          </div>
      <div className=" sticky z-50 top-2 py-4 grid grid-cols-2 sm:px-4  px-10 pb-10">
        <div className=" ">
          <a href="/info/card-info-section-eight-grid">
            <div className=" group flex">
              <IoReturnDownBackSharp className=" cursor-pointer dark:text-primary group-hover:text-primary mt-1" />
              <p className=" mx-4 group-hover:text-primary  cursor-pointer dark:text-primary">
                Back
              </p>
            </div>
          </a>
        </div>

      </div>
         <section className={` container mx-auto py-10`}>
        <div
          className={` grid lg:grid-cols-12 lge:grid-cols-12 sm:grid-cols-1`}
        >
          <div
            className={` lg:col-span-2 lge:col-span-2  md:col-span-1 mdsm:col-span-1 sm:hidden`}
          ></div>
          <div
            className={` lg:col-span-8 lge:col-span-8 md:col-span-10 mdsm:col-span-10 sm:grid-cols-12`}
          >
            <div
              className={` grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10 sm:px-2 sm:gap-4`}
            >
              <div
                data-aos="fade-up"
                className={`  bg-[#ed913230] rounded-2xl p-4 `}
              >
                <div className={`flex justify-center items-center `}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    class=" text-[120px] text-[#ed9132]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z"></path>
                    <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0"></path>
                  </svg>
                </div>

                <div className={` block`}>
                  <div
                    className={`  milonga-font tracking-wide pt-2 font-semibold text-3xl text-[#ed9132] text-center `}
                  >
                    Room
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className={`  bg-[#ed913230] rounded-2xl p-4 `}
              >
                <div className={`flex justify-center items-center `}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-[120px] text-[#ed9132]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M18.98 17H2v2h20v-2zM21 16c-.27-4.07-3.25-7.4-7.16-8.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13A7.002 7.002 0 0 1 12 9.58z"></path>
                  </svg>
                </div>

                <div className={` block`}>
                  <div
                    className={`  milonga-font tracking-wide font-semibold text-3xl text-[#ed9132] text-center `}
                  >
                    Food
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className={`  bg-[#ed913230] rounded-2xl p-4 `}
              >
                <div className={`flex justify-center items-center `}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 256 256"
                    class=" text-[120px] text-[#ed9132]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M240,88h-9.53l-9.29-43.35A16.08,16.08,0,0,0,205.53,32H50.47A16.08,16.08,0,0,0,34.82,44.65L25.53,88H16a8,8,0,0,0,0,16h8v96a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V176h96v24a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V104h8a8,8,0,0,0,0-16ZM50.47,48H205.53l8.57,40H41.9ZM64,200H40V176H64Zm128,0V176h24v24Zm24-40H152V128a8,8,0,0,0-16,0v32H120V128a8,8,0,0,0-16,0v32H40V104H216ZM56,132a12,12,0,1,1,12,12A12,12,0,0,1,56,132Zm120,0a12,12,0,1,1,12,12A12,12,0,0,1,176,132Z"></path>
                  </svg>
                </div>

                <div className={` block`}>
                  <div
                    className={`  milonga-font tracking-wide font-semibold text-3xl text-[#ed9132] text-center `}
                  >
                    Jeep Safari
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className={`  bg-[#ed913230] rounded-2xl p-4 `}
              >
                <div className={`flex justify-center items-center `}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class=" text-[120px] text-[#ed9132]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
                    ></path>
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
                    ></path>
                  </svg>
                </div>

                <div className={` block`}>
                  <div
                    className={`  milonga-font tracking-wide font-semibold text-3xl text-[#ed9132] text-center `}
                  >
                    Cottage
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className={`  bg-[#ed913230] rounded-2xl p-4 `}
              >
                <div className={`flex justify-center items-center `}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 256 256"
                    class=" text-[120px] text-[#ed9132]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M176,104a32,32,0,1,0-32-32A32,32,0,0,0,176,104Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,56Zm46.16,129.24a8,8,0,0,1-1,11.26c-17.36,14.39-32.86,19.5-47,19.5-18.58,0-34.82-8.82-49.93-17-25.35-13.76-47.24-25.65-79.07.74a8,8,0,1,1-10.22-12.31c40.17-33.29,70.32-16.93,96.93-2.49,25.35,13.77,47.24,25.65,79.07-.74A8,8,0,0,1,222.16,185.24ZM34.89,147.42a8,8,0,1,0,10.22,12.31c31.83-26.38,53.72-14.5,79.07-.74,15.11,8.2,31.35,17,49.93,17,14.14,0,29.64-5.11,47-19.5a8,8,0,1,0-10.22-12.31,75.79,75.79,0,0,1-19.28,12.06l-53.84-53.82A103.34,103.34,0,0,0,64.24,72H40a8,8,0,0,0,0,16H64.24a87.66,87.66,0,0,1,41.88,10.56L76.49,128.17C63.82,129.35,50.07,134.84,34.89,147.42Zm91.57-33.67,46.13,46.12c-14-.43-26.88-7.39-40.77-14.93-10.75-5.84-22.09-12-34.42-15.05l22.26-22.26A87.14,87.14,0,0,1,126.46,113.75Z"></path>
                  </svg>
                </div>

                <div className={` block`}>
                  <div
                    className={` milonga-font tracking-wide font-semibold text-3xl text-[#ed9132] text-center `}
                  >
                    Swim
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className={`  bg-[#ed913230] rounded-2xl p-4 `}
              >
                <div className={`flex justify-center items-center `}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-[120px] font-normal text-[#ed9132]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.00488 9.49979V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V9.49979C20.6242 9.49979 19.5049 10.6191 19.5049 11.9998C19.5049 13.3805 20.6242 14.4998 22.0049 14.4998V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V14.4998C3.38559 14.4998 4.50488 13.3805 4.50488 11.9998C4.50488 10.6191 3.38559 9.49979 2.00488 9.49979ZM14.0049 4.99979H4.00488V7.96755C5.4866 8.7039 6.50488 10.2329 6.50488 11.9998C6.50488 13.7666 5.4866 15.2957 4.00488 16.032V18.9998H14.0049V4.99979ZM16.0049 4.99979V18.9998H20.0049V16.032C18.5232 15.2957 17.5049 13.7666 17.5049 11.9998C17.5049 10.2329 18.5232 8.7039 20.0049 7.96755V4.99979H16.0049Z"></path>
                  </svg>
                </div>

                <div className={` block`}>
                  <div
                    className={`  milonga-font tracking-wide font-semibold text-3xl text-[#ed9132] text-center `}
                  >
                    Package
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` lg:col-span-2 lge:col-span-2  md:col-span-1 mdsm:col-span-1 sm:hidden`}
          ></div>
        </div>
      </section> 
    </div>
  )
}
