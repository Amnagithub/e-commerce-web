import React from "react";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Link from "next/link";

const products = [
  {
    title: "Trenton modular sofa_3",
    price: "$35",
    oldprice: "$40",
    image: "/pic/sofa.png",
    rate: "4.3",
    reviews: "65",
  },
  {
    title: "Granite dining table with dining chair",
    price: "$50",
    oldprice: "$70",
    image: "/pic/dinning5.png",
    rate: "3.5",
    reviews: "55",
  },
  {
    title: "Outdoor bar table and stool",
    price: "$40",
    oldprice: "$48",
    image: "/pic/stolls.png",
    rate: "4.80",
    reviews: "85",
  },
  {
    title: "Kent coffee table",
    price: "$10",
    oldprice: "$15",
    image: "/pic/table2.png",
    rate: "4.60",
    reviews: "66",
  },
];

const ProductsBox = ({ product }: { product: any }) => (
  <main>
    <div className="group flex justify-center items-center relative cursor-pointer">
      <Image src={product.image} alt={product.title} width={200} height={200} />
    </div>
    <div>
      <h1 className="font-bold pt-2">{product.title}</h1>
      <div className="flex items-center space-x-2">
        <span className="text-red font-bold">{product.price}</span>
        {product.oldprice && (
          <span className="text-gry-300 font-bold line-through">
            {product.oldprice}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-1 text-md pt-1 text-yellow-500">
        {[...Array(5)].map((_, index) =>
          index < product.rate ? (
            <FaStar key={index} />
          ) : (
            <FaRegStar key={index} />
          )
        )}
      </div>
      <span className="ml-1 text-sm text-gray-400">{product.reviews}</span>
    </div>
  </main>
);
const Products = () => {
  return (
    <main>
      <div className="flex justify-center items-center mt-10 mb-8 w-full">
        <div className="w-[80%] ">
          <div className="flex flex-col">
            <h3 className="text-red font-bold border-l-8 pl-3 ml-1 border-red-400">
              {""}
              This Month{" "}
            </h3>
            <div className="flex justify-between">
              <h1 className="sm:text-md md:text-3xl lg:text-3xl pt-4 font-bold text-slate-800">
                Best Selling Products
              </h1>
              <a
                href="#products"
                className="md:px-7 sm:px-8 sm:text-sm md:text-sm py-2 hover:bg-gray-600 text-white text-center bg-gray-900 rounded-lg h-11  mt-0 max-w-32 "
              >
                <Link href="/shop">View All</Link>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly mt-5 gap-y-5">
            {products.map((product, index) => (
              <ProductsBox key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
