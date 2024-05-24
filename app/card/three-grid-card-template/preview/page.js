import React from "react";
import "../../../font.css"

export default function page() {
  return (
    <section>
      <div className={``}>
        <div className={` grid grid-cols-3`}>
          <div className={` bg-[#f71418] flex justify-center items-center`}>
            <h1 className={` text-5xl font-semibold  text-center text-white`}>
              Our<br/> Campus
            </h1>
          </div>
          <div className={` h-[400px]`}>
            <img
              src={` https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="library"
              className={` object-cover h-[400px]`}
            />
          </div>
          <div className={` h-[400px]`}>
            <img
              src={` https://images.pexels.com/photos/186239/pexels-photo-186239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="playground"
              className={` object-cover h-[400px]`}
            />
          </div>
          <div className={` h-[400px]`}>
            <img
              src={`https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="college"
              className={` object-cover h-[400px]`}
            />
          </div>
          <div className={` h-[400px]`}>
            <img
              src={` https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="canteen"
              className={` object-cover h-[400px]`}
            />
          </div>
          <div className={` h-[400px]`}>
            <img
              src={`https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="classroom"
              className={` object-cover h-[400px]`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
