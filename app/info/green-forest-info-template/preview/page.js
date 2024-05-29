import React from 'react'
import "../../../style.css"

export const metadata = {
    title: "Green Forest Info Template",
    description:
      "This component create using CSS framework tailwindcss. It full responsive component. This template used for Info section",
      keywords:"info section,free components,free code, make components, make component",
    openGraph: {
      title: "Green Forest Info Template",
      description: "This component create using CSS framework tailwindcss. It full responsive component. This template used for Info section",
      url: "https://www.makecomponents.com/info/green-forest-info-template",
      siteName: "www.makecomponents.com",
      images: [
        {
          url: "https://www.makecomponents.com/Image/info/info001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://www.makecomponents.com/Image/card/card001.webp", // Must be an absolute URL
          width: 800,
          height: 600,
          alt: "Three Grid card Template",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
export default function page() {
  return (
    <div>
        <div className={`bg-[#09170c]`}>
      <div className={` container mx-auto py-32`}>
        <div className={` grid lg:grid-cols-2 lge:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1`}>
          <div className={`flex justify-center`}>
            <img src={`https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} className={`w-[300px] object-cover h-[400px]`} alt="Imagesedd" />
          </div>
          <div>
            <div className={` relative`}>
                <div className={` lg:pb-0 lge-pb-32 md:pb-32 mdsm:pb-32 sm:pb-32`}>
                <h1 className={`passion-one-font  tracking-widest text-9xl font font-semibold text-[#efe6e661]`}>01</h1>
                </div>
              <div className={` absolute top-16 `}>
                <h3 className={`sedan-sc-font   text-7xl text-white`}>Earn Rewards on Every Purchase </h3>
                <p className={`plus-jakarta-sans-font w-[75%] leading-7 text-base pt-4 text-white`}>Travel cards often have partnerships with airlines, hotels, and other travel providers, offering cardholders exclusive benefits and discounts. From room upgrades to bonus miles, these partnerships enhance your travel experience and help you get the most out of your card.</p>
              </div>

            </div>

          </div>
        </div>
        <div className={`py-10 grid lg:grid-cols-2 lge:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1`}>

          <div>
            <div className={` relative`}>
              <div className={` flex`}>
                <div className={` w-[20%]`}></div>
                <div>
                  <h1 className={`passion-one-font  tracking-widest text-9xl font font-semibold text-[#efe6e661]`}>02</h1>
                  <div className={` absolute top-16 `}>
                    <h3 className={`sedan-sc-font  text-7xl text-white`}>Personalized Travel Assistance
                    </h3>
                    <p className={`plus-jakarta-sans-font leading-7 text-base pt-4 text-white`}>Need help planning your next adventure? Many travel cards offer concierge services to assist you with booking flights, hotels, restaurant reservations, and more. Whether you're looking for insider tips or expert recommendations, your personal concierge is just a call away.
                    </p>
                  </div>
                </div>
              </div>


            </div>

          </div>
          <div className={`flex justify-center`}>
            <img src={`https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} className={`w-[300px] object-cover h-[400px]`} alt="Imagesss" />
          </div>
        </div>
      </div>


    </div>
    </div>
  )
}
