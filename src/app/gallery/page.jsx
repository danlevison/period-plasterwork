"use client"

import React from 'react';
import GallerySlider from "../../components/GallerySlider";
import GalleryLightbox from "../../components/GalleryLightbox";
import { motion } from "framer-motion";
import Link from "next/link";

const Gallery = () => {
  return (
    <main className="min-h-screen px-5 lg:px-10 pt-36">
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1, delay: 0.2}}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl tracking-widest font-light md:font-thin text-center pb-10 lg:pb-12">
            Gallery
        </h1>
        <GallerySlider />
        <GalleryLightbox />
        <Link href={"/contact"} className="mx-auto mt-16 lg:mt-24 underline cursor-pointer text-lg lg:text-xl">Get in contact</Link>
      </motion.div>
    </main>
  )
}

export default Gallery