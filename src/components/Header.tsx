"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="flex items-center justify-between border-b bg-white font-sans min-h-[70px] tracking-wide relative z-50 px-7 py-3">
        <div className={`${isMenuOpen ? "block" : "hidden"} lg:block`}>
          <ul className="lg:flex lg:gap-x-14 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0  max-lg:p-6 max-lg:h-auto max-lg:shadow-md max-lg:overflow-auto items-center z-50">
            <section className="group max-lg:border-b max-lg:py-3 pt-0 flex">
              <Image
                alt="logo"
                src="/pic/Logos-05.png"
                width="60"
                height="60"
              />
              <span className="text-yellow-800 text-[28px] font-light block font-poppins mt-2">
                Furnico
              </span>
            </section>

            <li className="group max-lg:border-b max-lg:py-3">
              <Link
                href="/"
                className="hover:text-blue-600 text-[15px] font-bold text-gray-600 block"
              >
                Home
              </Link>
            </li>
            <li className="group max-lg:border-b max-lg:py-3">
              <Link
                href="/shop"
                className="hover:text-blue-600 text-[15px] font-bold text-gray-600 block"
              >
                Shop
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <Link
                href="/about"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
              >
                About
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <Link
                href="/contact"
                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center  space-x-11">
          <span>
            <Link
              href="/my_account"
              className=" fill-[#333] hover:fill-[#007bff]"
            >
              <CiUser size={25} />
            </Link>
          </span>
          <Link href="/blogs" className="relative cursor-pointer fill-[#333] hover:fill-[#007bff]">
            <CiHeart size={25} />
            <span className="absolute left-auto ml-5 top-0 rounded-full bg-blue-600 px-1 py-0 text-xs text-white">
              3k
            </span>
          </Link>
          <button title="tog" type="button" className=" relative">
            <span className="relative cursor-pointer fill-[#333] hover:fill-[#007bff]">
              <GiShoppingCart size={25} />
              <span className="absolute left-auto ml-2 top-0 rounded-full bg-blue-600 px-1 py-0 text-xs text-white">
                <Link
                  href="/Cart"
                  className="snipcart-items-count snipcart-checkout"
                ></Link>
              </span>
            </span>
          </button>
          <span>
           <SignedIn>
             <UserButton /> 
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
             </span>
         

          {/* <span className="relative cursor-pointer fill-[#333] hover:fill-[#007bff]">
            <CiSearch size={25}/>
           </span>
         */}
          <button
            title="tog"
            type="button"
            className="lg:hidden "
            onClick={toggleMenu}
          >
            <IoMenu size={25} />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
