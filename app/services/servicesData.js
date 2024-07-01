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
    _id: 0,
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
];

export default servicesData;
