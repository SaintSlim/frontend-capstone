import { Heading, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import TestimonialCard from './TestimonialCard'

function Testimonials() {
  return (
    <section>
        <Flex direction={"column"} px={["20","40", "60", "80"]}>
            <Heading as={'h2'} textAlign={'center'} my={10}>Testimonials</Heading>
            <Flex justify={'space-between'} my={10} w="full">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </Flex>
        </Flex>
    </section>
  )
}

export default Testimonials