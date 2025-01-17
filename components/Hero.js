import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import userData from "@constants/data";

export default function Hero() {
  
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings : [
        "Backend Developer", 
        "UI Designer", 
        "Statistician",
        "Data Scientist (Still in progress)"
        
      ],
      startDelay: 300,
      typeSpeed: 300,
      backSpeed: 100,
      backDelay: 100,
      showCursor: false,
      loop: true,
    })
  });

  return (
    <div className="max-w-6xl flex justify-center overflow-hidden container mx-auto md:flex-row flex-row">
      {/* Text container */}
     
      <div className="mx-auto text-center lg:p-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
      
      <h1 className="sm:text-4xl mb-4 text-white title-font text-6xl font-bold capitalize">Hey, I'm Heccubernny</h1>
      I'm a <span ref={el} className="text-4xl font-bold text-center"></span>     
      <p className="lg-inline-block text-xl font-medium"></p>
          <p className="mb-8 leading-relaxed text-xl font-medium">{userData.about.description}</p>
          <div className = "flex justify-center">
            <a href="/portfolio" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">See my Works</a>
            <a href="/contact" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Hire Me

            </a>
            <a href={userData.resumeUrl} className="ml-4 inline-flex text-white-800 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg shadow-lg">
              <p>Download CV</p>
              

            </a>
          </div>
      </div>

      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-0">
        <div className="w-3/4 ">
          <img src={userData.avatarUrl} alt="paul_oladayo" className=" shadow" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              
              <a href={userData.resumeUrl} className="ml-4 inline-flex text-white-800 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg shadow-lg">
              <p>Download CV</p>
              

            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
