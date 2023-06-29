import React from "react"
import Image from "next/image"
import bg from "../../public/assets/hero-img.png"

const LandingPage = () => {
  return (
	  <div className="w-full bg-gray-800">
		<div className="absolute inset-0 bg-black/60 z-[-50]"></div>
		<Image 
			className="z-[-100]"
			src={bg}
			alt="/"
			placeholder="blur"
			quality={100}
			fill
			sizes="100vw"
			style={{
				objectFit: "cover",
			}}
		/>
	</div>
  )
}

export default LandingPage