import React from "react";
import Link from "next/link";

export default function FavouriteProjects() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Projects
          </h1>
          <Link href="/portfolio">
            <a className="mb-20 md:mb-10 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700">
              
              <p>More</p>
              
            </a>
          </Link>
        </header>

        <div className="grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40">
          <a
            href="https://heccubernny.vercel.app"
            className="w-full block col-span-3 shadow-2xl"
          >
            <div className="rounded-xl relative overflow-hidden">
              <img
                src="/Ikubanni_Paul.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Laravel Eccommerce
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>
          
          <a
            href="https://"
            className="w-full block col-span-3  sm:col-span-2 shadow-2xl"
          >
            <div className="rounded-xl relative overflow-hidden shadow-2xl">
              <div className="overlay absolute inset-0 bg-black bg-opacity-50 hover:bg-white hover:bg-opacity-10 z-10"></div>
              <img
                src="/Ikubanni_Paul.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Football
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                02
              </h1>
            </div>
          </a>
          <a
            href="https://Heccubernny.vercel.app"
            className="w-full block col-span-3 sm:col-span-1  object-cover"
          >
            <div className="rounded-xl relative overflow-hidden shadow-2xl">
              <div className="overlay absolute inset-0 bg-black bg-opacity-50 hover:bg-white hover:bg-opacity-10 z-10"></div>
              <img
                src="/Ikubanni_Paul.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                With
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                03
              </h1>
            </div>
          </a>
         
          

        </div>
      </div>
    </div>
  );
}
