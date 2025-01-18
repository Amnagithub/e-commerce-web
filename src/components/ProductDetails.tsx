"use client";

import { CartContext } from "@/app/context/CartContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import White_sofa from "@/Ready_pages/white_sofa";
import Products from "@/app/related_product/page";

const ProductDetails = ({ product }: any) => {
  const [index, setIndex] = useState(0);

  const { addProduct, qty, decQty, incQty }: any = useContext(CartContext);

  

  console.log("Product images:", product.images); // Debugging line

  return (
    <div className=" bg-white">
      <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] p-6 rounded">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 justify-items-center py-10 rounded shadow-md relative object-cover">
              <Image
                src={product.images[index]}
                alt={`Product image ${index + 1}`}
                width={400}
                height={400}
                style={{ width: 'auto', height: 'auto' }}
              />

              <button
                title="btn"
                type="button"
                className="absolute top-4 right-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="#ccc"
                  className="mr-1 hover:fill-[#333]"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-8 mx-auto">
              <div className="w-20 h-16 sm:w-24 sm:h-20 flex items-center justify-center rounded p-2 shadow-md cursor-pointer">
                {product.images.map((e: string, i: number) => (
                  <Image
                    key={i}
                    src={e}
                    alt={`Product image ${i + 1}`}
                    width={150}
                    height={150}
                    className={`object-cover h-20 w-20 border rounded-lg cursor-pointer ${i === index ? "border-yellow-400" : ""}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
            <div className="flex items-center space-x-1 mt-2">
              <svg
                className="w-4 h-4 fill-blue-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 h-4 fill-blue-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 h-4 fill-blue-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 h-4 fill-blue-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 h-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <h4 className="text-gray-500 text-base !ml-3">
                {product.reviews}
              </h4>
            </div>

            <p className="text-sm text-gray-500 mt-2">{product.description}</p>

            <div className="flex flex-wrap gap-4 mt-6">
              <p className="text-gray-800 text-2xl font-bold">
               Rs.{product.price}
              </p>
             
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800">
                Choose a Color
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  title="color"
                  type="button"
                  className="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                ></button>
                <button
                  title="b"
                  type="button"
                  className="w-10 h-10 bg-gray-300 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                ></button>
                <button
                  title="c"
                  type="button"
                  className="w-10 h-10 bg-gray-100 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                ></button>
                <button
                  title="d"
                  type="button"
                  className="w-10 h-10 bg-blue-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                ></button>
              </div>
            </div>
            <div className=" mt-6">
              <button title="dec" onClick={decQty} className="p-2 border">
                <AiOutlineMinus />
              </button>
              <span className="px-2">{qty}</span>
              <button title="inc" onClick={incQty} className="p-2 border">
                <AiOutlinePlus />
              </button>
            </div>
            <div>
             
              <button
            className="buy-button snipcart-add-item w-[100%]item-center px-4 py-2 mt-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
            data-item-id={product._id}
            data-item-name={product.name}
            data-item-price={product.price}
          
            data-item-description={product.description}
            data-item-image={product.images[0]} 
          >
            Add to Cart
          </button>
            </div>
          </div>
        </div>
      </div>
      <White_sofa />
      <Products />
    </div>
  );
};

export default ProductDetails;
