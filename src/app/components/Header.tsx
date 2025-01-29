"use client"

import Link from "next/link"
import { clearCartItems } from "../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import { RootState } from "@reduxjs/toolkit/query";
import { Product } from "../lib/types";

export default function Header() {
  const dispatch = useDispatch();
  const [totalPrices, setTotalPrices] = useState(0);
  
  const { productsPrices } = useSelector(
    (state: any) => state.cart
  );
  useEffect(() => {
    const handleTotalPrices = () => {
      let totalPrices = 0;
      productsPrices?.forEach((price: Product["price"]) => {
        totalPrices += price;
      });
      setTotalPrices(totalPrices);  
    };
    handleTotalPrices();
  },[productsPrices]);

  const handleClearCart = () => {
    dispatch(clearCartItems());
  };

  return (
    <header className="bg-main-black shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-main-text">
          My Store
        </Link>
        <nav>
          <ul className="flex items-center justify-center space-x-4">
            <li>
              <Link href="/" className="hover:opacity-70 transition-opacity hidden sm:block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/fake-auth" className="hover:opacity-70 transition-opacity hidden sm:block">
                Login
              </Link>
              <Link href="/fake-auth" className="hover:opacity-70 text-2xl transition-opacity block sm:hidden">
                <RxAvatar />
              </Link>
            </li>
            <li>
              <button onClick={() => handleClearCart()} className="underline underline-offset-4 decoration-red-500/70 hover:opacity-70 transition-opacity sm:block hidden">
                Clear cart
              </button>
              <button onClick={() => handleClearCart()} className="text-2xl text-red-400 hover:opacity-70 transition-opacity block sm:hidden">
                <AiFillDelete />
              </button>
            </li>
            <li>
              <div className="bg-red-500 tabular-nums text-[0.7rem] w-[30px] rounded-full tems-center justify-center flex">
                {productsPrices.length}
              </div>
            </li>
            <li>
              <div className="hover:opacity-70 tabular-nums gap-1 items-center justify-center flex transition-opacity w-[80px]">
                <h4 className="text-green-500">$</h4>
                {totalPrices.toFixed(2)}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

