"use client"

import React from 'react';
import GallerySlider from "../../components/GallerySlider";
import GalleryLightbox from "../../components/GalleryLightbox";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <main className="flex flex-col justify-center min-h-screen px-5 lg:px-10 py-32">
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1, delay: 0.2}}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl tracking-widest font-light md:font-thin text-center pb-6 lg:pb-12">
            Gallery
        </h1>
        <GallerySlider />
        <GalleryLightbox />
      </motion.div>
    </main>
  )
}

export default Gallery