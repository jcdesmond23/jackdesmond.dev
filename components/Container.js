import NavBar from "./Navbar";
import { Flex } from "@chakra-ui/react";

export default function Container({ children, ...props }) {
    return (
        <>
            <NavBar/>
            <Flex
            pt={55}
            justifyContent='center'
            direction='column'
            as='main'
            {...props}>
                {children}
            </Flex>
        </>
    )
}
