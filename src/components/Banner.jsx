import { Box, Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

function Banner() {
  return (
    <banner>
         <Flex bg={'#495e57'} px={["20","40", "60", "80"]} direction={["column-reverse", "column-reverse", "row"]} align={"center"} my={5} py={10} position={"relative"} justify={"space-between"}>
            <Box maxW={{ base: "md", lg: "2xl"}} display={"flex"} flexDirection={"column"} gap={5}>
                <Heading as={"h1"} color={"#f4ce14"} size={"2xl"}>Little Lemon</Heading>
                <Heading as={"h2"} color={"white"} size={"xl"} textAlign={"left"}>Chicago</Heading>
                <Text fontSize={"xl"} color={"white"}> We are a familiy owned Meditteranean restaurant, focused on traditional recipes served with a modern twist</Text>
                <Button width={"50%"} borderRadius={16} alignSelf={'center'} bg={"#f4ce14"}>Reserve a table</Button>
            </Box>
            <Spacer/>
            <Box maxW={"-moz-fit-content"} display={'flex'}>
                <Image top={40} zIndex={20} objectFit={'cover'} alt='restaurant photo' src={require("../assets/restauranfood.jpg")} height={300} width={"60"} borderRadius={16}/>
            </Box>
        </Flex>
    </banner>
  )
}

export default Banner