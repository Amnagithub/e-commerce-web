import React from "react";

const BackgroundImage = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(/pic/background.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "screen",
    height: "450px",
  };
  return (
    <main>
      <section className=" ">
        <div
          className="flex justify-center items-center text-center mx-auto"
          style={backgroundImageStyle}
        >
          <section>
            <div className="">
              <h1 className="font-bold text-5xl font-poppins">Our Instagram</h1>
              <p className=" text-1xl  font-poppins text-text mt-3">
                Follow our store on Instagram
              </p>
              <div className="font-[sans-serif] px-4 py-6 text-center">
                <button
                  type="button"
                  className=" px-10 py-2 rounded-full shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] text-gray-600 text-xs tracking-wider border-current outline-none bg-orange-200 shadow-orange-500 border-2"
                  disabled
                >
                  Follow Us
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default BackgroundImage;
