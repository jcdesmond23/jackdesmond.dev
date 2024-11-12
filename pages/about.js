import Head from 'next/head'

export default function About() {
  return (
    <div className="container mx-auto">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <title>About</title>
      </Head>
      <div className="flex justify-center py-14 px-4">
        <div className="space-y-8 text-center">
          <h1 className="bg-gradient-to-r from-gray-300 via-yellow-400 to-pink-200 bg-clip-text text-transparent text-6xl font-extrabold">
            About Me.
          </h1>
          <div className="bg-white mx-8 flex shadow-lg rounded-lg">
            <div className="py-12 px-6">
              <div className="space-y-10 flex flex-col md:flex-row items-center">
                <div className="max-w-md">
                  <p className="text-black font-normal text-left">
                    I'm a software engineer at Cirkul and a graduate of Dartmouth College with intern experience at Amazon Robotics and Peoplelogic.
                    Programming languages that I'm experienced in and comfortable with include Java, Python, C, Javascript, and TypeScript. For web development, I prefer working with the React and Tailwind CSS.
                    I also have experience with Swift for iOS development. I am constantly working on new projects to learn emerging technologies and master the ones I already know.
                  </p>
                </div>
                <img
                  className="rounded-full max-h-72"
                  src='/headshot.jpeg'
                  alt='Jack Desmond'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
