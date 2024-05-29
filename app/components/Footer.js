import React from "react";

export default function Footer() {
  return (
    <div
      className={`mt-6 sm:px-4 bg-secondary border border-[#ccc] border-l-0 border-r-0 border-b-0  py-4 `}
    >
      <div className={`  container mx-auto`}>
        <div className={` grid grid-cols-2`}>
          <div>
            <h1
              className={`title-font text-white font-semibold text-2xl px-2  `}
            >
              Make Components
            </h1>
            <div className={` text-white px-2 pt-2 hover:text-primary cursor-pointer`}>Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}
