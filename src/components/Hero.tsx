import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <div>
         <div className="tracking-wide bg-posterbg mx-auto p-4">
                <header className=" text-shadow-2 mx-auto text-center flex justify-center items-center space-y-6 lg:px-40">
                  <h1 className="font-normal text-start font-poppins mt-20 text-xl sm:text-3xl md:text-4xl text-gray-900 lg:text-6xl xlg:text-7xl">
                    Rocket single seater
                    <div>
                      <Link
                        href="/shop"
                        className="font-poppins mt-2 xlg:text-2xl after:lg:text-1xlmd:text-xl text-lg  text-center underline underline-offset-8 decoration-slate-800"
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
        
    </div>
  )
}

export default Hero