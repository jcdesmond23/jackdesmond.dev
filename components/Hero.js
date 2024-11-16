import Link from "next/link"

export default function Hero() {
    return (
        <div className="flex justify-center py-52 px-10">
            <div className="flex flex-col items-center space-y-2">
                <h1 className="bg-[#369694] bg-clip-text text-transparent text-3xl md:text-6xl font-extrabold text-center">
                    Hi, I'm Jack.
                </h1>
                <p className="bg-black dark:bg-white bg-clip-text text-transparent text-xl md:text-3xl text-center">
                    I'm a software engineer at Cirkul and a Dartmouth College graduate
                </p>
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 pt-5">
                    <Link href='work'>
                        <button className="text-white rounded-full px-6 py-1 bg-[#369694] hover:bg-[#2a7472]">
                            My Work
                        </button>
                    </Link>
                    <Link href='about'>
                        <button className="rounded-full px-6 py-1 border border-grey dark:bg-bg-gray-100 dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-gray-100">
                            About Me
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}