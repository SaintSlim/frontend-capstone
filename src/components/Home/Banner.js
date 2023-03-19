import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Banner() {
  return (
    <Flex role={'banner'} bg={"#495e57"} position={"relative"} direction={"column"}>
        <Container zIndex={20} px={{ base: "10"}} width={"full"} maxW={"6xl"} mt={5}>
          <Heading as={"h1"} color={"#f4ce14"} size={{base: "xl", lg: "2xl"}}>Little Lemon</Heading>
          <Heading as={"h2"} color={"white"} size={{ base: "lg", lg:"xl"}} textAlign={"left"}>Chicago</Heading>
        </Container>
        <Container zIndex={20} display={"flex"} justifyContent={'space-between'} px={{ base: "10"}} my={5} width={"full"} maxW={"6xl"}>
            <Box maxW={{ base: "lg", lg: "xl"}} width="full" display={"flex"} flexDirection={"column"} gap={3}>
                <Text fontSize={{ base:"md", md: "lg", lg:"xl"}} maxW={{base:"xs", sm:"sm", md: "sm", lg: "md"}} color={"white"}> We are a familiy owned Meditteranean restaurant, focused on traditional recipes served with a modern twist</Text>
                <a href='/reservations'><Button width={"50%"} borderRadius={16} alignSelf={'center'} bg={"#f4ce14"}>Reserve a table</Button></a>
            </Box>
            <Box display={'flex'} alignSelf={'flex-end'} height={{base: 150, md: 200, lg:300}} width={{base:200, lg:300}}>
                <Image width={'full'} height={'full'} zIndex={20} objectFit={'cover'} alt='restaurant photo' src={require("../../assets/restauranfood.jpg")} borderRadius={16}/>
            </Box>
        </Container>
        <Box zIndex={10} bg={'white'} position={'absolute'} width={"full"} bottom={0} height={{ base:"10", md: "16", lg:"28"}}/>
    </Flex>
  )
}

export default Banner