import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Newarrivals = () => {
  return (
    <div>
        <section className="flex flex-col items-center max-h-fit lg:flex-row bg-bgpink p-15">
                <Image
                  width={500}
                  height={500}
                  alt="Asgaard Sofa"
                  src="/pic/Asgaard sofa 1.png"
                  className="w-full lg:w-1/2"
                />
                <div className="  flex flex-col justify-center  text-gray-800 items-center py-5  lg:w-1/2">
                  <p className="text-xl font-poppins font-bold ">New Arrivals</p>
                  <h1 className="font-bold text-5xl sm:text-4xl font-poppins ">
                    Asgaard sofa
                  </h1>
                  <Link
                    href="/shop"
                    className="text-lg items-center px-8 py-2 sm:tracking-wide mt-5 display-none border-2 mb-10 border-black "
                  >
                    Order Now
                  </Link>
                </div>
              </section>
    </div>
  )
}

export default Newarrivals