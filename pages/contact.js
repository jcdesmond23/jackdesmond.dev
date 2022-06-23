import Container from '../components/Container'
import Head from 'next/head'
import { Text, VStack, HStack, Flex, Tag, TagLabel, TagLeftIcon} from "@chakra-ui/react"
import { EmailIcon } from '@chakra-ui/icons'

export default function Contact() {
  return (
    <Container>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <title>Contact</title>
      </Head>
      <Flex justifyContent='center' py={200} px={10}>
            <VStack spacing={2} align='center'> 
                <Text
                    bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
                    bgClip='text'
                    fontSize={['6xl','6xl','8xl','8xl']}
                    fontWeight='extrabold'
                    textAlign='center'
                >
                    Contact Me.
                </Text>
                <HStack spacing={4}>
                    <Tag size='lg' variant='subtle' colorScheme='red' borderRadius='full'>
                        <TagLeftIcon boxSize='12px' as={EmailIcon} />
                        <TagLabel>jackson.c.desmond.24@dartmouth.edu</TagLabel>
                    </Tag>
                </HStack>
            </VStack>
        </Flex>
    </Container>
  )
}