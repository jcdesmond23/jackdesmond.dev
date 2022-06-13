import Link from "next/link"
import { Box, Stack, IconButton, Spacer } from "@chakra-ui/react"
import MenuItem from "./MenuItem"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function MenuLinks({isOpen}) {
   return (
        <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
            spacing={8}
            align="center"
            justify={["center", "center", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
            > 
                <MenuItem to="/work" color='black' bg='white'>Work</MenuItem>
                <MenuItem to="/about" color='black' bg='white'>About</MenuItem>
                <MenuItem to="/contact" color='black' bg='white'>Contact</MenuItem>
                <Link href='https://github.com/jcdesmond23'>
                    <IconButton icon={<FaGithub size='1.5em'/>} bg='white' size='lg' rounded='full'/>
                </Link>
                <Link href='https://www.linkedin.com/in/jack-desmond-052301/'>
                    <IconButton icon={<FaLinkedin size='1.5em'/>} bg='white' size='lg' rounded='full'/>
                </Link>
            </Stack>
        </Box>
   )
}