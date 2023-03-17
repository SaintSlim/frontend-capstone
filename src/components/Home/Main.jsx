import { Box } from '@chakra-ui/react'
import React from 'react'
import Banner from '../Banner'
import Specials from './Specials'
import Testimonials from './Testimonials'

function Main() {
  return (
    <main>
        <Box mx={["xl", "2xl", "4xl"]}>
            <Banner/>
            <Specials />
            <Testimonials />
        </Box>
    </main>
  )
}

export default Main