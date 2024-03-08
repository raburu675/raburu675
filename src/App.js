import React, { Component } from 'react';
// import BookingPage from './files/bookingPage';
import Reservation from './files/reservation';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <BookingPage/> */}
        <Reservation/>
      </div>
    );
  }
}

export default App;
