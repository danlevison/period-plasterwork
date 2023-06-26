"use client"

import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import Logo from "./Logo"
import { BiMenuAltLeft } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [navBg, setNavBg] = useState("transparent")
    const pathname = usePathname()

    useEffect(() => {
        const changeBackground = () => {
            if(window.scrollY > 0 && pathname === "/") {
                setNavBg("#3a362d")
            } else if (window.screenY === 0 && pathname === "/") {
                setNavBg("transparent")
            } else if (pathname != "/") {
                setNavBg("#FAF9F6")
            }
        }

        window.addEventListener("scroll", changeBackground)
        return () => {
            window.removeEventListener("scroll", changeBackground);
          };
    }, [pathname])

    const handleNav = () => {
        setNav(!nav)
    }


    return (
        <motion.nav 
            style={{backgroundColor: navBg, transition: "background-color 0.4s ease"}}
            className={pathname === "/" ? "fixed w-full h-28 z-[100]" : "fixed w-full h-28 z-[100] shadow-xl"}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
            >
                <div className="py-4 md:py-10 w-full h-full px-2 2xl:px-16">
                    <div className="flex flex-col md:flex-row gap-3 xs:gap-5 md:gap-0 justify-around items-center">
                        {<Logo />}
                        <ul className="hidden xs:flex gap-5 sm:gap-24 lg:gap-32 uppercase tracking-[0.2em] text-secondaryText text-sm cursor-pointer">
                            <a href={"/"} className={pathname === "/" ? "underline" : "text-black"}>Home</a>
                            <a href={"/about"} className={pathname === "/" ? "" : pathname === "/about" ? "text-black underline" : "text-black"}>About</a>
                            <a href={"/gallery"} className={pathname === "/" ? "" : pathname === "/gallery" ? "text-black underline" : "text-black"}>Gallery</a>
                            <a href={"/contact"} className={pathname === "/" ? "" : pathname === "/contact" ? "text-black underline" : "text-black"}>Contact</a>
                        </ul>
                        <div onClick={handleNav} className="xs:hidden cursor-pointer">
                            <BiMenuAltLeft size={40} className={pathname === "/" ? "text-secondaryText" : "text-primaryText"} />
                        </div>
                    </div>
                </div>

                <div className={nav ? "xs:hidden fixed left-0 top-0 w-full h-screen bg-gray-800" : ""}>
                    <div className={
                        nav 
                            ? "fixed left-0 top-0 w-[100%] text-center h-screen p-7 ease-in duration-500 bg-gray-800" 
                            : "fixed left-[-150%] top-0 p-10 ease-in duration-500 h-screen bg-gray-800"}>
                    <div>
                        <div className="flex justify-between items-center w-full">
                            {<Logo />}
                            <div onClick={handleNav} className="cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineClose size={30} className="text-secondaryText"/>
                            </div>
                        </div>
            
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[100%] md:w-[90%] py-4 break-words text-secondaryText tracking-widest uppercase font-light">Period Plasterwork</p>
                        </div>
                    </div>
                    <div className="py-4">
                        <ul className="flex flex-col gap-24 uppercase text-secondaryText text-sm cursor-pointer">
                            <a href={"/"} className={pathname === "/" ? "underline" : ""}>Home</a>
                            <a href={"/about"} className={pathname === "/about" ? "underline" : ""}>About</a>
                            <a href={"/gallery"} className={pathname === "/gallery" ? "underline" : ""}>Gallery</a>
                            <a href={"/contact"} className={pathname === "/contact" ? "underline" : ""}>Contact</a>
                        </ul>
                    </div>   
                    </div>
                </div>
        </motion.nav>
    )
}
export default Navbar