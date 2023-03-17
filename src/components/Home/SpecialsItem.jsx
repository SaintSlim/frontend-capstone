import React from 'react'
import { VStack, Image, Box, HStack, Heading, Text, Button,Spacer } from '@chakra-ui/react'
import { MdDeliveryDining } from 'react-icons/md'

function SpecialsItem({ src, title, price, description}) {
  return (
    <VStack role={'article'} bg={'#edefee'} borderTopRadius={16} maxW={'xs'}>
        <Image src={src} borderTopRadius={16} objectFit={'contain'} width={"full"}/>
        <Box display={'flex'} flexDirection={'column'} width={'full'} px={'5'}>
            <HStack display={"flex"} mt={5}>
                <Heading as={'h3'} size={"md"}>{title}</Heading>
                <Spacer/>
                <Text fontSize={"large"}>{price}</Text>
            </HStack>
            <Text mt={5}>{description}</Text>
            <Button alignSelf={"center"} my={5} bg={"#f4ce14"} rightIcon={<MdDeliveryDining />}>
                Order for delivery
            </Button>
        </Box>
    </VStack>
  )
}

export default SpecialsItem