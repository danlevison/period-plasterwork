"use client"

import React from "react"
import  Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../app/styles/slick.css"
import { motion } from "framer-motion"

const SlickHeading = () => {
    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 400,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        autoplay: true,
        pauseOnHover: false,
        fade: true,
        swipe: false,
      };

      return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
          <Slider {...settings} className="max-w-[100%]">
            <div>
              <motion.h1
                className="mx-6 text-secondaryText text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light md:font-thin tracking-[0.2em] uppercase text-center"
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 1.5, delay: 0.5}}
              >
                Period Plasterwork
              </motion.h1>
            </div>
            
            <div>
              <h2 className="mx-6 text-secondaryText text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light md:font-thin tracking-[0.2em] uppercase text-center">Decorative Designs</h2>
            </div>
          </Slider>

          <motion.a
            href={"/about"}
            aria-label="Learn more about us"
            className="relative text-sm md:text-base lg:text-lg text-center p-2 w-24 md:w-32 mt-10 mx-auto text-primaryText bg-primaryBg rounded-md hover:scale-105 ease-in duration-300"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1.5, delay: 1}}
          >
			      Learn more
		      </motion.a>
        </div>
        
      );
}

export default SlickHeading