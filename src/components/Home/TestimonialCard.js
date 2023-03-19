import { HStack, Stack, Text, Icon, Spacer, Heading } from '@chakra-ui/react'
import React from 'react'
import { RxAvatar } from 'react-icons/rx'

function TestimonialCard({name = "John Doe", review ="review Text"}) {
  return (
    <Stack role={'article'} bg={'#edefee'} w={'full'} maxW={{base: 's', md: "xs", lg: '2xs'}} px={'5'} my={2} py={2} borderRadius={10}>
       <Heading size={'md'}>Rating</Heading>
       <HStack width={'full'}>
            <Icon as={RxAvatar} fontSize={"5xl"}/>
            <Spacer />
            <Heading as={'h3'} size={'md'}>{name}</Heading>
       </HStack>
       <HStack>
        <Heading>"</Heading>
        <Text>{review}</Text>
       </HStack>
    </Stack>
  )
}

export default TestimonialCard