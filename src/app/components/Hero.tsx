import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";
import svg from "../assets/lines.svg";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="container pt-14 sm:pt-32 mx-auto items-center flex w-full">
        <div className="lg:max-w-lg">
          <h1 className="text-2xl sm:text-3xl font-semibold lg:text-4xl">
            Welcome to <span className="text-primary">My store</span>
          </h1>
          <div className="text-gray-300 text-sm sm:text-lg">
            <p className="mt-6">
              This is a challenge app for a{" "}
              <span className="font-medium text-primary-darker">Frontend Developer</span>{" "}
              position.
            </p>
            <p className="mt-4">
              I built this e-commerce platform in about 10 hours using <span className="font-medium text-primary-darker">React, Next.js and TailwindCSS.</span>{" "} 
              Product images are stored in Cloudinary, and I used Redux to manage the state of both
              the products and the shopping cart.
            </p>
            <p className="mt-4">
              My main focus was on <span className="font-medium text-primary-darker">design and user experience</span>, as it&apos;s my strongest skill. 
              The app is responsive, delivering a seamless experience across different devices. Additionally, I added a login feature, which is 
              visually appealing but not yet functional.
            </p>
            <p className="mt-4">
              I hope the app impresses you! I put a lot of time and effort into making it the best it can be. <span className="font-medium text-primary-darker">{":)"}</span>        
            </p>
          </div>
          <div className="text-gray-300 leading-[1.35rem] mt-8">
            <h2 className="underline underline-offset-4 text-sm sm:text-lg decoration-red-600/40 mb-1">Errors and things to improve:</h2>
            <div className="text-xs sm:text-sm text-pretty">
              <h2>&bull; The filter can be moved to the backend for improved performance.</h2>
              <h2>&bull; There&apos;s a bug in the price filter when the user presses the delete button.</h2>
              <h2>&bull; Some responsiveness issues may occur {"("}but they are easy to fix{")"}</h2>
              <h2>&bull; A cart view would significantly enhance the user experience.</h2>
              <h2>&bull; The Redux code can be optimized and simplified for better maintainability.</h2>
            </div>
          </div>
        </div>
      </div>
      <i className="absolute hidden sm:block animate-move-y bottom-10 right-[50%] text-3xl text-main-text/90">
        <AiOutlineArrowDown />
      </i>
      <Image src={svg} width={100} height={100} alt="lines" className="absolute top-40 md:top-0 rotate-[-100deg] right-[-20%] w-full" />
    </div>
  );
};

export default Hero;
