import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import BookingForm from './BookingForm'

function Main() {
  return (
    <main>
      <Flex direction={'column'} px={["20","40", "60", "80"]}>
        <Heading as={'h1'} my={10}>Make Reservation</Heading>
      </Flex>
      <Flex direction={'column'}>
        <BookingForm />
      </Flex>
    </main>
  )
}

export default Main