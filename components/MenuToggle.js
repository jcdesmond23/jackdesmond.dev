import React from 'react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'

export default function MenuToggle({ toggle, isOpen }) {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen? <CloseIcon color='black'/> : <HamburgerIcon  boxSize='2em' color='black'/>}
        </Box>
    )
}