"use client"

import React, {useState, useEffect} from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import Logo from "./Logo"
import MotionNavLinks from "./MotionNavLinks"
import { BiMenuAltLeft } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [navBg, setNavBg] = useState("transparent")
    const pathname = usePathname()
    const shouldAnimate = pathname === "/"
    
    useEffect(() => {
        const changeBackground = () => {
            if(window.scrollY > 0 && pathname === "/") {
                setNavBg("#242424")
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
        <nav 
            style={{backgroundColor: navBg, transition: "background-color 0.4s ease"}}
            className={pathname === "/" ? "fixed w-full h-[5.5rem] z-[100]" : "fixed w-full h-[5.5rem] z-[100] shadow-xl"}>
                <div className="md:py-7 w-full h-full px-2 2xl:px-16">
                    {shouldAnimate ? (
                        <MotionNavLinks handleNav={handleNav} />
                        ) 
                        : (
                        <div className="flex flex-col md:flex-row gap-1 xs:gap-3 md:gap-0 justify-around items-center">
                            {<Logo />}
                            <ul className="hidden xs:flex gap-5 sm:gap-24 lg:gap-32 uppercase tracking-[0.2em] text-secondaryText text-sm cursor-pointer">
                                <li>
                                    <Link href={"/"} className={pathname === "/" ? "underline" : "text-black"}>Home</Link>
                                </li>
                                <li>
                                    <Link href={"/about"} className={pathname === "/" ? "" : pathname === "/about" ? "text-black underline" : "text-black"}>About</Link>
                                </li>
                                <li>
                                    <Link href={"/gallery"} className={pathname === "/" ? "" : pathname === "/gallery" ? "text-black underline" : "text-black"}>Gallery</Link>
                                </li>
                                <li>
                                    <Link href={"/contact"} className={pathname === "/" ? "" : pathname === "/contact" ? "text-black underline" : "text-black"}>Contact</Link>
                                </li>
                            </ul>
                            <div onClick={handleNav} className="xs:hidden cursor-pointer">
                                <BiMenuAltLeft size={40} className={pathname === "/" ? "text-secondaryText" : "text-primaryText"} />
                            </div>
                        </div>
                    )}
                </div>

                <div className={nav ? "xs:hidden fixed top-0 w-full h-screen z-[100]" : ""}>
                    <div className={
                        nav 
                            ? "fixed top-0 w-full text-center p-10 h-screen ease-in duration-500 bg-[#242424] z-[100]" 
                            : "fixed top-[-100%] p-10 w-full text-center ease-in duration-300 h-screen bg-[#242424]/80"}>
                    <div>
                        <div className="flex justify-between items-center w-full">
                            {<Logo handleNav={handleNav} />}
                            <div onClick={handleNav} className="cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineClose size={30} className="text-secondaryText"/>
                            </div>
                        </div>
            
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[100%] md:w-[90%] py-4 break-words text-secondaryText tracking-widest uppercase font-light">Decorative Designs</p>
                        </div>
                    </div>
                    <div className="py-12">
                    {nav && (
                        <ul onClick={handleNav} className="flex flex-col gap-24 uppercase text-secondaryText text-sm cursor-pointer">
                            <motion.li
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <Link href={"/"} className={pathname === "/" ? "underline" : ""}>Home</Link>
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{ duration: 1, delay: 0.7 }}
                            >
                                <Link href={"/about"} className={pathname === "/about" ? "underline" : ""}>About</Link>
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{ duration: 1, delay: 0.9 }}
                            >
                                <Link href={"/gallery"} className={pathname === "/gallery" ? "underline" : ""}>Gallery</Link>
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{ duration: 1, delay: 1.1 }}
                            >
                                <Link href={"/contact"} className={pathname === "/contact" ? "underline" : ""}>Contact</Link>
                            </motion.li>
                            
                        </ul>
                    )}
                    </div>   
                    </div>
                </div>
        </nav>
    )
}
export default Navbar