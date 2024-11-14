import Container from '../components/Container'
import Head from 'next/head'
import Project from '../components/project'

export default function About() {
  return (
    <Container>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <title>Work</title>
      </Head>
      <div className="flex justify-center py-14 px-10">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="bg-[#369694] bg-clip-text text-transparent text-6xl font-extrabold text-center">
            My Work.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Project title='HackDartmouthVIII' description='Built a fully responsive website for the 2023 Dartmouth hackathon.' source='https://www.hackdartmouth.org' tech={['React', 'TypeScript', 'Tailwind']} image='/HackDartmouthVIII.png'></Project>
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
