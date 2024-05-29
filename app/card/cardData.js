// import "../../"

const cardData = [
    {
        _id:0,
        name:"hero-with-searchbar",
        title:"Hero Banner With Searching Options",
        des:"This component create using CSS framework tailwindcss. It fully responsive component. Added Seacrh bar.",
        section:"Card",
        slug:"hero-with-searchbar-preview",
        link:"/card/offer-wise-card-section/",
        image:"../../Image/card/card001.webp",
        htmlcode:`<section class="container mx-auto py-24">
        <div class=" grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-2 p-2">
          <div class="col-span-2">
            
            <div class=" group relative ">
              <div class=" cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
                <div class=" group-hover:block hidden">
                  <div class=" transition delay-300  tracking-wide text-6xl text-[#fff]">
                    New York
                  </div>
                </div>
              </div>
              <img src="https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class=" object-cover h-[400px] sm:w-full w-full"  alt="New York"/>
            </div>
          </div>
  
          <div class=" col-span-3 h-full gap-2 ">
  
            <div class="lg:h-[40%] lge:h-[40%] md:h-[400px] mdsm:h-[400px] sm:h-[400px] relative group bg-[url('https://images.pexels.com/photos/1721747/pexels-photo-1721747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] overflow-hidden bg-primary  bg-hero bg-no-repeat bg-cover bg-center ">
              <div class=" cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
                <div class=" group-hover:block hidden">
                  <div class=" uppercase  transition delay-300  tracking-wide text-6xl text-[#fff]  ">
                    INDIA
                  </div>
                </div>
              </div>
            </div>
  
            <div class=" h-[58%] mt-2 overflow-hidden ">
  
              <div class=" grid grid-cols-2 gap-2  h-full ">
                <div class="group relative h-full">
                  <img
                    src="https://images.pexels.com/photos/2915957/pexels-photo-2915957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=" China"
                    class=" h-full object-cover"/>
                  <div class=" cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
                    <div class=" group-hover:block hidden">
                      <div class=" uppercase transition delay-300  tracking-wide text-6xl text-[#fff]  ">
                        China
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class=" group relative h-full ">
                  <img
                    src="https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    class=" h-full object-cover"
                  />
                  <div class=" cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
                    <div class=" group-hover:block hidden">
                      <div class=" uppercase  transition delay-300  tracking-wide text-6xl text-[#fff]  ">
                        Paris
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </section>`
    },
    {
      _id:1,
      name:"three-grid-card-template",
      title:"Three Grid card Template",
      des:"This component create using CSS framework tailwindcss. It full responsive component. This template used for card section",
      section:"Card",
      image:"../../Image/card/card002.webp",
      slug:"three-grid-card-template",
      link:"/card/three-grid-card-template",
      htmlcode:`<section class="container mx-auto py-24">
      <div class=" grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-2 p-2">
        <div class="col-span-2">
          
          <div class=" group relative ">
            <div class=" cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
              <div class=" group-hover:block hidden">
                <div class=" transition delay-300  tracking-wide text-6xl text-[#fff]">
                  New York
                </div>
              </div>
            </div>
            <img src="https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class=" object-cover h-[400px] sm:w-full w-full"  alt="New York"/>
          </div>
        </div>

        <div class=" col-span-3 h-full gap-2 ">

          <div class="lg:h-[40%] lge:h-[40%] md:h-[400px] mdsm:h-[400px] sm:h-[400px] relative group bg-[url('https://images.pexels.com/photos/1721747/pexels-photo-1721747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] overflow-hidden bg-primary  bg-hero bg-no-repeat bg-cover bg-center ">
            <div class=" cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
              <div class=" group-hover:block hidden">
                <div class=" uppercase  transition delay-300  tracking-wide text-6xl text-[#fff]  ">
                  INDIA
                </div>
              </div>
            </div>
          </div>

          <div class=" h-[58%] mt-2 overflow-hidden ">

            <div class=" grid grid-cols-2 gap-2  h-full ">
              <div class="group relative h-full">
                <img
                  src="https://images.pexels.com/photos/2915957/pexels-photo-2915957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=" China"
                  class=" h-full object-cover"/>
                <div class=" cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
                  <div class=" group-hover:block hidden">
                    <div class=" uppercase transition delay-300  tracking-wide text-6xl text-[#fff]  ">
                      China
                    </div>
                  </div>
                </div>
              </div>

              <div class=" group relative h-full ">
                <img
                  src="https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  class=" h-full object-cover"
                />
                <div class=" cursor-pointer transition delay-300  group-hover:from-[#ff8936b8] group-hover:to-[#0025ca] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
                  <div class=" group-hover:block hidden">
                    <div class=" uppercase  transition delay-300  tracking-wide text-6xl text-[#fff]  ">
                      Paris
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>`
  }
]


export default cardData;