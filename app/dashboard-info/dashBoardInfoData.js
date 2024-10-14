const dashBoardInfoData = [
  {
    _id: 0,
    name: "Dashbaord Percentage Info Component",
    title: "Dashbaord Percentage Info Component",
    htmlcode: `<div class=" container pt-20 mx-auto px-4">
      <div class=" grid lg:grid-cols-4 lge:grid-cols-3 md:grid-cols-3 mdsm:grid-cols-2 sm:grid-cols-1 gap-6">
        <div class="border border-[#e2e2e2] rounded-lg p-4 grid grid-cols-3 gap-4">
          <div class=" bg-[#9d30a6] flex justify-center p-4 rounded-lg  ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class=" text-[#0000004a] text-3xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z"></path>
            </svg>
          </div>
          <div class=" col-span-2 ">
            <div class=" pt-2 text-[18px]  varela-font font-semibold text-[#151515]">
              1,00,320
            </div>
            <div class=" text-[16px] raleway-font  text-[#383838]">
              Total Sales
            </div>
          </div>
        </div>

        <div class="border border-[#e2e2e2] rounded-lg p-4 grid grid-cols-3 gap-4">
          <div class=" bg-[#F0A000] flex justify-center p-4 rounded-lg  ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="  text-[#0000004a] text-3xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M746 835.28L544.529 723.678c74.88-58.912 95.216-174.688 95.216-239.601v-135.12c0-89.472-118.88-189.12-238.288-189.12-119.376 0-241.408 99.664-241.408 189.12v135.12c0 59.024 24.975 178.433 100.624 239.089L54 835.278S0 859.342 0 889.342v81.088c0 29.84 24.223 54.064 54 54.064h692c29.807 0 54.031-24.224 54.031-54.064v-81.087c0-31.808-54.032-54.064-54.032-54.064zm-9.967 125.215H64.002V903.28c4.592-3.343 11.008-7.216 16.064-9.536 1.503-.688 3.007-1.408 4.431-2.224l206.688-112.096c18.848-10.224 31.344-29.184 33.248-50.528s-7.008-42.256-23.712-55.664c-53.664-43.024-76.656-138.32-76.656-189.152V348.96c0-45.968 86.656-125.12 177.408-125.12 92.432 0 174.288 78.065 174.288 125.12v135.12c0 50.128-15.568 145.84-70.784 189.28a64.098 64.098 0 0 0-24.224 55.664 64.104 64.104 0 0 0 33.12 50.849l201.472 111.6c1.777.975 4.033 2.031 5.905 2.848 4.72 2 10.527 5.343 14.783 8.288v57.887zM969.97 675.936L765.505 564.335c74.88-58.912 98.224-174.688 98.224-239.601v-135.12c0-89.472-121.872-190.128-241.28-190.128-77.6 0-156.943 42.192-203.12 96.225 26.337 1.631 55.377 1.664 80.465 9.664 33.711-26.256 76.368-41.872 122.656-41.872 92.431 0 177.278 79.055 177.278 126.128v135.12c0 50.127-18.56 145.84-73.775 189.28a64.098 64.098 0 0 0-24.224 55.664 64.104 64.104 0 0 0 33.12 50.848l204.465 111.6c1.776.976 4.032 2.032 5.904 2.848 4.72 2 10.527 5.344 14.783 8.288v56.912H830.817c19.504 14.72 25.408 35.776 32.977 64h106.192c29.807 0 54.03-24.224 54.03-54.064V730.03c-.015-31.84-54.047-54.096-54.047-54.096z"></path>
            </svg>
          </div>
          <div class=" col-span-2 ">
            <div class=" pt-2 text-[18px]  varela-font font-semibold text-[#151515]">
              15K
            </div>
            <div class=" text-[16px] raleway-font  text-[#383838]">
              Visitors
            </div>
          </div>
        </div>

        <div class="border border-[#e2e2e2] rounded-lg p-4 grid grid-cols-3 gap-4">
          <div class=" bg-[#006c79] flex justify-center p-4 rounded-lg  ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class=" text-[#0000004a] text-3xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></path>
            </svg>
          </div>
          <div class=" col-span-2 ">
            <div class=" pt-2 text-[18px]  varela-font font-semibold text-[#151515]">
              13,500
            </div>
            <div class=" text-[16px] raleway-font  text-[#383838]">
              Total Orders
            </div>
          </div>
        </div>

        <div class="border border-[#e2e2e2] rounded-lg p-4 grid grid-cols-3 gap-4">
          <div class=" bg-[#895629] flex justify-center p-4 rounded-lg  ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class=" text-[#0000004a] text-3xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
            </svg>
          </div>
          <div class=" col-span-2 ">
            <div class=" pt-2 text-[18px]  varela-font font-semibold text-[#151515]">
              59
            </div>
            <div class=" text-[16px] raleway-font  text-[#383838]">
              Total Reviews
            </div>
          </div>
        </div>
      </div>
    </div>`,
  },
  {
    _id: 1,
    title: "Dashbaord Infroamtion",
    htmlcode: `
            <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title></title>
  <style>
/* Concert */
@import url("https://fonts.googleapis.com/css2?family=Concert+One&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");

 .concert {
  font-family: "Concert One", sans-serif;
}
.plus-jakarta-sans-font {
  font-family: "Plus Jakarta Sans", sans-serif !important;
}
  </style>
</head>
<body>

       <div class="  px-4">
        <div class=" grid lg:grid-cols-4  lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-6">
          <div class=" bg-[#011936] p-6 shadow-2xl rounded-lg">
            <div class=" flex ">
              <div class=" w-1/2">
              <div class=" text-4xl concert text-[#f2f2f2]">500</div>
              <p class=" text-[#f2f2f2] plus-jakarta-sans-font">Total Orders</p>
              </div>
              <div class="w-1/2 flex justify-end ">
              <div class=" h-[60px] flex justify-center items-center w-[60px] rounded-full bg-[#F9DC5C]">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class=" text-[40px] text-[#011936]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"></path></svg>
              </div>
              </div>
            </div>
          </div>

          <div class=" bg-[#011936] p-6 shadow-2xl rounded-lg">
            <div class=" flex ">
              <div class=" w-1/2">
              <div class=" text-4xl concert text-[#f2f2f2]">985</div>
              <p class=" text-[#f2f2f2] plus-jakarta-sans-font"> Sales</p>
              </div>
              <div class="w-1/2 flex justify-end ">
              <div class=" h-[60px] flex justify-center items-center w-[60px] rounded-full bg-[#F9DC5C]">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class=" text-[40px] text-[#011936]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"></path></svg>
              </div>
              </div>
            </div>
          </div>

          <div class=" bg-[#011936] p-6 shadow-2xl rounded-lg">
            <div class=" flex ">
              <div class=" w-1/2">
              <div class=" text-4xl concert text-[#f2f2f2]">52</div>
              <p class=" text-[#f2f2f2] plus-jakarta-sans-font"> Product</p>
              </div>
              <div class="w-1/2 flex justify-end ">
              <div class=" h-[60px] flex justify-center items-center w-[60px] rounded-full bg-[#F9DC5C]">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" class=" text-[40px] text-[#011936]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M160 144h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V160c0-8.837 7.163-16 16-16m564.314-25.333 181.019 181.02c6.248 6.248 6.248 16.378 0 22.627l-181.02 181.019c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.378 0-22.627l181.02-181.019c6.248-6.248 16.378-6.248 22.627 0M160 544h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.837 7.163-16 16-16m400 0h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.837 7.163-16 16-16"></path></svg>
              </div>
              </div>
            </div>
          </div>


          <div class=" bg-[#011936] p-6 shadow-2xl rounded-lg">
            <div class=" flex ">
              <div class=" w-1/2">
              <div class=" text-4xl concert text-[#f2f2f2]">52K</div>
              <p class=" text-[#f2f2f2] plus-jakarta-sans-font"> Visitors</p>
              </div>
              <div class="w-1/2 flex justify-end ">
              <div class=" h-[60px] flex justify-center items-center w-[60px] rounded-full bg-[#F9DC5C]">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class=" text-[40px] text-[#011936]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="evenodd" d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"></path><circle cx="9" cy="8" r="4" fill-rule="evenodd"></circle><path fill-rule="evenodd" d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></svg>
              </div>
              </div>
            </div>
          </div>

        </div>
      </div>

     
   </body>
</html>
  `,
  },
];

export default dashBoardInfoData;
