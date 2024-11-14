import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Project({ description, image, source, title, tech}) {
   
    return (
        <div
            className='bg-white border border-grey rounded-lg max-w-[350px]'
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
                        <h1 className='text-2xl font-extrabold'>{title}</h1>
                        <Link href={source}>
                            <button className='bg-white text-black flex items-center justify-center ml-2'>
                                <FaGithub size='1.25em'/>
                            </button>
                        </Link>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        {tech.map((obj) => (
                            <span className='bg-white border border-grey px-2 py-1 text-gray-800 rounded-xl'>
                                {obj}
                            </span>
                        ))}
                    </div>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
   )
}