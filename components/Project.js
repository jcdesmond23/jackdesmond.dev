import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Project({ description, image, source, title, tech}) {
   
    return (
        <div
            className='bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700/50 rounded-lg w-[340px] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-[#369694]/10'
        >
            <div
            className='py-6 px-5'
            >
                <div className='flex flex-col space-y-5 items-center'>
                    <div className='overflow-hidden rounded-lg w-full'>
                        <img
                            alt={title}
                            src={image}
                            className='w-full h-[220px] object-contain hover:scale-105 transition-transform duration-300'
                        />
                    </div>
                    <div className='flex flex-row items-center w-full justify-between'>
                        <h1 className='text-gray-900 dark:text-white text-2xl font-bold tracking-tight'>{title}</h1>
                        <Link href={source}>
                            <button className='text-gray-700 dark:text-white flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-300'>
                                <FaGithub size='1.25em'/>
                            </button>
                        </Link>
                    </div>
                    <div className='flex flex-row flex-wrap gap-2 w-full'>
                        {tech.map((obj, index) => (
                            <span key={index} className='text-sm text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-gray-800/50 px-3 py-1 rounded-full font-medium'>
                                {obj}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed w-full">
                        {description}
                    </p>
                </div>
            </div>
        </div>
   )
}