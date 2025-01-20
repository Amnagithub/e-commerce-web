"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CompanyPolicy from "@/Ready_pages/companyPolicy";
import Link from "next/link";
import {
  MdArrowForwardIos,
  MdSort,
  MdOutlineArrowBack,
  MdOutlineArrowForward,
} from "react-icons/md";
import groq from "groq";
import { client } from "@/sanity/lib/client";
import Card from "@/components/Card";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await client.fetch(groq`*[_type== "product"]{
name,
"images": images[0].asset->url,
price,
  slug,
  description,
  _id,
  reviews,
  rate,

}`);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSortChange = (e: any) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = [...products].sort((a: any, b: any) => {
    switch (sortOption) {
      case "alphabetical":
        return a.name.localeCompare(b.name);
      case "popular":
        return b.popularity - a.popularity;
      case "rating":
        return b.rate - a.rate;
      default:
        return 0;
    }
  });

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main>
       <section>
        <div
          style={{ backgroundImage: "url('/pic/Rectangle 1.png')" }}
          className="bg-cover bg-center  bg-blend-screen w-full max-w-screen-xxl mx-auto sm:flex-wrap  min-sm:min-w-xxs"
        >
          <div className="flex flex-col justify-center items-center py-16">
            <Image
              width={80}
              height={200}
              alt="logo"
              src="/pic/Logos-05.png"
              className="max-w-auto"
            ></Image>
            <h1 className="text-4xl text-poppins font-semibold text-gray-950">
            Shop
            </h1>
            <div className="flex items-center space-x-2 mt-4">
            <span>
              <Link className="text-lg font-bold"href="/">Home</Link>
            </span>
            <MdArrowForwardIos />
            <span>
              <Link className="text-lg font-semibold"href="/blogs">Shop</Link>
            </span>
          </div>
          </div>
        </div>
      </section>
      <div className="font-sans py-4 mx-auto lg:max-w-6xl md:max-w-4xl max-sm:max-w-md">
        <div className="flex justify-between items-start border-2 font-poppins bg-neutral-200 max-h-fit p-6 mt-6 mb-6 rounded-lg">
          <div className="flex justify-between items-center">
            <MdSort className="mr-5 text-2xl" />
            <label htmlFor="sort" className="text-1xl mr-3">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="p-2 border rounded border-none font-poppins text-1xl"
            >
              <option value="default">Default</option>
              <option value="alphabetical">Alphabetical</option>
              <option value="popular">Popular</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div className="flex items-center justify-between font-poppins text-1xl">
            <span className="text-1xl mr-3">Items</span>
            <span className="p-2 border rounded border-none bg-white text-gray-500">
              {sortedProducts.length}
            </span>
          </div>
        </div>
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Top Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-12">
          {currentProducts.map((product: any, index: number) => (
            <Card key={index} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            title="Previous"
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-4 py-2 mx-1 border rounded ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white text-blue-500"}`}
            disabled={currentPage === 1}
          >
            <MdOutlineArrowBack />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 border rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            title="Next"
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-4 py-2 mx-1 border rounded ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white text-blue-500"}`}
            disabled={currentPage === totalPages}
          >
            <MdOutlineArrowForward />
          </button>
        </div>
      </div>
      <section>
        <CompanyPolicy />
      </section>
    </main>
  );
};

export default Shop;
