"use client"

import { useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";
import Image from "next/image";

export default function AuthView() {
  const [isLogin, setIsLogin] = useState(true);
  const [currentForm, setCurrentForm] = useState("login");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(false);
    const timer = setTimeout(() => {
      setCurrentForm(isLogin ? "login" : "signup");
      setFade(true);
    }, 200); // Tiene que coincidir con el duration-300 de la animación
    return () => clearTimeout(timer);
  }, [isLogin]);

  return (
    <article className="flex items-center min-h-screen">
      <section className="w-1/2 hidden md:flex bg-cover">
        <div className="flex flex-col justify-center mb-20 border-r border-primary-darker/30 h-full p-8 text-white bg-opacity-55">
          <h2 className="text-sm">Best items in the world.</h2>
          <h1 className="mt-2 text-5xl font-bold">EXCLUSIVE DESINGS</h1>
          <p className="mt-4">
            Discover the last releases and be the first to receive notifications of new releases
            and new features
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center w-full md:w-1/2 px-4 md:p-8">
        <div className={`w-full max-w-md transition-all duration-300 ${isLogin ? "mt-0" : "mb-10"}`}>
          <div className="flex flex-col items-center mb-10 gap-4">
            <Image
              width={100}
              height={100}
              src="https://svgl.app/library/soundcloud-logo_dark.svg"
              alt="Logo"
              className="w-14 h-14 sm:w-20 sm:h-20 opacity-60"
            />
            <h2 className="sm:mt-4 text-lg sm:text-2xl font-bold">Store</h2>
            <div className="flex flex-wrap justify-center sm:justify-start mt-4 gap-1 relative bg-[#2c2c2c] rounded-md px-2 py-1">
              <div
                className={`absolute hidden sm:block bg-primary-darker/70 z-10 h-10 pointer-events-auto rounded-md transition-all duration-300 ${
                  isLogin 
                  ? "transform translate-x-0 w-[75px] underline sm:no-underline" 
                  : "transform translate-x-[80px] w-[100px] underline sm:no-underline"
                 }`}
              ></div>
              <button
                onClick={() => setIsLogin(true)}
                className={`${isLogin && "underline sm:no-underline underline-offset-4"} py-2 z-10 px-3 rounded-md self-center font-semibold transition-all`}
              >
                LOGIN
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`${!isLogin && "underline sm:no-underline underline-offset-4"} py-2 z-10 px-3 rounded-md self-center font-semibold transition-all`}
              >
                REGISTER
              </button>
            </div>
          </div>
          <div className={`transition-opacity h-[315px] duration-200 ${fade ? "opacity-100" : "opacity-0"}`}>
            {currentForm === "login" ? (
              <LoginForm />
            ) : (
              <SignUpForm />
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
