import React from 'react'
import Image from 'next/image'
const Middle = () => {
  return (
    <div>
     
           <section className="  bg-chairbg flex gap-5 justify-center item-center max-h-fit px-16 py-16 selection:mx-auto">
            <div className="flex justify-center items-center flex-wrap  gap-10">
             <div >
               <Image
                 width={500}
                 height={500}
                 alt="Table 1"
                 src="/pic/Group 9.png"
                 className=""
               />
             </div>
             <div>
               <Image
                 width={500}
                 height={500}
                 alt="Table 2"
                 src="/pic/Group 8.png"
                 className=" "
               />
             </div>
             </div>
           </section>   
    </div>
  )
}

export default Middle;