const testimonialsData = [
    {
      _id: 0,
      name: "Testimonials Design Example",
      title:"Testimonials Design Example",
      htmlcode: `<section class="container mx-auto py-[100px]">
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
  
  ];
  
  export default testimonialsData;
  