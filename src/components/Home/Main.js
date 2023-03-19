import { Box } from '@chakra-ui/react'
import React from 'react'
import Banner from './Banner'
import Description from './Description'
import Specials from './Specials'
import Testimonials from './Testimonials'

function Main() {
  return (
    <main>
        <Box mx={["xl", "2xl","3xl","3xl"]}>
            <Banner/>
            <Specials />
            <Testimonials />
            <Description />
        </Box>
    </main>
  )
}

export default Main
