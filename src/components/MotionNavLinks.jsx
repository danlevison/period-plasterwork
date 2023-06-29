import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Logo from "./Logo"
import { motion } from "framer-motion"
import { BiMenuAltLeft } from "react-icons/bi"


const NavLinks = ({handleNav}) => {
    const pathname = usePathname()
  return (
    <motion.div 
        className="flex flex-col md:flex-row gap-1 xs:gap-3 md:gap-0 justify-around items-center"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
    >
        {<Logo />}
        <ul className="hidden xs:flex gap-5 sm:gap-24 lg:gap-32 uppercase tracking-[0.2em] text-secondaryText text-sm cursor-pointer">
            <Link href={"/"} className={pathname === "/" ? "underline" : "text-black"}>Home</Link>
            <Link href={"/about"} className={pathname === "/" ? "" : pathname === "/about" ? "text-black underline" : "text-black"}>About</Link>
            <Link href={"/gallery"} className={pathname === "/" ? "" : pathname === "/gallery" ? "text-black underline" : "text-black"}>Gallery</Link>
            <Link href={"/contact"} className={pathname === "/" ? "" : pathname === "/contact" ? "text-black underline" : "text-black"}>Contact</Link>
        </ul>
        <div onClick={handleNav} className="xs:hidden cursor-pointer">
            <BiMenuAltLeft size={40} className={pathname === "/" ? "text-secondaryText" : "text-primaryText"} />
        </div>
    </motion.div>
  )
}

export default NavLinks