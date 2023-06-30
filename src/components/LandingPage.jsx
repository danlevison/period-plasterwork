import React from "react"
import SlickHeading from "./SlickHeading"
import Image from "next/image"
import bg from "../../public/assets/hero-img.png"

const LandingPage = () => {
  return (
	<div className="relative flex flex-col justify-start items-center w-full bg-gray-800">
		<Image 
			alt="Ceiling with decorative plaster ceiling roses and chandeliers hanging."
			src={bg}
			placeholder="blur"
			quality={100}
			fill
			sizes="100vw"
			style={{
				objectFit: "cover",
			}}
		/>
		<div className="absolute inset-0 bg-black/60"></div>
		<div className="w-full md:pt-16">
			<SlickHeading />
		</div>
	</div>
  )
}

export default LandingPage