import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <div>
         <div className="tracking-wide bg-posterbg mx-auto p-4">
                <header className=" text-shadow-2 mx-auto text-center flex justify-center items-center space-y-6 ">
                  <h1 className="font-normal text-start px-3 font-poppins mt-20  text-gray-900 text-4xl md:text-6xl lg:text-8xl ">
                    Rocket single seater
                    <div>
                      <Link
                        href="/shop"
                        className="font-poppins text-xl text-center underline underline-offset-8 decoration-slate-800"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </h1>
                  <Image
                    height="150"
                    width="150"
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