import Link from "next/link"
import MenuItem from "./MenuItem"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { useState, useEffect } from 'react'

export default function MenuLinks({isOpen}) {
   const [isDarkMode, setIsDarkMode] = useState(false);

   useEffect(() => {
     if (isDarkMode) {
       document.documentElement.classList.add('dark')
     } else {
       document.documentElement.classList.remove('dark')
     }
   }, [isDarkMode])

   const toggleDarkMode = () => {
     setIsDarkMode(!isDarkMode)
   }

   return (
        <div className={`flex ${isOpen ? "block" : "hidden"} md:block flex-basis-auto`}>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-8 md:space-y-0 md:space-x-8 pt-4 md:pt-0"> 
                <MenuItem to="/work" className="text-black bg-white dark:text-white dark:bg-gray-800">Work</MenuItem>
                <MenuItem to="/about" className="text-black bg-white dark:text-white dark:bg-gray-800">About</MenuItem>
                <MenuItem to="/contact" className="text-black bg-white dark:text-white dark:bg-gray-800">Contact</MenuItem>
                <Link href='https://github.com/jcdesmond23'>
                    <button className="bg-white dark:bg-gray-800 rounded-full p-2">
                        <FaGithub size='1.5em' className="text-black dark:text-white"/>
                    </button>
                </Link>
                <Link href='https://www.linkedin.com/in/jack-desmond-052301/'>
                    <button className="bg-white dark:bg-gray-800 rounded-full p-2">
                        <FaLinkedin size='1.5em' className="text-black dark:text-white"/>
                    </button>
                </Link>
                <button
                    onClick={toggleDarkMode}
                    className="w-10 h-5 bg-gray-300 rounded-full flex items-center transition duration-300 focus:outline-none shadow"
                >
                    <div
                        className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                            isDarkMode ? "translate-x-5 bg-blue-500" : "translate-x-0 bg-white"
                        }`}
                    ></div>
                </button>
            </div>
        </div>
   )
}