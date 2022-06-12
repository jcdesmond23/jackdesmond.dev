import NavBar from "./navbar";
import { Flex } from "@chakra-ui/react";

export default function Container({ children, ...props }) {
    return (
        <>
            <NavBar/>
            <Flex
            py='20'
            justifyContent='center'
            direction='column'
            as='main'
            {...props}>
                {children}
            </Flex>
        </>
    )
}