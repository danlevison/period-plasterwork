import React from 'react'
import GallerySlider from "../../components/GallerySlider"

const Gallery = () => {
  return (
    <main className="py-32 px-5 lg:px-10">
        <h1 className="text-2xl lg:text-6xl tracking-widest font-thin text-center pb-6">
            Gallery
        </h1>
        <GallerySlider />
    </main>
  )
}

export default Gallery