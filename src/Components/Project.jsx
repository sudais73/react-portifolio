import React from 'react'
import aboutimg from "../assets/hero.jpg";


const projects= [
    {
        id:1,
        name: "Employee Management System",
        technology: "Mern-Stack",
        image:aboutimg,
        github:"https://github.com"
    },
      {
        id:1,
        name: "Employee Management System",
        technology: "Mern-Stack",
        image:aboutimg,
        github:"https://github.com/sudais73/amazon"
    },
      {
        id:1,
        name: "Employee Management System",
        technology: "Mern-Stack",
        image:aboutimg,
        github:"https://github.com"
    }
]
const Project = () => {
  return (
   <div className="bg-black text-white py-20 " id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-10">My Latest Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-3 gap-8'>
{projects.map((p=>(
    <div className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
        <img src= {p.image} className='rounded-lg w-full h-48 object-cover mb-3' />
        <h3 className='text-2xl font-bold mb-2'>{p.name}</h3>
        <p className='text-gray-400 mb-4'>{p.technology}</p>
        <a href={p.github} className='inline-block bg-gradient-to-r from green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferre'>View Demo</a>

    </div>
)))}
      </div>
    </div>
    </div>
  )
}

export default Project
