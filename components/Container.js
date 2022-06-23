import NavBar from "./NavBar";
import { Flex } from "@chakra-ui/react";

export default function Container({ children, ...props }) {
    return (
        <>
            <NavBar/>
            <Flex
            pt={55}
            px={15}
            justifyContent='center'
            direction='column'
            as='main'
            {...props}>
                {children}
            </Flex>
        </>
    )
}
