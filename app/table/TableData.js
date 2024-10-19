const tableData = [
    {
        _id:0,
        name:"table-with-sort-options",
        title:"Table with sort option",
        des:"This component create using CSS framework tailwindcss. It fully responsive component.",
        section:"Table",
        slug:"table-with-sort-options",
        htmlcode:`<div class="container mx-auto">
        <div class="py-10 px-10">
          <div class="sm:w-full overflow-auto">
            <table class="w-full">
              <thead>
                <tr
                  class="bg-[#e5f3ff] border border-t-[#e4ebff] border-b-[#e4ebff] border-r-[#fdfdfd00] border-l-[#fdfdfd00]"
                >
                  <th
                    class="py-2 sm:text-xs lg:w-auto lge:w-auto md:w-[60px] mdsm:w-w-[60px] sm:w-auto lg:py-2 lge:py-2 md:py-4 mdsm:p-4 sm:py-4 flex text-sm font-medium leading-4.2 px-2"
                  >
                    S.No
                  </th>
                  <th class="py-2">
                    <div
                      class="sm:w-[250px] lg:auto lge:auto md:w-[300px] mdsm:w-[300px] flex px-2"
                    >
                      <div class="sm:text-xs text-sm font-medium leading-4.3">
                        Invoice
                      </div>
                      <div class="mt-0.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"
                          ></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th class="py-2">
                    <div
                      class="sm:w-[150px] lg:w-auto lge:w-[100px] md:w-[100px] mdsm:w-[150px] sm:text-xs    text-sm font-medium leading-4.3  flex px-2"
                    >
                      <div class="sm:text-xs text-sm font-medium leading-4.3">
                        Due Date
                      </div>
                      <div class="mt-0.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"
                          ></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th class="py-2">
                    <div class="flex px-2">
                      <div class="sm:text-xs text-sm font-medium leading-4.3">
                        Status
                      </div>
                      <div class="mt-0.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"
                          ></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th class="py-2">
                    <div class="flex justify-end px-2">
                      <div class="sm:text-xs text-sm font-medium leading-4.3">
                        Amount
                      </div>
                      <div class="mt-0.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"
                          ></path>
                        </svg>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          class="text-[#008cff] hover:text-[#0000ca] cursor-pointer text-[16px] mx-1 h-[8px] w-[14px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th class="py-2 w-[200px]">
                    <div class="flex px-2">
                      <div class="sm:text-xs text-sm font-medium leading-4.2">
                        Actions
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  title="TechCorp Solutions	"
                  class="border border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
                >
                  <td class="py-3 px-2 text-sm text-[#333]">001</td>
                  <td class="py-3 px-2 text-sm text-[#333] font-semibold">
                    TechCorp Solutions
                  </td>
                  <td class="py-3 px-2 text-sm text-[#333]">22 Feb 2024</td>
                  <td class="py-3 px-2 text-sm text-[#333]">
                    <div
                      class="py-1 px-2 bg-[#ffa8a3] text-[#8f0700] rounded-full w-16 text-sm"
                    >
                      Unpaid
                    </div>
                  </td>
                  <td class="py-3 px-4 text-right text-sm text-[#333]">$5.6</td>
                  <td class="py-4 px-4 flex space-x-12 text-sm text-[#333]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#008cff] hover:text-[#0000ca] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                      ></path>
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#444] hover:text-[#0b6c00] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] hover:text-[#c20000] cursor-pointer delay-200 transition-all text-[18px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr
                  title="TransGlobal Logistics"
                  class="border border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
                >
                  <td class="py-3 px-2 text-sm text-[#333]">002</td>
                  <td class="py-3 px-2 text-sm text-[#333] font-semibold">
                    TransGlobal Logistics
                  </td>
                  <td class="py-3 px-2 text-sm text-[#333]">22 Feb 2024</td>
                  <td class="py-3 px-2 text-sm text-[#333]">
                    <div
                      class="py-1 px-2 bg-[#b4ff8e] text-center text-[#0b6c00] rounded-full w-16"
                    >
                      paid
                    </div>
                  </td>
                  <td class="py-3 px-4 text-right text-sm text-[#333]">$559.6</td>
                  <td class="py-4 px-4 flex space-x-12 text-sm text-[#333]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#008cff] hover:text-[#0000ca] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                      ></path>
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#444] hover:text-[#0b6c00] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] hover:text-[#c20000] cursor-pointer delay-200 transition-all text-[18px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr
                  title="AquaPure Water Co."
                  class="border border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
                >
                  <td class="py-3 px-2 text-sm text-[#333]">003</td>
                  <td class="py-3 px-2 text-sm text-[#333] font-semibold">
                    AquaPure Water Co.
                  </td>
                  <td class="py-3 px-2 text-sm text-[#333]">22 Feb 2024</td>
                  <td class="py-3 px-2 text-sm text-[#333]">
                    <div
                      class="py-1 px-2 bg-[#b4ff8e] text-center text-[#0b6c00] rounded-full w-16"
                    >
                      paid
                    </div>
                  </td>
                  <td class="py-3 px-4 text-right text-sm text-[#333]">$785.6</td>
                  <td class="py-4 px-4 flex space-x-12 text-sm text-[#333]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#008cff] hover:text-[#0000ca] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                      ></path>
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#444] hover:text-[#0b6c00] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] hover:text-[#c20000] cursor-pointer delay-200 transition-all text-[18px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr
                  title="VirtuaVista Entertainment	"
                  class="border border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
                >
                  <td class="py-3 px-2 text-sm text-[#333]">004</td>
                  <td class="py-3 px-2 text-sm text-[#333] font-semibold">
                    VirtuaVista Entertainment
                  </td>
                  <td class="py-3 px-2 text-sm text-[#333]">22 Feb 2024</td>
                  <td class="py-3 px-2 text-sm text-[#333]">
                    <div
                      class="py-1 px-2 bg-[#ffa8a3] text-[#8f0700] rounded-full w-16 text-sm"
                    >
                      Unpaid
                    </div>
                  </td>
                  <td class="py-3 px-4 text-right text-sm text-[#333]">$54.6</td>
                  <td class="py-4 px-4 flex space-x-12 text-sm text-[#333]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#008cff] hover:text-[#0000ca] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                      ></path>
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#444] hover:text-[#0b6c00] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] hover:text-[#c20000] cursor-pointer delay-200 transition-all text-[18px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr
                  title="GreenTech Innovations"
                  class="border border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
                >
                  <td class="py-3 px-2 text-sm text-[#333]">005</td>
                  <td class="py-3 px-2 text-sm text-[#333] font-semibold">
                    GreenTech Innovations
                  </td>
                  <td class="py-3 px-2 text-sm text-[#333]">22 Feb 2024</td>
                  <td class="py-3 px-2 text-sm text-[#333]">
                    <div
                      class="py-1 px-2 bg-[#b4ff8e] text-center text-[#0b6c00] rounded-full w-16"
                    >
                      paid
                    </div>
                  </td>
                  <td class="py-3 px-4 text-right text-sm text-[#333]">$785.6</td>
                  <td class="py-4 px-4 flex space-x-12 text-sm text-[#333]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#008cff] hover:text-[#0000ca] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                      ></path>
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                      ></path>
                    </svg>
  
                    <svg
                      title="edit"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#444] hover:text-[#0b6c00] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] hover:text-[#c20000] cursor-pointer delay-200 transition-all text-[18px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr
                  title="Quantum Finance Corp"
                  class="border border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
                >
                  <td class="py-3 px-2 text-sm text-[#333]">006</td>
                  <td class="py-3 px-2 text-sm text-[#333] font-semibold">
                    Quantum Finance Corp
                  </td>
                  <td class="py-3 px-2 text-sm text-[#333]">22 Feb 2024</td>
                  <td class="py-3 px-2 text-sm text-[#333]">
                    <div
                      class="py-1 px-2 bg-[#b4ff8e] text-center text-[#0b6c00] rounded-full w-16"
                    >
                      paid
                    </div>
                  </td>
                  <td class="py-3 px-4 text-right text-sm text-[#333]">$945.6</td>
                  <td class="py-4 px-4 flex space-x-12 text-sm text-[#333]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#008cff] hover:text-[#0000ca] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                      ></path>
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#444] hover:text-[#0b6c00] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] hover:text-[#c20000] cursor-pointer delay-200 transition-all text-[18px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr
                  title="UrbanEats Culinary Group"
                  class="border border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
                >
                  <td class="py-3 px-2 text-sm text-[#333]">007</td>
                  <td class="py-3 px-2 text-sm text-[#333] font-semibold">
                    UrbanEats Culinary Group
                  </td>
                  <td class="py-3 px-2 text-sm text-[#333]">22 Feb 2024</td>
                  <td class="py-3 px-2 text-sm text-[#333]">
                    <div
                      class="py-1 px-2 bg-[#ffa8a3] text-[#8f0700] rounded-full w-16 text-sm"
                    >
                      Unpaid
                    </div>
                  </td>
                  <td class="py-3 px-4 text-right text-sm text-[#333]">$40.6</td>
                  <td class="py-4 px-4 flex space-x-12 text-sm text-[#333]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#008cff] hover:text-[#0000ca] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                      ></path>
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#444] hover:text-[#0b6c00] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] hover:text-[#c20000] cursor-pointer delay-200 transition-all text-[18px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr
                  title="NaturaLife Organics"
                  class="border border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
                >
                  <td class="py-3 px-2 text-sm text-[#333]">008</td>
                  <td class="py-3 px-2 text-sm text-[#333] font-semibold">
                    NaturaLife Organics
                  </td>
                  <td class="py-3 px-2 text-sm text-[#333]">22 Feb 2024</td>
                  <td class="py-3 px-2 text-sm text-[#333]">
                    <div
                      class="py-1 px-2 text-center bg-[#b4ff8e] text-[#0b6c00] rounded-full w-16"
                    >
                      paid
                    </div>
                  </td>
                  <td class="py-3 px-4 text-right text-sm text-[#333]">$715.6</td>
                  <td class="py-4 px-4 flex space-x-12 text-sm text-[#333]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#008cff] hover:text-[#0000ca] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                      ></path>
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#444] hover:text-[#0b6c00] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] hover:text-[#c20000] cursor-pointer delay-200 transition-all text-[18px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr
                  title="AeroSpace Dynamics"
                  class="border border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
                >
                  <td class="py-3 px-2 text-sm text-[#333]">009</td>
                  <td class="py-3 px-2 text-sm text-[#333] font-semibold">
                    AeroSpace Dynamics
                  </td>
                  <td class="py-3 px-2 text-sm text-[#333]">22 Feb 2024</td>
                  <td class="py-3 px-2 text-sm text-[#333]">
                    <div
                      class="py-1 px-2 text-center bg-[#b4ff8e] text-[#0b6c00] rounded-full w-16"
                    >
                      paid
                    </div>
                  </td>
                  <td class="py-3 px-4 text-right text-sm text-[#333]">$625.6</td>
                  <td class="py-4 px-4 flex space-x-12 text-sm text-[#333]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#008cff] hover:text-[#0000ca] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                      ></path>
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#444] hover:text-[#0b6c00] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] hover:text-[#c20000] cursor-pointer delay-200 transition-all text-[18px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr
                  title="EcoWave Energy"
                  class="border border-b-[#ebebeb] border-t-[#fff] border-r-[#fff] border-l-[#fff]"
                >
                  <td class="py-3 px-2 text-sm text-[#333]">010</td>
                  <td class="py-3 px-2 text-sm text-[#333] font-semibold">
                    EcoWave Energy
                  </td>
                  <td class="py-3 px-2 text-sm text-[#333]">22 Feb 2024</td>
                  <td class="py-3 px-2 text-sm text-[#333]">
                    <div
                      class="py-1 px-2 text-center bg-[#b4ff8e] text-[#0b6c00] rounded-full w-16"
                    >
                      paid
                    </div>
                  </td>
                  <td class="py-3 px-4 text-right text-sm text-[#333]">$555.6</td>
                  <td class="py-4 px-4 flex space-x-12 text-sm text-[#333]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#008cff] hover:text-[#0000ca] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                      ></path>
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-[#444] hover:text-[#0b6c00] cursor-pointer delay-200 transition-all text-[16px]"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                      ></path>
                    </svg>
  
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-[#444] hover:text-[#c20000] cursor-pointer delay-200 transition-all text-[18px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
                      ></path>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>`
    },
    {
      _id:1,
      title:"Tailwind table responsive",
      htmlcode:`<div class="py-20">
      <section class="container mx-auto">
        <div class="sm:w-full overflow-auto px-4">
          <table class="md:w-[80%] mdsm:w-full sm:w-full mx-auto">
            <thead class="bg-[#0349ff] text-left text-[#f2f2f2]">
              <tr>
                <th class="px-4 py-2">ID</th>
                <th class="px-4 py-2">Product</th>
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Shipping</th>
                <th class="text-center py-2">Status</th>
              </tr>
            </thead>
            <tbody class="border-[#e6e6e6] border-[1px]">
              <tr
                class="border-b-[1px] group border-[#e6e6e6] group text-left text-sm text-[#3b3b3b] py-2"
              >
                <td class="py-2 text-[#3b3b3b] font-semibold px-4">RTDWQ052</td>
                <td class="py-2 px-4">Apple Watch</td>
                <td class="py-2 px-4">Henry</td>
                <td class="py-2 px-4">Sydney</td>
                <td class="py-2 flex justify-center items-center">
                  <div class="rounded-3xl text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr class="group text-left text-sm text-[#3b3b3b] py-2">
                <td
                  class="odd:bg-[#ebf4fe] py-2 text-[#3b3b3b] font-semibold px-4"
                >
                  HDDBHS687
                </td>
                <td class="px-4 even:bg-[#ebf4fe] py-2">Apple Watch</td>
                <td class="px-4 odd:bg-[#ebf4fe] py-2">Alexander</td>
                <td class="px-4 even:bg-[#ebf4fe] py-2">Berlin</td>
                <td
                  class="px-4 odd:bg-[#ebf4fe] py-2 flex justify-center items-center"
                >
                  <div class="rounded-3xl text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr
                class="border-b-[1px] group border-[#e6e6e6] group text-left text-sm text-[#3b3b3b] py-2"
              >
                <td class="py-2 text-[#3b3b3b] font-semibold px-4">
                  OJDE121UB
                </td>
                <td class="py-2 px-4">Samsung Galaxy</td>
                <td class="px-4 py-2">Olivia</td>
                <td class="px-4 py-2">Paris</td>
                <td class="py-2 flex justify-center items-center">
                  <div class="rounded-3xl text-[#a51f1fd6] bg-[#f70a0a69] px-4">
                    Cancel
                  </div>
                </td>
              </tr>

              <tr class="group text-left text-sm text-[#3b3b3b] py-2">
                <td
                  class="odd:bg-[#ebf4fe] py-2 text-[#3b3b3b] font-semibold px-4"
                >
                  JKSL0945
                </td>
                <td class="px-4 even:bg-[#ebf4fe] py-2">Vacuum Cleaner</td>
                <td class="px-4 odd:bg-[#ebf4fe] py-2">Benjamin</td>
                <td class="px-4 even:bg-[#ebf4fe] py-2">New York</td>
                <td
                  class="odd:bg-[#ebf4fe] py-2 flex justify-center items-center"
                >
                  <div class="rounded-3xl text-[#9f9300] bg-[#e3d20863] px-4">
                    Pending
                  </div>
                </td>
              </tr>

              <tr
                class="border-b-[1px] group border-[#e6e6e6] group text-left text-sm text-[#3b3b3b] py-2"
              >
                <td class="py-2 text-[#3b3b3b] font-semibold px-4">JHDDC021</td>
                <td class="py-2 px-4">PlayStation</td>
                <td class="px-4 py-2">Emma</td>
                <td class="px-4 py-2">Barcelona</td>
                <td class="py-2 flex justify-center items-center">
                  <div class="rounded-3xl text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr class="group text-left text-sm text-[#3b3b3b] py-2">
                <td
                  class="odd:bg-[#ebf4fe] py-2 text-[#3b3b3b] font-semibold px-4"
                >
                  POIBVV021
                </td>
                <td class="px-4 even:bg-[#ebf4fe] py-2">Coffee Machine</td>
                <td class="px-4 odd:bg-[#ebf4fe] py-2">William</td>
                <td class="px-4 even:bg-[#ebf4fe] py-2">Rio</td>
                <td
                  class="odd:bg-[#ebf4fe] py-2 flex justify-center items-center"
                >
                  <div class="rounded-3xl text-[#a51f1fd6] bg-[#f70a0a69] px-4">
                    Cancel
                  </div>
                </td>
              </tr>

              <tr
                class="border-b-[1px] group border-[#e6e6e6] group text-left text-sm text-[#3b3b3b] py-2"
              >
                <td class="py-2 text-[#3b3b3b] font-semibold px-4">
                  ZSDFCV201
                </td>
                <td class="py-2 px-4">Nike Air Max</td>
                <td class="px-4 py-2">Sophia</td>
                <td class="px-4 py-2">Dubai</td>
                <td class="py-2 flex justify-center items-center">
                  <div class="rounded-3xl text-[#019f47] bg-[#33d57b52] px-4">
                    Done
                  </div>
                </td>
              </tr>

              <tr class="group text-left text-sm text-[#3b3b3b] py-2">
                <td
                  class="odd:bg-[#ebf4fe] py-2 text-[#3b3b3b] font-semibold px-4"
                >
                  MLYTRV01
                </td>
                <td class="px-4 even:bg-[#ebf4fe] py-2">GoPro Camera</td>
                <td class="px-4 odd:bg-[#ebf4fe] py-2">James</td>
                <td class="px-4 even:bg-[#ebf4fe] py-2">London</td>
                <td
                  class="odd:bg-[#ebf4fe] py-2 flex justify-center items-center"
                >
                  <div class="rounded-3xl text-[#9f9300] bg-[#e3d20863] px-4">
                    Pending
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>`
  }
  ,
    {
      _id:2,
      title:"Table design in HTML examples",
      htmlcode:`  <div class="py-20">
        <section class="container mx-auto">
          <div class="sm:w-full overflow-auto px-4">
            <table class=" sm:w-[200%] md:w-[150%] mdsm:w-[150%] lge:w-full lg:w-full mx-auto">
              <thead>
                <tr class="  text-[#333]  font-bold border-b border-[#ccc]">
                  <td class=" sm:w-[100px] px-4 py-4">Order ID</td>
                  <td>Customer Name</td>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Date</td>
                  <td>Location</td>
                  <td class=" px-4">Status</td>
                </tr>
              </thead>
              <tbody>
                <tr class="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td class="px-4 font-bold py-4">#05122</td>
                  <td class=" py-4">Noah</td>
                  <td class=" py-4">Wireless Earbuds</td>
                  <td class=" py-4 font-semibold text-[green]">$33</td>
                  <td class=" py-4">19-10-2024</td>
                  <td class=" py-4">Cape Town, South Africa </td>
                  <td class="py-4 flex text-[green]">
                    {" "}
                    <div class="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[green]"></div>
                    Delivered{" "}
                  </td>
                </tr>
                <tr class="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td class="px-4 font-bold py-4">#5410</td>
                  <td class=" py-4">Alexander </td>
                  <td class=" py-4">Smart Doorbell Camera</td>
                  <td class=" py-4 font-semibold text-[green]">$53</td>
                  <td class=" py-4">19-10-2024</td>
                  <td class=" py-4">Cape Town, South Africa </td>
                  <td class="py-4 flex text-[green]">
                    {" "}
                    <div class="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[green]"></div>
                    Delivered{" "}
                  </td>
                </tr>
                <tr class="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td class="px-4 font-bold py-4">#95120</td>
                  <td class=" py-4">Fatima </td>
                  <td class=" py-4">Compact Air Fryer</td>
                  <td class=" py-4 font-semibold text-[green]">$64</td>
                  <td class=" py-4">19-10-2024</td>
                  <td class=" py-4">Sydney, Australia</td>
                  <td class="py-4 flex text-[#f5a524]">
                    {" "}
                    <div class="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[#f5a524]"></div>
                    On-Delivered{" "}
                  </td>
                </tr>
                <tr class="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td class="px-4 font-bold py-4">#85410</td>
                  <td class=" py-4">Sakura </td>
                  <td class=" py-4">Smart Water Bottle</td>
                  <td class=" py-4 font-semibold text-[green]">$10</td>
                  <td class=" py-4">19-10-2024</td>
                  <td class=" py-4">Rio de Janeiro, Brazil</td>
                  <td class="py-4 flex text-[#cf021a]">
                    {" "}
                    <div class="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[#cf021a]"></div>
                    Canceled{" "}
                  </td>
                </tr>
                <tr class="group cursor-pointer hover:bg-[#ecf1f4] text-[14px]  text-[#333]  border-b border-[#ccc]">
                  <td class="px-4 font-bold py-4">#06412</td>
                  <td class=" py-4">Zara  </td>
                  <td class=" py-4">Power Bank</td>
                  <td class=" py-4 font-semibold text-[green]">$23</td>
                  <td class=" py-4">19-10-2024</td>
                  <td class=" py-4">Sydney, Australia</td>
                  <td class="py-4 flex text-[#f5a524]">
                    {" "}
                    <div class="mt-2 h-[5px] mx-2 w-[5px]  rounded-full bg-[#f5a524]"></div>
                    On-Delivered{" "}
                  </td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
        </section>
      </div>`
  }
]


export default tableData;