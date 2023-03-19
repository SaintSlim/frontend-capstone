import BookingForm from "./BookingForm";
import { render, screen } from "@testing-library/react";
import { updateTimes } from "./Main";
import "@testing-library/jest-dom"

test('Renders Booking Form component', () => {
    const dispatch = jest.fn()
    const times = ["18:00", "19:00"]
    render(<BookingForm availableTimes={times} dispatch={dispatch}/>);
    const labelElement = screen.getByLabelText('Choose date');
    expect(labelElement).toBeInTheDocument()
})

test('InitializeTimes returns non Empty Array', () => {
    const times = ["17:00", "17:30"];
    const dispacth = jest.fn();
    render(<BookingForm  availableTimes={times} dispatch={dispacth}/>)
    const select = screen.getByLabelText('time-input');
    expect(select.value).toBe("17:00");
})

test('Update Times function does not return previous state', () => {
    const date = new Date()
    const prevState = ["18:00", "19:00"];
    expect(updateTimes(prevState,{ type: "update", payload: date})).not.toEqual(prevState);
})

