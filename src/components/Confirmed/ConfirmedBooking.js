import React from 'react'
import { Alert, AlertIcon, AlertDescription, AlertTitle } from '@chakra-ui/react'

function ConfirmedBooking() {
  return (
    <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
    >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
            Reservation booked!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
            Thanks for making a reservation. We look forward to seeing you soon.
        </AlertDescription>
    </Alert>
  )
}

export default ConfirmedBooking