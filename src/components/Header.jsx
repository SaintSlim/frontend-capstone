import { Flex, HStack, Image, List, ListItem, Spacer } from '@chakra-ui/react'
import React from 'react'

const routes = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];

export default function Header() {
  return (
    <header>
        <Flex display={"flex"} width={"full"} my={5} px={["20","40", "80"]} spacing={"40"} align={"center"} justifyContent={"center"}>
            <Image alt='Little Lemon Logo' src={require("../assets/littleLemonLogo.png")} width={250} objectFit={"contain"}/>
            <Spacer/>
            <nav>
                <List flexDirection={"row"}>
                    <HStack gap={10}>
                        {routes.map((route, index) =>
                        <ListItem key={index} fontWeight={'semibold'}><a href='/'>{route}</a></ListItem>)}
                    </HStack>
                </List>
            </nav>
        </Flex>
    </header>
  )
}
