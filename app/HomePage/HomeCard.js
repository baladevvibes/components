"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import axios from "axios";

export default function HomeCard({ title, img, tag, link, date }) {
  const handleClick = (tag) => {
    console.log(tag);
    const data = {
      views: 0,
      tag: tag,
      name: title,
    };
    axios
      .post("https://backend-api-coral.vercel.app/api/countadd", data)
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div  data-aos="fade-up">
      <Link href={link}>
        <div
         
          onClick={() => handleClick(tag)}
          className={`group cursor-pointer relative  drop-css rounded-lg`}
        >
          <div
            className={`w-full rounded-t-lg overflow-hidden duration-700	 relative`}
          >
            <img
              src={img}
              alt={title}
              className={`group-hover:scale-90 duration-700 `}
            />
          </div>

          <div className={`rounded-b-lg`}>
            <h3
              className={`group-hover:text-secondary text-[18px] duration-700 pb-2	py-2 px-4 text-textcolor text-base pt-2 font-semibold`}
            >
              {title}
            </h3>
            <div className="pb-2 px-4">
              <div
                className={` absolute text-center duration-700	 group-hover:bg-primary group-hover:text-secondary top-2 right-2 px-2 py-1 rounded-md bg-secondary text-white title-font text-sm`}
              >
                {tag}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
