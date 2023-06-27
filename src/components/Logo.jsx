import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const Logo = () => {
  return (

    <Link href="/">
       <motion.img
        className="w-[140px] sm:mr-8 mt-2 md:mt-0" 
        src="/assets/period-plasterwork-logo.png"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
      />
    </Link>
  )
}

export default Logo
