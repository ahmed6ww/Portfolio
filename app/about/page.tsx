import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionButton,
} from "@/app/components/MotionDiv";
import Link from "next/link";

const about = () => {
  return (
    <>
      <section className="h-full">
        <div className=" flex flex-col lg:flex-row items-center lg:justify-center  ">
          <div className=" tracking-wide order-last lg:order-first lg:w-[1000px] xl:w-[800px] xl:mr-60">
            <MotionH1
              className="font-bold text-3xl mt-9 mb-10 xl:text-4xl xl:-mt-56"
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              About
            </MotionH1>
            <MotionP
              className="mx-20 xl:text-lg font-light tracking-widest"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Hi, I'm Ahmed, a Full Stack Web Developer and AI enthusiast. I
              craft seamless web solutions with a creative touch, blending
              technology and intelligence. Skilled in Graphic Design, I focus on
              delightful user experiences. Let's build extraordinary projects
              where code meets creativity in my digital space.
            </MotionP>

            <MotionH1
              className=" font-bold text-3xl mt-9 mb-10 xl:text-4xl"
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Languages
            </MotionH1>
            <MotionDiv
              className="mx-20 mb-10 xl:text-lg font-light tracking-widest"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4>Urdu</h4>
              <h4>English</h4>
              <h4>German</h4>
              <h4>Punjabi</h4>
            </MotionDiv>

            <MotionH1
              className="hidden "
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Partners
            </MotionH1>
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <MotionButton
                className="hidden "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="https://muhammadammar24.vercel.app" target="_blank">
                  <Image
                    src="/ammar.svg"
                    height={100}
                    width={55}
                    alt="Image"
                    className=""
                  />
                </Link>
              </MotionButton>
              <MotionButton
                className="hidden "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="" target="_blank">
                  <Image
                    src="/shayan.jpg"
                    height={100}
                    width={55}
                    alt="Image"
                    className="  "
                  />
                </Link>
              </MotionButton>
            </MotionDiv>
          </div>
          <div className="xl:h-screen ">
            <MotionDiv
              className="mx-14 lg:mx-0 flex justify-center "
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/m6-2.svg"
                height={10}
                width={10}
                alt="Logo"
                className="w-[400px] md:w-[500px] lg:w-[700px] lg:mr-20 lg:mt-32   rounded-[60px] mt-12 "
              />
            </MotionDiv>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
