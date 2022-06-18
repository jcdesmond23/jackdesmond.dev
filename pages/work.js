import Container from '../components/Container'
import Head from 'next/head'
import { Text, Stack, Flex, Image, Box, SimpleGrid} from "@chakra-ui/react"
import Project from '../components/project'

export default function About() {
  return (
    <Container>
      <Head>
        <title>Home - Jack Desmond</title>
      </Head>
      <Flex justifyContent='center' py={55} px={10}>
            <Stack spacing={8} align='center' dir='column'> 
                <Text
                    bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                    textAlign='center'
                >
                    My Work.
                </Text>
                <SimpleGrid columns={[1,1,2,2]} spacing={10}>
                    <Project title='Greenlight' description='iOS app designed to make Dartmouth greek life a safer space. Uses live OCR to scanner student IDs and compares to blacklists keep unsafe community members away. 2nd place winner in empowerment category of the 2022 Dartmouth Hackathon' image='/greenlight.png' source='https://github.com/dartmouth-greenlight/GreenLight' tech={['Swift','SwiftUI']}></Project>
                    <Project title='Stream Santa' description='Web app that takes prompts a user to input the ideal movie they would like to watch based on serveral descriptors and predicts the streaming service that they are most likly to find that movie on.' image='/streamsanta.gif' source='https://github.com/jcdesmond23/StreamSanta' tech={['JS','React','Chakra UI','IBM Watson']}></Project>
                    <Project title='Yodafy' description='iMessage app that allows the user to translate or rearrange their text to sound like the jedi master Yoda.' image='/yodafy.png' source='https://github.com/jcdesmond23/Yodafy' tech={['Swift']}></Project>
                    <Project title='Portfolio' description='The beautiful website you are looking at right now.' image='/portfolio.png' source='https://github.com/jcdesmond23/jackdesmond.me' tech={['React','NextJS','Chakra UI','JS']}></Project>
                </SimpleGrid>
            </Stack>
        </Flex>
    </Container>
  )
}
