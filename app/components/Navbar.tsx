'use client'
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
import { motion } from "framer-motion"

function Navbar() {
  const [nav, setnav] = useState('/')
  const [isOpen, setIsOpen] = useState(false)
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  return (
    <>
   
      <nav className="flex   ">
        <div className="flex ml-7 ">
    
          <Link
            href="/"
            className="   object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <Image
              src="/home-logo.png"
              height={90}
              width={90}
              alt="Logo"
              className=""
            />
          </Link>
        </div>

        <div className="overflow-hidden invisible 2xl:visible  drop-shadow-2xl flex 2xl:flex-row p-4 2xl:m-auto gap-9 justify-center text-lg tracking-wider ">
          <Link href="/projects">PROJECTS</Link>
          <Link href="/certifications">CERTIFICATIONS</Link>
          <Link href="/about">ABOUT</Link>
          
        </div>
        <div className="   visible 2xl:invisible mr-16 mt-4 " >
      




        </div>
      </nav>
    </>
  );
}

export default Navbar;
