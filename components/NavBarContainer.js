import { Flex } from "@chakra-ui/react"

export default function NavBarContainer({ children, ...props }) {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            position='fixed'
            wrap="wrap"
            w="100%"
            p={6}
            py={2}
            bg="white"
            color="black"
            boxShadow='sm'
            {...props}
        >
            {children}
        </Flex>
    )
}