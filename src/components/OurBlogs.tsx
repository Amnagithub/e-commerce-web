import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const OurBlogs = () => {
  return (
    <div>
       <div className="text-center  text-gray-800 my-8">
        <h1 className="font-bold text-3xl font-poppins">Our Blogs</h1>
        <p className=" text-xl mt-6 font-poppins text-text">
          Find a bright ideal to suit your taste with our great selection
        </p>
        <section className="flex flex-wrap justify-center px-8 py-6 gap-6 bg-[#ffff]">
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
    </div>
  )
}

export default OurBlogs