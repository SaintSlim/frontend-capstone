import { HStack, Image, VStack, List, ListItem, Text, Heading, Spacer, Box } from '@chakra-ui/react'
import React from 'react'

const routes = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];

const contact = ["Adress", "phone number", "email"]

const socials = ['facebook']

function Footer() {
  return (
    <footer style={{ bottom: 0, width: "100%",}}>
            <HStack spacing={"40"} py={"16"} justifyContent={"center"} alignItems={"center"} >
                <Image src={require("../assets/footer_logo.png")} objectFit={"contain"} width={100} />
                <Box display={"flex"} flexDirection={'column'} alignItems={'center'} justifyContent={"center"}>
                    <Heading as={'h3'} size={'l'}>Doormat Navigation</Heading>
                    <List display={'flex'} flexDirection={'column'} alignItems={"center"} justifyContent={"center"}>
                        {routes.map((route, index) => <ListItem key={index}><a href='/'>{route}</a></ListItem>)}
                    </List>
                </Box>
                <Box display={"flex"} flexDirection={'column'} alignItems={'center'} justifyContent={"center"}>
                    <Heading as={'h3'} size={'l'}>Contact us</Heading>
                    <List display={'flex'} flexDirection={'column'} alignItems={"center"} justifyContent={"center"}>
                        {routes.map((route, index) => <ListItem key={index}><a href='/'>{route}</a></ListItem>)}
                    </List>
                </Box>
                <Box display={"flex"} flexDirection={'column'} alignItems={'center'} justifyContent={"center"}>
                    <Heading as={'h3'} size={'l'} textAlign={'center'}>Social</Heading>
                    <List display={'flex'} flexDirection={'column'} alignItems={"center"} justifyContent={"center"}>
                        {routes.map((route, index) => <ListItem key={index}><a href='/'>{route}</a></ListItem>)}
                    </List>
                </Box>
            </HStack>
    </footer>
  )
}

export default Footer