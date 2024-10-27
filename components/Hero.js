import Link from "next/link"
import { Text, Stack, Flex, Button} from "@chakra-ui/react"

export default function Hero() {
   
    return (
        <Flex justifyContent='center' py={200} px={10}>
            <Stack direction='column' spacing={2} align='center'> 
                <Text
                    bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
                    bgClip='text'
                    fontSize={['5xl','5xl','6xl','6xl']}
                    fontWeight='extrabold'
                    textAlign='center'
                >
                    Hi, I'm Jack.
                </Text>
                <Text
                    bg='black'
                    bgClip='text'
                    fontSize={['2xl','2xl','3xl','3xl']}
                    textAlign='center'
                >
                    I'm a software engineer at Cirkul and a Dartmouth College graduate
                </Text>
                <Stack spacing={6} direction={['column','column','row','row']} pt={5}>
                    <Link href='work'>
                        <Button
                            rounded={'full'}
                            position='static'
                            px={6}
                            colorScheme={'pink'}
                            bg={'pink.300'}
                            _hover={{ bg: 'pink.200' }}>
                            My Work
                        </Button>
                    </Link>
                    <Link href='about'>
                        <Button rounded={'full'} px={6} bg={'gray.200'} _hover={{ bg: 'gray.100' }} position='static'>
                            About Me
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Flex>
   )
}