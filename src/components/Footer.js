import { Stack, Image, List, ListItem, Heading, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { MdCopyright } from 'react-icons/md';

const routes = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];

const contacts = ["Adress", "phone number", "email"]

function Footer() {
  return (
    <footer style={{ bottom: 0, width: "100%",}}>
            <Stack direction={{ base: 'column', lg: 'row'}} spacing={{base: "10", lg: "40"}} py={"16"} justifyContent={"center"} alignItems={"center"} >
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
                        {contacts.map((contact, index) => <ListItem key={index}><a href='/'>{contact}</a></ListItem>)}
                    </List>
                </Box>
                <Box display={"flex"} flexDirection={'column'} alignItems={'center'} justifyContent={"center"}>
                    <Heading as={'h3'} size={'l'} textAlign={'center'}>Social</Heading>
                    <List display={'flex'} flexDirection={'column'} alignItems={"center"} justifyContent={"center"}>
                        {routes.map((route, index) => <ListItem key={index}><a href='/'>{route}</a></ListItem>)}
                    </List>
                </Box>
            </Stack>
            <Flex justify={'center'} align={'center'} mb={10}>
                <MdCopyright size={30}/>
                <Heading size={{base:'md', lg: 'xl'}}>Little Lemon, Inc</Heading>
            </Flex>
    </footer>
  )
}

export default Footer