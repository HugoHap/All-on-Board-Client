import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates'
import bookingsService from "../../services/booking.service"


const BookingForm = () => {


    const { id } = useParams()

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const [focusedInput, setFocusedInput] = useState()

    const [bookingState, setBookingState] = useState({
        startDate: '',
        endDate: ''
    })


    const navigate = useNavigate()

    const handleInputChange = (startDate, endDate) => {
        setStartDate(startDate)
        setEndDate(endDate)
    }

    useEffect(() => {
        setBookingState({
            ...bookingState,
            startDate: startDate?._d,
            endDate: endDate?._d
        })
        console.log(typeof startDate?._d)
        console.log(bookingState);
    }, [startDate, endDate])

    function handleSubmit(e) {
        e.preventDefault()

        bookingsService
            .createBooking(id,bookingState)
            .then(() => {
                // console.log("id", id);
                // console.log("estado booking", bookingState);

                navigate(`/profile`)
            })
            .catch(err => console.log(err))
    }

return (
    <article>
        {
            <>
                <div>
                    {
                        <DateRangePicker

                            startDate={startDate}
                            startDateId="your_unique_start_date_id"
                            endDate={endDate}
                            endDateId="your_unique_end_date_id"
                            onDatesChange={({ startDate, endDate }) => handleInputChange(startDate, endDate)}

                            focusedInput={focusedInput} // 
                            onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                        />

                    }
                </div>

                <Form onSubmit={handleSubmit}>
                    <Button className="myBtn" variant="dark" type="submit" >Send Booking</Button>
                </Form>
            </>
        }

    </article>
)
}

export default BookingForm