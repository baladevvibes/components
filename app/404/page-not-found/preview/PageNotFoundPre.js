import React from "react";
import "../../../style.css";
export default function PageNotFoundPre() {
  return (
    <div className=" bg-[#f2f2f2]">
      <div className="py-24  container mx-auto px-4">
        <section>
          <h2 className="milonga-font text-center text-[150px]">404</h2>
          <p className="text-[30px] font-semibold  text-center">
            HERE THER IS <span className=" bg-[#ccc]">NOTHING..</span>
          </p>
          <p className="text-[30px] font-semibold  text-center">
            PAGE NOT FOUND..
          </p>
          <div className=" flex justify-center">
            <button className=" text-[20px] mt-3 border-4 hover:bg-[#ccc]  py-2  px-10 font-bold  text-center">
              GET BACK TO HOME
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
