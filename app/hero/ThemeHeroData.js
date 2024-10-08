const ThemeHeroData = [
    {
      _id: 0,
      title: "Modern hero section design",
      section: "Hero",
      htmlcode: ` <section class=" dark:bg-[#1e1e1e] container px-4 py-10  mx-auto">
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
                  <div class="bg-[#fff] dark:bg-[#1e1e1e]  dark:text-[#d1d1d1] dark:hover:text-[#fff]  hover:text-[#898989] cursor-pointer  rounded-lg  px-6 text-center">
                    About
                  </div>
                  <div class="bg-[#fff] dark:bg-[#1e1e1e]  dark:text-[#d1d1d1] dark:hover:text-[#fff]  hover:text-[#898989] cursor-pointer  rounded-lg  px-6 text-center">
                    Services
                  </div>

                  <div class="bg-[#fff]  dark:bg-[#1e1e1e]  dark:text-[#d1d1d1]  dark:hover:text-[#fff] hover:text-[#898989] cursor-pointer  rounded-lg  px-6 text-center">
                    Contact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-2xl px-6 py-2 sm:px-0 mt-6">
        <h2 class=" text-[#333] dark:text-[#fff] font-bold text-[64px] ">
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
    {
      _id: 1,
      title: "Tailwind background section",
      htmlcode: `<div class=" dark:bg-[#1e1e1e]">
        <section class=" relative">
        <div class=" absolute z-10 w-full top-0">
          <div class="h-full container px-4 mx-auto w-full ">
            <div class="  w-[100%]">
              <div class=" min-h-[100vh]   text-center flex justify-center items-center">
                <div class=" block">
                  <h2 class="dark:text-[#f2f2f2] text-5xl sm:text-4xl Archivo">
                    {" "}
                    Innovate{" "}
                    <span class="text-5xl  sm:text-4xl Archivo font-normal">
                      with Us
                    </span>{" "}
                  </h2>

                  <h3 class=" text-2xl sm:text-[20px] dark:text-[#f2f2f2] text-[#434343] md:w-[60%] mdsm:w-[80%] sm:w-full mx-auto work pt-4">
                    The Future of Technology Starts Here.Leading the Way in{" "}
                    <span class=" font-semibold dark:text-[#f2f2f2] text-[#000]">
                      Technological Advancements
                    </span>{" "}
                  </h3>
                  <div class= "  relative z-10 mt-8">
                    <button class="bg-[#000] hover:bg-[#434343] text-[#f2f2f2] px-16 py-3 rounded-full">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" min-h-[100vh] relative">
          <div class=" absolute top-10  left-20 bg-[#c7295e] h-[300px] w-[300px] rounded-full blur-[250px]"></div>
          <div class=" absolute right-40  bg-[#4b91e2] h-[300px] w-[300px] rounded-full blur-[250px]"></div>
        </div>
      </section>
    </div>`,
    },
   
  ];
  
  export default ThemeHeroData;