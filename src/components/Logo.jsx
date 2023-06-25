import React from "react"
import { motion } from "framer-motion"

const Logo = () => {
  return (
    <a href="/">
       <motion.img
        className="w-[130px] sm:mr-8" 
        src="/assets/period-plasterwork-logo.png"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
      />
    </a>
  )
}

export default Logo
