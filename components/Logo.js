import React from 'react'
import { Box, Image} from '@chakra-ui/react'

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image src='/logo.png' w='60px' h='60px'></Image>
    </Box>
  )
}