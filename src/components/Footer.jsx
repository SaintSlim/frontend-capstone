import { HStack, Image, VStack, List, ListItem, Text, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

const routes = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];

const contact = ["Adress", "phone number", "email"]

const socials = ['facebook']

function Footer() {
  return (
    <footer style={{ bottom: 0, width: "100%",}}>
        <Spacer/>
            <HStack bg={"blue.100"} spacing={"40"} py={"24"} justifyContent={"center"} alignItems={"center"} >
                <Image src={require("../assets/footer_logo.png")} objectFit={"contain"} width={100} />
                <VStack display={"flex"} alignItems={'center'} justifyContent={"center"}>
                    <Heading as={'h3'} size={'l'}>Doormat Navigation</Heading>
                    <List>
                        {routes.map((route, index) => <ListItem key={index}><a href='/'>{route}</a></ListItem>)}
                    </List>
                </VStack>
                <VStack display={"flex"} alignItems={'center'} justifyContent={"center"}>
                    <Heading as={'h3'} size={'l'}>Contact us</Heading>
                    <List>
                        {routes.map((route, index) => <ListItem key={index}><a href='/'>{route}</a></ListItem>)}
                    </List>
                </VStack>
                <VStack display={"flex"} alignItems={'center'} justifyContent={"center"}>
                    <Heading as={'h3'} size={'l'}>Social</Heading>
                    <List alignItems={"center"} justifyContent={"center"}>
                        {routes.map((route, index) => <ListItem key={index}><a href='/'>{route}</a></ListItem>)}
                    </List>
                </VStack>
            </HStack>
        <Spacer/>
    </footer>
  )
}

export default Footer