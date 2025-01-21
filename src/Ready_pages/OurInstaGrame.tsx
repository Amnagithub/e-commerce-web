import React from "react";

const OurInstaGrame = () => {
  // Example usage in a component or page
  return (
    <main>
      <section
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/pic/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="flex justify-center items-center h-full text-center mx-auto">
          <section>
            <div>
              <h1 className="font-bold text-gray-800 text-5xl font-poppins">Our Instagram</h1>
              <p className="text-1xl font-poppins text-text mt-3">
                Follow our store on Instagram
              </p>
              <div className="font-[sans-serif] px-4 py-6 text-center">
                <button
                  type="button"
                  className="px-10 py-2 rounded-full shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] text-gray-600 text-xs tracking-wider border-current outline-none bg-orange-200 shadow-orange-500 border-2"
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

export default OurInstaGrame;