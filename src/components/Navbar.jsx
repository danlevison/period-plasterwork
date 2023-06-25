"use client"

import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import Logo from "./Logo"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 20) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    }, [])

    const pathname = usePathname()

    return (
        <motion.nav 
            className={pathname === "/" && !nav ? "fixed w-full h-28 z-[100]" : pathname != "/" && nav ? "bg-primaryBg shadow-xl fixed w-full h-28 z-[100]" : "fixed w-full h-28 z-[100]"}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
            >
                <div className="py-4 md:py-10 w-full h-full px-2 2xl:px-16">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-around items-center">
                        {<Logo />}
                        <ul className="flex gap-4 sm:gap-24 lg:gap-32 uppercase tracking-[0.2em] text-secondaryText text-sm">
                            <a href={"/"} className={pathname === "/" ? "underline" : "text-sm cursor-pointer text-black"}>Home</a>
                            <a href={"/about"} className={pathname === "/" ? "" : pathname === "/about" ? "text-black underline" : "text-black"}>About</a>
                            <a href={"/gallery"} className={pathname === "/" ? "" : pathname === "/gallery" ? "text-black underline" : "text-black"}>Gallery</a>
                            <a href={"/contact"} className={pathname === "/" ? "" : pathname === "/contact" ? "text-black underline" : "text-black"}>Contact</a>
                        </ul>
                        {/* <div onClick={handleNav} className="md:hidden cursor-pointer">
                            <p className="text-white">Menu Open</p>
                        </div> */}
                    </div>
                </div>

                {/* <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black" : ""}>
                    <div className={
                        nav 
                            ? "fixed left-0 top-0 w-[100%] text-center h-screen p-7 ease-in duration-500" 
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"}>
                    <div>
                        <div className="flex justify-between items-center w-full">
                            <p>Logo</p>
                            <div onClick={handleNav} className="cursor-pointer hover:scale-110 ease-in duration-300">
                            <p className="text-white">Menu Close</p>
                            </div>
                        </div>
            
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[100%] md:w-[90%] py-4 break-words text-secondaryText tracking-widest uppercase font-light">Period Plasterwork</p>
                        </div>
                    </div>
                    <div className="py-4">
                        <ul className="flex flex-col gap-24 uppercase text-secondaryText">
                            <a href={"/"} className="text-sm cursor-pointer">Home</a>
                            <a href={"/about"} className="text-sm cursor-pointer">About</a>
                            <a href={"#home"} className="text-sm cursor-pointer">Galley</a>
                            <a href={"#home"} className="text-sm cursor-pointer">Contact</a>
                        </ul>
                    </div>   
                    </div>
                </div> */}
        </motion.nav>
    )
}
export default Navbar