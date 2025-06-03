import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-40 ' id='navbar'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Sudais</div>
        <div className='space-x-6'>
            <Link  className='hover:text-gray-400 hover:bg-opacity-50'  to= "hero" smooth={true} duration={500}>Home</Link>
            <Link  className='hover:text-gray-400'  to="about" smooth={true} duration={500}>About</Link>
            <Link className='hover:text-gray-400'  to="services" smooth={true} duration={500}>Services</Link>
            <Link className='hover:text-gray-400'  to="project" smooth={true} duration={500}>Project</Link>
            <Link  className='hover:text-gray-400'  to="contact" smooth={true} duration={500}>Contact</Link>
        </div>
        <Link   className='bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' to= "contact" smooth={true} duration={500}>Contact Me</Link>
      </div>
    </div>
  )
}

export default Navbar
