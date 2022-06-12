import { Center, Text, Stack, Flex} from "@chakra-ui/react"

export default function Hero() {
   
    return (
        <Flex justifyContent='center' py={200} px={10}>
            <Stack direction='column' spacing={2} align='center'> 
                <Text
                    bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                >
                    Hi, I'm Jack.
                </Text>
                <Text
                    bg='black'
                    bgClip='text'
                    fontSize='3xl'
                    textAlign='center'
                >
                    I'm a computer science major at Dartmouth College
                </Text>
            </Stack>
        </Flex>
   )
}