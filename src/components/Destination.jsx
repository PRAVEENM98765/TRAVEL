import React from 'react'
import maldives from './Assetes/maldives.jpg';
import paris from './Assetes/paris.jpg';
import switz from './Assetes/switz.jpg'
import usa from './Assetes/usa.jpg'
import india from './Assetes/india.jpg'
import japan from './Assetes/japan.jpg'


import { IoIosArrowDown } from "react-icons/io";


const Destination = () => {
  
  return (
  <div>
   <div className="bg-cover bg-bottom h-[70vh] bg-[url('../src/components/Assetes/destine.png')]">
   <div className=''>
   <h1 className='text-6xl font-bold text-white font-serif p-10 pt-48 ' >Destinations </h1>
   </div>
    </div>
     <div className='items-center flex  '> 
     <h1 className=' text-4xl font-semibold p-5 '> All Destination 
     </h1>
     <h1>
     <IoIosArrowDown  size={40}/>
     </h1>  
     </div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-4 text-center">
    {[
          {
            image: maldives,
            alt: "Maldives",
            name: "Maldives",
            navigate: "/maldives",
          },
        {
          image: paris,
          alt: "Paris",
          name: "Paris",
          navigate: "/paris",
        },
        {
          image: switz,
          alt: "SwitzerLand",
          name: "SwitzerLand",
          navigate: "/switz",
        },
        {
          image: usa,
          alt: "U.S.A",
          name: "U.S.A",
          navigate: "/usa",
        },
        {
          image: india,
          alt: "India",
          name: "India",
          navigate: "/india",
        },
        {
          image: japan ,
          alt: "Japan",
          name: "Japan",
          navigate: "/Childrens",
        },
      ].map((destine,index)=>(
        <div
        key={index}
        className="relative group py-4 sm:w-full md:w-auto"
      >
        <a href={destine.navigate}>
          {/* Image */}
          <img
            src={destine.image}
            alt={destine.alt}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg  transform group-hover:scale-105 transition-transform duration-300"
          />
          {/* Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100  duration-300 flex justify-center items-center rounded-lg">
            <h1 className="text-black text-lg sm:text-xl md:text-2xl font-bold text-center">
              {destine.name}
            </h1>
          </div>
        </a>
      </div>
      ))}
   
    </div>
  </div>
  )
}

export default Destination
