import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Project({ description, image, source, title, tech}) {
   
    return (
        <div
            className='bg-white shadow-lg rounded-lg max-w-350px'
        >
            <div
            className='py-8 px-4'
            >
                <div className='flex flex-col items-center'>
                    <div className='border-radius-md align-self-center'>
                        <img
                            alt={title}
                            src={image}
                            className='max-h-150 border-radius-10'
                        />
                    </div>
                    <div className='flex flex-row'>
                        <h1 className='text-2xl font-extrabold'>{title}</h1>
                        <Link href={source}>
                            <button className='bg-white text-gray-500'>
                                <FaGithub size='1.25em'/>
                            </button>
                        </Link>
                    </div>
                    <div className='flex flex-row'>
                        {tech.map((obj) => (
                            <span className='bg-gray-100 text-gray-800 rounded-full'>
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