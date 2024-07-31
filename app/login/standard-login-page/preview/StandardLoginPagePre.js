import React from "react";
import { TbMailMinus } from "react-icons/tb";
import { PiPasswordThin } from "react-icons/pi";

export default function StandardLoginPagePre() {
  return (
    <div className="">
      <div className=" mx-auto ">
        <div
          className={` grid lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-2 mdsm:grid-cols-1 sm:grid-cols-1`}
        >
          <div className={`lg:block lge:block md:block mdsm:hidden sm:hidden`}>
            <img
              src="../../Image/login/001/login001.webp"
              className=" h-[100vh] object-cover"
              alt="standard login page"
            />
          </div>
          <div
            className={`border lg:h-[100vh] lge:h-[100vh] md:h-[100vh] mdsm:h-[140vh] sm:h-[100vh]  border-[#f2f2f2] flex justify-center items-center slg:p-10 lge:p-10 md:p-4 mdsm:p-4 sm:p-0 lg:px-16  lge:px-16 md:px-6 mdsm:px-6 sm:px-4`}
          >
            <form className="w-[96%] block">
              <h1 className="text-4xl varela-round-font font-semibold text-[#15467f] pb-6">
                Login in
              </h1>

              <div className=" text-[#222] varela-round-font pb-4">Email</div>

              <div className="group relative mb-4">
                <input
                  type="text"
                  placeholder="Email"
                  className="varela-round-font text-[#222] focus:border-[#4b91e2] placeholder:text-[#ccc] w-full rounded-lg py-2 px-4 border border-[#ccc] outline-none"
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

              <div className="text-[#222] varela-round-font  pb-4">
                Password
              </div>

              <div className="relative mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="varela-round-font text-[#222] focus:border-[#4b91e2] placeholder:text-[#ccc] w-full rounded-lg py-2 px-4 border border-[#ccc] outline-none"
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
              <div className=" varela-round-font hover:text-[#123c6d]  cursor-pointer  text-sm text-[#15467f] text-right">
                Forgot Password?
              </div>

              <button className="mt-4 varela-round-font w-full py-3 hover:bg-[#123c6d] bg-[#15467f] rounded-lg text-[#fff]">
                Submit
              </button>

              <div className="varela-round-font text-[#222] pt-16  text-sm  text-left">
                Don't have an account?{" "}
                <span className="text-[#15467f] varela-round-font cursor-pointer font-semibold hover:text-[#123c6d] ">
                  Register
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );

}
