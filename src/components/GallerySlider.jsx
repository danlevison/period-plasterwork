import React, { useState, useEffect } from "react";
import NextImage from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../app/styles/slick.css";
import { Skeleton } from "./ui/skeleton";
import { GrPrevious, GrNext } from "react-icons/gr";
import galleryImages from "../app/gallery-imgs";

const GallerySlider = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Create promises for each image to track their loading status
    const imagePromises = galleryImages.map((photo) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = `/assets/gallery/${photo.src}`;
        img.onload = resolve; // Resolve the promise when the image is loaded successfully
        img.onerror = reject; // Reject the promise if there's an error loading the image
      });
    });

    // Wait for all image promises to resolve or reject
    Promise.all(imagePromises)
      .then(() => setLoading(false)) // Set loading to false when all images are loaded
      .catch((error) => {
        console.error("Error loading images:", error);
        setLoading(false); // Set loading to false if there's an error loading any image
      });
  }, []);

  const CustomPrevArrow = ({ onClick }) => (
    <button onClick={onClick} className="custom-prev-arrow" aria-label="Previous image">
      <GrPrevious size={50} className="opacity-30" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button onClick={onClick} className="custom-next-arrow" aria-label="Next image">
      <GrNext size={50} className="opacity-30" />
    </button>
  );

  const settings = {
    fullscreen: true,
    arrows: true,
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [&>*:nth-child(3)]:hidden [&>*:nth-child(2)]:hidden md:[&>*:nth-child(2)]:block lg:[&>*:nth-child(3)]:block">
        {[...Array(3)].map((_, idx) => (
          <Skeleton key={idx} className="mx-2 h-[350px] md:h-[400px] lg:h-[500px] bg-gray-300" />
        ))}
      </div>
      ) : (
        <Slider {...settings} className="gallery-slider">
          {galleryImages.map((photo, idx) => (
            <div className="relative h-[350px] md:h-[400px] lg:h-[450px] outline-none" key={idx}>
              <NextImage
                src={`/assets/gallery/${photo.src}`}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33.33vw, (min-width: 768px) 50vw, 100vw"
                quality={100}
                priority={idx < 3}
                style={{
                  objectFit: "cover",
                }}
                className="px-2 w-full"
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default GallerySlider;