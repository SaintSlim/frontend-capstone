import React from 'react'
import { Stack, Image, Box, Heading, Text, Button,Spacer, Flex } from '@chakra-ui/react'
import { MdDeliveryDining } from 'react-icons/md'

function SpecialsItem({ src, title, price, description}) {
  return (
    <Stack position={'relative'} direction={{ base:"row-reverse", lg: "column"}} my={10} role={'article'} bg={'#edefee'} borderTopRadius={16} width={'full'} maxW={{base:"6xl",lg:'xs',}}>
        <Image src={src} borderTopRadius={16} objectFit={'cover'} height={80} alignSelf={"center"} maxH={{ base: "3xs", lg:"full"}} maxW={{ base: "3xs", lg: "full"}} width={"full"}/>
        <Flex justify={'space-between'} direction={'column'} width={'full'} px={'5'}>
            <Stack direction={{base:"column", md: "row"}} display={"flex"} mt={5}>
                <Heading as={'h3'} size={"md"}>{title}</Heading>
                <Spacer/>
                <Text fontSize={"large"}>{price}</Text>
            </Stack>
            <Box>
              <Text mt={5}>{description}</Text>
            </Box>
            <Button display={{ lg: "none"}} alignSelf={"center"} my={5} bg={"#f4ce14"} rightIcon={<MdDeliveryDining />}>
                  Order for delivery
            </Button>
        </Flex>
        <Spacer/>
        <Box  display={{ base: "none", lg: 'flex'}} w={'full'} justifyContent={'center'}>
              <Button alignSelf={"center"} my={5} bg={"#f4ce14"} rightIcon={<MdDeliveryDining />}>
                  Order for delivery
              </Button>
        </Box>
    </Stack>
  )
}

export default SpecialsItem