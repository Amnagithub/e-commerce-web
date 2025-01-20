import React from "react";
import Image from "next/image";
const White_sofa = () => {
  return (
    <main>
      <div className="font-sans p-8 tracking-wide max-lg:max-w-2xl mx-auto">
        <hr className="border-gray-300 my-12" />
        <div className="flex justify-center item-center gap-12 px-2 text-lg sm:gap-6 font-poppins font-bold ">
          <button>Description</button>
          <button className="text-text">Additional Information</button>
          <button className="text-text">Reviews [5]</button>
        </div>
        <div className="text-text text-lg max-lg:max-w-2xl mx-autofont-poppins font-semibold mx-auto py-12 px-11 lg:max-w-[50%] tracking-wide items-center ">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 mx-auto lg:max-w-auto">
          <Image
            alt="img1"
            src="/pic/white-sofa1.png"
            width={600}
            height={600}
          />
          <Image
            alt="img2"
            src="/pic/white-sofa2.png"
            width={600}
            height={600}
          />
        </div>
      </div>
    </main>
  );
};

export default White_sofa;
