import React from "react";

const Footer = () => {
  return (
    <main>
      <footer className="bg-[#f2eded] py-12 px-10 font-sans tracking-wide">
        <div className="lg:max-w-[50%] mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">Newsletter</h3>
          <p className="text-sm mt-6 text-gray-500">
            Subscribe to our newsletter and stay up to date with the latest
            news, updates, and exclusive offers. Get valuable insights. Join our
            community today!
          </p>

          <div className="bg-[#dddddd] flex px-2 py-1.5 rounded-full text-left mt-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent text-sm pl-4"
            />
            <button
              type="button"
              className="bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-full px-5 py-2.5 ml-4 transition-all"
            >
              Submit
            </button>
          </div>
        </div>

        <hr className="border-gray-300 my-12" />

        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
           
            <p className="text-gray-500 mb-2 text-sm mt-8">
            400 University Drive Suite 200 Coral Gables,
            FL 33134 USA
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800">Link</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                 Contact Us
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800">Resources</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Webinars
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Ebooks
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Tutorials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800">About Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Mission and Values
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-500 hover:text-gray-800 text-[15px]"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
