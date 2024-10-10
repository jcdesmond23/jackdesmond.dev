import Container from '../components/Container'
import Head from 'next/head'
import { Text, Stack, Flex, Image, Box} from "@chakra-ui/react"

export default function About() {
  return (
    <Container>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <title>About</title>
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
                                    textAlign='left'
                                >
                                    I'm a software engineer at Cirkul and a graduate of Dartmouth College with intern experience at Amazon Robotics and Peoplelogic.
                                    Programming languages that I'm experienced in and comfortable with include Java, Python, C, Javascript, and TypeScript. For web development, I prefer working with the React and Tailwind CSS.
                                    I also have experience with Swift for iOS development. I am constantly working on new projects to learn emerging technologies and master the ones I already know.
                                </Text>
                            </Flex>
                            <Image
                                borderRadius='full'
                                maxH={300}
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
