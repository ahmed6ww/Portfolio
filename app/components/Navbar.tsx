"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleclick = () => {
    setNav(!nav);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <>
      <nav className="flex ">
        <div className=" flex justify-between w-full ">
          <Link
            href="/"
            className="   object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <Image
              src="/home-logo.png"
              height={40}
              width={40}
              alt="Logo"
              className=" w-20"
            />
          </Link>
        </div>

        <div className="overflow-hidden invisible 2xl:visible  drop-shadow-2xl flex 2xl:flex-row p-4 2xl:m-auto gap-9 justify-center text-lg tracking-wider ">
          <Link href="/projects">PROJECTS</Link>
          <Link href="/certifications">CERTIFICATIONS</Link>
          <Link href="/about">ABOUT</Link>
        </div>
        <div className=" p-4 z-50 lg:hidden  ">
          <button onClick={handleclick}>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
        <div
          className={
            nav
              ? "absolute top-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-10"
              : "absolute top-[-100%] left-[0%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 "
          }
        >
          <ul onClick={handleclick}>
            <li>
              <Link href="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link href="/certifications">CERTIFICATIONS</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
