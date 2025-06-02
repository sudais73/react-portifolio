import React from 'react'
const services = [
    {
        id:1,
        title:"Web Design",
        description:"Creating visually appearing and user-friendly web design"
    },
     {
        id:2,
        title:" Front-end Web Developer",
        description:"Creating visually appearing and user-friendly web design"
    },
     {
        id:3,
        title:"Back-end Web Developer",
        description:"Creating visually appearing and user-friendly web design"
    },
     {
        id:4,
        title:"Web Design",
        description:"Creating visually appearing and user-friendly web design"
    },
     {
        id:5,
        title:"Web Design",
        description:"Creating visually appearing and user-friendly web design"
    },
     {
        id:6,
        title:"Web Design",
        description:"Creating visually appearing and user-friendly web design"
    },
]
const Services = () => {
  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-10">My Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-3 gap-8'>
            {
                services.map((service)=>{
                    return <div key={service.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                            {service.id}

                        </div>
                        <h3 className='mt-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500'>{service.title}</h3>
                        <p className='mt-3 text-orange-300 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>{service.description}</p>
                        <a href="" className='bg-blue mt-3 text-center'>Read More</a>
                    </div>
                })
            }

        </div>
        </div>
        </div>


  )
}

export default Services
