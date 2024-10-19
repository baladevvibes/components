const testimonialsData = [
    {
      _id: 0,
      name: "Testimonials Design Example",
      title:"Testimonials Design Example",
      htmlcode: `<section class="container mx-auto py-[100px] px-4">
      <div class=" grid lg:grid-cols-4  lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-10">
        <div class="bg-[#f2f2f2]  relative p-4 border-[#fff]  border">
          <div class=" grid grid-cols-2">
            <div class=" pt-6">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class=" text-5xl  text-[#294f7f]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
            </div>
          </div>
          <div class=" italic   text-[18px] pt-6  text-[#07172a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </div>
          <div class=" pt-10 flex pb-4 space-x-2">
            <img
              src="https://makecomponents.com/Image/overall/person/person3.webp"
              alt="person"
              class="h-[50px] object-cover w-[50px] rounded-full bg-[#294f7f]"
            />
            <div></div>
            <div>
              <h3 class="font-semibold   pt-2 text-[#222] text-left  text-[16px]">
                Williams
              </h3>
              <h3 class="font-normal   text-[#07172a]  text-[12px] text-left">
                Founder
              </h3>
            </div>
          </div>
        </div>

        <div class="bg-[#f2f2f2]  relative p-4 border-[#fff]  border">
          <div class=" grid grid-cols-2">
            <div class=" pt-6">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class=" text-5xl  text-[#940027]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
            </div>
          </div>
          <div class=" italic   text-[18px] pt-6  text-[#07172a]">
            Ac accumsan per mollis cubilia consequat proin pharetra aptent.
            Amet elit donec erat ligula blandit dapibus metus. Per congue
            torquent ac tincidunt proin platea inceptos maximus.
          </div>
          <div class=" pt-10 flex pb-4 space-x-2">
            <img
              src="https://makecomponents.com/Image/teams/Team001/person2.webp"
              alt="person"
              class="h-[50px] object-cover w-[50px] rounded-full bg-[#294f7f]"
            />
            <div></div>
            <div>
              <h3 class="font-semibold   pt-2 text-[#222] text-left  text-[16px]">
                Michael Harrison
              </h3>
              <h3 class="font-normal   text-[#07172a]  text-[12px] text-left">
                Associate CEO
              </h3>
            </div>
          </div>
        </div>

        <div class="bg-[#f2f2f2]  relative p-4 border-[#fff]  border">
          <div class=" grid grid-cols-2">
            <div class=" pt-6">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class=" text-5xl  text-[#294f7f]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
            </div>
          </div>
          <div class=" italic    text-[18px] pt-6  text-[#07172a]">
            Ac accumsan per mollis cubilia consequat proin pharetra aptent.
            Amet elit donec erat ligula blandit dapibus metus. Per congue
            torquent ac tincidunt proin platea inceptos maximus.
          </div>
          <div class=" pt-10 flex pb-4 space-x-2">
            <img
              src="https://makecomponents.com/Image/teams/Team001/person3.webp"
              alt="person"
              class="h-[50px] object-cover w-[50px] rounded-full bg-[#294f7f]"
            />
            <div></div>
            <div>
              <h3 class="font-semibold   pt-2 text-[#222] text-left  text-[16px]">
                Emily Parker
              </h3>
              <h3 class="font-normal   text-[#07172a]  text-[12px] text-left">
                Team
              </h3>
            </div>
          </div>
        </div>

        <div class=" relative h-full w-full flex justify-center items-center ">
          <img
            src="https://makecomponents.com/Image/overall/person/person4.png"
            alt="person"
            class="h-[300px] mx-auto"
          />
       
        </div>
      </div>
    </section>`,
    },

    {
      _id: 1,
      name: "testimonials tailwind component html",
      htmlcode: ` <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title></title>
  <style>
/* Concert */
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap");

.work {
  font-family: "Work Sans", sans-serif;
}
  </style>
</head>
<body>

     <div class="  container mx-auto py-4">
        <div class=" grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1">
          <div class=" bg-[#3066BE]">
            <div class=" grid grid-cols-2 sm:grid-cols-1">
              <div class=" p-6 pt-20">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" text-4xl text-[#FBFF12]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
                <p class=" text-[#f2f2f2] pt-4 work leading-8 font-semibold text-[24px] w-[130%] sm:w-full">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
                <h3 class="pt-4 text-[18px] work text-[#f2f2f2]">
                  - Sean Roldan
                </h3>
              </div>
              <div class=" w-full relative flex justify-end">
                <img
                  src="https://makecomponents.com/Image/overall/person/person14.webp"
                  class=" h-[400px] sm:hidden absolute bottom-0"
                  alt="Person"
                />
              </div>
            </div>
          </div>
          <div class=" bg-[#9368B7]">
            <div class=" grid grid-cols-2 sm:grid-cols-1">
              <div class=" p-6 pt-20">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" text-4xl text-[#FBFF12]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
                <p class=" text-[#f2f2f2] pt-4 work leading-8 font-semibold text-[24px] w-[130%] sm:w-full">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
                <h3 class="pt-4 text-[18px] work text-[#f2f2f2]">
                  - Emma Watson
                </h3>
              </div>
              <div class=" w-full flex justify-end relative">
                <img
                  src="https://makecomponents.com/Image/overall/person/person13.webp"
                  class=" h-[400px] sm:hidden absolute bottom-0"
                  alt="Person"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

   
         </body>
</html>`,
    },
  
  ];
  
  export default testimonialsData;
  