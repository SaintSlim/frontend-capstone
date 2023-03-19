import { Heading, Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import TestimonialCard from './TestimonialCard'

function Testimonials() {
  return (
    <section>
        <Flex direction={"column"}>
            <Heading as={'h2'} textAlign={'center'} my={10}>Testimonials</Heading>
            <SimpleGrid columns={{base: 1, md: 2, lg: 4}} spacing={'16'} justify={'space-between'} my={10} mx={"auto"} width={"full"} maxW={'6xl'} px={{ base: "5", md: "10"}}>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </SimpleGrid>
        </Flex>
    </section>
  )
}

export default Testimonials