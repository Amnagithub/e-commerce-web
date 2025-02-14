"use client";
import React, { useState } from "react";
import CompanyPolicy from "@/Ready_pages/companyPolicy";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <main>
      <section>
        <div
          style={{ backgroundImage: "url('/pic/Rectangle 1.png')" }}
          className="bg-cover bg-center bg-blend-screen w-full max-w-screen-xxl mx-auto sm:flex-wrap min-sm:min-w-xxs"
        >
          <div className="flex flex-col justify-center items-center py-16">
            <Image
              width={80}
              height={200}
              alt="logo"
              src="/pic/Logos-05.png"
              className="flex justify-center"
            />
            <h1 className="text-4xl text-poppins font-semibold text-gray-950">
              Checkout
            </h1>
            <div className="flex items-center space-x-2 mt-4">
              <span>
                <Link className="text-lg font-bold" href="/">
                  Home
                </Link>
              </span>
              <MdArrowForwardIos />
              <span>
                <Link className="text-lg font-semibold" href="/CheckOut">
                  CheckOut
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="font-[sans-serif] bg-white item-center my-6">
        <div className="max-lg:max-w-xl mx-auto w-full">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
              <div className="text-center max-lg:hidden">
                <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">
                  Billing Details
                </h2>
              </div>

              <form className="lg:mt-16">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Shipping info
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-8 mt-8">
                    <input
                      type="text"
                      placeholder="Name"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Street address"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Postal code"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div className="mt-16">
                  <h2 className="text-xl font-bold text-gray-800">
                    Payment method
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2 mt-4">
                    <div className="flex items-center">
                      <input
                        title="card"
                        type="radio"
                        className="w-5 h-5 cursor-pointer"
                        id="card"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <label
                        htmlFor="card"
                        className="ml-4 flex gap-2 cursor-pointer"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/pic/visa.png"
                          className="w-12"
                          alt="card1"
                        />
                        <Image
                          width={100}
                          height={100}
                          src="/pic/master.png"
                          className="w-12"
                          alt="card2"
                        />
                        <Image
                          width={100}
                          height={100}
                          src="/pic/american.png"
                          className="w-12"
                          alt="card3"
                        />
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        title="paypal"
                        type="radio"
                        className="w-5 h-5 cursor-pointer"
                        id="paypal"
                        name="paymentMethod"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <label
                        htmlFor="paypal"
                        className="ml-4 flex gap-2 cursor-pointer"
                      >
                        <Image
                          width={50}
                          height={50}
                          src="/pic/paypal.png"
                          className="w-15"
                          alt="paypalCard"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <button
                    type="button"
                    className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="min-w-[150px] px-6 py-3.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Confirm payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section>
        <CompanyPolicy />
      </section>
    </main>
  );
};

export default CheckOut;
