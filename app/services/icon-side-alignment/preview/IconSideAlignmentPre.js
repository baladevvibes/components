import React from "react";
import { MdOutlineComputer } from "react-icons/md";
import "../../../style.css";
export default function IconSideAlignmentPre() {
  return (
    <div className=" my-40">
      <section>
        <div className=" container mx-auto">
          <div className=" grid  grid-cols-4 gap-6">
            <div className=" group border border-[#e9e9e9] rounded-lg  py-6 px-6">
              <div className="mt-2 h-[50px] relative ml-4 flex justify-center  items-center  w-[50px] bg-[#7c74049c] rounded-full">
                <MdOutlineComputer className=" absolute text-[#7c7404] right-4 text-[40px]" />
              </div>
              <h2
                className={`pt-4 group-hover:text-[#f8781b] font-semibold  title text-[#939393] text-3xl`}
              >
                Front end
              </h2>
              <p className={`pt-2    text-[#434343] `}>
                The company's frontend services focus on creating visually
                appealing, intuitive, and responsive user interfaces. By
                employing the latest design trends and technologies.
              </p>
            </div>

            <div className=" group border border-[#e9e9e9] rounded-lg  py-6 px-6">
              <div className="mt-2 h-[50px] relative ml-4 flex justify-center  items-center  w-[50px] bg-[#6153cb5e] rounded-full">
                <MdOutlineComputer className=" absolute text-[#6153cb] right-4 text-[40px]" />
              </div>
              <h2
                className={`pt-4 group-hover:text-[#6153cb] font-semibold  dm-serif-display-regular text-[#5a5a5a] text-3xl`}
              >
                Front end
              </h2>
              <p className={`pt-2  roboto  text-[#616161] `}>
                The company's frontend services focus on creating visually
                appealing, intuitive, and responsive user interfaces. By
                employing the latest design trends and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
