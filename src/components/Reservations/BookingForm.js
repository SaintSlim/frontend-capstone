import { Button, FormLabel, Input, Select, Heading, FormControl, Text} from '@chakra-ui/react'
import React, {useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";

function BookingForm({ availableTimes, dispatch, submitForm }) {
    function onSubmitHandler(event){
        event.preventDefault();
        formik.handleSubmit();
    };

    const formik = useFormik({
        initialValues:{
            date: "",
            time: "",
            guests: 1,
            occasion: 'Birthday'
        },
        validationSchema: Yup.object({
            date: Yup.string().required('Required'),
            time: Yup.string().required('Required'),
            guests: Yup.number().min(2, "Minnimum 2 guests must be selected").max(10, "Max number of seats can only be 10").required('Required'),
            occasion: Yup.string().oneOf(['birthday', 'anniversary'], "Occasion can only be Birthday or Anniversary").required('Required'),
        }),
        onSubmit: values => submitForm(values),
    })


    useEffect(() => {
        if(formik.values.date !== "") {
            const date = new Date(formik.values.date);
            dispatch({ type: "update", payload: date});
        }
    },[dispatch, formik.values.date])
  return (
    <div>
        <Heading my={10} role={'header'}>Reserve</Heading>
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={onSubmitHandler}>
            <FormControl isInvalid={formik.errors.date && formik.touched.date ? true : false}>
                <FormLabel htmlFor="res-date">Choose date</FormLabel>
                <Input value={formik.values.date} type="date" aria-label='date-input' id="res-date" name='date' onChange={formik.handleChange}/>
                {formik.errors.date && formik.touched.date && <Text color={'red'}>{formik.errors.guests}</Text>}
            </FormControl>
            <FormControl isInvalid={formik.errors.time && formik.touched.time ? true : false}>
                <FormLabel htmlFor="res-time">Choose time</FormLabel>
                <Select aria-label='time-input' value={formik.values.time} id="res-time" name='time' onChange={formik.handleChange}>
                    {availableTimes.map((time, index) => <option key={index}>{time}</option>)}
                </Select>
                {formik.errors.time && formik.touched.time && <Text color={'red'}>{formik.errors.time}</Text>}
            </FormControl>
            <FormControl isInvalid={formik.values.guests && formik.errors.guests ? true : false}>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Input value={formik.values.guests} type="number" placeholder="1" min="1" max="10" id="guests" name='guests' onChange={formik.handleChange}/>
                {formik.errors.guests && formik.touched.guests && <Text color={'red'}>{formik.errors.guests}</Text>}
            </FormControl>
            <FormControl isInvalid={formik.errors.occasion && formik.touched.occasion ? true : false}>
                <FormLabel  htmlFor="occasion">Occasion</FormLabel>
                <Select value={formik.values.occasion} id="occasion" name='occasion' onChange={formik.handleChange}>
                    <option value={'birthday'} >Birthday</option>
                    <option value={'anniversary'}>Anniversary</option>
                </Select>
            </FormControl>
            <Button disabled={formik.isValid ? false : true} type={'submit'} value="Make Your reservation">Reserve</Button>
        </form>
    </div>
  )
}

export default BookingForm