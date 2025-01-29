/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { ProductCard } from "./Product";
import svg from "../../assets/spinner.svg";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  fetchProducts,
  setPriceFilter,
  setRatingFilter,
  filterProducts,
  setSearchQuery,
} from "../../store/productsSlice";
import { Product } from "@/app/lib/types";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

const ProductsList = () => {
  const dispatch = useDispatch();

  const {
    filteredProducts,
    priceFilter,
    ratingFilter,
    searchQuery,
    loading,
    error,
    page
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(page) as any);
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(fetchProducts(page + 1) as any);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    dispatch(setPriceFilter(value));
    dispatch(filterProducts());
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    dispatch(setRatingFilter(value));
    dispatch(filterProducts());
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
    dispatch(filterProducts());
  };

  return (
    <div>
      <section className="h-full w-full flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center px-4 mx-20 py-8 sm:px-6 sm:py-12">
          <div className="text-xl w-[95vw] flex items-center justify-center font-semibold sm:text-3xl">
            <div className="w-full sm:w-1/3 h-0.5 bg-primary-darker mx-5 rounded-full"></div>
            <h2 className="w-1/2 text-center text-main-text/90">
              ITEMS IN THE STORE
            </h2>
            <div className="w-full sm:w-1/3 h-0.5 bg-primary-darker mx-5 rounded-full"></div>
          </div>
          <div className="w-[95vw] px-5 sm:px-20 mt-16 flex flex-col items-center justify-center">
            <label className="relative mb-10 flex items-center justify-start">
              <i className="absolute ps-2 text-main-text/60 text-xl"><AiOutlineSearch /></i>
              <input
                className="rounded-md focus-visible:outline-none hover:border-primary focus:border-primary ps-10 border-b border-primary-darker pe-2 py-2 bg-main-black text-main-text"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search product"
              />
            </label>
            <div className="w-full flex space-y-3 flex-col items-start justify-center">
              <label>
                Filter by min price: <span className="text-green-500 mr-1">$</span>
                <input
                  className="w-1/4 text-center rounded-md bg-main-black border-b border-primary-darker focus-visible:outline-none hover:border-primary focus:border-primary"
                  min="1"
                  type="number"
                  value={priceFilter || 0}
                  onChange={handlePriceChange}
                />
              </label>
              <div className="flex items-center justify-center">
                Filter by rating: <span className="text-green-500 mx-1"><AiFillLike /></span>
                <select
                  value={ratingFilter}
                  onChange={handleRatingChange}
                  name="ratingFilter"
                  className="bg-main-black rounded-md px-2 ms-1 border-b border-primary-darker focus-visible:outline-none hover:border-primary focus:border-primary"
                >
                  <option value="0">All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          {error && (
            <p className="mt-10 bg-red-500/30 px-3 py-1">
              Error al cargar los productos: {error}
            </p>
          )}
          {loading && (
            <Image
              width={100}
              height={100}
              src={svg}
              alt="Loading..."
              className="w-14 h-14"
            />
          )}
          <ul className="w-[98vw] px-6 md:px-16 lg:px-40 xl:px-52 h-full grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-20">
            {filteredProducts?.map((product: Product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ul>
            {filteredProducts?.length === 0 && (
              <div className="mx-auto">
                <h2 className="text-center h-screen text-xl text-main-text/90">
                  No products found, try changing the filters
                </h2>
              </div>
            )}
              <button
                onClick={handleLoadMore}
                className={`w-[120px] h-[45px] flex items-center justify-center mt-4 px-4 py-2 bg-[#1d1d1d] shadow-sm shadow-white/30 text-white rounded-md ${filteredProducts.length === 20 ? "hidden" : ""}`}
                >
                {loading ? <Image
                  width={100}
                  height={100}
                  src={svg}
                  alt="Loading..."
                  className="w-7 h-7" 
                /> : "Load more"}
              </button>
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
