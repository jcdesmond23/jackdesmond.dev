import Container from '../components/Container'
import Head from 'next/head'
import { Text, Stack, Flex, Image, Box} from "@chakra-ui/react"

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
                    About Me.
                </Text>
                <Box
                    bg='white'
                    mx={8}
                    display='flex'
                    shadow='lg'
                    rounded='lg'
                >
                    <Box
                    py={12}
                    px={6}
                    >
                        <Stack spacing={10} direction={['column', 'column', 'row', 'row']} align='center'>
                            <Flex maxW='500'>
                                <Text
                                    bg='black'
                                    bgClip='text'
                                    fontWeight='base'
                                    textAlign='center'
                                >
                                    I was raised in Wellesley, Massachusetts and attended The Rivers School for high school. I have a younger sister who is a Dartmouth '25 as well as a younger brother. Growing up, I was a huge Boston sports fan. I took every chance I could get to rock my Red Sox hats and Celtics jersey. My early years also injected a passion for travel in me. Today, airports are my favorite places to be and unlike most of the population, I can't wait until the next time I travel by air. Now, I'm set to graduate from Dartmouth in 2024. Some of my innvolvements on campus include the Dartmouth sports analytics club and the Dartmouth Rugby Football Club. Programming languages that I'm experienced in and comfortable with include Java, Python, R, and Javascript. For web development, I have experience with the ReactJS library and Next.js framework. I have also had some experience with Swift for mobile development. I am always eager to learn new technologies and work to master the ones I already know.
                                </Text>
                            </Flex>
                            <Image
                                borderRadius='full'
                                boxSize='300px'
                                src='/headshot.jpeg'
                                alt='Jack Desmond'
                            />
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </Flex>
    </Container>
  )
}
