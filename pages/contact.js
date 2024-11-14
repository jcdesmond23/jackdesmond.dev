import Container from '../components/Container'
import Head from 'next/head'
import { FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <Container>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <title>Contact</title>
      </Head>
      <div className="flex justify-center py-52 px-10">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="bg-[#369694] bg-clip-text text-transparent text-5xl md:text-6xl lg:text-8xl font-extrabold text-center">
            Contact Me.
          </h1>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2 border border-[#369694] text-black px-3 py-1 rounded-full">
              <FaEnvelope className="w-3 h-3" />
              <span>jackson.c.desmond.24@dartmouth.edu</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}