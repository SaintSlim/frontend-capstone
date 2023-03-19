import { Flex, HStack, Image, List, ListItem, Spacer, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, IconButton, Grid } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { MdMenu } from 'react-icons/md';
import { useDisclosure } from '@chakra-ui/react';

const routes = ["home", "about", "menu", "reservations", "order online", "login"];

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const buttonRef = useRef();
  return (
    <header>
        <Flex display={"flex"} my={5} px={{ base: "10"}} mx={'auto'} maxW={"6xl"} align={"center"} justify={'space-between'}>
            <Image alt='Little Lemon Logo' src={require("../assets/littleLemonLogo.png")} width={250} objectFit={"contain"}/>
            <Spacer/>
            <nav>
                <List display={{ base: "none", lg: "contents"}} flexDirection={"row"}>
                    <HStack gap={10}>
                        {routes.map((route, index) => {
                            let link = '/'
                            if (route === "reservations") {
                                 link = "/reservations";
                            }
                            return(
                                <ListItem key={index} textTransform={'uppercase'} fontWeight={'semibold'}><a href={link}>
                                    {route}
                                </a></ListItem>)})}
                    </HStack>
                </List>
                <IconButton icon={<MdMenu size={30} color={'white'} />} bg={"#495e57"} _hover={{'filter': 'brightness(70%)' }} value={'outline'} onClick={onOpen} ref={buttonRef} justifyContent={'center'} alignItems={'center'} display={{base: "flex", lg: "none"}} shadow={'lg'} size={'lg'}/>
                <Drawer
                     isOpen={isOpen}
                     placement='right'
                     onClose={onClose}
                     finalFocusRef={buttonRef}
                >
                    <DrawerOverlay/>
                    <DrawerContent>
                        <DrawerCloseButton bg={"#495e57"} color={'white'} size={'lg'} mt={6} mr={8}/>
                        <DrawerBody mt={20}>
                            <List>
                                <Grid column={4}>
                                    {routes.map((route, index) => {
                                        let link = '/'
                                        if (route === "reservations") {
                                            link = "/reservations";
                                        }
                                        return(
                                            <ListItem onClick={onClose} key={index} textTransform={'uppercase'} fontWeight={'semibold'}><a href={link}>
                                                {route}
                                    </a></ListItem>)})}
                                </Grid>
                            </List>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </nav>
        </Flex>
    </header>
  )
}
