"use client"

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import ContactImage from "../../../public/assets/cornice-contact-img.jpeg";

const Contact = () => {
  return (
    <main className="md:min-h-screen w-full flex flex-col items-center justify-center px-10 pt-[10em] pb-16">
		<motion.div 
			className="max-w-[1440px] grid lg:grid-cols-2 items-center gap-10 lg:gap-32"
			initial={{ opacity: 0}}
			animate={{ opacity: 1}}
			transition={{ duration: 1, delay: 0.2}}
		>
			<div>
				<h1
					className="text-3xl md:text-5xl lg:text-6xl tracking-widest font-light md:font-thin text-center capitalize py-4"
				>
					Get in contact
				</h1>
				<p className="text-center leading-7 tracking-wider text-sm lg:text-lg">
					If you have an enquiry, fill out the form below.
				</p>
				<ContactForm />
			</div>

		
				<Image
					className="w-full rounded-lg"
					src={ContactImage}
					alt="/"
					placeholder="blur"
					sizes="100vw"
					quality={100}
					style={{
						width: "100%",
						height: "100%",	
						objectFit: "cover"
					}}

				/>
	
		</motion.div>
	</main>
  )
}

export default Contact