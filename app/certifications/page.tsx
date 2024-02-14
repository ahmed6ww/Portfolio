import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


import {
  MotionDiv,
  MotionH1,
  MotionP,
  myButton,
  MotionButton,
} from "@/app/components/MotionDiv";
import { AI, webDev } from "../data";
import { programmingLang } from "../data";

const certifications = () => {
  return (
    <section className="h-full ">
      <div className="mt-32 tracking-wider">
        <h1 className=" flex justify-center font-extrabold text-3xl md:text-5xl xl:text-5xl">
          Web Development
        </h1>
        <div className="grid content-center grid-cols-2 gap-10 m-14 lg:grid-cols-3 mt-32">
          {webDev.map((cert) => {
            return (
              <div>
                <Link
                  href={cert.address}
                  className="flex flex-col  items-center"
                >
                  <Image
                    className="rounded-xl w-[300px] xl:w-[400px]"
                    src={cert.href}
                    height={145}
                    width={145}
                    alt="Certificate"
                  />
                  <p className="mt-4">{cert.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-32 tracking-wider">
        <h1 className=" flex item-center justify-center font-extrabold text-3xl md:text-5xl xl:text-5xl">
          Programming Languages
        </h1>
        <div className="grid grid-cols-2 gap-10 m-14 lg:grid-cols-3 mt-32">
          {programmingLang.map((cert) => {
            return (
              <div>
                <Link
                  href={cert.address}
                  className="flex flex-col  items-center"
                >
                  <Image
                    className="rounded-xl w-[300px] xl:w-[400px]"
                    src={cert.href}
                    height={145}
                    width={145}
                    alt="Certificate"
                  />
                  <p className="mt-4">{cert.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-32 tracking-wider">
        <h1 className=" flex item-center justify-center font-extrabold text-3xl md:text-5xl xl:text-5xl">
          Artificial Intellignece
        </h1>
        <div className="grid grid-cols-2 gap-10 m-14 lg:grid-cols-3 mt-32">
          {AI.map((cert) => {
            return (
              <div>
                <Link
                  href={cert.address}
                  className="flex flex-col items-center"
                >
                  <Image
                    className="rounded-xl w-[300px] xl:w-[400px]"
                    src={cert.href}
                    height={145}
                    width={145}
                    alt="Certificate"
                  />
                  <p className="mt-4">{cert.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default certifications;
