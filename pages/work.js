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
                    Work.
                </Text>
            </Stack>
        </Flex>
    </Container>
  )
}
