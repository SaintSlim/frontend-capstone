import { Flex, Box, Heading, Text, Image, Container, Spacer } from '@chakra-ui/react'
import React from 'react'

function Description() {
  return (
    <section>
        <Flex bg={'#495e57'}>
            <Container display={'flex'} flexDirection={{ base: "column", lg:"row"}} my={20} px={{ base: "5", md: "10"}} width={"full"} maxW={'6xl'} alignItems="center" py={10} justifyContent={'space-between'} height={{ lg: '2xl'}}>
                <Box maxW={{ base: "md", lg: "lg"}} display={"flex"} flexDirection={"column"} gap={5}>
                        <Heading as={"h1"} color={"#f4ce14"} size={"2xl"}>Little Lemon</Heading>
                        <Heading as={"h2"} color={'white'} size={"xl"} textAlign={"left"}>Chicago</Heading>
                        <Text color={'white'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla dolor blandit consequat molestie.
                            Vivamus nec egestas felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            Nam ut tincidunt felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut est sem. In sed nibh non
                            nibh ultrices aliquam. Donec erat tellus, commodo ac mi vitae, auctor vestibulum felis. In pellentesque accumsan lectus.
                        </Text>
                </Box>
                <Spacer />
                <Container display={{base: "none", lg: "flex"}} borderRadius={16} position="relative" maxW={{ base: "md", lg: "2xl"}} height={"full"}>
                    <Box zIndex={1} position={'absolute'} left={0} bottom={0} height={"75%"} width={"60%"} borderRadius={16}>
                        <Image src={require("../../assets/Mario and Adrian b.jpg")} height={'full'} width={'full'} borderRadius={16} objectFit={'cover'} objectPosition={"right"}/>
                    </Box>
                    <Box borderRadius={16} zIndex={10} position={'absolute'} right={0} top={0} height={"75%"} width={"60%"}>
                        <Image src={require("../../assets/Mario and Adrian A.jpg")} borderRadius={16} height={'full'} width={'full'} objectFit={'cover'} />
                    </Box>
                </Container>
            </Container>
        </Flex>
    </section>
  )
}

export default Description