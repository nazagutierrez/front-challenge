import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = () => {
  return (
    <header className="h-screen">
      <div className="container pt-32 mx-auto items-center flex w-full">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            Welcome to <span className="text-primary">My store</span>
          </h1>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            This is a challenge app for a{" "}
            <span className="font-medium text-primary-darker">Frontend</span>{" "}
            Position
          </p>
        </div>
      </div>
      <i className="absolute animate-move-y bottom-10 right-[50%] text-3xl text-main-text/90">
        <AiOutlineArrowDown />
      </i>
    </header>
  );
};

export default Hero;
