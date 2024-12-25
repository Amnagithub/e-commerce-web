import React from "react";
import Image from "next/image";
import { Poppins, Inter } from "next/font/google";
import BackgroundImage from "@/Ready_pages/instaGram";
import Link from "next/link";
const Home = () => {
  return (
    <main>
      <div className="tracking-wide bg-posterbg mx-auto p-4">
        <header className=" text-shadow-2 mx-auto text-center flex justify-center items-center space-y-6 lg:px-40">
          <h1 className="font-tnin text-start font-poppins mt-20 md:text-6xl  lg:text-7xl xlg:text-7xl">
            Rocket single seater
            <div>
              <Link
                href="/shop"
                className="font-poppins sm:text-md text-xl text-center underline underline-offset-8 decoration-slate-800"
              >
                Shop Now
              </Link>
            </div>
          </h1>
          <Image
            height="200"
            width="200"
            alt="Rocket Sofa"
            layout="responsive"
            src="/pic/Rocket.png"
            className="mt-4 lg:mt-0 lg:max-w-[50%]"
          />
        </header>
      </div>

      <section className=" bg-chairbg flex flex-cols-2 sm:flex-cols-2 gap-5 justify-center item-center px-16 mx-auto min-w-full">
        <div className="flex-1">
          <Image
            width={400}
            height={400}
            alt="Table 1"
            src="/pic/Group 9.png"
            className=""
          />
        </div>
        <div className="flex-1">
          <Image
            width={400}
            height={400}
            alt="Table 2"
            src="/pic/Group 8.png"
            className=" "
          />
        </div>
      </section>

      <section className="text-center bg-white mt-10 mb-7">
        <h1 className="font-bold text-3xl font-poppins">Top Picks For You</h1>
        <p className="text-2xl mt-4 font-poppins text-text lg:px-40 p-4 ">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
        <div className="flex flex-wrap justify-evenly  mx-auto mt-5 gap-y-5">
          <div>
            <Image
              width={600}
              height={600}
              alt="Sofa"
              src="/pic/sofa.png"
              className="w-full max-w-[400px]"
            />
            <h2 className="text-center font-bold font-poppins text-lg">
              Trenton modular sofa_3
            </h2>
            <span className="text-center font-bold font-poppins text-xl">
              {" "}
              Price $ 35
            </span>
          </div>
          <div>
            <Image
              width={600}
              height={600}
              alt="Dining Table"
              src="/pic/dinning5.png"
              className="w-full max-w-[400px]"
            />
            <h2 className="text-center font-bold font-poppins text-lg">
              Granite dining table with dining chair
            </h2>
            <span className="text-center font-bold font-poppins text-xl">
              {" "}
              Price $ 50
            </span>
          </div>
          <div>
            <Image
              width={600}
              height={600}
              alt="Stools"
              src="/pic/stolls.png"
              className="w-full max-w-[400px]"
            />
            <h2 className="text-center font-bold font-poppins text-lg">
              Outdoor bar table and stool
            </h2>
            <span className="text-center font-bold font-poppins text-xl">
              {" "}
              Price $ 40
            </span>
          </div>
          <div>
            <Image
              width={600}
              height={600}
              alt="Seat"
              src="/pic/table3.png"
              className="w-full max-w-[300px]"
            />
            <h2 className="text-center font-bold font-poppins text-lg">
              Round coffee table_color 2
            </h2>
            <span className="text-center font-bold font-poppins text-xl">
              {" "}
              Price $ 70
            </span>
          </div>
        </div>
        <Link
          href="/shop"
          className="font-poppins text-2xl mt-7 text-center underline underline-offset-8 py-8  decoration-slate-800"
        >
          View More
        </Link>
      </section>

      <section className="flex flex-col items-center max-h-fit lg:flex-row bg-bgpink p-15">
        <Image
          width={500}
          height={500}
          alt="Asgaard Sofa"
          src="/pic/Asgaard sofa 1.png"
          className="w-full lg:w-1/2"
        />
        <div className="  flex flex-col justify-center items-center py-5  lg:w-1/2">
          <p className="text-xl font-poppins font-bold ">New Arrivals</p>
          <h1 className="font-bold text-5xl sm:text-4xl font-poppins ">
            Asgaard sofa
          </h1>
          <Link
            href="/single_products"
            className="text-lg items-center px-8 py-2 sm:tracking-wide mt-5 display-none border-2  border-black "
          >
            Order Now
          </Link>
        </div>
      </section>
      <div className="text-center my-8">
        <h1 className="font-bold text-3xl font-poppins">Our Blogs</h1>
        <p className=" text-xl mt-6 font-poppins text-text">
          Find a bright ideal to suit your taste with our great selection
        </p>
        <section className="flex justify-center px-8 py-6 gap-6 bg-[#ffff]">
          <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 max-w-xs rounded-sm font-[sans-serif] overflow-hidden mt-4  ">
            <div className="min-h-fit">
              <Image
                alt="card"
                width={300}
                height={300}
                src="/pic/Rectangle 13.png"
                className=" rounded-sm"
              />
            </div>
            <div className="p-4 text-center">
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Going all-in with millennial design
              </p>
              <Link
                href="/blogs"
                type="button"
                className="mt-2 px-5 py-2.5 rounded-sm text-sm tracking-wider font-semibold border-none outline-none underline-offset-8 underline"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 max-w-xs rounded-sm font-[sans-serif] overflow-hidden mt-4  ">
            <div className="min-h-fit">
              <Image
                alt="card"
                width={300}
                height={300}
                src="/pic/Rectangle 14.png"
                className=" rounded-sm"
              />
            </div>

            <div className="p-4 text-center">
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Going all-in with millennial design
              </p>
              <Link
                href="/blogs"
                type="button"
                className="mt-2 px-5 py-2.5 rounded-sm text-sm tracking-wider font-semibold border-none outline-none underline-offset-8 underline"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 max-w-xs rounded-sm font-[sans-serif] overflow-hidden mt-4  ">
            <div className="min-h-fit">
              <Image
                alt="card"
                width={300}
                height={300}
                src="/pic/Rectangle 15.png"
                className=" rounded-sm"
              />
            </div>
            <div className="p-4 text-center">
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Going all-in with millennial design
              </p>
              <Link
                href="/blogs"
                type="button"
                className="mt-2 px-5 py-2.5 rounded-sm text-sm tracking-wider font-semibold border-none outline-none underline-offset-8 underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>
        <div className="font-poppins pb-5 space-x-4 space-y-4 text-center">
          <button
            type="button"
            className="bg-white py-2.5 min-w-[140px] text-xl lg:text-2xl  underline underline-offset-8 font-bold tracking-wider  "
          >
            <Link href="/blogs">View All Post</Link>
          </button>
        </div>
      </div>
      <section>
        <div>{<BackgroundImage />}</div>
      </section>
    </main>
  );
};

export default Home;
