import React from "react";
import "../../../style.css";

export default function CardLayoutSectionPre() {
  return (
    <div>
      <section className=" my-20 container mx-auto">
        <div className=" grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2  mdsm:grid-cols-2 sm:grid-cols-1 gap-10 px-4">
          <div className=" overflow-hidden group relative">
            <img
              src={`../../Image/card/card005/industry-1.webp`}
              className={` h-[450px] object-cover`}
            />
            <div className=" absolute top-0 h-full w-full "></div>

            <div className="hidden  group-hover:block absolute top-0 w-full h-full bg-[#090808b3]"></div>
            <div className="transition duration-700  absolute p-6 group-hover:-translate-y-[400px]  ">
              <h3 className="passion-one-font  text-center text-[#e6a500] text-4xl font-semibold">
                Industry
              </h3>
              <p className="quicksand-font leading-7 text-1xl text-[#fff] pt-4">
                Advancements in artificial intelligence are revolutionizing the
                tech industry, driving innovation and efficiency. Companies are
                leveraging big data and machine learning to create smarter
                solutions for complex problems.
              </p>
            </div>
          </div>

          <div className=" overflow-hidden group relative">
            <img
              src={`../../Image/card/card005/Healthcare.webp`}
              className={` h-[450px] object-cover`}
            />
            <div className=" absolute top-0 h-full w-full "></div>

            <div className="hidden  group-hover:block absolute top-0 w-full h-full bg-[#090808b3]"></div>
            <div className="transition duration-700  absolute p-6 group-hover:-translate-y-[400px]  ">
              <h3 className="passion-one-font  text-center text-[#e6a500] text-4xl font-semibold">
              Healthcare
              </h3>
              <p className="quicksand-font leading-6  text-1xl text-[#fff] pt-4">
              The healthcare industry is increasingly adopting digital health technologies to improve patient outcomes. Innovations in telemedicine and wearable devices are transforming the way healthcare is delivered and managed.
              </p>
            </div>
          </div>


          <div className=" overflow-hidden group relative">
            <img
              src={`../../Image/card/card005/Finance.webp`}
              className={` h-[450px] object-cover`}
            />
            <div className=" absolute top-0 h-full w-full "></div>

            <div className="hidden  group-hover:block absolute top-0 w-full h-full bg-[#090808b3]"></div>
            <div className="transition duration-700  absolute p-6 group-hover:-translate-y-[400px]  ">
              <h3 className="passion-one-font  text-center text-[#e6a500] text-4xl font-semibold">
              Finance
              </h3>
              <p className="quicksand-font leading-7 text-1xl text-[#fff] pt-4">
              Fintech innovations are reshaping the financial landscape by providing more accessible and efficient services. Blockchain technology and digital currencies are at the forefront of this transformation, offering new opportunities for secure and transparent transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
