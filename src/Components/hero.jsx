import React from 'react'
import heroimg from "../assets/hero.jpg"
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16' id='hero'>
      <img src={heroimg} className='mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'  />
      <h1 className='text-4xl font-bold'>I'm {" "} 
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Sudais Aliyi </span>
      ,Full-Stack Web Developer</h1>
      <p className='mt-4 text-lg text-gray-400 '>I specialize in building modern and responsive website</p>
      <div className='mt-4 space-x-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact with me</button>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'> Resume</button>
      </div>
    </div>
  )
}

export default Hero
