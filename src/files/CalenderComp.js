import React, { useEffect,useState } from 'react';
import { Calendar } from 'react-date-range';
import {format} from 'date-fns'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import BookingPage from './bookingPage';

const CalendarComp = ({onDateSelect}) => {


    //have state to gold the calender
    const [open,setOpen] = useState(false)

    //date state
    const [ calendar,setCalendar ] = useState('')

    //useEffect to store the current  date without having to refresh the page
    useEffect(() => {
        setCalendar(format(new Date(), 'MM/dd/yyyy'))
    },[])

    //on date change,strore the date in change
    // const handleSelect = (date) => {
    //     setCalendar(format(date, 'MM/dd/yyyy'))
    // }

    


    // On date change, store the date in the state and call the onDateSelect callback
  const handleSelect = (date) => {
    const formattedDate = format(date, 'MM/dd/yyyy');
    setCalendar(formattedDate);
    onDateSelect(formattedDate); // Call the callback function with the selected date
  };

  // useEffect to store the current date without having to refresh the page
  useEffect(() => {
    setCalendar(format(new Date(), 'MM/dd/yyyy'));
}, []);

    return(
        <div className='flex flex-col'>
        <input
        value={calendar}
        readOnly
        className=' bg-transparent cursor-pointer outline-none rounded-md  my-2'
        onClick={ () => setOpen(!open) }
        />

        {open &&
        <Calendar
        date={new Date()}
        onChange={handleSelect}
        className='absolute mt-10'
        />
        }
        </div>
    )
}

export default CalendarComp;