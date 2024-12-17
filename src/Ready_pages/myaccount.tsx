import React from "react";
import Image from "next/image";
const MyaccountImage = () => {
  return (
    <main>
       
      <div
        style={{ backgroundImage: "url('/pic/Rectangle 1.png')" }}
        className="bg-cover bg-center bg-screen"
      >
        <div className="flex flex-col justify-center items-center py-11">
            <Image width={80} height={80} alt="logo" src='/pic/Logos-05.png' className=" flex justify-center"></Image>
            <h1 className="text-4xl text-poppins font-semibold">My Account</h1>
          
        </div>
      </div>
    </main>
  );
};

export default MyaccountImage;
