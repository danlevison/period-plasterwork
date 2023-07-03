import React from "react"
import Link from "next/link"
import Image from "next/image"


const Logo = ({handleNav}) => {
  return (

    <Link href="/" onClick={handleNav}>
       <Image
        className="w-[140px] mt-2 md:mt-0" 
        src="/assets/period-plasterwork-logo.png"
        alt="Period Plasterwork Logo"
        width={140}
        height={140}
        quality={80}
        priority
      />
    </Link>
  )
}

export default Logo
