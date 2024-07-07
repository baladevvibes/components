import React from "react";

export default function SemiCardDesignPre() {
  return (
    <div>
      <div className=" container mx-auto py-32 sm:px-10 ">
        <div className=" grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10">
          <div>
            <img
              src={`../../Image/card/card004/Succulent.webp`}
              className="rounded-t-full h-[200px] sm:h-[250px] object-cover w-full"
              alt="Succulent Plants"
            />
            <div className=" bg-[#002200] p-6 pb-8">
              <p className=" text-center  dm-serif-text-regular text-[#fff] text-3xl">
                Succulent
              </p>
              <p className=" text-[#fff] text-center text-[20px] cormorant-garamond-light  pt-2">
                This characteristic makes them exceptionally low-maintenance.
              </p>
            </div>
          </div>

          <div>
            <img
             src={`../../Image/card/card004/Jade.webp`}
              className="rounded-t-full h-[200px] sm:h-[250px]  object-cover w-full"
              alt="Jade Plants"
            />
            <div className=" bg-[#002200] p-6 pb-8">
              <p className=" text-center  dm-serif-text-regular text-[#fff] text-3xl">
                Jade
              </p>
              <p className=" text-[#fff] text-center text-[20px] cormorant-garamond-light  pt-2">
                growing into impressive that can add a touch of elegance and
                greenery.
              </p>
            </div>
          </div>

          <div>
            <img
              src={`../../Image/card/card004/Monstera.webp`}
              className="rounded-t-full h-[200px] sm:h-[250px]  w-full object-cover"
              alt="Monstera"
            />
            <div className=" bg-[#002200] p-6 pb-8">
              <p className=" text-center  dm-serif-text-regular text-[#fff] text-3xl">
                Monstera
              </p>
              <p className=" text-[#fff] text-center text-[20px] cormorant-garamond-light  pt-2">
                Their impressive, large foliage adds a dramatic and exotic touch
                to any home decor.
              </p>
            </div>
          </div>

          <div>
            <img
            src={`../../Image/card/card004/Money Plant.webp`}
              className="rounded-t-full h-[200px] sm:h-[250px]  w-full object-cover"
              alt="Money Plant"
            />
            <div className=" bg-[#002200] p-6 pb-8">
              <p className=" text-center  dm-serif-text-regular text-[#fff] text-3xl">
                Money Plant
              </p>
              <p className=" text-[#fff] text-center text-[20px] cormorant-garamond-light  pt-2">
                It's believed to bring good luck and prosperity, adding to its
                appeal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
