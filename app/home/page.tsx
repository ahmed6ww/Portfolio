"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <main className=" flex h-screen flex-col w-full  items-center justify-center   ">
        <motion.div
          className="    "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <video src='/video3.mp4'autoPlay loop muted className=' absolute -z-1 opacity-10'/> */}

          <h1 className="font-extrabold text-6xl md:text-7xl xl:text-8xl drop-shadow-xl tracking-wide ">
            AHMED
          </h1>

          <p className="flex justify-end 2xl:w-[355px] w-56  text-purple-300 tracking-wider text-lg drop-shadow-2xl  ">
            Full Stack Developer
          </p>
        </motion.div>

        
      </main>
      <div className="flex items  ">
          <Link href="/next.svg " className="flex   ">
            <Image src="/github-icon.svg" height={30} width={30} alt="Logo" />
          </Link>
        </div>
    </>
  );
};

export default Home;
