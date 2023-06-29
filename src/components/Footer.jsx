import React from 'react'
import Link from "next/link"

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <footer className="flex justify-around items-center w-full h-14 text-xs md:text-sm text-gray-400 bg-[#242424] text-center px-10 tracking-wide">
	    <p>Copyright &copy; <span>{currentYear}</span> All rights reserved | Website developed by <Link href={"https://danlevison.vercel.app/"} target="_blank" className="font-bold text-gray-400 hover:underline">Dan Levison</Link></p>
    </footer>
  )
}

export default Footer