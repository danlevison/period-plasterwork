"use client"

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import AboutImage from "../../../public/assets/gallery/gallery-img-3.jpeg"

const About = () => {
  return (
    <main className="md:min-h-screen w-full flex flex-col items-center justify-center px-10 pb-16">
		<div className="max-w-[1440px] md:grid md:grid-cols-2 gap-28 justify-center items-center pt-32">
			<motion.div 
				className="flex flex-col py-8"
				initial={{ opacity: 0}}
				animate={{ opacity: 1}}
				transition={{ duration: 1, delay: 0.2}}
			>
				<h1 className="text-3xl md:text-5xl lg:text-6xl tracking-widest font-light md:font-thin text-center">About</h1>
				<p className="leading-7 text-sm lg:text-lg py-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in diam
					quis odio mollis placerat eget in mauris. Sed eu erat sed ipsum
					hendrerit sagittis. Phasellus aliquam orci et ligula rhoncus, id
					auctor velit rutrum. Donec finibus posuere efficitur. Sed malesuada
					porta nisl vel rhoncus. Integer blandit augue id mauris.
				</p>
				<p className="leading-7 text-sm lg:text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in diam
					quis odio mollis placerat eget in mauris. Sed eu erat sed ipsum
					hendrerit sagittis. Phasellus aliquam orci et ligula rhoncus, id
					auctor velit rutrum. Donec finibus posuere efficitur. Sed malesuada
					porta nisl vel rhoncus. Integer blandit augue id mauris.
				</p>
				<Link href={"/gallery"} className="text-sm lg:text-lg underline py-8">See our work</Link>
			</motion.div>

			<motion.div 
				className="relative h-[450px]"
				initial={{ opacity: 0}}
				animate={{ opacity: 1}}
				transition={{ duration: 1, delay: 0.2}}
			>
				<Image 
					src={AboutImage}
					alt="/"
					placeholder="blur"
					fill
					quality={100}
					sizes="100vw"
					style={{
						objectFit: "cover"
					}}
				/>
			</motion.div>
		</div>
	</main>
  )
}

export default About