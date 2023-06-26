import React from 'react'
import GallerySlider from "../../components/GallerySlider"

const Gallery = () => {
  return (
    <main className="py-40 px-5 lg:px-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl tracking-widest font-light md:font-thin text-center pb-6">
            Gallery
        </h1>
        <GallerySlider />
    </main>
  )
}

export default Gallery