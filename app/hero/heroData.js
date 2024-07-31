const heroData = [
  {
    _id: 0,
    name: "hero-with-searchbar",
    title: "Hero Banner With Searching Options",
    des: "This component create using CSS framework tailwindcss. It fully responsive component. Added Seacrh bar.",
    section: "Hero",
    slug: "hero-with-searchbar-preview",
    htmlcode: `<div class='bg-no-repeat relative w-full bg-[url("https://makecomponents.com/Image/hero/hero001/hero001.webp")] h-[100vh] bg-cover bg-center'>
        <section>
          <header className="w-full">
            <div class="absolute h-[100vh] bg-[#060505cf] top-0 w-full">
              <div class="py-4 px-4 w-full absolute top-0">
                <div class="container mx-auto">
                  <div class="grid grid-cols-12">
                    <div class="col-span-6">
                      <h1 class=" text-white text-3xl font-semibold">Logo</h1>
                    </div>
                    <div class="col-span-6 flex justify-end px-0">
                      <div>
                        <div class="sm:block md:block mdsm:block lg:hidden lge:hidden">
                          <div class="py-2 flex justify-end">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-white text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5"></path>
                            </svg>
                          </div>
                        </div>
                        <ul class="sm:invisible md:invisible mdsm:invisible lg:visible lge:visible flex gap-16 py-2">
                          <li class=" text-lg text-white">Home</li>
                          <li class=" text-lg text-white">About us</li>
                          <li class=" text-lg text-white">Places</li>
                          <li class=" text-lg text-white">Contact</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-center items-center lge:w-full lg:w-full md:w-auto mdsm:w-auto sm:w-auto h-full">
                <div class="mt-16 block">
                  <div class="text-white lge:text-9xl lg:text-9xl md:text-7xl mdsm:text-7xl sm:text-6xl">Trip Days</div>
                  <div class="flex justify-center items-center mt-8 w-full">
                    <button id="book-now" name="book-now" class="bg-white py-2 px-8 rounded-full text-lg hover:bg-[#fab700] duration-700">
                        Book Now
                    </button>
                  </div>
                </div>
              </div>
              <div class="lge:absolute lg:absolute mdsm:relative md:relative sm:relative lge:-bottom-12 lg:-bottom-12 mdsm:bottom-0 md:bottom-0 sm:bottom-0 w-full lge:p-0 lg:p-0 md:p-2 mdsm:p-2 sm:p-6">
                <div class="container mx-auto">
                  <div class="bg-white grid lge:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1">
                    <div class="p-6">
                        <div class="mb-3"><label class="text-[#272525] leading-4 text-2xl " for="where">Where</label></div>
                        <input type="text" name="city" placeholder="New York" class="outline-none w-full  border border-[#ccc] focus:border-[#fab700] border-t-0 border-l-0 border-r-0 border-b-1"/>
                    </div>
                    <div class="p-6 lge:px-0 lg:px-0 md:px-0 mdsm:px-0 sm:px-6">
                        <div class="mb-3"><label class="text-[#272525] leading-4 text-2xl " for="Date">Date</label>
                        </div>
                        <input type="text" name="date" placeholder="25-Dec-2024" class="outline-none w-full  border border-[#ccc] focus:border-[#fab700] border-t-0 border-l-0 border-r-0 border-b-1"/>
                    </div>
                    <div class="p-6">
                        <div class="mb-3"><label class="text-[#272525] leading-4 text-2xl " for="Price">Price</label>
                        </div>
                        <input type="text" name="price" placeholder="$4000" class="outline-none w-full  border border-[#ccc] focus:border-[#fab700] border-t-0 border-l-0 border-r-0 border-b-1"/>
                    </div> 
                    <button id="search" class="bg-[#fab700] flex sm:py-2 justify-center text-2xl sm:1xl items-center ">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </section>
      </div>`,
  },
  {
    _id: 1,
    name: "two-grid-hero-section",
    title: "Two Grid Hero Section",
    des: "This component create using CSS framework tailwindcss. It fully responsive component.",
    section: "Hero",
    slug: "two-grid-hero-section-preview",
    htmlcode: ` <div>
      <header>
      <div class="grid grid-cols-3 h-[100vh] overflow-hidden relative">
        <nav class=" absolute z-20 top-0 w-full py-4">
          <div class=" container mx-auto">
            <div class=" grid grid-cols-12">
              <div
                class="lg:col-span-4 lge:col-span-4 md:col-span-4 mdsm:col-span-full sm:col-span-full px-4"
              >
                <div class=" relative">
                  <div
                    class="pt-2  lg:text-[#fff] lge:text-[#fff] md:text-[#181818] mdsm:text-[#181818] sm:text-[#181818] font-semibold lg:text-5xl lge:text-5xl md:text-5xl mdsm:text-5xl sm:text-3xl lg:text-left lge:text-left md:text-left mdsm:text-left sm:text-left  "
                  >
                    Logo
                  </div>
                  <div class="lg:hidden lge:hidden md:hidden mdsm:block sm:block absolute top-4 right-4 flex justify-end">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="text-[30px] sm:text-[24px]"><path d="M4 19h16v2H4zm0-4h11v2H4zm0-4h16v2H4zm0-8h16v2H4zm0 4h11v2H4z"></path></svg>

                  </div>
                </div>
              </div>
              <div class=" col-span-8">
                <div
                  class=" lg:block lge:block md:block mdsm:hidden sm:hidden"
                >
                  <div class="  flex space-x-16 justify-end px-4 py-4">
                    <div
                      class=" text-[22px] text-[#181818] relative after:w-[0%] cursor-pointer hover:after:content-[''] hover:after:h-[4px] hover:after:bg-[#181818] hover:after:w-[70%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 "
                    >
                      Home
                    </div>
                    <div
                      class=" text-[22px]  text-[#181818] relative after:w-[0%] cursor-pointer hover:after:content-[''] hover:after:h-[4px] hover:after:bg-[#181818] hover:after:w-[70%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 "
                    >
                      About
                    </div>

                    <div
                      class=" text-[22px] text-[#181818] relative after:w-[0%] cursor-pointer hover:after:content-[''] hover:after:h-[4px] hover:after:bg-[#181818] hover:after:w-[70%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 "
                    >
                      Services
                    </div>
                    <div
                      class=" text-[22px] text-[#181818] relative after:w-[0%] cursor-pointer hover:after:content-[''] hover:after:h-[4px] hover:after:bg-[#181818] hover:after:w-[70%] hover:after:absolute hover:after:bottom-0 hover:after:left-0 "
                    >
                      Contact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="bg-[#181818] lg:block lge:block md:hidden mdsm:hidden sm:hidden h-full relative">
          <div class=" ">
            <div
              class=" absolute flex justify-center items-center h-full  left-0 bottom-50 z-10  mx-4"
            >
              <div>
                <div class=" group cursor-pointer mt-8">
                  <div
                    class="border hover:border-[#fff] group-hover:bg-[#181818] bg-[#fff] p-2"
                  >
                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[20px] group-hover:text-[#fff] text-[#181818]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"></path></svg>
                  </div>
                </div>

                <div class="mt-6 group cursor-pointer">
                  <div
                    class=" border hover:border-[#fff] group-hover:bg-[#181818] bg-[#fff] p-2"
                  >
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-[20px] group-hover:text-[#fff] text-[#181818]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                  </div>
                </div>

                <div class="mt-6 group cursor-pointer">
                  <div
                    class="border hover:border-[#fff] group-hover:bg-[#181818] bg-[#fff] p-2"
                  >
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-[20px] group-hover:text-[#fff] text-[#181818]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" px-4 flex justify-center items-center h-full  lg:mt-6 lge:mt-0 ml-24 z-10">
            <div class=" block">
              <h1 class="  text-[#fff] ml-14 text-[50px]  font-semibold ">
                Collect
              </h1>
              <img
                src="../../Image/hero/hero002/shirts.webp"
                class="h-[50vh] mt-2 w-full  object-cover"
                alt="shirts"
              />
            </div>
          </div>
        </div>

        <div
          class=" lg:col-span-2 lge:col-span-2 md:col-span-full mdsm:col-span-full sm:col-span-full h-full relative"
        >
          <div
            class=" h-full absolute top-0  w-full bg-[#f2f2f2ad]"
          ></div>
          <div class="  container mx-auto">
            <div class="absolute h-full flex justify-start items-center">
              <div class=" block">
              <h1
                class=" text-[#181818] lg:mt-6 lge:mt-10  relative lg:text-[50px] lge:text-[50px] md:text-[30px] mdsm:text-[30px] sm:text-[30px] px-4    font-semibold  "
              >
                Clothes and T-shirts
              </h1>
              <p
                class="pt-1   text-[#333] font-semibold text-justify lg:text-[24px] lge:text-[24px] md:text-[24px] mdsm:text-[20px] sm:text-[20px] lg:w-[70%] lge:w-[70%] md:w-[90%] mdsm:w-[90%] sm:w-[100%] px-4"
              >
                Explore the latest trends in fashion with our exclusive
                collection of clothes and t-shirts. Whether you're looking for
                casual comfort or stylish elegance, we've got you covered.
              </p>
              <p
                class="pt-2  text-[#333] font-semibold text-justify lg:text-[24px] lge:text-[24px] md:text-[24px] mdsm:text-[20px] sm:text-[20px] lg:w-[70%] lge:w-[70%] md:w-[90%] mdsm:w-[90%] sm:w-[100%] px-4"
              >
                Stay ahead of the fashion curve with our weekly new arrivals.
                Each piece is designed with you in mind, blending comfort,
                quality, and style.
              </p>

              <button
                class=" lg:text-[22px] lge:text-[22px] md:text-[22px] mdsm:text-[18px] sm:text-[16px] font-semibold tracking-widest mx-4 bg-[#181818] text-base mt-4 hover:bg-[#fff] border-2 border-[#181818]  hover:font-semibold hover:text-[#181818] px-16 py-3 text-[#fff]"
              >
                Shop Now
              </button>
            
              </div>
              </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1608739872119-f78feab7f976?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class=" h-full object-cover"
            alt="clothes"
          />
        </div>
      </div>
      </header>
    </div>`,
  },
  {
    _id: 2,
    name: "Background Layer Hero Section",
    title: "Background Layer Hero Section",
    htmlcode: ` <section>
      <div class="relative">
        <div class="z-10 absolute w-full top-0 py-4">
          <div class="container mx-auto">
            <div class="sm:px-4 grid grid-cols-3">
              <div
                class="text-[#fff] lg:pt-1 lge:pt-1 md:pt-2 mdsm:pt-2 sm:pt-2 text-4xl font-semibold dosis-font"
              >
                Logo
              </div>
              <div class="col-span-2">
                <div class="flex justify-end space-x-20 py-4">
                  <div
                    class="lg:block lge:block md:hidden mdsm:hidden sm:hidden text-[#fff] font-semibold cursor-pointer"
                  >
                    Home
                  </div>
                  <div
                    class="lg:block lge:block md:hidden mdsm:hidden sm:hidden text-[#fff] font-semibold cursor-pointer"
                  >
                    About
                  </div>
                  <div
                    class="lg:block lge:block md:hidden mdsm:hidden sm:hidden text-[#fff] font-semibold cursor-pointer"
                  >
                    Gallery
                  </div>
                  <div
                    class="lg:block lge:block md:hidden mdsm:hidden sm:hidden text-[#fff] font-semibold cursor-pointer"
                  >
                    Contact
                  </div>
                  <div
                    class="lg:hidden lge:hidden md:block mdsm:block sm:block"
                  >
                    <div class="group">
                      <div
                        class="group-hover:bg-[#fff] bg-[#222] cursor-pointer p-2"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          class="group-hover:text-[#222] text-[#fff]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 19h16v2H4zm3-4h10v2H7zm-3-4h16v2H4zm0-8h16v2H4zm3 4h10v2H7z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative min-h-[100vh] max-h-[140vh] lg:bg-[url('https://makecomponents.com/Image/hero/hero003/hero.webp')] lge:bg-[url('https://makecomponents.com/Image/hero/hero003/hero.webp')] md:bg-[url('https://makecomponents.com/Image/hero/hero003/sm-hero.webp')] mdsm:bg-[url('https://makecomponents.com/Image/hero/hero003/sm-hero.webp')] sm:bg-[url('https://makecomponents.com/Image/hero/hero003/sm-hero.webp')] bg-no-repeat bg-cover bg-center bg-fixed px-4"
        >
          <div class="relative min-h-[100vh] max-h-[140vh] container mx-auto">
            <div class="h-full absolute sm:bottom-0">
              <div
                class="h-full grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1"
              >
                <div class="h-full flex justify-center items-center pt-20">
                  <div class="block">
                    <h2
                      class="text-[#fff] rowdies lg:text-[64px] lgE:text-[64px] md:text-[40px] mdsm:text-[40px] sm:text-[38px]"
                    >
                      Plan Move Deliver
                    </h2>
                    <p
                      class="text-[#fff] lg:w-full lge:w-full md:w-[90%] mdsm:w-[90%] sm:w-full lg:text-2xl lge:text-2xl md:text-1xl mdsm:text-1xl sm:text-1xl"
                    >
                      Storing goods until they are needed. This includes
                      inventory management, which ensures that the right amount
                      of stock is available at the right time
                    </p>
                    <button
                      class="mt-4 hover:bg-[#222] hover:text-[#fff] bg-[#fff] px-20 py-3"
                    >
                      Get Started
                    </button>
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
    _id: 3,
    name: "Modern hero section design",
    title: "Modern hero section design",
    htmlcode: `<section class=" container px-4 py-10  mx-auto">
      <div class=" relative rounded-2xl  overflow-hidden ">
        <img
          src="https://makecomponents.com/Image/overall/building/building4.webp"
          alt="building"
          class="rounded-2xl h-[70vh] w-full object-cover"
        />
        <div class=" absolute top-0 p-6 w-full ">
          <div class=" flex justify-end ">
            <div class=" bg-[#fff] p-2 lg:hidden lge:hidden md:hidden mdsm:block sm:block cursor-pointer group">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class=" text-[#333] group-hover:text-[#000]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z"></path></svg>
            </div>
          </div>
          <div class=" lg:block lge:block md:block  mdsm:hidden sm:hidden">
            <div class=" grid  grid-cols-12 ">
              <div class=" bg-[#fff] text-[#333] font-bold px-6 rounded-lg  text-center">
                Logo
              </div>
              <div class=" col-span-6"></div>
              <div class="rounded-lg col-span-5">
                <div class=" rounded-lg text-[#333]   font-bold  flex justify-end space-x-10">
                  <div class="bg-[#fff]  hover:text-[#898989] cursor-pointer  rounded-lg  px-6 text-center">
                    About
                  </div>
                  <div class="bg-[#fff]  hover:text-[#898989] cursor-pointer  rounded-lg  px-6 text-center">
                    Services
                  </div>

                  <div class="bg-[#fff]  hover:text-[#898989] cursor-pointer  rounded-lg  px-6 text-center">
                    Contact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-2xl px-6 py-2 sm:px-0 mt-6">
        <h2 class=" text-[#333]  font-bold text-[64px] ">
          Bright City
        </h2>
        <h4 class=" lg:text-[22px] lge:text-[22px] md:text-[22px] mdsm:text-[20px] font-normal sm:text-[20px]  pt-2 text-[#898989]  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h4>
      </div>
    </section>`,
  },
];

export default heroData;
