"use client"

import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export const MotionDiv = motion.div
export const MotionH1 = motion.h1
export const MotionP = motion.p
export const MotionButton = motion.button
export const MotionLink = motion
export const Chakraui = ChakraProvider

export function myButton () {
return(
    <MotionButton
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    />
)
}