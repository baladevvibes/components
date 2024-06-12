import React from 'react'
import { GoDiamond } from 'react-icons/go'

export default function PriceTagCardSectionPre() {
  return (
    <div>

<section>
        <div className={` container mx-auto py-16 pt-0`}>
          <div className={` `}>
            <h1
            
              className={` text-center py-10 pt-16  heading text-primary text-4xl  font-semibold`}
            >
              Our Cottage
            </h1>

            <div className={` grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-4`}>
              <div
              
                className={`shadowcsss  rounded-lg p-4`}
              >
                <div className={` relative`}>
                  <img
                  
                    src={`https://images.pexels.com/photos/3635802/pexels-photo-3635802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    className={` h-[250px] w-full rounded-t-lg`}
                    alt="rooms"
                  />
                  <div
                  
                    className={`px-4 absolute text-right bottom-0 bg-[#2b4a44b8] w-full text-2xl py-2 title text-secondary font-semibold`}
                  >
                    <div className={` title text-sm`}>Per day</div>
                    INR : 1200/-
                  </div>
                </div>
                <div className={` p-2`}>
                  <h2
                  
                    className={`px-4 w-full text-2xl py-2 heading text-secondary font-semibold`}
                  >
                    Normal Cottage
                  </h2>
                  <ul data-aos="fade-up" className={` pb-4`}>
                    <li className={` px-2 pb-1 pt-2 flex text-[#222] `}>
                      {" "}
                      <GoDiamond
                        className={` text-secondary mr-2 mt-1 `}
                      />{" "}
                      Free Wifi
                    </li>
                    <li className={` px-2 pt-1 flex text-[#222] `}>
                      {" "}
                      <GoDiamond
                        className={` text-secondary mr-2 mt-1 `}
                      />{" "}
                      Mountain View
                    </li>
                  </ul>
                </div>
              </div>

              <div data-aos="fade-up" className={`shadowcsss  rounded-lg p-4`}>
                <div className={` relative`}>
                  <img
                    src={`https://images.pexels.com/photos/5461590/pexels-photo-5461590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    className={` h-[250px] w-full rounded-t-lg`}
                    alt="rooms"
                  
                  />
                  <div
                  
                    className={`px-4 absolute text-right bottom-0 bg-[#2b4a44b8] w-full text-2xl py-2 title text-secondary font-semibold`}
                  >
                    <div className={` title text-sm`}>Per day</div>
                    INR : 1800/-
                  </div>
                </div>
                <div className={` p-2`}>
                  <h2
                  
                    className={`px-4 w-full text-2xl py-2 heading text-secondary font-semibold`}
                  >
                    Deluxe Cottages
                  </h2>
                  <ul data-aos="fade-up" className={` pb-4`}>
                    <li className={` px-2 pb-1 pt-2 flex text-[#222] `}>
                      {" "}
                      <GoDiamond
                        className={` text-secondary mr-2 mt-1 `}
                      />{" "}
                      Free Wifi
                    </li>
                    <li className={` px-2 pt-1 flex text-[#222] `}>
                      {" "}
                      <GoDiamond
                        className={` text-secondary mr-2 mt-1 `}
                      />{" "}
                      Mountain View
                    </li>
                  </ul>
                </div>
              </div>

              <div data-aos="fade-up" className={`shadowcsss  rounded-lg p-4`}>
                <div className={` relative`}>
                  <img
                    src={`https://images.pexels.com/photos/17227603/pexels-photo-17227603/free-photo-of-fan-over-bed-in-hotel-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    className={` h-[250px] w-full rounded-t-lg`}
                    alt="rooms"
                  
                  />
                  <div
                  
                    className={`px-4 absolute text-right bottom-0 bg-[#2b4a44b8] w-full text-2xl py-2 title text-secondary font-semibold`}
                  >
                    <div className={` title text-sm`}>Per day</div>
                    INR : 3500/-
                  </div>
                </div>
                <div className={` p-2`}>
                  <h2
                  
                    className={`px-4 w-full text-2xl py-2 heading text-secondary font-semibold`}
                  >
                    Luxury Cottages
                  </h2>
                  <ul data-aos="fade-up" className={` pb-4`}>
                    <li className={` px-2 pb-1 pt-2 flex text-[#222] `}>
                      {" "}
                      <GoDiamond
                        className={` text-secondary mr-2 mt-1 `}
                      />{" "}
                      Free Wifi
                    </li>
                    <li className={` px-2 pt-1 flex text-[#222] `}>
                      {" "}
                      <GoDiamond
                        className={` text-secondary mr-2 mt-1 `}
                      />{" "}
                      Mountain View
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`mt-4 flex justify-center`}>
              <button
                className={`mx-6  hover:bg-primary hover:text-white transition delay-100 bg-secondary rounded-full px-10 py-2 mt-4 text-[#000]`}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
