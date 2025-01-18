import React from "react";
import Image from "next/image";
import { Poppins, Inter } from "next/font/google";

import Link from "next/link";
import Hero from "@/components/Hero";
import Middle from "@/components/Middle";
import TopPicks from "@/components/TopPicks";
import Newarrivals from "@/components/Newarrivals";
import OurBlogs from "@/components/OurBlogs";
import OurInstaGrame from "@/Ready_pages/OurInstaGrame";


async function Home () {
  return (
    <main>

    <Hero />
     <Middle />
     <TopPicks />
     <Newarrivals />
     <OurBlogs />
     <OurInstaGrame />
  
    </main>
  );
};

export default Home;
