import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className=" container mx-auto">
        <div className="mt-[150px] h-[40vh] pb-20">
          <h1 className=" text-[88px] text-center text-secondary font-semibold">
            404 Page 😢
          </h1>
          <div className=" flex justify-center mt-4">
            <a href="/">
              <button className=" text-4xl  text-secondary hover:text-primary font-semibold text-center">
                {" "}
                👈Home page{" "}
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
