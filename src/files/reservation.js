import React, { useState } from 'react';
import CalendarComp from './CalenderComp';

// import axios from 'axios';

function Reservation() {

    

    //set state to track the input values
    const [ formData, setFormData] = useState({
        fullName:'',
        email:'',
        phoneNumber:'',
        name:'',
        checkin:'',
        checkout:'',
        roomPreference:'',
        rooms:'',
        occupants:'',
        request:''
    })

    //function to update the state incase the input values are filled 
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
    };

    // Handle date selection from CalendarComp
    const handleDateSelect = (selectedDate) => {
        setFormData({
          ...formData,
          date: selectedDate,
        });
      };

      //function to handle the submission of the form
      const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     // Assuming you have a backend endpoint to which you want to send the data
        //     const response = await axios.post('http://localhost:5000/booking-details', formData);
        //     // Handle the response as needed, e.g., show a success message or redirect the user
        //     console.log('Response:', response.data);
        // } catch (error) {
        //     // Handle any errors that occurred during the request
        //     console.error('Error:', error.message);
        // }
    };
    
  return (
    <div>
        <div className='relative w-full h-full flex justify-center'>
            <img
            className='absolute w-full h-[100vh] z-10'
            alt='background'
            src='https://vaal.co.ke/wp-content/uploads/2023/04/Lounge-1st-Foor1-2048x1448.jpg'
            />
            <div className='z-20 h-[100vh] mx-2 w-full sm:w-1/4 pt-2 sm:pt-2   '>
                <form onSubmit={handleSubmit} className='border border-b text-center rounded-md  bg-white opacity-90 sm:my-2'>
                    <h2 className='text-red-900 text-2xl my-1 sm:my-4'>Hotel Reservation Form</h2>
                    <div className='w-[90] mx-5 border-b border-gray-600 '></div>
                    <div className='w-full flex flex-col items start'>
                        <div className='w-full flex flex-col text-xs sm:text-base my-0 sm:my-2'>
                            <label className='text-start ml-2 text-red-800 py-1 sm:py-0'>Full name</label>
                            <input
                            className='py-1 mx-2 border rounded-md outline-none'
                            type='text'
                            autoComplete='off'
                            name='fullName'
                            value={formData.fullName}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className='w-full flex flex-col text-xs sm:text-base my-0 sm:my-2'>
                            <label className='text-start ml-2 text-red-800 py-1 sm:py-0'>Email</label>
                            <input
                            className='py-1 mx-2 border rounded-md outline-none'
                            type='email'
                            autoComplete='off'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className='w-full flex flex-col my-2 text-xs sm:text-base my-0 sm:my-2'>
                            <label className='text-start ml-2 text-red-800 py-1 sm:py-0'>Phone number</label>
                            <input
                            className='py-1 mx-2 border rounded-md outline-none'
                            type='number'
                            autoComplete='off'
                            name='phoneNumber'
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className=' relative w-full flex flex-col my-2 text-xs sm:text-base my-0 sm:my-2'>
                            <label className='text-start ml-2 text-red-800 py-1 sm:py-0 z-10'>Check in date time</label>
                            <div className=' mx-2 border rounded-md'>
                            <CalendarComp
                            onDateSelect={handleDateSelect} 
                            />
                            {/* Add a date and time picker library*/}
                            </div>
                        </div>
                        <div className='w-full flex flex-col my-2 text-xs sm:text-base my-0 sm:my-2'>
                            <label className='text-start ml-2 text-red-800 py-1 sm:py-0'>check out date time</label>
                            {/* Add a date and time picker library */}
                            <div className='py-3 mx-2 border rounded-md'>
                            {/* Add a date and time picker library*/}
                            </div>
                        </div>
                        <div className='w-full my-2 flex flex-col text-xs sm:text-base my-0 sm:my-2'>
                            <p className='text-start ml-2 text-red-800 py-1 sm:py-0'>Room prefernce</p>
                            <div className='w-full flex justify-around'>
                                <button className='border px-6 rounded-full hover:text-gray-700 hover:border-green-400'>standard</button>
                                <button className='border px-6 rounded-full hover:text-gray-700 hover:border-green-400'>deluxe</button>
                                <button className='border px-6 rounded-full hover:text-gray-700 hover:border-green-400'>suite</button>
                            </div>
                            {/*add value to hold the state of the room preference when the selected button is clicked */}
                        </div>
                        <div className='w-full flex flex-col my-2 text-xs sm:text-base my-0 sm:my-2'>
                            <label className='text-start ml-2 text-red-800 py-1 sm:py-0'>No. of rooms needed</label>
                            <input
                            className='py-1 mx-2 border rounded-md outline-none'
                            type='number'
                            name='rooms'
                            value={formData.rooms}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className='w-full flex flex-col my-2 text-xs sm:text-base my-0 sm:my-2'>
                            <label className='text-start ml-2 text-red-800 py-1 sm:py-0'>No. of room occupants</label>
                            <input
                            className='py-1 mx-2 border rounded-md outline-none'
                            type='number'
                            name='occupants'
                            value={formData.occupants}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className='w-full flex flex-col my-2 text-xs sm:text-base my-0 sm:my-2'>
                            <label className='text-start ml-2 text-red-900 py-1 sm:py-0'>special request</label>
                            <textarea
                            className='border mx-2 border rounded-md outline-none'
                            name='request'
                            value={formData.request}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className='w-full flex justify-center mb-3 mt-1'> 
                            <button className='text-white bg-red-900 rounded-lg py-2 px-12 text-center hover:text-green-400'>RESERVE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Reservation;