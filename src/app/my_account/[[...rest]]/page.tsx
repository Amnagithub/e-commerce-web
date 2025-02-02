"use client";

import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import CompanyPolicy from "@/Ready_pages/companyPolicy";
import { SignIn, SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <main>
      <section>
        <div
          style={{ backgroundImage: "url('/pic/Rectangle 1.png')" }}
          className="bg-cover bg-center bg-blend-screen"
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
              My Account
            </h1>
            <div className="flex items-center space-x-2 mt-4">
              <span>
                <Link className="text-lg font-bold" href="/">Home</Link>
              </span>
              <MdArrowForwardIos />
              <span>
                <Link className="text-lg font-semibold" href="/my_account">My Account</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="flex flex-wrap justify-center itme-center py-12 gap-8">
       
        {/* Sign In Component */}
        <div className=" p-8 bg-white rounded-xl">
          <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
          <SignIn routing="hash" /> 

         </div> 

        {/* Sign Up Component */}
        <div className="p-8 bg-white  rounded-xl">
          <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
          <SignUp routing="hash" />
          </div>
      </section>
      <section>
        <div>
          <CompanyPolicy />
        </div>
      </section>
    </main>
  );
};

export default Page;
