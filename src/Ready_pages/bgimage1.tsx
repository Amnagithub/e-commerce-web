import React from "react";

const BackgroundImage = () => {
  return (
    <main>
      <div
         style={{ backgroundImage: "url('/pic/background.png')" }} // style="background-image: url('your-image-url.jpg');"
        className=" bg-hero bg-cover bg-center bg-screen w-full h-full"
      >
        <div className="text-center space-y-5 py-11">
          <h1 className="font-bold text-3xl font-poppins">Our Instagram</h1>
          <p className="font-bold text-2xl mt-6 font-poppins text-text">
            Follow our store on Instagram
          </p>
          <div className="font-[sans-serif] space-x-4 space-y-4 text-center">
            <button
              type="button"
              className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-gray-400 disabled:cursor-not-allowed"
              disabled
            >
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BackgroundImage;
