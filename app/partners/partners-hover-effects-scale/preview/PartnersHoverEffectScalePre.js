import React from "react";

export default function PartnersHoverEffectScalePre() {
  return (
    <div className={` bg-[#f2f2f2] my-32`}>
      <section className={` container sm:overflow-hidden mx-auto py-16`}>
        <div className={` grid lg:grid-cols-7 lge:grid-cols-7 md:grid-cols-4 mdsm:grid-cols-4 sm:grid-cols-2  gap-2`}>
          <div>
            <img
              src={`../../Image/partners/bg/dell.webp`}
              alt="Dell"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>

          <div>
            <img
              src={`../../Image/partners/bg/infosys.webp`}
              alt="Infosys"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>

          <div>
            <img
              src={`../../Image/partners/bg/mirosoft.webp`}
              alt="mirosoft"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>

          <div>
            <img
              src={`../../Image/partners/bg/google.webp`}
              alt="google"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>

          <div>
            <img
              src={`../../Image/partners/bg/adidas.webp`}
              alt="adidas"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>

          <div>
            <img
              src={`../../Image/partners/bg/tata.webp`}
              alt="tata"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>

          <div>
            <img
              src={`../../Image/partners/bg/IBM.webp`}
              alt="IBM"
              className={`transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4
 `}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
