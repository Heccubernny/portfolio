import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import {FaLinkedinIn, FaDribbble, FaTwitter, FaGithub, FaLightbulb, FaMoon } from "react-icons/fa";
import {SiHashnode} from "react-icons/si";
import userData from "constants/data";

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="">
      <div className="flex md:flex-row justify-between items-center px-4 py-10 mx-auto max-w-6xl md:py-20">
        

        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="font-semibold text-xl dark:text-gray-100">
                {userData.name}
              </h1>
              <p className="text-base font-light text-gray-500 dark:text-gray-300">
                {userData.designation}
              </p>
            </a>
          </Link>
        </div>

        {/* The Menu Link */}

        <div className="space-x-8 hidden md:block flex flex-col md:flex-row">
        <Link href="/">
            <a
              className={`text-base  ${
                router.asPath === "/about"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              HOME{" "}
              {router.asPath === "/about"}
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`text-base  ${
                router.asPath === "/about"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              ABOUT{" "}
              {router.asPath === "/about"}
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={`text-base  ${
                router.asPath === "/portfolios"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              PORTFOLIO{" "}
              {router.asPath === "/portfolio"}
            </a>
          </Link>

          <Link href="/article">
            <a
              className={`text-base  ${
                router.asPath === "/articles"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              ARTICLE{" "}
              {router.asPath === "/article"}
            </a>
          </Link>

          <Link href="/experience">
            <a
              className={`text-base  ${
                router.asPath === "/experience"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              TIMELINE{" "}
              {router.asPath === "/experience"}
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={`text-base  ${
                router.asPath === "/contact"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              CONTACT
              {router.asPath === "/contact"}
            </a>
          </Link>
        </div>

        {/* Social Links */}

        <div className="space-x-4 flex flex-row items-center">
          <a
            href={userData.socialLinks.dribbble}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          > < FaDribbble />
          </a>

          <a
            href={userData.socialLinks.hashnode}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          > < SiHashnode />
          </a>
          <a
            href={userData.socialLinks.twitter}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          ><FaTwitter />
            
          </a>
          <a
            href={userData.socialLinks.linkedin}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={userData.socialLinks.github}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          ><FaGithub />
            
          </a>
          <button
            aria-label="Light Mode Toggler"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className={FaLinkedinIn}
              >
                {theme === "dark" ? (
                  <FaLightbulb width="40" />
                ) : (
                  <FaMoon/>
                )}
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="space-x-4 flex md:flex-row justify-center flex-wrap items-center px-4 py-10 mx-auto max-w-6xl md:py-20 md:hidden">
        <Link href="/">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            HOME
          </a>
        </Link>
        <Link href="/about">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            ABOUT
          </a>
        </Link>
        <Link href="/portfolio">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            PORTFOLIO
          </a>
        </Link>
        <Link href="/article">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            ARTICLE
          </a>
        </Link>
        <Link href="/timeline">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            TIMELINE
          </a>
        </Link>
        <Link href="/contact">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
          CONTACT
          </a>
        </Link>
      </div>
    </div>
  );
}
