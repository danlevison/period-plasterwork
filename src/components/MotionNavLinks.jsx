import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Logo from "./Logo"
import { motion } from "framer-motion"
import { BiMenuAltLeft } from "react-icons/bi"


const NavLinks = ({navBg, handleNav}) => {
    const pathname = usePathname()
  return (
    <motion.div 
        className="flex flex-col md:flex-row gap-1 xs:gap-3 md:gap-0 justify-around items-center"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
    >
        {<Logo />}
        <ul className="hidden xs:flex gap-5 sm:gap-24 lg:gap-32 uppercase tracking-[0.2em] text-secondaryText text-sm">
            <li>
                <Link href={"/"} className={pathname === "/" ? "underline" : "text-black"}>Home</Link>
            </li>
            <li className="relative">
                <div className="group dropdown">
                    <Link href={"/about"} className={pathname === "/" ? "" : pathname === "/about" ? "text-black underline" : "text-black"}>About</Link>
                    <div className="dropdown-container pointer-events-none translate-y-[-8px] transition 150ms ease-in-out, transform 150ms ease-in-out group-hover:translate-y-0 opacity-0 group-hover:opacity-100 absolute left-[50%] translate-x-[-50%] top-full bg-transparent pt-[0.63rem] md:pt-6 group-hover:pointer-events-auto">
                        <ul style={{backgroundColor: navBg, transition: "background-color 0.4s ease"}} className="text-center text-secondaryText">
                            <li className="hover:bg-primaryBg hover:text-primaryText">
                                <Link href="/about" className="block py-2">About my work</Link>
                            </li>
                            <li className="border-y border-primaryBg hover:bg-primaryBg hover:text-primaryText">
                                <Link href="/about#services" className="block py-2 px-14">Services</Link>
                            </li>
                            <li className="hover:bg-primaryBg hover:text-primaryText">
                                <Link href="/about#areas" className="block py-2">Areas covered</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <Link href={"/gallery"} className={pathname === "/" ? "" : pathname === "/gallery" ? "text-black underline" : "text-black"}>Gallery</Link>
            </li>
            <li>
                <Link href={"/contact"} className={pathname === "/" ? "" : pathname === "/contact" ? "text-black underline" : "text-black"}>Contact</Link>
            </li>
        </ul>
        <button onClick={handleNav} aria-label="Open menu" className="xs:hidden cursor-pointer">
            <BiMenuAltLeft size={40} className={pathname === "/" ? "text-secondaryText" : "text-primaryText"} />
        </button>
    </motion.div>
  )
}

export default NavLinks