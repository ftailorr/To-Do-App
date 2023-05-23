import React from "react";
import HeroImage from "../assets/heroImage.png";
import { BsArrowRightCircle } from "react-icons/bs";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-medium-dark-beige via-medium-light-beige to-light-beige"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold px-10 py-4 text-center sm:text-left">
            I'm a Software Engineer
          </h2>
          <p className="text-black-500 py-10 px-9 max-w-md sm:ml-6 md:ml-0 md:mt-0">
            I'm a recent graduate with experience in building and designing
            software. Currently I love to work on web applications using
            technologies I like such as React, Next JS, Tailwind.
          </p>

          <div>
            <button className=" group text-black w-fit px-6 py-3 mx-2 flex items-center rounded-bs cursor-pointer">
              Portfolio
              <span className="px-1 group-hover:rotate-90 duration-300">
                <BsArrowRightCircle size={19} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <img
       
          src={HeroImage}
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full mt-8 md:mt-0"
        />
      </div>
    </div>
  );
};

export default Home;
