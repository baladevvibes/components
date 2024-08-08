import React from "react";
import "../../../style.css";
export default function SIdeHalfGridAboutPre() {
  return (
    <div className=" py-20 pb-32">
      <section>
        <div className=" lg:flex lge:flex md:block mdsm:block sm:block ">
          <div className="lg:block lge:block  md:hidden mdsm:hidden sm:hidden w-[40%] relative">
            <div className="  absolute top-0 h-full my-auto w-[100%]">
              <div className={` h-[70%] bg-[#333] `}>
                <img
                  src={`../../Image/about/about003/003.webp`}
                  alt="building"
                  className=" h-[140%] w-[86%] object-cover"
                />
              </div>
            </div>
          </div>
          <div
            className={` lg:hidden lge:hidden md:block mdsm:block sm:block relative `}
          >
            <div
              className={` bg-[#ede70e] absolute top-0 w-full h-[80%]`}
            ></div>

            <img
              src={`https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="building"
              className=" h-[400px] relative z-20 w-[90%]  object-cover"
            />
          </div>

          <div className=" lg:w-[60%] lge:w-[60%] md:w-full mdsm:w-full sm:w-full lg:px-32 lge:px-32 md:px-20 mdsm:px-10 sm:px-10 py-20  bg-[#ede70e] relative">
            <div className=" absolute top-0 lg:w-[10%] lge:w-[10%] md:w-[5%] mdsm:w-[5%] sm:w-[5%] h-[86%] bg-[#333] left-0"></div>
            <h1 className={` text-5xl text-[#333]  font-semibold title-font`}>
              About us
            </h1>

            <p
              className={` text-base inter-font text-[#333]  font-semibold pt-4 text-justify`}
            >
              Welcome to construction company! Since our founding in 1984, we
              have been dedicated to Engineerings of some group. As a leading
              provider of services in the industry, we pride ourselves on
              delivering high-quality solutions that meet the unique needs of
              our diverse clientele. Our team of experienced professionals is
              committed to innovation, excellence, and exceptional customer
              service, ensuring that every interaction with our company is a
              positive one.
            </p>

            <p
              className={` text-base inter-font text-[#333]  font-semibold pt-4 text-justify`}
            >
              We are constantly evolving and expanding to better serve our
              customers and stay ahead in a competitive market. Thank you for
              choosing company; we look forward to helping you achieve your
              goals with our top-notch services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
