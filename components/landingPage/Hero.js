import React from 'react'
import { FaChevronCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
        <section className="text-gray-600 body-font bg-red-300">
    <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Build Your Professional Resume Effortlessly.
          <br className="hidden lg:inline-block"/>
        </h1>
        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div className="flex justify-center">
          <button className="inline-flex  items-center bg-yellow-500 border-0 py-2 px-6 focus:outline-none text-black hover:text-black hover:bg-white rounded text-lg">Get Started! <FaChevronCircleRight className='ml-2' /> </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-vector/tech-company-concept-illustration_114360-9779.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1700784000&semt=ais"/>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Hero