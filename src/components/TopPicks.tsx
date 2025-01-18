import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const TopPicks = () => {
  return (
    <div>
      <section className="text-center bg-white mt-10 mb-10">
        <h1 className="font-bold text-3xl text-gray-800 font-poppins">Top Picks For You</h1>
        <p className="text-1xl mt-4 font-poppins text-text lg:px-40 p-4 ">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
        <div className="flex flex-wrap justify-evenly  mx-auto mt-5 mb-10 gap-y-5">
          <div>
            <Image
              width={600}
              height={600}
              alt="Sofa"
              src="/pic/sofa.png"
              className="w-full max-w-[400px]"
            />
            <h2 className="text-center font-bold text-gray-800 font-poppins text-lg">
              Trenton modular sofa_3
            </h2>
            <span className="text-center font-bold font-poppins  text-gray-800 text-xl">
              {" "}
              Price $ 35
            </span>
          </div>
          <div>
            <Image
              width={550}
              height={550}
              alt="Dining Table"
              src="/pic/dinning5.png"
              className="w-full max-w-[400px]"
            />
            <h2 className="text-center font-bold  text-gray-800 font-poppins text-lg">
              Granite dining table with chairs
            </h2>
            <span className="text-center  text-gray-800 font-bold font-poppins text-xl">
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
            <h2 className="text-center  text-gray-800 font-bold font-poppins text-lg">
              Outdoor bar table and stool
            </h2>
            <span className="text-center  text-gray-800 font-bold font-poppins text-xl">
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
            <h2 className="text-center   text-gray-800 font-bold font-poppins text-lg">
              Round coffee table_color 2
            </h2>
            <span className="text-center font-bold  text-gray-800 font-poppins text-xl">
              {" "}
              Price $ 70
            </span>
          </div>
        </div>
        <Link
          href="/shop"
          className="font-poppins text-2xl  text-gray-800 font-medium text-center underline underline-offset-8 py-8  decoration-slate-800"
        >
          View More
        </Link>
      </section>  
    </div>
  )
}

export default TopPicks;