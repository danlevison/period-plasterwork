import React from 'react'
import Image from "next/image"
import ContactForm from "../../components/ContactForm"

const Contact = () => {
  return (
    <main class="md:min-h-screen w-full flex flex-col items-center justify-center px-10 lg:px-24 pt-[10em]">
		<div class="grid lg:grid-cols-2 items-center gap-24">
			<div>
				<h1
					class="text-center capitalize text-2xl lg:text-6xl tracking-widest font-thin py-4"
				>
					Get in contact
				</h1>
				<p class="text-center leading-7 tracking-wider text-sm lg:text-lg">
					If you have an enquiry, fill out the form below.
				</p>
				<ContactForm />
			</div>
			<Image
				class="w-full h-[400px] lg:h-[700px] object-cover rounded-lg"
				src="/assets/cornice-contact-img.jpeg"
				alt="/"
				width={400}
				height={400}
			/>
		</div>
	</main>
  )
}

export default Contact