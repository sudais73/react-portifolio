import React from 'react'
import {FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-10 text-orange-500">Contact me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <div className='flex-1'>
          <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'> Let's Talk</h1>
          <p className='font-bold mb-2'>I'm open to discussing web development projects or partnership opportunities </p>
          <div className='mb-4'>
            <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
            <a href="mailto:sudaisman193@gmail.com" className='hover:underline'>sudaisman193@gmail.com</a>
          </div>

           <div className='mb-4'>
            <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
            <span> +25996518048</span>
          </div>
           <div className='mb-4'>
            <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
            <span> Shashamane, Oromia, Ethiopia</span>
          </div>
        </div>
           <div className='flex-1 w-full'>
              <form className='space-y-4'>
                <div>
                  <label htmlFor="name" className='block mb-2'>Your Name</label>
                  <input type="text"className='w-full mt-4 p-2 rounded bg-gray-800 
                  border border-gray-600 focus:outline-none focus:border-green-400 ' 
                  placeholder='Enter Your Name' />
                </div>

                <div>
                  <label htmlFor="name" className='block mb-2'>Your Email</label>
                  <input type="email"className='w-full mt-4 p-2 rounded bg-gray-800 
                  border border-gray-600 focus:outline-none focus:border-green-400 ' 
                  placeholder='Enter Your Email' />
                </div>

                 <div>
                  <label htmlFor="message" className='block mb-2'>Your Messaage</label>
                  <textarea type="mesage"className='w-full mt-4 p-2 rounded bg-gray-800 
                  border border-gray-600 focus:outline-none focus:border-green-400 ' 
                  placeholder='Messaage Here' rows="5" />
                </div>
        <button className='bg-gradient-to-r from-yellow-400 to-blue-500 
         md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                
              </form>
           </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Contact
