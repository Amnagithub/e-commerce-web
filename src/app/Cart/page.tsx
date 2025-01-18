"use client";
// pages/product.js
import { useState, useEffect } from "react";
import CompanyPolicy from "@/Ready_pages/companyPolicy";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

type CartItem = {
  title: string;
  price: string;
  oldprice: string;
  image: string;
  rate: string;
  reviews: string;
  color: string;
};

export default function ProductPage() {
  const products: CartItem[] = [
    {
      title: "Trenton modular sofa_3",
      price: "$35",
      oldprice: "$40",
      image: "/pic/sofa.png",
      rate: "5",
      reviews: "65",
      color: "#f1f5f9",
    },
    {
      title: "Granite dining table with dining chair",
      price: "$50",
      oldprice: "$70",
      image: "/pic/dinning5.png",
      rate: "5",
      reviews: "55",
      color: "bg-[#e8dcdc]",
    },
    {
      title: "Asgaard sofa",
      price: "$80",
      oldprice: "$100",
      image: "/pic/Asgaard sofa 1.png",
      rate: "4.5",
      reviews: "87",
      color: "#f1f5f9",
    },
  ];

  const shippingFee = 5;
  const taxRate = 0.1;

  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (products && products.length > 0) {
      // Calculate subtotal
      const calculatedSubTotal = products.reduce((acc, product) => {
        return acc + parseFloat(product.price.replace("$", ""));
      }, 0);
      setSubTotal(calculatedSubTotal);

      // Calculate tax and total
      const taxAmount = calculatedSubTotal * taxRate;
      const totalAmount = calculatedSubTotal + shippingFee + taxAmount;
      setTotal(totalAmount);
    } else {
      setSubTotal(0);
      setTotal(0);
    }
  }, []);

  return (
    <main>
      <section>
        <div
          className="bg-cover bg-center bg-blend-screen w-full max-w-screen-xxl mx-auto sm:flex-wrap min-sm:min-w-xxs bg-rectangle"
        >
          <div className="flex flex-col justify-center items-center py-16">
            <Image
              width={80}
              height={200}
              alt="logo"
              src="/pic/Logos-05.png"
              className=" flex justify-center"
            ></Image>
            <h1 className="text-4xl text-poppins font-semibold text-gray-950">
              Cart
            </h1>
            <div className="flex items-center space-x-2 mt-4">
            <span>
              <Link className="text-lg font-bold"href="/">Home</Link>
            </span>
            <MdArrowForwardIos />
            <span>
              <Link className="text-lg font-semibold"href="/Cart">Cart</Link>
            </span>
          </div>
          </div>
        </div>
      </section>

      <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-extrabold text-gray-800">Your Cart</h1>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
              <div className="flex gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                  <Image
                    width={100}
                    height={100}
                    alt="pic2"
                    src={products[0].image}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      {products[0].title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
                      Color:
                      <span className="inline-block w-5 h-5 rounded-md bg-[#e8dcdc] "></span>
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-3">
                    <button
                      title="btn1"
                      type="button"
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 fill-white"
                        viewBox="0 0 124 124"
                      >
                        <path
                          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                    <span className="font-bold text-sm leading-[18px]">2</span>
                    <button
                      title="btn1"
                      type="button"
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 fill-white"
                        viewBox="0 0 42 42"
                      >
                        <path
                          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="ml-auto flex flex-col">
                <div className="flex items-start gap-4 justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 cursor-pointer fill-gray-400 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 cursor-pointer fill-gray-400 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-800 mt-auto">
                  {products[0].price}
                </h3>
              </div>
            </div>

            <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
              <div className="flex gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                  <Image
                    width={100}
                    height={100}
                    alt="pic1"
                    src={products[1].image}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      {products[1].title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
                      Color:{" "}
                      <span className="inline-block w-5 h-5 rounded-md bg-[#e8dcdc]"></span>
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-3">
                    <button
                      title="btn3"
                      type="button"
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 fill-white"
                        viewBox="0 0 124 124"
                      >
                        <path
                          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                    <span className="font-bold text-sm leading-[18px]">1</span>
                    <button
                      title="btn4"
                      type="button"
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 fill-white"
                        viewBox="0 0 42 42"
                      >
                        <path
                          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="ml-auto flex flex-col">
                <div className="flex items-start gap-4 justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 cursor-pointer fill-gray-400 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 cursor-pointer fill-gray-400 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-800 mt-auto">
                  {products[1].price}
                </h3>
              </div>
            </div>

            <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
              <div className="flex gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                  <Image
                    width={100}
                    height={100}
                    alt="pic "
                    src={products[2].image}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      {products[2].title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
                      Color:
                      <span className="inline-block w-5 h-5 rounded-md  bg-bgblue"></span>
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-3">
                    <button
                      title="btn5"
                      type="button"
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 fill-white"
                        viewBox="0 0 124 124"
                      >
                        <path
                          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                    <span className="font-bold text-sm leading-[18px]">1</span>
                    <button
                      title="btn6"
                      type="button"
                      className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 fill-white"
                        viewBox="0 0 42 42"
                      >
                        <path
                          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="ml-auto flex flex-col">
                <div className="flex items-start gap-4 justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 cursor-pointer fill-gray-400 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 cursor-pointer fill-gray-400 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-800 mt-auto">
                  {products[2].price}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
            <ul className="text-gray-800 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm">
                Subtotal{" "}
                <span className="ml-auto font-bold">{subTotal.toFixed(2)}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Shipping{" "}
                <span className="ml-auto font-bold">
                  {" "}
                  {shippingFee.toFixed(2)}
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Tax{" "}
                <span className="ml-auto font-bold">
                  {(subTotal * taxRate).toFixed(2)}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm font-bold">
                Total <span className="ml-auto">{total.toFixed(2)}</span>
              </li>
            </ul>
            <hr className="border-gray-300" />

            <div className="mt-8 space-y-2">
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
              >
                <Link href="/CheckOut">Buy Now</Link>
              </button>
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
              >
                <Link href="/shop">Continue Shopping</Link>{" "}
              </button>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Image
                src="/pic/visa.png"
                width={100}
                height={100}
                alt="card1"
                className="w-10 object-contain"
              />
              <Image
                src="/pic/master.png"
                width={100}
                height={100}
                alt="card2"
                className="w-10 object-contain"
              />
              <Image
                src="/pic/american.png"
                width={100}
                height={100}
                alt="card3"
                className="w-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <section>
        <CompanyPolicy />
      </section>
    </main>
  );
}
