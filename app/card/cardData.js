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
              <img src="https://makecomponents.com/Image/overall/wonders/new-york.webp"
                class=" object-cover h-[400px] sm:w-full w-full"  alt="New York"/>
            </div>
          </div>
  
          <div class=" col-span-3 h-full gap-2 ">
  
            <div class="lg:h-[40%] lge:h-[40%] md:h-[400px] mdsm:h-[400px] sm:h-[400px] relative group bg-[url('https://makecomponents.com//Image/overall/wonders/india.webp')] overflow-hidden bg-primary  bg-hero bg-no-repeat bg-cover bg-center ">
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
                    src="https://makecomponents.com/Image/overall/wonders/china.webp"
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
                    src="https://makecomponents.com/Image/overall/wonders/paris.webp"
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
    htmlcode: `  <section class=" my-20">
      <div class="">
        <div
          class=" grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1"
        >
          <div
            class=" h-[400px] bg-[#f71418] flex justify-center items-center"
          >
            <h1
              class=" text-5xl acme-font font-semibold  text-center text-white"
            >
              Our
              <br /> Campus
            </h1>
          </div>
          <div class=" h-[400px] relative">
            <div
              class="top-0 bg-[#080808cc]  flex justify-center items-center w-full h-full absolute p-5 "
            >
              <p class=" acme-font  font-semibold text-white text-5xl">
                Library
              </p>
            </div>
            <img
              src="https://makecomponents.com/Image/overall/places/Library.webp"
              alt="library"
              class=" object-cover h-[400px]"
            />
          </div>
          <div class=" h-[400px] relative">
            <div
              class="top-0 bg-[#fbc02da8]  flex justify-center items-center w-full h-full absolute p-5 "
            >
              <p class=" acme-font  font-semibold text-white text-5xl">
                Play ground
              </p>
            </div>
            <img
              src="https://makecomponents.com/Image/overall/places/Play-ground.webp"
              alt="playground"
              class=" object-cover h-[400px]"
            />
          </div>
          <div class=" h-[400px] relative">
            <div
              class="top-0 bg-[#080808cc]  flex justify-center items-center w-full h-full absolute p-5 "
            >
              <p class=" acme-font  font-semibold text-white text-5xl">
                Higher Education
              </p>
            </div>
            <img
              src="https://makecomponents.com/Image/overall/places/Higher-Education.webp"
              alt="college"
              class=" object-cover h-[400px]"
            />
          </div>
          <div class=" h-[400px] relative">
            <div
              class="top-0 bg-[#bf3503ba]  flex justify-center items-center w-full h-full absolute p-5 "
            >
              <p class=" acme-font  font-semibold text-white text-5xl">
                Canteen
              </p>
            </div>
            <img
              src="https://makecomponents.com/Image/overall/places/Canteen.webp"
              alt="canteen"
              class=" object-cover h-[400px]"
            />
          </div>
          <div class=" h-[400px] relative">
            <div
              class="top-0 bg-[#080808cc]  flex justify-center items-center w-full h-full absolute p-5 "
            >
              <p class=" acme-font  font-semibold text-white text-5xl">
                Classroom
              </p>
            </div>
            <img
              src="https://makecomponents.com/Image/overall/places/Classroom.webp"
              alt="classroom"
              class=" object-cover h-[400px]"
            />
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
          <div class=" h-[500px] sm:h-[250px] bg-[url('https://makecomponents.com/Image/card/card003/background-layer.webp')]  bg-no-repeat bg-cover bg-center  ">
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
                        src="https://makecomponents.com/Image/card/card003/Image001.webp"
                        alt="New Arrivals"
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
                        src="https://makecomponents.com/Image/card/card003/Image002.webp"
                        alt="Customer Reviews"
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
                      src="https://makecomponents.com/Image/card/card003/Image003.webp"
                        alt="Special Offers"
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
                      src="https://makecomponents.com/Image/card/card003/Image004.webp"
                        alt="Service & Maintenance"
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
                  <img  src={"https://makecomponents.com/Image/card/card/person1.webp"} alt="person 1" style="height: 200px; width: 200px;" class="relative z-10 h-[200px] w-[200px]  object-cover  rounded-full"/>
              </div>
              <h2 class=" text-2xl mt-2 text-center  plus-merienda-font text-[#F19C1C] font-semibold">Alexandra Rivera</h2>
              <p class=" text-center pt-2 text-[#181818]">
              Alexandra Rivera is a professional travel blogger who shares her adventures and experiences from around the globe.  Her blog, "Wanderlust Chronicles," includes detailed travel guides, stunning photography, and tips for budget travel. She also writes about cultural experiences, local cuisines, and sustainable travel practices.
              </p>
          </div>

          <div >
            <div class=" h-[200px] mx-auto w-[200px] object-cover  relative rounded-full">
              <div style="background-color: #033c89; right:-2%; top:-2%;" class=" absolute -top-2 -right-2 h-full w-full bg-[#033c89] rounded-full"></div>
              <img  src={"https://makecomponents.com/Image/card/card/person2.webp"} alt="person 2" style="height: 200px; width: 200px;" class="relative z-10 h-[200px] w-[200px]  object-cover  rounded-full"/>
          </div>
            
              <h2 class=" text-2xl mt-2 text-center plus-merienda-font    text-[#033c89] font-semibold">Michael Thompson</h2>
              <p class=" text-center pt-2 text-[#181818]">
              Michael Thompson is a tech enthusiast and reviewer who runs a popular YouTube channel called "Tech Savvy Mike." His content includes unboxings, reviews, and comparisons of the latest gadgets and electronics. Michael also creates tutorials and how-to videos on various tech topics, helping his audience stay updated with the latest technology trends.
              </p>
          </div>


          <div >
            <div class=" h-[200px] mx-auto w-[200px] object-cover  relative rounded-full">
              <div style="background-color: #F19C1C; right:-2%; top:-2%;" class=" absolute -top-2 -right-2 h-full w-full bg-[#F19C1C] rounded-full"></div>
              <img src={"https://makecomponents.com/Image/card/card/person3.webp"} alt="person 3"  style="height: 200px; width: 200px;" class="relative z-10 h-[200px] w-[200px]  object-cover  rounded-full"/>
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
           src="https://makecomponents.com/Image/card/card004/Succulent.webp"
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
           src="https://makecomponents.com/Image/card/card004/Jade.webp"
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
         src="https://makecomponents.com/Image/card/card004/Monstera.webp"
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
      src="https://makecomponents.com/Image/card/card004/Money Plant.webp"
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
  {
    _id: 5,
    name: "Card layout section",
    htmlcode: `<section class="my-20 container mx-auto">
      <div
        class="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10 px-4"
      >
        <div class="overflow-hidden group relative">
          <img
            src="https://makecomponents.com/Image/card/card005/industry-1.webp"
            class="h-[450px] object-cover"
          />
          <div class="absolute top-0 h-full w-full"></div>

          <div
            class="hidden group-hover:block absolute top-0 w-full h-full bg-[#090808b3]"
          ></div>
          <div
            class="transition duration-700 absolute p-6 group-hover:-translate-y-[400px]"
          >
            <h3 class="text-center text-[#e6a500] text-4xl font-semibold">
              Industry
            </h3>
            <p class="leading-7 text-1xl text-[#fff] pt-4">
              Advancements in artificial intelligence are revolutionizing the
              tech industry, driving innovation and efficiency. Companies are
              leveraging big data and machine learning to create smarter
              solutions for complex problems.
            </p>
          </div>
        </div>

        <div class="overflow-hidden group relative">
          <img
            src="https://makecomponents.com/Image/card/card005/Healthcare.webp"
            class="h-[450px] object-cover"
          />
          <div class="absolute top-0 h-full w-full"></div>

          <div
            class="hidden group-hover:block absolute top-0 w-full h-full bg-[#090808b3]"
          ></div>
          <div
            class="transition duration-700 absolute p-6 group-hover:-translate-y-[400px]"
          >
            <h3 class="text-center text-[#e6a500] text-4xl font-semibold">
              Healthcare
            </h3>
            <p class="leading-6 text-1xl text-[#fff] pt-4">
              The healthcare industry is increasingly adopting digital health
              technologies to improve patient outcomes. Innovations in
              telemedicine and wearable devices are transforming the way
              healthcare is delivered and managed.
            </p>
          </div>
        </div>

        <div class="overflow-hidden group relative">
          <img
            src="https://makecomponents.com/Image/card/card005/Finance.webp"
            class="h-[450px] object-cover"
          />
          <div class="absolute top-0 h-full w-full"></div>

          <div
            class="hidden group-hover:block absolute top-0 w-full h-full bg-[#090808b3]"
          ></div>
          <div
            class="transition duration-700 absolute p-6 group-hover:-translate-y-[400px]"
          >
            <h3 class="text-center text-[#e6a500] text-4xl font-semibold">
              Finance
            </h3>
            <p class="leading-7 text-1xl text-[#fff] pt-4">
              Fintech innovations are reshaping the financial landscape by
              providing more accessible and efficient services. Blockchain
              technology and digital currencies are at the forefront of this
              transformation, offering new opportunities for secure and
              transparent transactions.
            </p>
          </div>
        </div>
      </div>
    </section>`,
  },
  {
    _id: 6,
    name: "Curve card design",
    htmlcode: ` <div class="relative py-20 ">
      <section class="container mx-auto">
        <div
          class="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 px-4 gap-10"
        >
          <div>
            <div class="h-[450px] overflow-hidden rounded-2xl relative">
              <img
                src="https://makecomponents.com/Image/overall/building/building1.webp"
                alt="building"
                class="w-full"
              />
            </div>
            <div class="">
              <h3 class="text-[#3b3b3b]  text-2xl pt-6">
                Emphasis on Functionality and Simplicity
              </h3>
              <p class="pt-2 text-[#5a5a5a] ">
                Modern architecture prioritizes the functionality of spaces,
                often embracing minimalist designs. This approach emphasizes
                clean lines, open floor plans, and the use of materials like
                steel, glass, and concrete to create efficient and
                straightforward structures.
              </p>
            </div>
          </div>

          <div>
            <div class="h-[450px] overflow-hidden rounded-2xl">
              <img
                src="https://makecomponents.com/Image/overall/building/building2.webp"
                alt="building"
                class="w-full"
              />
            </div>
            <div class="">
              <h3 class="text-[#3b3b3b]  text-2xl pt-6">
                Integration of Sustainable Practices
              </h3>
              <p class="pt-2 text-[#5a5a5a] ">
                Sustainability is a cornerstone of modern architecture.
                Architects incorporate eco-friendly materials, energy-efficient
                systems, and green building techniques to reduce environmental
                impact. Innovations such as green roofs, solar panels, and
                passive heating and cooling systems are commonly integrated into
                modern designs.
              </p>
            </div>
          </div>

          <div>
            <div class="h-[450px] overflow-hidden rounded-2xl">
              <img
                src="https://makecomponents.com/Image/overall/building/building3.webp"
                alt="building"
                class="w-full"
              />
            </div>
            <div class=" ">
              <h3 class="text-[#3b3b3b]  text-2xl pt-6">
                Influence of Technology and Digital Tools
              </h3>
              <p class="pt-2 text-[#5a5a5a] ">
                Advancements in technology have significantly influenced modern
                architecture. Digital design tools and software, such as
                Building Information Modeling (BIM), allow architects to create
                more precise and complex structures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>`,
  },
  {
    _id: 7,
    name: "Recipe card template",
    htmlcode: `<section class=" py-20 container mx-auto px-4">
        <div class=" grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1">
          <div class="  relative group overflow-hidden ">
            <div class=" absolute group-hover:opacity-100  scale-150  transition-5 duration-300  opacity-0 w-full bg-[#211e1ec7] flex justify-center items-center	h-full">
              <div class=" cursor-pointer h-[30px] w-[30px] rounded-full hover:bg-[#FF9800] bg-[#eeee] hover:text-[#eeee] text-[#FF9800] flex justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class=" group-hover:opacity-100 text-[16px] "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z"></path>
                </svg>
              </div>
            </div>
            <img
              src="https://makecomponents.com/Image/overall/food/food1.webp"
              alt="evening snack"
              class="h-[400px] object-cover w-full"
            />
          </div>
          <div class="  relative group overflow-hidden ">
            <div class=" absolute group-hover:opacity-100  scale-150  transition-5 duration-300  opacity-0 w-full bg-[#211e1ec7] flex justify-center items-center	h-full">
              <div class=" cursor-pointer h-[30px] w-[30px] rounded-full hover:bg-[#FF9800] bg-[#eeee] hover:text-[#eeee] text-[#FF9800] flex justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class=" group-hover:opacity-100 text-[16px] "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z"></path>
                </svg>
              </div>
            </div>
            <img
              src="https://makecomponents.com/Image/overall/food/food2.webp"
              class="h-[400px] object-cover w-full"
              alt="chicken"
            />
          </div>

          <div class="  relative group overflow-hidden ">
            <div class=" absolute group-hover:opacity-100  scale-150  transition-5 duration-300  opacity-0 w-full bg-[#211e1ec7] flex justify-center items-center	h-full">
              <div class="  cursor-pointer h-[30px] w-[30px] rounded-full hover:bg-[#FF9800] bg-[#eeee] hover:text-[#eeee] text-[#FF9800] flex justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class=" group-hover:opacity-100 text-[16px] "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z"></path>
                </svg>
              </div>
            </div>
            <img
              src="https://makecomponents.com/Image/overall/food/food3.webp"
              alt="indian food"
              class="h-[400px] object-cover w-full"
            />
          </div>

          <div class="  relative  group overflow-hidden ">
            <div class=" absolute group-hover:opacity-100  scale-150  transition-5 duration-300  opacity-0 w-full bg-[#211e1ec7] flex justify-center items-center	h-full">
              <div class=" cursor-pointer h-[30px] w-[30px] rounded-full hover:bg-[#FF9800] bg-[#eeee] hover:text-[#eeee] text-[#FF9800] flex justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class=" group-hover:opacity-100 text-[16px] "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z"></path>
                </svg>
              </div>
            </div>
            <img
              src="https://makecomponents.com/Image/overall/food/food4.webp"
              alt="cutter"
              class="h-[400px] object-cover w-full"
            />
          </div>
        </div>
      </section>`,
  },
  {
    _id: 8,
    name: "css card design code",
    htmlcode: ` <div class="py-20">
    <div class=" container mx-auto px-4">
      <div class="gap-6 grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-3 mdsm:grid-cols-2 sm:grid-cols-1 ">
        <div class="group relative">
          <div class=" cursor-pointer absolute top-0 z-10 w-full hidden  group-hover:block   duration-300   h-[350px] bg-gradient-to-t from-[#8338EC]  rounded-2xl">
            <div class="NewsCycle absolute bottom-6 w-full text-[#fcfcfc] text-center text-3xl">
              USA
            </div>
          </div>
          <img
            src="https://makecomponents.com/Image/overall/country/USA.png"
            alt="USA"
            class=" h-[350px] rounded-2xl w-full sm:w-[450px] sm:object-cover"
          />
        </div>
        <div class="group relative">
          <div class="mt-8  cursor-pointer absolute top-0 z-10 w-full hidden  group-hover:block   duration-300   h-[350px] bg-gradient-to-t from-[#8338EC]  rounded-2xl">
            <div class="NewsCycle absolute bottom-6 w-full text-[#fcfcfc] text-center text-3xl">
            Australia
            </div>
          </div>
          <img
            src="https://makecomponents.com/Image/overall/country/Australia.png"
            alt="Australia"
            class="mt-8 h-[350px] rounded-2xl  w-full sm:w-[450px] sm:object-cover"
          />
        </div>
        <div class="group relative">
          <div class=" cursor-pointer absolute top-0 z-10 w-full hidden  group-hover:block   duration-300   h-[350px] bg-gradient-to-t from-[#8338EC]  rounded-2xl">
            <div class=" absolute NewsCycle bottom-6 w-full text-[#fcfcfc] text-center text-3xl">
            London
            </div>
          </div>
          <img
            src="https://makecomponents.com/Image/overall/country/London.png"
            alt="london"
            class=" h-[350px] rounded-2xl  w-full sm:w-[450px] sm:object-cover"
          />
        </div>
        <div class="group relative">
          <div class="mt-8  cursor-pointer absolute top-0 z-10 w-full hidden  group-hover:block   duration-300   h-[350px] bg-gradient-to-t from-[#8338EC]  rounded-2xl">
            <div class="NewsCycle absolute bottom-6 w-full text-[#fcfcfc] text-center text-3xl">
            Paris
            </div>
          </div>
          <img
            src="https://makecomponents.com/Image/overall/country/Paris.png"
            alt="Paris"
            class="mt-8 h-[350px] rounded-2xl  w-full sm:w-[450px] sm:object-cover"
          />
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    _id: 9,
    name: "Modern tailwind card design",
    htmlcode: `  <div class="py-4">
        <div class="container mx-auto">
          <div class="grid px-4 lg:grid-cols-3  lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10">
            <div class="lg:pt-0 lge:pt-0 mdsm:pt-0 md:pt-10 sm:pt-16">
              <img
                src="https://makecomponents.com/Image/overall/hotel/hotel001.webp"
                alt="hotel"
                class=" rounded-3xl"
              />
              <div class="relative w-full flex justify-center">
                <div class="bg-[#fff] p-8 rounded-3xl absolute w-[80%]  -top-8">
                  <h3 class="text-center font-semibold Fira text-[#454545] mx-auto text-2xl">Aurelia Heights</h3>
                </div>
              </div>
            </div>
            <div class=" lg:pt-0 lge:pt-0 mdsm:pt-0 md:pt-10 sm:pt-16">
              <img
                src="https://makecomponents.com/Image/overall/hotel/hotel002.webp"
                alt="hotel"
                class=" rounded-3xl"
              />
              <div class="relative w-full flex justify-center">
                <div class="bg-[#fff] p-8 rounded-3xl absolute w-[80%]  -top-8">
                  <h3 class="text-center font-semibold Fira text-[#454545] mx-auto text-2xl">Sovereign Bay Retreat</h3>
                </div>
              </div>
            </div>
            <div class="lg:pt-0 lge:pt-0 mdsm:pt-0 md:pt-10 sm:pt-16">
              <img
                src="https://makecomponents.com/Image/overall/hotel/hotel003.webp"
                alt="hotel"
                class=" rounded-3xl"
              />
              <div class="relative w-full flex justify-center">
                <div class="bg-[#fff] p-8 rounded-3xl absolute w-[80%]  -top-8">
                  <h3 class="text-center font-semibold Fira text-[#454545] mx-auto text-2xl">Elysian Crown Resort</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`,
  },
  {
    _id: 10,
    name: "Course card design tailwind css",
    htmlcode: `  <div class="py-20 ">
        <div class=" container mx-auto">
          <div class="grid lg:grid-cols-2 lge:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 gap-10  p-10">
            <div class="">
              <div class="grid grid-cols-3 sm:grid-cols-1 sm:gap-0 gap-6 border border-[#dbdbdb]  rounded-xl shadow-2xl p-4">
                <div class="">
                  <img
                    src="https://makecomponents.com/Image/course/js.png"
                    alt="course"
                    class="rounded-xl h-full sm:h-[300px] sm:w-full object-cover"
                  />
                </div>
                <div class="   col-span-2">
                  <div class="flex pt-2 space-x-1">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" text-[#f8af1b] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" text-[#f8af1b] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" text-[#f8af1b] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class=" text-[#d5d5d5] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                      ></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class=" text-[#d5d5d5] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                      ></path>
                    </svg>
                  </div>

                  <h4 class="text-2xl pt-4 text-[#cf021a] REM-font">
                    Beginner Javascript projects
                  </h4>
                  <p class="text-[#444444] work pt-2">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print.
                  </p>

                  <div class="pt-2 flex space-x-3">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mt-3 text-[16px] text-[#878787]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96zm0 0v288"></path></svg>
                    <p class="pt-2  work text-[#878787] text-[16px]">
                      Lesson - 10
                    </p>
                  </div>

                  <div class="grid pt-4 grid-cols-2 gap-2">
                    <div class=" flex">
                      <img
                        src="https://makecomponents.com/Image/teams/Team001/person2.webp"
                        alt="person"
                        class="h-[50px]  object-cover w-[50px]  rounded-full"
                      />
                      <h5 class=" work text-[#323232] text-[14px] pt-4 pl-4">
                        Mathews
                      </h5>
                    </div>
                    <div class=" flex justify-end ">
                      <button class="bg-[#cf021a] work rounded-md text-[#fcfcfc] px-6 text-[16px]">
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="grid grid-cols-3 sm:grid-cols-1 sm:gap-0 gap-6  border border-[#dbdbdb]  rounded-xl shadow-2xl p-4">
                <div class="">
                  <img
                    src="https://makecomponents.com/Image/course/react.png"
                    alt="course"
                    class="rounded-xl h-full sm:h-[300px] sm:w-full object-cover"
                  />
                </div>
                <div class="   col-span-2">
                  <div class="flex pt-2 space-x-1">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" text-[#f8af1b] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" text-[#f8af1b] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      class=" text-[#f8af1b] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class=" text-[#d5d5d5] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                      ></path>
                    </svg>

                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class=" text-[#d5d5d5] fill-[#f8af1b] text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                      ></path>
                    </svg>
                  </div>

                  <h4 class="text-2xl REM-font pt-4 text-[#cf021a] ">
                    Beginner React projects
                  </h4>
                  <p class="text-[#444444] work pt-2">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print.
                  </p>

                  <div class="pt-2 flex space-x-3">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mt-3 text-[16px] text-[#878787]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96zm0 0v288"></path></svg>
                    <p class="pt-2  work text-[#878787] text-[16px]">
                      Lesson - 10
                    </p>
                  </div>

                  <div class="grid pt-4 grid-cols-2 gap-2">
                    <div class=" flex">
                      <img
                        src="https://makecomponents.com/Image/teams/Team001/person3.webp"
                        alt="person"
                        class="h-[50px]  object-cover w-[50px]  rounded-full"
                      />
                      <h5 class="work text-[#323232] text-[14px] pt-4 pl-4">
                      Emily Parker
                      </h5>
                    </div>
                    <div class=" flex justify-end ">
                      <button class="bg-[#cf021a] work rounded-md text-[#fcfcfc] px-6 text-[16px]">
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`,
  },
];

export default cardData;
