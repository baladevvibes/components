import React from 'react'
import "../../../style.css"

export default function CenterAlignCircleCardPre() {
  return (
    <div className={` `}>
        <div className={` py-24  container mx-auto`}>
            <div className={` grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-16`}>
                <div >
                    <div className=' h-[200px] mx-auto w-[200px] object-cover  relative rounded-full'>
                        <div className=' absolute -top-2 -right-2 h-full w-full bg-[#F19C1C] rounded-full'></div>
                        <img src={`../../Image/card/card/person1.webp`} alt="person 1"  className='relative z-10 h-[200px] w-[200px] object-cover  rounded-full'/>
                    </div>
                    <h2 className={` text-2xl mt-2 text-center  plus-merienda-font text-[#F19C1C] font-semibold`}>Alexandra Rivera</h2>
                    <p className={` text-center pt-2 text-[#181818]`}>
                    Alexandra Rivera is a professional travel blogger who shares her adventures and experiences from around the globe.  Her blog, "Wanderlust Chronicles," includes detailed travel guides, stunning photography, and tips for budget travel. She also writes about cultural experiences, local cuisines, and sustainable travel practices.
                    </p>
                </div>

                <div >
                    <div className=' h-[200px] mx-auto w-[200px] object-cover  relative rounded-full'>
                        <div className=' absolute -top-2 -right-2 h-full w-full bg-[#033c89] rounded-full'></div>
                        <img src={`../../Image/card/card/person2.webp`} alt="person 2"  className='relative z-10 h-[200px] w-[200px] object-cover  rounded-full'/>
                    </div>
                    <h2 className={` text-2xl mt-2 text-center plus-merienda-font    text-[#033c89] font-semibold`}>Michael Thompson</h2>
                    <p className={` text-center pt-2 text-[#181818]`}>
                    Michael Thompson is a tech enthusiast and reviewer who runs a popular YouTube channel called "Tech Savvy Mike." His content includes unboxings, reviews, and comparisons of the latest gadgets and electronics. Michael also creates tutorials and how-to videos on various tech topics, helping his audience stay updated with the latest technology trends.
                    </p>
                </div>


                <div >
                    <div className=' h-[200px] mx-auto w-[200px] object-cover  relative rounded-full'>
                        <div className=' absolute -top-2 -right-2 h-full w-full bg-[#F19C1C] rounded-full'></div>
                        <img src={`../../Image/card/card/person3.webp`} alt="person 3"  className='relative z-10 h-[200px] w-[200px] object-cover  rounded-full'/>
                    </div>
                    <h2 className={` text-2xl mt-2 text-center  plus-merienda-font text-[#F19C1C] font-semibold`}>Samantha Patel</h2>
                    <p className={` text-center pt-2 text-[#181818]`}>
                    Samantha Patel is a food blogger and chef who shares her culinary creations on her blog, "Flavorful Feasts." She posts recipes ranging from easy weeknight dinners to gourmet meals, often incorporating her unique twist on traditional dishes. Samantha also writes about cooking techniques, kitchen hacks, and reviews of restaurants and food products.
                    </p>
                </div>
                </div>

        </div>
    </div>
  )
}
