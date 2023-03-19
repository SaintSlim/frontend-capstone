import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import SpecialsItem from './SpecialsItem'

function Specials() {
  return (
    <section>
        <Flex direction={'column'} mt={10} mx={"auto"} width={"full"} maxW={'6xl'}>
            <Flex px={{ base: "5", md: "10"}}>
                <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} gap={40}>
                    <Heading as={"h2"} size={"xl"}>This Weeks Specials!</Heading>
                </Box>
                <Spacer />
                <Button width={["80"]} size={'lg'} fontSize={'xl'} textTransform={'uppercase'} borderRadius={16} bg={'#f4ce14'}>Online menu</Button>
            </Flex>
            <Flex justify={'space-between'} direction={{base: "column", lg: "row"}} my={10} mx={"auto"} width={"full"} maxW={'6xl'} px={{ base: "5", md: "10"}}>
                <SpecialsItem
                    src={require("../../assets/greek salad.jpg")}
                    title={'Greek Salad'}
                    price={'$12.99'}
                    description={
                        `The famous greek salad of crispy lettuce, peppers, olives
                        and our Chicago style feta cheese, garnised with cruchy garlic
                        and rosemary croutons.
                        `
                    }
                />
                <SpecialsItem
                    src={require("../../assets/bruschetta.jpg")}
                    title={'Bruschetta'}
                    price={'$5.99'}
                    description={
                        `The famous greek salad of crispy lettuce, peppers, olives
                        and our Chicago style feta cheese, garnised with cruchy garlic
                        and rosemary croutons.
                        `
                    }
                />
                <SpecialsItem
                    src={require("../../assets/lemon dessert.jpg")}
                    title={'Lemon Dessert'}
                    price={'$5.99'}
                    description={
                        `This comes straight from grand,a's recipe book,
                        every last ingredient has been sourced and is authentic as
                        can be imagined
                        `
                    }
                />
            </Flex>
        </Flex>
    </section>
  )
}

export default Specials