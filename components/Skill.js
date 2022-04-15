import {HiBadgeCheck  } from "react-icons/hi";
import React from "react";
import userData from "@constants/data";

export default function Skill() {
  return (
    <section id="skill">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Skill &amp; Technologies
          </h1>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <HiBadgeCheck className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                {userData.skill.tech}
                </span>

              </div>
            </div>
        </div>
        </div>

        
      </div>
    </section>
  );
}