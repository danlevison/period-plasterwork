import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <footer className="flex justify-around items-center w-full h-14 text-xs md:text-sm text-gray-400 bg-[#242424] text-center px-10 py-9 xs:py-0 tracking-wide">
	    <p>Copyright &copy; <span>{currentYear}</span> Period Plasterwork Ltd. All rights reserved | Website by <a href={"https://danlevison.vercel.app/"} target="_blank" className="font-bold text-gray-400 hover:underline">Dan Levison <span className="sr-only">Opens in a new tab</span></a></p>
    </footer>
  )
}

export default Footer