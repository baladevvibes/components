import React from "react";
import "../../../style.css";

export default function HighlightSectionUiPre() {
  return (
    <div>
      <section className=" container mx-auto py-40">
        <div className=" grid grid-cols-2">
          <div className=" px-16">
            {/* <h3 className=" text-[64px] text-[#000000] Cambay font-light leading-[70px]">
            Education is the passport 
            </h3> */}
            <div className=" relative  ">
              <div className=" absolute"></div>

              <img
                src={`../../Image/overall/building/build.png`}
                className="h-[400px]"
              />
            </div>
          </div>
          <div className=" ">
            <h3 className=" text-4xl pt-10 text-[#000000] Cambay font-light leading-[70px]">
              About Us
            </h3>
            <p className=" varela-font text-[16px] text-[#404040] leading-6">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups. Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups. Lorem ipsum is placeholder text commonly used
              in the graphic, print, and publishing industries for previewing
              layouts and visual mockups. Lorem ipsum is placeholder text
              commonly used in the graphic, print, and publishing industries for
              previewing layouts and visual mockups. Lorem ipsum is placeholder
              text commonly used in the graphic, print, and publishing
              industries for previewing layouts and visual mockups. Lorem ipsum
              is placeholder text commonly used in the graphic, print, and
              publishing industries for previewing layouts and visual mockups.
            </p>
            <button className=" hover:text-[#003b80] font-semibold underline underline-offset-4 Cambay mt-6 text-[20] text-[#000000] leading-8">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
