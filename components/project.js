import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Project({ description, image, source, title, tech}) {
   
    return (
        <div
            className='dark:bg-black bg-white border border-grey dark:border-gray-800 rounded-lg max-w-[350px]'
        >
            <div
            className='py-8 px-4'
            >
                <div className='flex flex-col space-y-4 items-center'>
                    <div className='border-radius-md align-self-center'>
                        <img
                            alt={title}
                            src={image}
                            className='max-h-[150px] border-radius-10'
                        />
                    </div>
                    <div className='flex flex-row items-center'>
                        <h1 className='dark:text-white text-2xl font-bold'>{title}</h1>
                        <Link href={source}>
                            <button className='dark:text-white text-black flex items-center justify-center ml-2 p-2 rounded-full dark:hover:bg-gray-800'>
                                <FaGithub size='1.25em'/>
                            </button>
                        </Link>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        {tech.map((obj) => (
                            <span className='dark:text-[#369694] border border-grey dark:border-gray-800 px-2 py-1 text-gray-800 rounded-xl'>
                                {obj}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-500">
                        {description}
                    </p>
                </div>
            </div>
        </div>
   )
}