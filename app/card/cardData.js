// import "../../"

const cardData = [
  {
    _id: 0,
    name: "hero-with-searchbar",
    title: "Hero Banner With Searching Options",
    des: "This component create using CSS framework tailwindcss. It fully responsive component. Added Seacrh bar.",
    section: "Card",
    slug: "hero-with-searchbar-preview",
    link: "/card/offer-wise-card-section/",
    image: "../../Image/card/card001.webp",
    htmlcode: `<section class="container mx-auto py-24">
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
      </section>`,
  },
  {
    _id: 1,
    name: "three-grid-card-template",
    title: "Three Grid card Template",
    des: "This component create using CSS framework tailwindcss. It full responsive component. This template used for card section",
    section: "Card",
    image: "../../Image/card/card002.webp",
    slug: "three-grid-card-template",
    link: "/card/three-grid-card-template",
    htmlcode: `<section class="container mx-auto py-24">
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
    </section>`,
  },
  {
    _id: 2,
    name: "Half Background Layer Card",
    title: "half-background-layer-card",
    des: "This component create using CSS framework tailwindcss. It full responsive component. This template used for card section",
    section: "Services",
    image: "../../Image/services/services001.webp",
    slug: "three-grid-card-template",
    link: "/card/three-grid-card-template",
    htmlcode: `    <div class="pt-32">
      <section class="pb-[300px] sm:pb-[200px] relative">
        <div class=" relative">
          <div class=" h-[500px] sm:h-[250px] bg-[url('https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  bg-no-repeat bg-cover bg-center  ">
            <div class=" bg-[#0f2471c7]  h-full absolute top-0 w-full z-10"></div>
            <div class="px-4 container mx-auto">
              <div class=" absolute z-20 top-0">
                <div class=" text-white tracking-wide text-[44px] sm:px-4 pt-8 pb-16">
                  Our
                  <span class=" font-semibold bakbak-one-font"> Services </span>
                </div>
              </div>
              <div class=" pt-[140px]">
                <div class=" grid lg:grid-cols-4 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 overflow-auto gap-6 relative z-20">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class=" h-[400px] object-cover sm:object-cover w-full rounded-md"
                    />
                    <div class=" sm:bg-white relative rounded-b-lg">
                      <div class=" absolute top-[-34px] right-[20px] bg-[#0f2471] rounded-md p-1.5">
                        <div class=" h-[50px] flex justify-center items-center w-[50px]">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            class="text-4xl text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M469.71 234.6c-7.33-9.73-34.56-16.43-46.08-33.94s-20.95-55.43-50.27-70S288 112 256 112s-88 4-117.36 18.63-38.75 52.52-50.27 70-38.75 24.24-46.08 33.97S29.8 305.84 32.94 336s9 48 9 48h86c14.08 0 18.66-5.29 47.46-8 31.6-3 62.6-4 80.6-4s50 1 81.58 4c28.8 2.73 33.53 8 47.46 8h85s5.86-17.84 9-48-2.04-91.67-9.33-101.4zM400 384h56v16h-56zm-344 0h56v16H56z"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                            ></path>
                            <path d="M364.47 309.16c-5.91-6.83-25.17-12.53-50.67-16.35S279 288 256.2 288s-33.17 1.64-57.61 4.81-42.79 8.81-50.66 16.35C136.12 320.6 153.42 333.44 167 335c13.16 1.5 39.47.95 89.31.95s76.15.55 89.31-.95c13.56-1.65 29.62-13.6 18.85-25.84zm67.1-66.11a3.23 3.23 0 0 0-3.1-3c-11.81-.42-23.8.42-45.07 6.69a93.88 93.88 0 0 0-30.08 15.06c-2.28 1.78-1.47 6.59 1.39 7.1a455.32 455.32 0 0 0 52.82 3.1c10.59 0 21.52-3 23.55-12.44a52.41 52.41 0 0 0 .49-16.51zm-351.14 0a3.23 3.23 0 0 1 3.1-3c11.81-.42 23.8.42 45.07 6.69a93.88 93.88 0 0 1 30.08 15.06c2.28 1.78 1.47 6.59-1.39 7.1a455.32 455.32 0 0 1-52.82 3.1c-10.59 0-21.52-3-23.55-12.44a52.41 52.41 0 0 1-.49-16.51z"></path>
                            <path
                              d="M432 192h16m-384 0h16m-2 19s46.35-12 178-12 178 12 178 12"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <h4 class="text-2xl tracking-wider text-[#222] pt-8  font-semibold text-left">
                        New Arrivals
                      </h4>
                      <p class="pt-3 text-[#454545] text-justify text-base">
                        Discover the latest additions to our showroom!
                        Featuring cutting-edge technology, modern design, and
                        superior performance, our new arrivals are sure to
                        impress. Be among the first to test drive these
                        stunning vehicles.
                      </p>
                    </div>
                  </div>

                  <div>
                    <img
                      src="https://images.pexels.com/photos/4173189/pexels-photo-4173189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class=" h-[400px] object-cover sm:object-cover w-full rounded-md"
                    />
                    <div class=" sm:bg-white relative rounded-b-lg">
                      <div class=" absolute top-[-34px] right-[20px] bg-[#0f2471] rounded-md p-1.5">
                        <div class=" h-[50px] flex justify-center items-center w-[50px]">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="text-4xl text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                      </div>
                      <h4 class="text-2xl tracking-wider text-[#222] pt-8  font-semibold text-left">
                        Customer Reviews
                      </h4>
                      <p class="pt-3 text-[#454545]  text-justify text-base">
                        Our customers love us! Read real reviews and
                        testimonials from satisfied buyers who found their
                        perfect vehicle with us. Their experiences speak
                        volumes about our commitment to quality and service.
                      </p>
                    </div>
                  </div>

                  <div>
                    <img
                      src="https://images.pexels.com/photos/7578984/pexels-photo-7578984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class=" h-[400px] object-cover sm:object-cover w-full rounded-md"
                    />
                    <div class=" sm:bg-white relative rounded-b-lg">
                      <div class=" absolute top-[-34px] right-[20px] bg-[#0f2471] rounded-md p-1.5">
                        <div class=" h-[50px] flex justify-center items-center w-[50px]">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="text-4xl text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.75 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"></path>
                            <path d="M15.75 0a8.25 8.25 0 1 1-2.541 16.101l-1.636 1.636a1.744 1.744 0 0 1-1.237.513H9.25a.25.25 0 0 0-.25.25v1.448a.876.876 0 0 1-.256.619l-.214.213a.75.75 0 0 1-.545.22H5.25a.25.25 0 0 0-.25.25v1A1.75 1.75 0 0 1 3.25 24h-1.5A1.75 1.75 0 0 1 0 22.25v-2.836c0-.464.185-.908.513-1.236l7.386-7.388A8.249 8.249 0 0 1 15.75 0ZM9 8.25a6.733 6.733 0 0 0 .463 2.462.75.75 0 0 1-.168.804l-7.722 7.721a.25.25 0 0 0-.073.177v2.836c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-1c0-.966.784-1.75 1.75-1.75H7.5v-1c0-.966.784-1.75 1.75-1.75h1.086a.25.25 0 0 0 .177-.073l1.971-1.972a.75.75 0 0 1 .804-.168A6.75 6.75 0 1 0 9 8.25Z"></path>
                          </svg>
                        </div>
                      </div>
                      <h4 class="text-2xl tracking-wider text-[#222] pt-8  font-semibold text-left">
                        Special Offers
                      </h4>
                      <p class="pt-3 text-[#454545] text-justify text-base">
                        Take advantage of our limited-time special offers and
                        drive away with incredible savings. From discounted
                        prices to attractive financing options, there's never
                        been a better time to buy your dream car.
                      </p>
                    </div>
                  </div>

                  <div>
                    <img
                      src="https://images.pexels.com/photos/6870318/pexels-photo-6870318.jpeg"
                      class=" h-[400px] object-cover sm:object-cover w-full rounded-md"
                    />
                    <div class=" sm:bg-white relative rounded-b-lg">
                      <div class=" absolute top-[-34px] right-[20px] bg-[#0f2471] rounded-md p-1.5">
                        <div class=" h-[50px] flex justify-center items-center w-[50px]">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            class="text-4xl text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                              d="M262.29 192.31a64 64 0 1 0 57.4 57.4 64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22 155.3 155.3 0 0 1-21.46-12.57 16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22 155.3 155.3 0 0 1 21.46 12.57 16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <h4 class="text-2xl tracking-wider text-[#222] pt-8  font-semibold text-left">
                        Service & Maintenance
                      </h4>
                      <p class="pt-3 text-[#454545] text-justify text-base">
                        Keep your vehicle running smoothly with our top-notch
                        service and maintenance packages. Our experienced
                        technicians use the latest tools and technology to
                        ensure your car is in peak condition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>`,
  },
  {
    _id: 3,
    name: "Center Align Circle Card",
    title: "center-align-circle-card",
    des: "This component create using CSS framework tailwindcss. It full responsive component. This template used for card section",
    section: "Services",
    image: "../../Image/card/card003.webp",
    slug: "center-align-circle-card",
    link: "/card/center-align-circle-card",
    htmlcode: ` <div class=" py-24  container mx-auto">
      <div class=" grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-16">
          <div >
              <div class=" h-[200px] mx-auto w-[200px] object-cover  relative rounded-full">
                  <div style="background-color: #F19C1C; right:-2%; top:-2%;" class=" absolute -top-2 -right-2 h-full w-full bg-[#F19C1C] rounded-full"></div>
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="height: 200px; width: 200px;" class="relative z-10 h-[200px] w-[200px]  object-cover  rounded-full"/>
              </div>
              <h2 class=" text-2xl mt-2 text-center  plus-merienda-font text-[#F19C1C] font-semibold">Alexandra Rivera</h2>
              <p class=" text-center pt-2 text-[#181818]">
              Alexandra Rivera is a professional travel blogger who shares her adventures and experiences from around the globe.  Her blog, "Wanderlust Chronicles," includes detailed travel guides, stunning photography, and tips for budget travel. She also writes about cultural experiences, local cuisines, and sustainable travel practices.
              </p>
          </div>

          <div >
            <div class=" h-[200px] mx-auto w-[200px] object-cover  relative rounded-full">
              <div style="background-color: #033c89; right:-2%; top:-2%;" class=" absolute -top-2 -right-2 h-full w-full bg-[#033c89] rounded-full"></div>
              <img src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="height: 200px; width: 200px;" class="relative z-10 h-[200px] w-[200px]  object-cover  rounded-full"/>
          </div>
            
              <h2 class=" text-2xl mt-2 text-center plus-merienda-font    text-[#033c89] font-semibold">Michael Thompson</h2>
              <p class=" text-center pt-2 text-[#181818]">
              Michael Thompson is a tech enthusiast and reviewer who runs a popular YouTube channel called "Tech Savvy Mike." His content includes unboxings, reviews, and comparisons of the latest gadgets and electronics. Michael also creates tutorials and how-to videos on various tech topics, helping his audience stay updated with the latest technology trends.
              </p>
          </div>


          <div >
            <div class=" h-[200px] mx-auto w-[200px] object-cover  relative rounded-full">
              <div style="background-color: #F19C1C; right:-2%; top:-2%;" class=" absolute -top-2 -right-2 h-full w-full bg-[#F19C1C] rounded-full"></div>
              <img src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="height: 200px; width: 200px;" class="relative z-10 h-[200px] w-[200px]  object-cover  rounded-full"/>
          </div>
          
              <h2 class=" text-2xl mt-2 text-center  plus-merienda-font text-[#F19C1C] font-semibold">Samantha Patel</h2>
              <p class=" text-center pt-2 text-[#181818]">
              Samantha Patel is a food blogger and chef who shares her culinary creations on her blog, "Flavorful Feasts." She posts recipes ranging from easy weeknight dinners to gourmet meals, often incorporating her unique twist on traditional dishes. Samantha also writes about cooking techniques, kitchen hacks, and reviews of restaurants and food products.
              </p>
          </div>
          </div>

  </div>`,
  },
  {
    _id: 4,
    name: "Semi circle card",
    htmlcode: ` <div class=" container mx-auto py-32 sm:px-10 ">
      <div class=" grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10">
        <div>
          <img
            src="https://images.unsplash.com/photo-1643579265541-2a6359ff8b57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="rounded-t-full h-[200px] sm:h-[250px] object-cover w-full"
            alt="Succulent Plants"
          />
          <div class=" bg-[#002200] p-6 pb-8">
            <p class=" text-center  text-[#fff] text-3xl">
              Succulent
            </p>
            <p class=" text-[#fff] text-center text-[20px] pt-2">
              This characteristic makes them exceptionally low-maintenance.
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1573714000387-71694087c82e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="rounded-t-full h-[200px] sm:h-[250px]  object-cover w-full"
            alt="Jade Plants"
          />
          <div class=" bg-[#002200] p-6 pb-8">
            <p class=" text-center   text-[#fff] text-3xl">
              Jade
            </p>
            <p class=" text-[#fff] text-center text-[20px] pt-2">
              growing into impressive that can add a touch of elegance and
              greenery.
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1604907899106-bdbf31469ae9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="rounded-t-full h-[200px] sm:h-[250px]  w-full object-cover"
            alt="Monstera"
          />
          <div class=" bg-[#002200] p-6 pb-8">
            <p class=" text-center   text-[#fff] text-3xl">
              Monstera
            </p>
            <p class=" text-[#fff] text-center text-[20px] pt-2">
              Their impressive, large foliage adds a dramatic and exotic touch
              to any home decor.
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1537039557108-4a42c334fd5e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="rounded-t-full h-[200px] sm:h-[250px]  w-full object-cover"
            alt="Money Plant"
          />
          <div class=" bg-[#002200] p-6 pb-8">
            <p class=" text-center   text-[#fff] text-3xl">
              Money Plant
            </p>
            <p class=" text-[#fff] text-center text-[20px] pt-2">
              It's believed to bring good luck and prosperity, adding to its
              appeal.
            </p>
          </div>
        </div>
      </div>
    </div>`,
  },
];

export default cardData;
