import React ,{useState}from 'react'
import CalendarComp from './CalenderComp';
import axios from 'axios';
// import TimePicker from './TimePicker';
// import TimePickerComp from './TimePickerComp';

function BookingPage() {
 

    //et state to hold no.of guests
    const [guests, setGuests] = useState('')

    const handleInputChange = (event) => {
        // Ensure the input value is not below 1
        const inputValue = parseInt(event.target.value, 10);
        if (!isNaN(inputValue) && inputValue >= 1) {
        setGuests(inputValue);
        }
        // You can add additional logic or feedback for invalid input if needed
      };

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        date: '', // Add date and time to formData
        time: '',
        // guests: 1, // Assuming you start with 1 guest
      });

      const { name, phoneNumber, time } = formData;

      const handleChange = (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/booking-details', formData);
      console.log('Message sent successfully', response.data);
      // You can handle success as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle the error
    }
  };
      
    
  return (

    
    <div className='relative flex w-100 bg-black h-[100vh] justify-center'>
        
        <div className='relative h-full  w-full '>
                {/* <h1 className='text-red-700 text-6xl font-vollkorn text-center my-6'>Booking-App</h1> */}
                <div className='relative h-full w-full '>
                    <img 
                        src='https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHN8ZW58MHx8MHx8fDA%3D' 
                        className='absolute h-full w-full object-cover overflow opacity-50'
                        alt='bg'
                    />
                
                <form onSubmit={handleSubmit} className='absolute text-white rounded-md w-full'>
                    <h2 className='text-2xl text-center underline my-6 text-6xl font-vollkorn py-20'>Table for You!</h2>
                    <div className='flex  justify-around mx-12 text-lg font-semibold'>
                        <div className='flex flex-col items-around lg:w-1/3 sm:w-full my-6 mr-4'>
                            <label>Name</label>
                            <input
                            className="relative peer focus:outline-none border-b border-solid  focus:border-green-600 rounded w-full bg-transparent"
                            name='name'
                            autoComplete='off'
                            value={name}
                            onChange={handleChange}
                            />
                        </div>
                        <div className='flex flex-col items-around lg:w-1/3 w-full my-6'>
                            <label>Phone Number</label>
                            <input
                            className="relative peer focus:outline-none border-b border-solid  focus:border-green-600 rounded w-full bg-transparent"
                            name='phoneNumber'
                            autoComplete='off'
                            value={phoneNumber}
                            onChange={handleChange} 
                            />
                        </div>
                    </div>

                    <div className='flex items-center h-20 justify-around my-12 relative'>

                        <div className='flex flex-col  '>                            
                            <label className='ml-6'>Date</label>                            
                            <CalendarComp
                            onDateSelect={handleDateSelect} 
                            />
                        </div>

                        <div className='flex justify-center text-center sm:flex-col'>
                        <label className='text-center'>Time</label>
                        <input
                        name='time'
                        value={time}
                        className='bg-transparent border-b px-4 text-center'
                        />
                        {/* <TimePickerComp/> */}
                        </div>

                        
                            <div className='flex flex-col items-center '>
                                <label className='mr-2  '>No. of Guests</label>
                                <div className='flex h-4  justify-center items-center rounded-lg shadow-lg'>
                                    <input
                                    name='guests'
                                    value={guests}
                                    type='number'
                                    className='bg-transparent border-b px-4 text-center'
                                    onChange={handleInputChange} // Add this line to handle input changes
                                    />
                                </div>
                            </div>
                        </div>
                    
                    <div className='flex justify-center mt-24 '>
                    <button
                    className='py-4  mt-24  w-1/2 bg-white text-black rounded-md text-lg'
                    >Book a table
                    </button>
                    </div>
                </form>
                </div>
        </div>
       
    </div>
  )
}
export default BookingPage;