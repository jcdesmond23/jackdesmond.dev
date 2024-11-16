import Link from "next/link"
import MenuItem from "./MenuItem"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { useState } from 'react'

export default function MenuLinks({isOpen}) {
    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark')
      }

   return (
        <div className={`flex ${isOpen ? "block" : "hidden"} md:block flex-basis-auto`}>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-8 md:space-y-0 md:space-x-8 pt-4 md:pt-0"> 
                <MenuItem to="/work" className="dark:text-gray-500 dark:hover:text-white text-black">Work</MenuItem>
                <MenuItem to="/about" className="dark:text-gray-500 dark:hover:text-white text-black">About</MenuItem>
                <MenuItem to="/contact" className="dark:text-gray-500 dark:hover:text-white text-black">Contact</MenuItem>
                <Link href='https://github.com/jcdesmond23'>
                    <button className="p-2 rounded-full dark:hover:bg-gray-800">
                        <FaGithub size='1.5em' className="dark:text-white text-black"/>
                    </button>
                </Link>
                <Link href='https://www.linkedin.com/in/jack-desmond-052301/'>
                    <button className="p-2 rounded-full dark:hover:bg-gray-800">
                        <FaLinkedin size='1.5em' className="dark:text-white text-black"/>
                    </button>
                </Link>
                <button
                    onClick={toggleTheme}
                    className="w-10 h-5 bg-gray-300 rounded-full flex items-center transition duration-300 focus:outline-none shadow"
                >
                    <div
                        className="w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 dark:translate-x-5 dark:bg-[#369694] translate-x-0 bg-white"
                    ></div>
                </button>
            </div>
        </div>
   )
}