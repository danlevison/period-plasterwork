import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <footer className="flex justify-around items-center w-full h-14">
	    <p>Copyright &copy; <span>{currentYear}</span></p>
    </footer>
  )
}

export default Footer