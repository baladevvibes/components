import React from "react";
import "../../../style.css";

export default function FormalAboutSectionPre() {
  return (
    <div>
      <div className=" container sm:px-4 mx-auto py-32">
        <div className="grid grid-cols-12 gap-16 sm:gap-0 lg:gap-16 lge:gap-16 md:gap-0 mdsm:gap-0">
          <div className={`sm:col-span-12 lg:col-span-6 lge:col-span-6 md:col-span-full mdsm:col-span-full`}>
            <div className={``}>
              <img
                src={
                  "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                className="rounded-3xl  w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <div className={`sm:col-span-12 lg:col-span-6 lge:col-span-6 md:col-span-full mdsm:col-span-full`}>
            <div>
              <h2 className={`merienda-font text-[#fab700] lg:text-left lge:text-left md:text-center mdsm:text-center sm:text-center  text-5xl pt-16 font-semibold pb-4`}>
                About us
              </h2>
              <p className="w-[100%] kalam-font pt-2 text-2xl text-[#333333] sm:w-full text-justify">
                At Our Company, travel isn't just a trip, it's a transformative
                experience. We are a team of passionate travel enthusiasts
                dedicated to travel. From bustling cityscapes to hidden beaches,
                we curate journeys that ignite your curiosity and leave you with
                memories that last a lifetime.
              </p>
              {/* <div className={` pt-2`}>
                <p className={` kalam-font   text-base font-semibold`}> We are here to fuel your desire to explore.</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
