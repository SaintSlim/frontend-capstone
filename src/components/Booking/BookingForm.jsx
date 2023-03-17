import { Button, Flex, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select,} from '@chakra-ui/react'
import React, { useState } from 'react'

function BookingForm() {
    const [orderInfo, setOrderInfo] = useState({
        date: null,
        time: null,
        guests: 1,
        occasion: null,
    })

    function handleChangeInput(event) {
        setOrderInfo(val => ({ ...val, [event.target.id]: [event.target.value]}))
    }

    function onSubmitHandler(event){
        event.preventDefault();
    };
  return (
    <Flex direction={'column'} alignSelf={"center"}>
        <FormControl style={{ display: "grid", maxWidth: "200px", gap: "20px"}}>
            <FormLabel for="date">Choose date</FormLabel>
            <Input value={orderInfo.date} type="date" id="date" onChange={handleChangeInput}/>
            <FormLabel for="time">Choose time</FormLabel>
            <Select id="time" value={orderInfo.time} onChange={handleChangeInput}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </Select>
            <FormLabel for="guests">Number of guests</FormLabel>
            <NumberInput value={orderInfo.guests} placeholder="1" min={1} max={10} id="guests" onChange={handleChangeInput}>
                <NumberInputField/>
                <NumberInputStepper>
                    <NumberIncrementStepper/>
                    <NumberDecrementStepper/>
                </NumberInputStepper>
            </NumberInput>
            <FormLabel for="occasion">Occasion</FormLabel>
            <Select value={orderInfo.occasion} id="occasion" onChange={handleChangeInput}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </Select>
            <Button bg={'#495e57'} color='white' _hover={{'color': "black", 'backgroundColor': '#edefee'}} onClick={onSubmitHandler} type='submit' value="Make Your reservation">Reserve</Button>
        </FormControl>
    </Flex>
  )
}

export default BookingForm