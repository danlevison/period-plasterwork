import React from "react"
import SlickHeading from "./SlickHeading"
import Image from "next/image"
import bg from "../../public/assets/hero-img.png"

const Main = () => {
  return (
	<main className="relative flex flex-col justify-start items-center w-full min-h-screen bg-gray-800 py-44">
		<Image 
			alt="/"
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
		<div className="w-full pt-32 md:pt-56">
			<SlickHeading />
		</div>
	</main>
  )
}

export default Main