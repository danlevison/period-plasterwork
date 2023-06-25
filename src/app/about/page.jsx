import React from 'react'

const About = () => {
  return (
    <main className="md:min-h-screen w-full flex flex-col items-center px-10 lg:py-36">
		<div className="max-w-[1440px] md:grid md:grid-cols-2 gap-28 justify-center items-center pt-32">
			<div className="flex flex-col items-center py-8">
				<h1 className="text-2xl lg:text-6xl tracking-widest font-thin">About</h1>
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
			</div>
			<div>
				<div className="w-[80%] h-96 bg-gray-400"></div>
			</div>
		</div>
	</main>
  )
}

export default About