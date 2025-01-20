import Container from '../layouts/Container'
import Head from 'next/head'
import Project from '../components/Project'

export default function Work() {
  return (
    <Container>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <title>Work</title>
      </Head>
      <div className="flex justify-center pt-24 pb-24 w-full">
        <div className="flex flex-col items-center max-w-6xl w-full px-4">
          <div className="text-center mb-12 space-y-3">
            <h1 className="bg-gradient-to-r from-[#369694] to-[#44b7b5] bg-clip-text text-transparent text-5xl font-extrabold">
              Featured Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of projects I've built, from hackathon submissions to personal experiments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-6 gap-x-5 w-fit">
            <Project 
              title='HackDartmouthIX' 
              description='Led the development of the HackDartmouth IX website, featuring real-time registration tracking, dynamic schedule updates, and seamless sponsor integration.'  
              source='https://github.com/jcdesmond23/hackdartmouthix'
              tech={['Next.js', 'TypeScript', 'Tailwind']} 
              image='/HackDartmouthIX.png'
            />
            <Project title='HackDartmouthVIII' description='Built a fully responsive website for the 2023 Dartmouth hackathon.' source='https://github.com/jcdesmond23/hackdartmouthviii' tech={['React', 'TypeScript', 'Tailwind']} image='/HackDartmouthVIII.png'/>
            <Project title='Greenlight' description='iOS app designed to make Dartmouth greek life a safer space. Uses live OCR to scan student IDs and compares to blacklists keeping unsafe community members out. Won second place in the Empowerment category of the 2022 Dartmouth Hackathon' image='/greenlight.png' source='https://github.com/dartmouth-greenlight/GreenLight' tech={['Swift','SwiftUI']}></Project>
            <Project title='Stream Santa' description='Web app that prompts users to describe the ideal movie they would like to watch and predicts the streaming service that they are most likely to find that movie on.' image='/streamsanta.gif' source='https://github.com/jcdesmond23/StreamSanta' tech={['JS','React','Chakra UI','IBM Watson']}></Project>
            <Project title='Yodafy' description='iMessage app allowing the user to rearrange their message to sound like Jedi Master Yoda.' image='/yodafy.png' source='https://github.com/jcdesmond23/Yodafy' tech={['Swift']}></Project>
            <Project title='Portfolio' description='The beautiful website you are looking at right now.' image='/portfolio.png' source='https://github.com/jcdesmond23/jackdesmond.me' tech={['React','NextJS','Chakra UI','JS']}></Project>
          </div>
        </div>
      </div>
    </Container>
  )
}
