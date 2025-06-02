import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
          <div className='flex-1 mb-4 md:mb-0'>
            <h3 className='text-2xl font-bold mb-2'>Sudais</h3>
            <p className='text-gray-400'>Full-Stack Web Developer based in the Ethiopia, specializeing in web development</p>
          </div>
          <div className='flex-1 w-full'>
            <form className='flex items-center justify-center'>
              <input type="email"className='w-full p-2 rounded-1-lg bg-gray-600 
                  border border-gray-600 focus:outline-none focus:border-green-400 mr-2 ' 
                  placeholder='Enter Your Email' />
              <button type='summit' className='bg-gradient-to-r from-yellow-400 to-blue-500 
         md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-1' >Subscribe</button>
            </form>
          </div>
            
        </div>

        <div className='flex flex-col space-y-10 md:flex-row justify-between'>
          <p> &copy; {new Date().getFullYear()}</p>
          <div className='flex space-x-10'>
            <a href=""> <FaFacebook/></a>
            <a href=""> <FaLinkedin/></a>
            <a href=""> <FaTelegram/></a>
            <a href=""> <FaGithub/></a>
          </div>
          <div className='flex space-x-5'>
            <a href="">Privcy</a>
            <a href="">Terms of use</a>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
