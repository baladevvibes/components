const blogLightData = [
  {
    _id: 0,
    name: "Blog card Design",
    htmlcode: `<div class="relative py-20 dark:bg-secondary">
       <section className="  container mx-auto px-4 py-40">
          <div className=" grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1  mdsm:grid-cols-1 sm:grid-cols-1 gap-4">
            <div className=" border border-[#e2e2e2] dark:border-[#454545] rounded-lg ">
              <div className="group grid  md:grid-cols-3  mdsm:grid-cols-1 sm:grid-cols-1">
                <div className=" overflow-hidden  md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none mdsm:rounded-tl-lg mdsm:rounded-tr-lg sm:rounded-tl-lg sm:rounded-tr-lg ">
                  <img
                    src="https://makecomponents.com/Image/blog/001/satellite.webp"
                    alt="satellites "
                    className=" md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none  mdsm:rounded-tl-lg  mdsm:rounded-tr-lg sm:rounded-tl-lg sm:rounded-tr-lg h-[200px] w-full object-cover group-hover:scale-125  duration-700"
                  />
                </div>
                <div className=" col-span-2 px-4 py-4">
                  <h2 className=" text-2xl text-[#1e1e1e] leading-6  dark:text-[#f2f2f2] font-semibold">
                    Own satellites against US
                  </h2>
                  <p className="pt-2  dark:text-[#9b9b9b]  leading-6  text-[#424242]">
                    They're using our own satellites against us. And the clock
                    is ticking. This thing comes fully loaded. AM/FM radio.
                  </p>
                  <button className=" group hover:underline hover:underline-offset-2 flex pt-3 text-[#0064b0] hover:text-[#003b80]  duration-700 ">
                    Read more...
                  </button>
                </div>
              </div>
            </div>

            <div className=" border border-[#e2e2e2] dark:border-[#454545] rounded-lg ">
              <div className="group grid  md:grid-cols-3  mdsm:grid-cols-1 sm:grid-cols-1">
                <div className=" overflow-hidden  md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none mdsm:rounded-tl-lg mdsm:rounded-tr-lg sm:rounded-tl-lg sm:rounded-tr-lg ">
                  <img
                    src="https://makecomponents.com/Image/blog/001/dinosaurs.webp"
                    alt="dinosaurs"
                    className=" md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none  mdsm:rounded-tl-lg  mdsm:rounded-tr-lg sm:rounded-tl-lg sm:rounded-tr-lg h-[200px] w-full object-cover group-hover:scale-125  duration-700"
                  />
                </div>
                <div className=" col-span-2 px-4 py-4">
                  <h2 className=" text-2xl text-[#1e1e1e] leading-6 dark:text-[#f2f2f2] font-semibold">
                    God destroys dinosaurs
                  </h2>
                  <p className="pt-2   leading-6 dark:text-[#9b9b9b] text-[#424242]">
                    God creates dinosaurs. God destroys dinosaurs. God creates
                    Man. Man destroys God. Man creates Dinosaurs.
                  </p>
                  <button className=" group hover:underline hover:underline-offset-2 flex pt-3 text-[#0064b0] hover:text-[#003b80]  duration-700 ">
                    Read more...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>`,
  },
  {
    _id: 1,
    name: "News and Events Section",
    htmlcode: `<div className=" py-8 dark:bg-[#1e1e1e]">   <div className="py-32">
        <section className=" container px-4 mx-auto">
   
          <div className="   relative lg:w-[40%] lge:w-[40%] md:w-[60%] mdsm:w-[90%] sm:w-full mx-auto">
            <h4 className=" font-semibold text-center text-[#26547C] text-3xl pb-4">
              News and Events
            </h4>
            <div className="flex mb-2 w-full">
              <div className="relative w-[20%]">
                <div className=" py-1  bg-[#FFD166] border-t-[1px]  border-[#FFD166]  px-2 text-center">
                  12 Aug
                </div>
                <div className=" py-1   bg-[#26547C]  border-b-[1px]  border-[#26547C] text-[#fcfcfc] px-2 text-center">
                  2024
                </div>
              </div>
              <div className=" border-b-[1px] border-t-[1px] border-r-[1px]  border-[#ccc]  relative px-4 flex w-[80%]">
                <div className=" block">
                  <div className=" py-1 pt-2 dark:text-[#fcfcfc]   px-2 text-left">
                    Lorem ipsum is placeholder.
                  </div>
                  <div className=" text-[#26547C] dark:text-[#FFD166]    px-2 text-left">
                    Alumni
                  </div>
                </div>

                <div></div>
              </div>
            </div>

            <div className="flex mb-2 w-full">
              <div className="relative w-[20%]">
                <div className=" py-1 bg-[#FFD166] border-t-[1px]  border-[#FFD166]  px-2 text-center">
                  14 Aug
                </div>
                <div className=" py-1 bg-[#26547C]  border-b-[1px]  border-[#26547C] text-[#fcfcfc] px-2 text-center">
                  2024
                </div>
              </div>
              <div className=" border-b-[1px] border-t-[1px] border-r-[1px]  border-[#ccc]  relative px-4 flex w-[80%]">
                <div className=" block">
                  <div className=" py-1 pt-2 dark:text-[#fcfcfc]  px-2 text-left">
                    Lorem ipsum is placeholder.
                  </div>
                  <div className=" text-[#26547C] dark:text-[#FFD166] px-2 text-left">
                    Sports
                  </div>
                </div>

                <div></div>
              </div>
            </div>

            <div className="flex mb-2 w-full">
              <div className="relative w-[20%]">
                <div className=" py-1 bg-[#FFD166] border-t-[1px]  border-[#FFD166]  px-2 text-center">
                  17 Aug
                </div>
                <div className=" py-1 bg-[#26547C]  border-b-[1px]  border-[#26547C] text-[#fcfcfc] px-2 text-center">
                  2024
                </div>
              </div>
              <div className=" border-b-[1px] border-t-[1px] border-r-[1px]  border-[#ccc]  relative px-4 flex w-[80%]">
                <div className=" block">
                  <div className=" py-1 pt-2 dark:text-[#fcfcfc]  px-2 text-left">
                    Lorem ipsum is placeholder.
                  </div>
                  <div className=" text-[#26547C] dark:text-[#FFD166] px-2 text-left">
                    Meeting
                  </div>
                </div>

                <div></div>
              </div>
            </div>

            <div className="flex mb-2 w-full">
              <div className="relative w-[20%]">
                <div className=" py-1 bg-[#FFD166] border-t-[1px]  border-[#FFD166]  px-2 text-center">
                  4 Sep
                </div>
                <div className=" py-1 bg-[#26547C]  border-b-[1px]  border-[#26547C] text-[#fcfcfc] px-2 text-center">
                  2024
                </div>
              </div>
              <div className=" border-b-[1px] border-t-[1px] border-r-[1px]  border-[#ccc]  relative px-4 flex w-[80%]">
                <div className=" block">
                  <div className=" py-1 pt-2 dark:text-[#fcfcfc]  px-2 text-left">
                    Lorem ipsum is placeholder.
                  </div>
                  <div className=" text-[#26547C] dark:text-[#FFD166] px-2 text-left">
                    Social
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </section>
      </div> 
      </div>`,
  },
];

export default blogLightData;
