"use client"

import React from "react"
import  Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../app/styles/slick.css";
import { motion } from "framer-motion";
import Link from "next/link";

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
        <div className="w-full flex flex-col justify-center items-center min-h-screen">
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

          <motion.div
            className="relative mt-10 hover:scale-105 ease-in duration-300 text-sm md:text-base lg:text-lg text-center w-24 md:w-32 text-primaryText bg-primaryBg rounded-md" 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1.5, delay: 1}}
          >
            <Link
              href={"/about"}
              aria-label="Learn more about Period Plasterwork"
              className="block p-2"
          >
			        Learn more
		        </Link>
          </motion.div>
        </div>
        
      );
}

export default SlickHeading