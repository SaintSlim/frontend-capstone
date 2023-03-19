import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React, { useReducer} from 'react'
import { fetchAPI, submitAPI } from '../../utils';
import BookingForm from './BookingForm'
import { useNavigate } from 'react-router-dom';

const initializeTimes = (state) => {
  const today = new Date();
  const times = fetchAPI(today);
  return times;
};

export function updateTimes(state,action) {
  switch (action.type) {
    case 'update' : {
     const times = fetchAPI(action.payload)
     return times;
    }
    default : {
      return null
    }
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes,[],initializeTimes);
  const navigation = useNavigate();

  function submitForm(formData) {
    let status = submitAPI(formData);
    if (status) {
        navigation('/confirmation');
    }
  }


  return (
    <main>
      <banner>
        <Flex position={'relative'} direction={'column'} mb={10} w={'full'} bg={'yellow'} height={'xs'} justify={'center'} alignItems={'center'} >
          <Image position={'absolute'} alt='restaurant banner' filter={'brightness(50%)'} objectFit={'cover'} w={'full'} height={'full'} src={require("../../assets/restaurant.jpg")} />
          <Heading zIndex={20} as={'h1'} color={"#f4ce14"} my={10}>Make Reservation</Heading>
        </Flex>
      </banner>
      <Box w={'full'} display={"flex"} justifyContent={"center"}>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
      </Box>
    </main>
  )
}

export default Main