const loginInData=[
    {
        _id:0,
        name:"Standard Login Page",
        title:"Standard Login Page",
        htmlcode:`<div>
      <div
        class=" grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1"
      >
        <div class="lg:block lge:block md:block mdsm:hidden sm:hidden">
          <img
            src="https://makecomponents.com/Image/login/001/login001.webp"
            class=" h-[100vh] object-cover"
          />
        </div>
        <div
          class="border lg:h-[100vh] lge:h-[100vh] md:h-[100vh] mdsm:h-[140vh] sm:h-[100vh]  border-[#f2f2f2] flex justify-center items-center slg:p-10 lge:p-10 md:p-4 mdsm:p-4 sm:p-0 lg:px-16  lge:px-16 md:px-6 mdsm:px-6 sm:px-4"
        >
          <form class="w-[96%] block">
            <h1 class="text-4xl varela-round-font font-semibold text-[#15467f] pb-6">
              Login in
            </h1>

            <div class=" text-[#222] varela-round-font pb-4">Email</div>

            <div class="group relative mb-4">
              <input
                type="text"
                placeholder="Email"
                class="varela-round-font text-[#222] focus:border-[#4b91e2] placeholder:text-[#ccc] w-full rounded-lg py-2 px-4 border border-[#ccc] outline-none"
                required
              />
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class=" focus:text-[#4b91e2] text-[20px] absolute  top-3 right-3 text-[#ccc]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8"></path>
                <path d="M16 19h6"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </div>

            <div class="text-[#222] varela-round-font  pb-4">
              Password
            </div>

            <div class="relative mb-4">
              <input
                type="password"
                placeholder="Password"
                class="varela-round-font text-[#222] focus:border-[#4b91e2] placeholder:text-[#ccc] w-full rounded-lg py-2 px-4 border border-[#ccc] outline-none"
              />
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 256 256"
                class=" focus:text-[#4b91e2] text-[20px] absolute  top-3 right-3 text-[#ccc]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M44,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0Zm97.2,58.31L116,122.49V96a4,4,0,0,0-8,0v26.49l-25.2-8.18a4,4,0,0,0-2.47,7.61l25.2,8.18L90,151.54a4,4,0,1,0,6.47,4.7L112,134.81l15.57,21.43a4,4,0,0,0,3.24,1.65,4,4,0,0,0,3.23-6.35L118.47,130.1l25.2-8.18a4,4,0,0,0-2.47-7.61Zm101,2.57a4,4,0,0,0-5-2.57L212,122.49V96a4,4,0,0,0-8,0v26.49l-25.2-8.18a4,4,0,0,0-2.47,7.61l25.2,8.18L186,151.54a4,4,0,1,0,6.47,4.7L208,134.81l15.57,21.43a4,4,0,0,0,3.24,1.65,4,4,0,0,0,3.23-6.35L214.47,130.1l25.2-8.18A4,4,0,0,0,242.24,116.88Z"></path>
              </svg>
            </div>
            <div class=" varela-round-font hover:text-[#123c6d]  cursor-pointer  text-sm text-[#15467f] text-right">
              Forgot Password?
            </div>

            <button class="mt-4 varela-round-font w-full py-3 hover:bg-[#123c6d] bg-[#15467f] rounded-lg text-[#fff]">
              Submit
            </button>

            <div class="varela-round-font text-[#222] pt-16  text-sm  text-left">
              Don't have an account?{" "}
              <span class="text-[#15467f] varela-round-font cursor-pointer font-semibold hover:text-[#123c6d] ">
                Register
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>`
    },
    {
      _id:1,
      name:"Sample Login Page",
      title:"Sample Login Page",
      htmlcode:`  <div class=" bg-[#1589ee]">
      <div class=" container mx-auto">
        <div>
          <div class="p-16 lg:h-[100vh] lge:h-[100vh] md:h-[100vh] mdsm:h-[140vh] sm:h-[100vh] sm:p-4 background  ">
            <div class=" grid  grid-cols-1 sm:flex sm:justify-center sm:items-center sm:h-full">
              <div></div>
              <div class="p-8 sm:p-2 ">
                <div class=" lg:w-[34%] lge:w-[40%] md:w-[60%] mx-auto bg-white rounded-lg">
                  <img
                    src="https://makecomponents.com/Image/login/002/login.webp"
                    class="w-full h-[40vh] object-cover"
                  />
                  <div class="px-4 pb-4 pt-4">
                    <div class="pb-2 ">
                      <div class="  text-[#1589ee]  tracking-wide text-dashboard text-[20px] font-semibold">
                        Login in
                      </div>
                    </div>
  
                    <div class="relative group">
                      <div class="absolute top-1 left-1">
                        <div class="h-[30px] file: w-[30px] bg-[#b3d6f4] rounded-[4px] flex justify-center items-center">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#1589ee] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                        </div>
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="User Email ID"
                        class=" outline-none focus:border-[#878787]  border placeholder:text-[#9a9a9a]  duration-300 border-[#ccc] text-sm rounded-[4px] p-3 pl-10 py-2 text-[#9195a1]  w-[100%]"
                        required
                      />
                    </div>
  
                    <div class="relative mt-3 mb-3 group">
                      <div class="absolute top-1 left-1">
                        <div class="h-[30px] file: w-[30px] bg-[#b3d6f4] rounded-[4px] flex justify-center items-center">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#1589ee]  " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM5 10V20H19V10H5ZM11 14H13V16H11V14ZM7 14H9V16H7V14ZM15 14H17V16H15V14ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z"></path></svg>
                        </div>
                      </div>
                      <input
                        placeholder="Password"
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        class=" outline-none focus:border-[#878787]  border placeholder:text-[#9a9a9a]  duration-300 border-[#ccc] text-sm rounded-[4px] p-3 pl-10 py-2 text-[#9195a1]  w-[100%]"
                        required
                      />
                    </div>
  
                    <div class="flex justify-center mb-0 ">
                      <button
                        type="submit"
                        class="py-1  bg-[#1589ee] hover:bg-[#005dbb] text-[18px] duration-300 tracking-wider hover:bg-dashboard-hover w-full bg-dashboard text-white rounded-[4px]"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>`
  },
]

export default loginInData;