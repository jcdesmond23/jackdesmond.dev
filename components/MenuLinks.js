import { Box, Stack } from "@chakra-ui/react"
import MenuItem from "./MenuItem"

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
                <MenuItem to="" color='black' bg='white'>Work</MenuItem>
                <MenuItem to="" color='black' bg='white'>About</MenuItem>
                <MenuItem to="" color='black' bg='white'>Contact</MenuItem>
            </Stack>
        </Box>
   )
}