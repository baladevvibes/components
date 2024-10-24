"use client";
import React, { useEffect, useState } from "react";

export default function TagRender(props) {
  const [data, setData] = useState([
    { _id: 0, name: "All", tag: "all", link: "/" },
    { _id: 0, name: "Hero", tag: "hero", link: "/hero" },
    { _id: 1, name: "Card", tag: "card", link: "/card" },
    { _id: 2, name: "About", tag: "about", link: "/about" },
    { _id: 3, name: "Service", tag: "service", link: "/services" },
    { _id: 4, name: "Skeleton", tag: "skeleton", link: "/skeleton" },
    { _id: 5, name: "Tab", tag: "tab", link: "/tab" },
    { _id: 6, name: "Highlight", tag: "highlight", link: "/highlight" },
    { _id: 7, name: "Login", tag: "login-in", link: "/login" },
    { _id: 8, name: "Blog", tag: "blog", link: "/blog" },
    {
      _id: 9,
      name: "Call to action",
      tag: "call-to-action",
      link: "/call-to-action",
    },
    { _id: 10, name: "Contact", tag: "contact", link: "/contact" },
    {
      _id: 11,
      name: "Dashboard Info",
      tag: "dashboard-info",
      link: "/dashboard-info",
    },
    {
      _id: 12,
      name: "Table",
      tag: "table",
      link: "/table",
    },
    {
      _id: 13,
      name: "Testimonials",
      tag: "testimonials",
      link: "/testimonials",
    },
  ]);
  const [arr, setMapData] = useState();

  useEffect(() => {
    let arr = [];
    data?.forEach((el) => {
      if (props.tag === el.tag) {
        console.log(el);
      } else {
        arr.push(el);
        // mapData.push()
      }
    });
    setMapData(arr);
    // console.log(props)
  }, []);

  return (
    <div>
      <div className="px-6 tags space-x-10 space-y-5">
        {props.title === "no" ? (
          <> </>
        ) : (
          <>
            <h4
              className={` title-font pt-8 pb-4 text-center text-secondary text-2xl font-semibold aos-init aos-animate`}
            >
              Find Components
            </h4>
          </>
        )}

        {arr?.map((v, index) => {
          return (
            <>
              <a
                key={index}
                href={`${v?.link}`}
                className=" hover:brightness-125 tracking-wide"
              >
                {v?.name}
              </a>
            </>
          );
        })}
      </div>
    </div>
  );
}
