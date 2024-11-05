const servicesData = [
  {
    _id: 0,
    name: "Services section template",
    title: "Services section template",
    htmlcode: ` <div class=" container mx-auto  ">
      <section class="py-8 sm:p-2">
        <div class="  sm:pb-0">
          <div
            class=" text-[#222] text-[44px] sm:text-[34px] text-center sm:pt-8   "
          >
            Our Services
          </div>
          <div
            class=" grid lg:grid-cols-3 lge:grid-cols-3  md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 lg:gap-16 lge:gap-16 md:gap-5 mdsm:gap-5 sm:gap-4  pt-16"
          >
            <div class=" border-4 py-[100px] px-10 sm:px-5 border-[#222]">
              <div
                class=" h-[40px] w-[40px] relative border-2 center border-[#222]"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  class="text-[28px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M716.3 313.8c19-18.9 19-49.7 0-68.6l-69.9-69.9.1.1c-18.5-18.5-50.3-50.3-95.3-95.2-21.2-20.7-55.5-20.5-76.5.5L80.9 474.2a53.84 53.84 0 0 0 0 76.4L474.6 944a54.14 54.14 0 0 0 76.5 0l165.1-165c19-18.9 19-49.7 0-68.6a48.7 48.7 0 0 0-68.7 0l-125 125.2c-5.2 5.2-13.3 5.2-18.5 0L189.5 521.4c-5.2-5.2-5.2-13.3 0-18.5l314.4-314.2c.4-.4.9-.7 1.3-1.1 5.2-4.1 12.4-3.7 17.2 1.1l125.2 125.1c19 19 49.8 19 68.7 0zM408.6 514.4a106.3 106.2 0 1 0 212.6 0 106.3 106.2 0 1 0-212.6 0zm536.2-38.6L821.9 353.5c-19-18.9-49.8-18.9-68.7.1a48.4 48.4 0 0 0 0 68.6l83 82.9c5.2 5.2 5.2 13.3 0 18.5l-81.8 81.7a48.4 48.4 0 0 0 0 68.6 48.7 48.7 0 0 0 68.7 0l121.8-121.7a53.93 53.93 0 0 0-.1-76.4z"
                  ></path>
                </svg>
                <div
                  class=" h-[36px] w-[36px] bg-[#ff0000b0] absolute top-[-16px] right-[-8px]"
                ></div>
              </div>
              <div class=" text-[32px]  py-4">Web Design</div>
              <p class="  text-text-color sm:text-base">
                Web design involves creating visually appealing and functional
                websites by organizing content and interactive elements. It
                focuses on usability, responsiveness, and aesthetics to enhance
                user experience.
              </p>
            </div>

            <div class=" border-4 py-[100px] px-10 sm:px-5 border-[#222]">
              <div
                class=" h-[40px] w-[40px] relative border-2 center border-[#222]"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[28px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"
                  ></path>
                </svg>
                <div
                  class=" h-[36px] w-[36px] bg-[#ff0000b0] absolute top-[-16px] right-[-8px]"
                ></div>
              </div>
              <div class=" text-[32px] py-4">Frontend Development</div>
              <p class=" text-text-color">
                Frontend development focuses on building the user interface and
                experience of websites using HTML, CSS, and JavaScript. It
                ensures that web applications are visually appealing,
                interactive, and responsive across different devices and
                browsers.
              </p>
            </div>

            <div class=" border-4 py-[100px] px-10 sm:px-5 border-[#222]">
              <div
                class=" h-[40px] w-[40px] relative border-2 center border-[#222]"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 384 512"
                  class="text-[28px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"
                  ></path>
                </svg>
                <div
                  class=" h-[36px] w-[36px] bg-[#ff0000b0] absolute top-[-16px] right-[-8px]"
                ></div>
              </div>
              <div class=" text-[32px] py-4">Backend Support</div>
              <p class=" text-text-color">
                Backend development focuses on building the server-side logic,
                databases, and APIs that enable the functionality of web
                applications. It ensures efficient data processing, storage, and
                secure communication with the frontend.
              </p>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </div>`,
  },
  {
    _id: 1,
    name: "icon-services-section",
    title: "icon-services-section",
    htmlcode: `<div class=" container mx-auto my-32">
      <div class=" grid lg:grid-cols-4  lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 lg:gap-10 lge:gap-10 md:gap-4 mdsm:gap-4 sm:gap-4 px-4">
        <div class="bg-white sm:px-4 px-7 py-5 border-[1px]  border-[#e8e8e8]  rounded-lg ">
          <div class=" ml-2 my-2 h-[70px] relative w-[70px] bg-[#00bc9538]  opacity-50 rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 256 256"
              draggable="false"
              class=" h-[60px] text-[#008b68]  w-[60px] absolute right-4 "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M222,216a6,6,0,0,1-6,6H72a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216Zm24-80v24a6,6,0,0,1-6,6H61.07a37.77,37.77,0,0,1-36.4-27.08L10.6,92A14,14,0,0,1,24,74h8a6,6,0,0,1,4.24,1.76L58.49,98h26.1L74.73,68.43A14,14,0,0,1,88,50h8a6,6,0,0,1,4.25,1.76L146.49,98H208A38,38,0,0,1,246,136Zm-12,0a26,26,0,0,0-26-26H144a6,6,0,0,1-4.24-1.76L93.52,62H88a2,2,0,0,0-1.9,2.63L98.6,102.1a6,6,0,0,1-5.69,7.9H56a6,6,0,0,1-4.24-1.76L29.52,86H24a1.93,1.93,0,0,0-1.6.81,1.91,1.91,0,0,0-.31,1.76l14.06,46.9A25.86,25.86,0,0,0,61.07,154H234Z"></path>
            </svg>
          </div>
          <h3 class="2xl:text-4xl  pt-4 xl:text-4xl lg:text-3xl lge:text-3xl md:text-3xl mdsm:text-2xl  sm:text-2xl text-[#444]">
            Flights
          </h3>
          <p class="pb-2 pt-2  sm:text-[16px]  text-[#404040] break-words text-h6 text-color">
            Select your departure and destination cities, dates, and preferred
            class to view available flights.
          </p>
        </div>

        <div class="bg-white sm:px-4 px-7 py-5 border-[1px]  border-[#e8e8e8]  rounded-lg ">
          <div class=" ml-2 my-2 h-[70px] relative w-[70px] bg-[#00bc9538] opacity-50 rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              draggable="false"
              class=" h-[60px] text-[#008b68]  w-[60px] absolute right-4 "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 4H14.4458C14.7905 4 15.111 4.17762 15.2938 4.47L18.75 10H23.1577C23.4339 10 23.6577 10.2239 23.6577 10.5C23.6577 10.5837 23.6367 10.666 23.5967 10.7394L19.6364 18H19C18.4694 18 17.9548 17.9311 17.4648 17.8018L20.63 12H3.4L4.44833 17.824C3.9845 17.939 3.49937 18 3 18H2.45455L1.21434 11.1789C1.11555 10.6355 1.47595 10.1149 2.01933 10.0161C2.07835 10.0054 2.13822 10 2.19821 10H3V5C3 4.44772 3.44772 4 4 4H5V1H9V4ZM5 10H16.3915L13.8915 6H5V10ZM3 20C4.53671 20 5.93849 19.4223 7 18.4722C8.06151 19.4223 9.46329 20 11 20C12.5367 20 13.9385 19.4223 15 18.4722C16.0615 19.4223 17.4633 20 19 20H21V22H19C17.5429 22 16.1767 21.6104 15 20.9297C13.8233 21.6104 12.4571 22 11 22C9.54285 22 8.17669 21.6104 7 20.9297C5.82331 21.6104 4.45715 22 3 22H1V20H3Z"></path>
            </svg>
          </div>
          <h3 class="2xl:text-4xl  pt-4 xl:text-4xl lg:text-3xl lge:text-3xl md:text-3xl mdsm:text-2xl  sm:text-2xl text-[#444]">
            Ship
          </h3>
          <p class="pb-2 pt-2  sm:text-[16px]  text-[#404040] break-words text-h6 text-color">
            Enter your departure and arrival ports, travel dates, and cabin
            preference to find available ships.
          </p>
        </div>

        <div class="bg-white sm:px-4 px-7 py-5 border-[1px]  border-[#e8e8e8]  rounded-lg ">
          <div class=" ml-2 my-2 h-[70px] relative w-[70px] bg-[#00bc9538] opacity-50 rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 32 32"
              draggable="false"
              class=" h-[60px] text-[#008b68]  w-[60px] absolute right-4 "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 14 3 C 12.742188 3 11.847656 3.890625 11.40625 5 L 10 5 C 7.25 5 5 7.25 5 10 L 5 21 C 5 23.425781 6.449219 25.523438 8.53125 26.46875 L 6 29 L 8.34375 29 L 10.375 26.96875 C 10.574219 26.988281 10.792969 27 11 27 L 21 27 C 21.207031 27 21.425781 26.988281 21.625 26.96875 L 23.65625 29 L 26 29 L 23.46875 26.46875 C 25.550781 25.523438 27 23.425781 27 21 L 27 10 C 27 7.25 24.75 5 22 5 L 20.59375 5 C 20.152344 3.890625 19.257813 3 18 3 Z M 14 5 L 18 5 C 18.566406 5 19 5.433594 19 6 L 19 7 L 22 7 C 23.320313 7 24.4375 7.828125 24.84375 9 L 7.15625 9 C 7.5625 7.828125 8.679688 7 10 7 L 13 7 L 13 6 C 13 5.433594 13.433594 5 14 5 Z M 7 11 L 25 11 L 25 16 L 7 16 Z M 7 18 L 25 18 L 25 21 C 25 23.21875 23.21875 25 21 25 L 11 25 C 8.78125 25 7 23.21875 7 21 Z M 16 19 C 14.894531 19 14 19.894531 14 21 C 14 22.105469 14.894531 23 16 23 C 17.105469 23 18 22.105469 18 21 C 18 19.894531 17.105469 19 16 19 Z"></path>
            </svg>
          </div>
          <h3 class="2xl:text-4xl  pt-4 xl:text-4xl lg:text-3xl lge:text-3xl md:text-3xl mdsm:text-2xl  sm:text-2xl text-[#444]">
            Train
          </h3>
          <p class="pb-2 pt-2  sm:text-[16px]  text-[#404040] break-words text-h6 text-color">
            Enter your departure and arrival stations, travel dates, and class
            preference to find available trains.
          </p>
        </div>

        <div class="bg-white sm:px-4 px-7 py-5 border-[1px]  border-[#e8e8e8]  rounded-lg ">
          <div class=" ml-2 my-2 h-[70px] relative w-[70px] bg-[#00bc9538] opacity-50 rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 32 32"
              draggable="false"
              class=" h-[60px] text-[#008b68]  w-[60px] absolute right-4 "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 5 5 C 3.355469 5 2 6.355469 2 8 L 2 25 L 5.15625 25 C 5.601563 26.71875 7.148438 28 9 28 C 10.851563 28 12.398438 26.71875 12.84375 25 L 20.15625 25 C 20.601563 26.71875 22.148438 28 24 28 C 25.851563 28 27.398438 26.71875 27.84375 25 L 31 25 L 31 14.5625 C 31 14 30.828125 13.445313 30.53125 12.96875 L 26.4375 6.40625 C 25.890625 5.53125 24.9375 5 23.90625 5 Z M 5 7 L 10 7 L 10 13 L 4 13 L 4 8 C 4 7.4375 4.4375 7 5 7 Z M 12 7 L 18 7 L 18 13 L 12 13 Z M 20 7 L 23.90625 7 C 24.253906 7 24.566406 7.175781 24.75 7.46875 L 28.1875 13 L 20 13 Z M 4 15 L 29 15 L 29 17 L 26 17 L 26 19 L 29 19 L 29 23 L 27.84375 23 C 27.398438 21.28125 25.851563 20 24 20 C 22.148438 20 20.601563 21.28125 20.15625 23 L 12.84375 23 C 12.398438 21.28125 10.851563 20 9 20 C 7.148438 20 5.601563 21.28125 5.15625 23 L 4 23 Z M 9 22 C 10.117188 22 11 22.882813 11 24 C 11 25.117188 10.117188 26 9 26 C 7.882813 26 7 25.117188 7 24 C 7 22.882813 7.882813 22 9 22 Z M 24 22 C 25.117188 22 26 22.882813 26 24 C 26 25.117188 25.117188 26 24 26 C 22.882813 26 22 25.117188 22 24 C 22 22.882813 22.882813 22 24 22 Z"></path>
            </svg>
          </div>
          <h3 class="2xl:text-4xl  pt-4 xl:text-4xl lg:text-3xl lge:text-3xl md:text-3xl mdsm:text-2xl  sm:text-2xl text-[#444]">
            Van
          </h3>
          <p class="pb-2 pt-2  sm:text-[16px]  text-[#404040] break-words text-h6 text-color">
            Enter your departure and arrival stations, travel dates, and class
            preference to find available trains.
          </p>
        </div>
      </div>
    </div>`,
  },
  {
    _id: 2,
    title: "Our Services tailwind css",
    htmlcode: ` <div class="container mx-auto py-[250px] px-4">
        <section>
          <div
            class="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10"
          >
            <div class="group grid grid-cols-5 gap-5">
              <div class="flex justify-end">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="text-4xl text-[#C42021]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
                  ></path>
                </svg>
              </div>
              <div class="col-span-4">
                <h3 class="text-3xl text-[#C42021]">Key</h3>
                <p class="pt-3 text-[#374B4A] leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>

            <div class="group grid grid-cols-5 gap-5">
              <div class="flex justify-end">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-4xl text-[#C42021]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
                  ></path>
                </svg>
              </div>
              <div class="col-span-4">
                <h3 class="text-3xl text-[#C42021]">Secure</h3>
                <p class="pt-3 text-[#374B4A] leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>

            <div class="group grid grid-cols-5 gap-5">
              <div class="flex justify-end">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  class="text-4xl text-[#C42021]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                  ></path>
                </svg>
              </div>
              <div class="col-span-4">
                <h3 class="text-3xl text-[#C42021]">Cloud</h3>
                <p class="pt-3 text-[#374B4A] leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>`,
  },
  {
    _id: 3,
    title: "Services color card section tailwind css",
    htmlcode: `<div class="py-40 px-4 container mx-auto">
        <section>
          <div class=" grid lg:grid-cols-4 lge:grid-cols-3 md:grid-cols-3 mdsm:grid-cols-2 sm:grid-cols-1 gap-10 ">
            <div class=" group bg-[#5700c9] w-56  mx-auto  p-8 px-4 rounded-lg">
              <div class=" flex justify-end">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="group-hover:-translate-y-6 duration-700  text-[60px] text-[#7812ff]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.0003 21H18.0003V23H6.00032V21H11.0003V19.9506C7.70689 19.6236 4.88351 17.6987 3.31641 14.9622L5.05319 13.9697C6.43208 16.3776 9.02674 18 12.0003 18C16.4186 18 20.0003 14.4182 20.0003 9.99995C20.0003 7.02637 18.378 4.43171 15.9701 3.05282L16.9626 1.31604C19.9724 3.03965 22.0003 6.28297 22.0003 9.99995C22.0003 15.1853 18.0536 19.4489 13.0003 19.9506V21ZM12.0003 17C8.13433 17 5.00032 13.8659 5.00032 9.99995C5.00032 6.13396 8.13433 2.99995 12.0003 2.99995C15.8663 2.99995 19.0003 6.13396 19.0003 9.99995C19.0003 13.8659 15.8663 17 12.0003 17ZM12.0003 15C14.7617 15 17.0003 12.7614 17.0003 9.99995C17.0003 7.23853 14.7617 4.99995 12.0003 4.99995C9.2389 4.99995 7.00032 7.23853 7.00032 9.99995C7.00032 12.7614 9.2389 15 12.0003 15Z"></path>
                </svg>
              </div>
              <p class="pt-16 group-hover:-translate-y-6 duration-700  text-2xl text-[#f2f2f2]">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <div class="group bg-[#6C0345] w-56 mx-auto  p-8 px-4 rounded-lg">
              <div class=" flex justify-end">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="group-hover:-translate-y-6 duration-700  text-[60px] text-[#ffedc57a]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
                </svg>
              </div>
              <p class="pt-16 group-hover:-translate-y-6 duration-700   text-2xl text-[#f2f2f2]">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <div class="group bg-[#cf021a] w-56  mx-auto  p-8 px-4 rounded-lg">
              <div class=" flex justify-end">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="group-hover:-translate-y-6 duration-700  text-[60px] text-[#f569797a]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m19.707 4.293-1.414 1.414c2.733 2.733 2.733 7.353 0 10.086l1.414 1.414c3.5-3.5 3.5-9.414 0-12.914zm-4.414 4.414c.566.566.879 1.292.879 2.043s-.313 1.477-.879 2.043l1.414 1.414c.944-.943 1.465-2.172 1.465-3.457s-.521-2.514-1.465-3.457l-1.414 1.414zm-9.086-3L4.793 4.293c-3.5 3.5-3.5 9.414 0 12.914l1.414-1.414c-2.733-2.733-2.733-7.353 0-10.086z"></path>
                  <path d="M7.293 7.293c-.944.943-1.465 2.172-1.465 3.457s.521 2.514 1.465 3.457l1.414-1.414c-.566-.566-.879-1.292-.879-2.043s.313-1.477.879-2.043L7.293 7.293zM14 10.5a2 2 0 0 0-4 0 1.993 1.993 0 0 0 .895 1.666L10.002 22h3.996l-.893-9.835c.54-.358.895-.97.895-1.665z"></path>
                </svg>
              </div>
              <p class="pt-16 group-hover:-translate-y-6 duration-700   text-2xl text-[#f2f2f2]">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <div class="group bg-[#5a5a5a] w-56 mx-auto  p-8 px-4 rounded-lg">
              <div class=" flex justify-end">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="group-hover:-translate-y-6 duration-700  text-[60px] text-[#a9a8a857]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z"></path>
                </svg>
              </div>
              <p class="pt-16 group-hover:-translate-y-6 duration-700   text-2xl text-[#f2f2f2]">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
          </div>
        </section>
      </div>`,
  },
  {
    _id: 4,
    title: "Tailwind services section",
    htmlcode: `  <div class="py-20">
        <div class="container mx-auto px-4">
          <div class=" grid  lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1  gap-10">
            <div class=" flex drop-shadow-xl rounded-l-lg  rounded-r-lg	">
              <div class="w-[30%] rounded-l-lg  overflow-hidden flex p-4 relative justify-center items-center bg-[#0267C1]">
                <div class="absolute -top-5 left-20 h-[100px] w-[100px] rounded-full bg-[#ffffff40]">
                  {" "}
                </div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-5xl text-[#fcfcfc]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <div class="w-[70%] border border-[#ccc] rounded-r-lg p-4 px-6 ">
                <h4 class="text-2xl Mulish text-[#2f2f2f] pt-2 font-semibold pb-2">
                  Lorem Ipsum
                </h4>
                <p class="pb-4 text-[#878787] outfit leading-6">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing .
                </p>
              </div>
            </div>

            <div class=" flex drop-shadow-xl rounded-l-lg  rounded-r-lg	">
              <div class="w-[30%] rounded-l-lg  overflow-hidden flex p-4 relative justify-center items-center bg-[#EFA00B]">
                <div class="absolute -top-5 left-20 h-[100px] w-[100px] rounded-full bg-[#ffffff40]">
                  {" "}
                </div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-5xl text-[#fcfcfc]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div class="w-[70%] border border-[#ccc] rounded-r-lg p-4 px-6 ">
                <h4 class="text-2xl Mulish text-[#2f2f2f] pt-2 font-semibold pb-2">
                  Lorem Ipsum
                </h4>
                <p class="pb-4 text-[#878787] outfit leading-6">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing .
                </p>
              </div>
            </div>

            <div class=" flex drop-shadow-xl rounded-l-lg  rounded-r-lg	">
              <div class="w-[30%] rounded-l-lg  overflow-hidden flex p-4 relative justify-center items-center bg-[#B8001F]">
                <div class="absolute -top-5 left-20 h-[100px] w-[100px] rounded-full bg-[#ffffff40]">
                  {" "}
                </div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-5xl text-[#fcfcfc]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg>
              </div>
              <div class="w-[70%] border border-[#ccc] rounded-r-lg p-4 px-6 ">
                <h4 class="text-2xl Mulish text-[#2f2f2f] pt-2 font-semibold pb-2">
                  Lorem Ipsum
                </h4>
                <p class="pb-4 text-[#878787] outfit leading-6">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>`,
  },
];

export default servicesData;
