import Head from 'next/head'
import Container from '../layouts/Container'

export default function About() {
  return (
    <Container>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <title>About</title>
      </Head>
      <div className="flex justify-center pt-24 pb-24">
        <div className="space-y-8 text-center">
          <h1 className="bg-gradient-to-r from-[#369694] to-[#44b7b5] bg-clip-text text-transparent text-5xl font-extrabold">
            About Me
          </h1>
          <div className="bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700/50 rounded-lg mx-8 flex transform transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-cyan-500/10">
            <div className="py-8 px-8">
              <div className="space-x-10 flex flex-col md:flex-row items-center gap-8">
                <div className="max-w-md">
                  <p className="text-gray-600 dark:text-gray-300 text-left leading-relaxed">
                    I'm a software engineer at Cirkul and a graduate of Dartmouth College with intern experience at Amazon Robotics and Peoplelogic.
                    Programming languages that I'm experienced in and comfortable with include Java, Python, C, Javascript, and TypeScript. For web development, I prefer working with the React and Tailwind CSS.
                    I also have experience with Swift for iOS development. I am constantly working on new projects to learn emerging technologies and master the ones I already know.
                  </p>
                </div>
                <img
                  className="rounded-full max-h-72 hover:scale-105 transition-transform duration-300"
                  src='/headshot.jpeg'
                  alt='Jack Desmond'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
