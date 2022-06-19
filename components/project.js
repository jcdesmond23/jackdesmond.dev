import Link from "next/link"
import { Text, Stack, Box, IconButton, Tag, TagLabel, Image, Flex, Center} from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"

export default function Project({ description, image, source, title, tech}) {
   
    return (
        <Box
            bg='white'
            shadow='lg'
            rounded='lg'
            maxWidth='350px'
        >
            <Box
            py={8}
            px={4}
            >
                <Stack spacing={3} direction='column' align='center'>
                    <Flex
                        borderRadius='md'
                        alignSelf='center'
                    >
                        <Image
                            alt={title}
                            src={image}
                            maxHeight={150}
                            borderRadius={10}
                        />
                    </Flex>
                    <Stack direction='row' spacing={1}>
                        <Text fontSize='2xl' fontWeight='extrabold'>{title}</Text>
                        <Link href={source}>
                            <IconButton icon={<FaGithub size='1.25em'/>} bg='white' variant='link' position='unset'></IconButton>
                        </Link>
                    </Stack>
                    <Stack direction='row'>
                        {tech.map((obj) => (
                            <Tag variant='subtle' colorScheme='gray' borderRadius='full'>
                                <TagLabel>{obj}</TagLabel>
                            </Tag>
                        ))}
                    </Stack>
                    <Text>
                        {description}
                    </Text>
                </Stack>
            </Box>
        </Box>
   )
}