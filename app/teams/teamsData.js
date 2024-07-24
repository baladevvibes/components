const teamsData = [
  {
    _id: 0,
    name: "team-circle-hover-card",
    title: "Team Circle Hover Card",
    des: "This component create using CSS framework tailwindcss. It fully responsive component.",
    section: "Teams",
    slug: "team-circle-hover-card-preview",
    htmlcode: `<div class="container mx-auto py-48">
        <div class="grid lge:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 lg:gap-6 lge:gap-6 md:gap-16 mdsm:gap-16 sm:gap-16 lg:px-2 lge:px-2 md:px-2 mdsm:px-2 sm:px-2">
  
          <div class="group relative">
            <div class="-top-12 left-[34%] absolute">
              <img 
             src={"https://makecomponents.com/Image/teams/Team001/person1.webp"}
              alt=" David Nguyen" class="rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] [100px]"/>
            </div>
            <div class="group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4">
              <h2 class=" group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold">
                David Nguyen
              </h2>
              <p class="group-hover:text-white transition delay-200 pb-10 text-[#001f2e] pt-4 leading-6 text-center text-base">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual
                mockups
              </p>
            </div>
          </div>
  
          <div class="group relative">
            <div class="-top-12 left-[34%] absolute">
              <img 
           src={"https://makecomponents.com/Image/teams/Team001/person2.webp"}
            class="rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]"
             alt="Michael Thompson" />
            </div>
            <div class="group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4">
              <h2 class=" group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold">
                Michael Thompson
              </h2>
              <p class="group-hover:text-white transition delay-200 pb-10 text-[#001f2e] pt-4 leading-6 text-center text-base">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual
                mockups
              </p>
            </div>
          </div>
  
          <div class="group relative">
            <div class="-top-12 left-[34%] absolute">
              <img   src={"https://makecomponents.com/Image/teams/Team001/person1.webp"} class="rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]" alt="Emily Parker"/>
            </div>
            <div class="group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4">
              <h2 class=" group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold">
                Emily Parker
              </h2>
              <p class="group-hover:text-white transition delay-200 pb-10 text-[#001f2e] pt-4 leading-6 text-center text-base">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual
                mockups
              </p>
            </div>
          </div>
  
          <div class="group relative">
            <div class="-top-12 left-[34%] absolute">
              <img   src={"https://makecomponents.com/Image/teams/Team001/person1.webp"}
              alt=" James Anderson" class="rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]"/>
            </div>
            <div class="group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4">
              <h2 class=" group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold">
                James Anderson
              </h2>
              <p class="group-hover:text-white transition delay-200 pb-10 text-[#001f2e] pt-4 leading-6 text-center text-base">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual
                mockups
              </p>
            </div>
          </div>
  
        </div>
      </div>`,
  },
  {
    _id: 1,
    name: "team-hover-layer-card-section",
    title: "Team hover layer card section",
    des: "This component create using CSS framework tailwindcss. It fully responsive component.",
    section: "Teams",
    slug: "team-circle-hover-card-preview",
    htmlcode: `   <section>
      <div class="container mx-auto py-16">
        <h1 class="text-[#101820] text-center w-full text-6xl pt-4 font-bold">
          Mentors
        </h1>
        <div
          class="grid lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-4 py-6"
        >
          <div class="p-2">
            <div
              class="h-[400px] group cursor-pointer relative overflow-hidden w-full"
            >
              <img
                      src="https://makecomponents.com/Image/teams/Team002/person1.webp"
                  alt="person1"
                class="lg:h-[400px] lge:h-[400px] md:h-[500px] mdsm:h-[500px] sm:h-[600px] w-full object-cover"
              />

              <div class="absolute h-full top-0 w-full">
                <div
                  class="tranasition duration-300 group-hover:bg-gradient-to-t from-[#293f54] h-full"
                ></div>

                <div
                  class="px-4 w-full b-white absolute group-hover:visible invisible bottom-8"
                >
                  <div
                    class="bg-[#101820] py-2 text-center text-white tracking-wider"
                  >
                    <span class="text-2xl leading-10">
                      Johnathan Reynolds
                    </span>
                    <br />
                    CEO
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-2">
            <div
              class="h-[400px] group cursor-pointer relative overflow-hidden w-full"
            >
              <img
                src="https://makecomponents.com/Image/teams/Team002/person2.webp"
                  alt="person2"
                class="lg:h-[400px] lge:h-[400px] md:h-[500px] mdsm:h-[500px] sm:h-[600px] w-full object-cover"
              />

              <div class="absolute h-full top-0 w-full">
                <div
                  class="tranasition duration-300 group-hover:bg-gradient-to-t from-[#293f54] h-full"
                ></div>

                <div
                  class="px-4 w-full b-white absolute group-hover:visible invisible bottom-8"
                >
                  <div
                    class="bg-[#101820] py-2 text-center text-white tracking-wider"
                  >
                    <span class="text-2xl leading-10"> Michael Harrison </span>
                    <br />
                    Associate CEO
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-2">
            <div
              class="h-[400px] group cursor-pointer relative overflow-hidden w-full"
            >
              <img
                  src="https://makecomponents.com/Image/teams/Team002/person3.webp"
                  alt="person3"
                class="lg:h-[400px] lge:h-[400px] md:h-[500px] mdsm:h-[500px] sm:h-[600px] w-full object-cover"
              />

              <div class="absolute h-full top-0 w-full">
                <div
                  class="tranasition duration-300 group-hover:bg-gradient-to-t from-[#293f54] h-full"
                ></div>
                <div
                  class="px-4 w-full b-white absolute group-hover:visible invisible bottom-8"
                >
                  <div
                    class="bg-[#101820] py-2 text-center text-white tracking-wider"
                  >
                    <span class="text-2xl leading-10"> Jennifer Collins </span>
                    <br />
                    HR
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-2">
            <div
              class="h-[400px] group cursor-pointer relative overflow-hidden w-full"
            >
              <img
                src="https://makecomponents.com/Image/teams/Team002/person4.webp"
                  alt="person4"
                class="lg:h-[400px] lge:h-[400px] md:h-[500px] mdsm:h-[500px] sm:h-[600px] w-full object-cover"
              />

              <div class="absolute h-full top-0 w-full">
                <div
                  class="tranasition duration-300 group-hover:bg-gradient-to-t from-[#293f54] h-full"
                ></div>
                <div
                  class="px-4 w-full b-white absolute group-hover:visible invisible bottom-8"
                >
                  <div
                    class="bg-[#101820] py-2 text-center text-white tracking-wider"
                  >
                    <span class="text-2xl leading-10"> David Montgomery</span>
                    <br />
                    Team Leader
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`,
  },
];

export default teamsData;
