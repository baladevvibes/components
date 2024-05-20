const heroData = [
    {
        _id:0,
        name:"hero-with-searchbar",
        title:"Hero Banner With Searching Options",
        des:"This component create using CSS framework tailwindcss. It fully responsive component. Added Seacrh bar.",
        section:"Hero",
        slug:"hero-with-searchbar-preview",
        htmlcode:`<div class='bg-no-repeat relative w-full bg-[url("https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] h-[100vh] bg-cover bg-center'>
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
      </div>`
    }
]


export default heroData;