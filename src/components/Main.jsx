import React from "react"
import SlickHeading from "./SlickHeading"

const Main = () => {
  return (
	<main className="relative flex flex-col justify-start items-center w-full min-h-screen bg-gray-800 py-44 bg-[url('/assets/hero-img.png')] bg-cover bg-right">
		<div className="absolute inset-0 bg-black/60"></div>
		<div className="w-full pt-32 md:pt-56">
			<SlickHeading />
		</div>
	</main>
  )
}

export default Main