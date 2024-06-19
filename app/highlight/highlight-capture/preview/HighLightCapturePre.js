import React from "react";
import "../../../style.css"
export default function HighLightCapturePre() {
  return (
    <div className=" bg-[#ccf7ff] my-32">
      <div className=" container mx-auto">
        <section>
          <div className={` grid lg:grid-cols-2  lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1`}>
            <div className=" relative">
              <img
                src={`../../Image/highlight/001/sideImage.webp`}
                alt="house"
                className=" mx-auto lg:-top-20 lge:-top-20 md:top-0 mdsm:top-0 sm:top-0 lg:h-[500px] lg:w-[500px] lge:h-[500px] lge:w-[500px] md:h-[500px] md:w-[500px] mdsm:h-[400px] mdsm:-[400px] sm:h-[400px] sm:w-[400px] h-[500px] w-[500px] absolute md:relative lg:absolute lge:absolute  mdsm:relative sm:relative  object-cover"
              />
            </div>
            <div className=" lg:py-20 lge:py-20 md:py-10 mdsm:py-10 sm:py-10 px-4">
              <h1 className="dosis-font text-4xl text-[#00333d] font-semibold">Get the Best Home Design Tips! </h1>
              <p className="varela-font  text-[20px] pt-6 text-[#001e24]" >
                Transform your living space with expert advice and stay ahead
                with the latest trends. Join our community today!
              </p>
              <div className="mt-4 flex pt-4">
              <input type="text" placeholder=" Get in touch" className="varela-font text-[#333] w-[50%] outline-none px-4 py-3 border	 border-[#fff] "/>
                <button className="bg-[#00333d] varela-font py-3 px-16 mx-10 hover:border hover:border-[#00333d] hover:bg-[#fff] hover:text-[#00333d] text-[#fff]">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
