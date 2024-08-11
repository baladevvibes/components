const faqData = [
  {
    _id: 0,
    name: "Simple faq sample design css",
    htmlcode: `   <section class=" container px-4 py-40   mx-auto">

        <h3 class="text-[#434343]  rowdies lg:text-4xl lge:text-4xl md:text-3xl mdsm:text-2xl  sm:text-2xl  text-center pb-10 ">
          Frequently Asked Questions
        </h3>
        <div class="lg:w-[50%] lge:w-[50%] md:w-[80%] mdsm:w-[80%] sm:w-[100%] mx-auto">
          <details class="group  border-b-[1px] border-b-[#ccc] pb-2">
            <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
              <span class=" leading-7 text-[#434343] font-semibold">
                
                What are the top attractions in the city?
              </span>
              <span class="transition group-open:rotate-180">
                <svg
                  class=" "
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-[#5a5a5a]  leading-7">
              A perfect spot for picnics, strolls, and enjoying nature.
            </p>
          </details>

          <details class="group  border-b-[1px] border-b-[#ccc] pb-2">
            <summary class="flex mt-4  cursor-pointer list-none items-center justify-between font-medium">
              <span class="text-[#434343] font-semibold  leading-7 ">
                
                What is the best way to get around the city?
              </span>
              <span class="transition group-open:rotate-180">
                <svg
                  class=" "
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-[#5a5a5a]   leading-7">
              Ride-Sharing and Taxis: Easily accessible for quick trips.
            </p>
          </details>

          <details class="group  border-b-[1px] border-b-[#ccc] pb-2">
            <summary class="flex mt-4  cursor-pointer list-none items-center justify-between font-medium">
              <span class="text-[#434343] font-semibold  leading-7">
                
                When is the best time to visit?
              </span>
              <span class="transition group-open:rotate-180">
                <svg
                  class=" "
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-[#5a5a5a]  leading-7">
              (September to November): Comfortable temperatures and colorful
              foliage.
            </p>
          </details>

          <details class="group  border-b-[1px] border-b-[#ccc] pb-2">
            <summary class="flex mt-4  cursor-pointer list-none items-center justify-between font-medium">
              <span class="text-[#434343] font-semibold  leading-7">
                
                Are there any local customs or etiquette I should be aware of?
              </span>
              <span class="transition group-open:rotate-180">
                <svg
                  class=" "
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-[#5a5a5a]  leading-7">
              Be mindful of noise levels and personal space in public areas.
            </p>
          </details>
        </div>
      </section>`,
  },
  {
    _id: 1,
    name: "faq table tailwind css",
    htmlcode: `    <div class=" py-[150px] container mx-auto">
      <section class=" w-[96%] mx-auto ">
        <details class="group overflow-auto  relative pb-2">
          <summary class="flex relative mt-4 border-[1px] border-[#ccc]  py-3 px-3 cursor-pointer list-none font-medium">
            <span class="transition flex justify-center items-center group-open:rotate-90">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 15 15"
                class="text-[#5a5a5a] "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span class="text-[#5a5a5a] px-4 font-semibold  leading-7 ">
              Apple
            </span>
          </summary>
          <span class=" absolute w-auto top-7 right-5 flex justify-end">
            <div class=" group">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-[#5a5a5a] cursor-pointer  hover:text-[#e5051f] text-[22px] mt-[2px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
              </svg>
            </div>
          </span>
          <div class=" border-[1px] border-t-0 border-[#ccc]  py-3 px-4 ">
            <table class="border-[1px] border-[#ccc] w-full">
              <thead class=" bg-[#f2f2f2]">
                <tr class="border-[1px] border-[#ccc] ">
                  <td class="border-[1px] font-semibold  border-[#ccc]   text-[#5a5a5a] px-6 py-2">
                    Product
                  </td>
                  <td class="border-[1px] font-semibold  border-[#ccc]   text-[#5a5a5a] px-6 py-2">
                    Price
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr class="border-[1px] relative border-[#ccc] ">
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    MacBook Pro 14” and 16” M3, M3 Pro or M3 Max chip
                  </td>
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    ₹169900.00
                  </td>
                </tr>
                <tr class="border-[1px] border-[#ccc]  ">
                  <td class="border-[1px] border-[#ccc]   text-[#5a5a5a] px-6 py-2">
                    iPad Pro
                  </td>
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    ₹99900.00
                  </td>
                </tr>
                <tr class="border-[1px] border-[#ccc] ">
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    iPhone 15 Pro
                  </td>
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    ₹129800.00
                  </td>
                </tr>
                <tr class="border-[1px] border-[#ccc] ">
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    Apple Watch SE
                  </td>
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    ₹29900.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
        <details class="group  relative pb-2">
          <summary class="flex relative  border-[1px] border-[#ccc]  py-3 px-3 cursor-pointer list-none font-medium">
            <span class="transition flex justify-center items-center group-open:rotate-90">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 15 15"
                class="text-[#5a5a5a] "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span class="text-[#5a5a5a] px-4 font-semibold  leading-7 ">
              Redmi
            </span>
          </summary>
          <span class=" absolute w-auto top-3 right-5 flex justify-end">
            <div class=" group">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-[#5a5a5a] cursor-pointer  hover:text-[#e5051f] text-[22px] mt-[2px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
              </svg>
            </div>
          </span>
          <div class=" border-[1px] border-t-0 border-[#ccc]  py-3 px-10 ">
            <table class="border-[1px] border-[#ccc] w-full">
              <thead class=" bg-[#f2f2f2]">
                <tr class="border-[1px] border-[#ccc] ">
                  <td class="border-[1px] font-semibold  border-[#ccc]   text-[#5a5a5a] px-6 py-2">
                    Product
                  </td>
                  <td class="border-[1px] font-semibold  border-[#ccc]   text-[#5a5a5a] px-6 py-2">
                    Price
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr class="border-[1px] relative border-[#ccc] ">
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    Xiaomi 14 Ultra
                  </td>
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    ₹99,999
                  </td>
                </tr>
                <tr class="border-[1px] border-[#ccc]  ">
                  <td class="border-[1px] border-[#ccc]   text-[#5a5a5a] px-6 py-2">
                    Redmi Note 13 Pro+ 5G
                  </td>
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    ₹29,999
                  </td>
                </tr>
                <tr class="border-[1px] border-[#ccc] ">
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    Redmi Note 13 Pro
                  </td>
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    ₹24,999
                  </td>
                </tr>
                <tr class="border-[1px] border-[#ccc] ">
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    Redmi Note 13 5G
                  </td>
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    ₹16,999
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
        <details class="group  relative pb-2">
          <summary class="flex relative  border-[1px] border-[#ccc]  py-3 px-3 cursor-pointer list-none font-medium">
            <span class="transition flex justify-center items-center group-open:rotate-90">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 15 15"
                class="text-[#5a5a5a] "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span class="text-[#5a5a5a] px-4 font-semibold  leading-7 ">
              Samsung
            </span>
          </summary>
          <span class=" absolute w-auto top-3 right-5 flex justify-end">
            <div class=" group">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-[#5a5a5a] cursor-pointer  hover:text-[#e5051f] text-[22px] mt-[2px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
              </svg>
            </div>
          </span>
          <div class=" border-[1px] border-t-0 border-[#ccc]  py-3 px-10 ">
            <table class="border-[1px] border-[#ccc] w-full">
              <thead class=" bg-[#f2f2f2]">
                <tr class="border-[1px] border-[#ccc] ">
                  <td class="border-[1px] font-semibold  border-[#ccc]   text-[#5a5a5a] px-6 py-2">
                    Product
                  </td>
                  <td class="border-[1px] font-semibold  border-[#ccc]   text-[#5a5a5a] px-6 py-2">
                    Price
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr class="border-[1px] relative border-[#ccc] ">
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    Samsung Galaxy M35 5G
                  </td>
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    ₹19,999
                  </td>
                </tr>
                <tr class="border-[1px] border-[#ccc]  ">
                  <td class="border-[1px] border-[#ccc]   text-[#5a5a5a] px-6 py-2">
                    Samsung Galaxy S24 Ultra
                  </td>
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    ₹107,298
                  </td>
                </tr>
                <tr class="border-[1px] border-[#ccc] ">
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    Samsung Galaxy A35 5G
                  </td>
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    ₹23,765
                  </td>
                </tr>
                <tr class="border-[1px] border-[#ccc] ">
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    Samsung Galaxy M34
                  </td>
                  <td class="border-[1px] border-[#ccc]  text-[#5a5a5a] px-6 py-2">
                    ₹34,280
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </section>
    </div>`,
  },
];

export default faqData;
