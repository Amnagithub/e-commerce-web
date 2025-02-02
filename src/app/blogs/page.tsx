import React from "react";
import Image from "next/image";
import CompanyPolicy from "@/Ready_pages/companyPolicy";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
const Blogs = () => {
  return (
    <main>
      <section>
        <div
          style={{ backgroundImage: "url('/pic/Rectangle 1.png')" }}
          className="bg-cover bg-center  bg-blend-screen w-full max-w-screen-xxl mx-auto sm:flex-wrap  min-sm:min-w-xxs"
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
              Blogs
            </h1>
            <div className="flex items-center space-x-2 mt-4">
            <span>
              <Link className="text-lg font-bold"href="/">Home</Link>
            </span>
            <MdArrowForwardIos />
            <span>
              <Link className="text-lg font-semibold"href="/blogs">Blogs</Link>
            </span>
          </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col-2 mx-auto flex-wrap justify-center gap-14 place-items-start min-sm:min-w-xxs ">
        <section>
          <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]textll place-items-start max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
            <div className="min-h-[256px]">
              <Image
                width={600}
                height={600}
                alt="blog1"
                src="/pic/blog1.png"
                className="full"
              />
            </div>

            <div className="p-6">
              <h3 className="text-gray-800 text-xl font-bold">
                Going all-in with millennial design
              </h3>{" "}
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <button
                type="button"
                className="mt-6 px-5 pytextrounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                View
              </button>
            </div>
          </div>
          <div className="bg-white shadow-[0_4px_12px_-5ptexta(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
            <div className="min-h-[256px]">
              <Image
                width={600}
                height={600}
                alt="blog2"
                src="/pic/blog2.png"
                className="full"
              />
            </div>

            <div className="p-6">
              <h3 className="text-gray-800 text-xl font-bold">
                Exploring new ways of decorating
              </h3>{" "}
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                at fermentum dui. Maecenas.
              </p>
              <button
                type="button"
                className="mt-6 px-5 pytextrounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                View
              </button>
            </div>
          </div>
          <div className="bg-white shadow-[0_4px_12px_-5ptexta(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
            <div className="min-h-[256px]">
              <Image
                width={600}
                height={600}
                alt="blog3"
                src="/pic/blog3.png"
                className="full"
              />
            </div>

            <div className="p-6">
              <h3 className="text-gray-800 text-xl font-bold">
                Handmade pieces that took time to make
              </h3>{" "}
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                at fermentum dui. Maecenas.
              </p>
              <button
                type="button"
                className="mt-6 px-5 pytextrounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                View
              </button>
            </div>
          </div>
          <div className="pt-10">
            <ul className="flex space-x-5 justify-center font-[sans-serif]">
              <li className="flex items-center justify-center shrink-0 bg-gray-100 w-9 h-9 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-gray-400"
                  viewBox="0 0 55.753 55.753"
                >
                  <path
                    d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                    data-original="#000000"
                  />
                </svg>
              </li>
              <li className="flex items-center justify-center shrink-0 bg-blue-500  border hover:border-blue-500 border-blue-500 cursor-pointer text-base font-bold text-white px-[13px] h-9 rounded-md">
                1
              </li>
              <li className="flex items-center justify-center shrink-0 border hover:border-blue-500 cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
                2
              </li>
              <li className="flex items-center justify-center shrink-0 border hover:border-blue-500 cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
                3
              </li>
              <li className="flex items-center justify-center shrink-0 border hover:border-blue-500 cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
                4
              </li>
              <li className="flex items-center justify-center shrink-0 border hover:border-blue-500 cursor-pointer w-9 h-9 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-gray-400 rotate-180"
                  viewBox="0 0 55.753 55.753"
                >
                  <path
                    d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                    data-original="#000000"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div />
        </section>
        <section>
          <nav className="bg-[#f7f7f8] max-h-fit mt-5 top-1\2 right-0 min-w-[260px] flex-wrap  py-6 px-4 font-[sans-serif] flex flex-col overflow-auto">
            <div className="flex items-start gap-x-6 gap-y-4 ml-auto">
              <div className="flex bg-gray-50 border focus-within:bg-transparent focus-within:border-gray-400 rounded-md px-4 py-2.5 overflow-hidden max-w-52 max-lg:hidden">
                <input
                  type="text"
                  placeholder="Search something..."
                  className="w-full text-sm bg-transparent outline-none pr-2"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  width="16px"
                  className="cursor-pointer fill-gray-600"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
              </div>
            </div>

            <ul className="space-y-3 flex-1 mt-6">
              <li>
                <h1 className="px-4 py-3 text-black text-poppins text-xl ">
                  Categories
                </h1>
                <a
                  href="javascript:void(0)"
                  className="text-text hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative"
                >
                  <span>Crafts</span>
                  <span className="bg-red-400 w-[18px] h-[18px] flex items-center justify-center text-white text-[11px] font-bold ml-auto rounded-full">
                    2
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-text hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative"
                >
                  <span>Designs</span>
                  <span className="bg-red-400 w-[18px] h-[18px] flex items-center justify-center text-white text-[11px] font-bold ml-auto rounded-full">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-text hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative"
                >
                  <span>Handmade</span>
                  <span className="bg-red-400 w-[18px] h-[18px] flex items-center justify-center text-white text-[11px] font-bold ml-auto rounded-full">
                    7
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-text hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative"
                >
                  <span>Interior</span>
                  <span className="bg-red-400 w-[18px] h-[18px] flex items-center justify-center text-white text-[11px] font-bold ml-auto rounded-full">
                    7
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-text hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative"
                >
                  <span>Wood</span>
                  <span className="bg-red-400 w-[18px] h-[18px] flex items-center justify-center text-white text-[11px] font-bold ml-auto rounded-full">
                    7
                  </span>
                </a>
              </li>
            </ul>
          </nav>

          <section>
            <nav className="bg-[#f7f7f8] max-h-fit mt-3 top-1\2 right-0 min-w-[260px] sm:flex-wrap py-6 px-4 font-[sans-serif] flex flex-col overflow-auto">
              <div className="flex items-start gap-x-6 gap-y-4 ml-auto"></div>

              <ul className="space-y-3 flex-1 mt-6">
                <h1 className="px-4 py-3 text-black text-poppins text-xl ">
                  Recent Posts
                </h1>
                <li className="flex items-center justify-evenly">
                  <Image
                    alt="post1"
                    width={100}
                    height={100}
                    src="/pic/post1.png"
                    className="text-text hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative"
                  />

                  <span className=" ">
                    Going all-in with millennial design
                    <p className="text-center mt-0 text-text font-sm">
                      03 Aug 2022
                    </p>
                  </span>
                </li>

                <li className="flex items-center justify-evenly">
                  <Image
                    alt="post1"
                    width={100}
                    height={100}
                    src="/pic/post2.png"
                    className="text-text hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative"
                  />

                  <span className=" ">
                    Exploring new ways of decorating
                    <p className="text-center mt-0 text-text font-sm">
                      03 Aug 2022
                    </p>
                  </span>
                </li>
                <li className="flex items-center justify-evenly">
                  <Image
                    alt="post1"
                    width={100}
                    height={100}
                    src="/pic/post3.png"
                    className="text-text hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative"
                  />

                  <span className=" ">
                    Handmade pieces that took time{" "}
                    <p className="text-center mt-0 text-text font-sm">
                      03 Aug 2022
                    </p>
                  </span>
                </li>
                <li className="flex items-center justify-evenly text-right">
                  <Image
                    alt="post1"
                    width={100}
                    height={100}
                    src="/pic/post4.png"
                    className="text-text hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative"
                  />

                  <span className=" ">
                    Modern home in Milan that to
                    <p className="text-center mt-0 text-text font-sm">
                      03 Aug 2022
                    </p>
                  </span>
                </li>
                <li className="flex items-center justify-evenly">
                  <Image
                    alt="post1"
                    width={100}
                    height={100}
                    src="/pic/post5.png"
                    className="text-text hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative"
                  />

                  <span className=" ">
                    Colorful office redesign how to
                    <p className="text-center mt-0 text-text font-sm">
                      03 Aug 2022
                    </p>
                  </span>
                </li>
              </ul>
            </nav>
          </section>
        </section>
      </div>
      <div />

      <section>
        <div>
          <CompanyPolicy />
        </div>
      </section>
    </main>
  );
};

export default Blogs;
