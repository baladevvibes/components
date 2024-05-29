"use client";
import React, { useEffect } from "react";
import "../globals.css";
import "../style.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div
        data-aos="fade-down"
        className={`z-10 fixed top-0 w-full bg-[#fff] py-2`}
      >
        <div className={` container mx-auto`}>
          <div className={` grid grid-cols-2 sm:grid-cols-1`}>
            <div>
              <div className=" flex">
                <a href="/">
                  <img
                    src={`https://www.makecomponents.com/Image/logo.png`}
                    className={`h-[60px]`}
                  />
                </a>
                <a href="/">
                  <h1
                    className={`title-font text-secondary font-semibold text-2xl px-2 mt-5 `}
                  >
                    Make Components
                  </h1>
                </a>
              </div>

            </div>
            <div className={`pt-7 sm:hidden flex justify-end space-x-6`}>
              <div
                className={`text-base cursor-pointer hover:text-primary text-secondary font-semibold`}
              >
                {" "}
                Join Commiunty
              </div>
              <div
                className={`text-base cursor-pointer hover:text-primary text-secondary font-semibold`}
              >
                {" "}
                Contact
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-primary`}>
          <div className={` container mx-auto px-2 py-1`}>
            {/* <div className={` overflow-auto flex space-x-2`}>
              <button
                className={`py-0.2 px-2 font-semibold bg-white rounded-md text-sm`}
              >
                Header
              </button>

              <button
                className={`py-0.2 px-2 font-semibold bg-white rounded-md text-sm`}
              >
                About
              </button>

              <button
                className={`py-0.2 px-2 font-semibold bg-white rounded-md text-sm`}
              >
                Contact
              </button>
              <button
                className={`py-0.2 px-2 font-semibold bg-white rounded-md text-sm`}
              >
                Card
              </button>

              <button
                className={`py-0.2 px-2 font-semibold bg-white rounded-md text-sm`}
              >
                Team
              </button>

              <button
                className={`py-0.2 px-2 font-semibold bg-white rounded-md text-sm`}
              >
                FAQ
              </button>

              <button
                className={`py-0.2 px-2 font-semibold bg-white rounded-md text-sm`}
              >
                Footer
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
