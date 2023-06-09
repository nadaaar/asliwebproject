import React, { useState } from 'react';
import Nav from '../../components/Navbar/userNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/userFooter';

const CreateBooking = () => {
  const [user, setUser] = useState('');
  const [bookingType, setBookingType] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [status, setStatus] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateBooking = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/CreateBooking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, bookingType, bookingId, status, totalPrice }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Failed to create booking');
    }
  };

  return (
    <div>
        <Header />
        <Nav />
      <h3>Create Booking</h3>
      <label htmlFor="user">User:</label>
      <input type="text" id="user" value={user} onChange={(e) => setUser(e.target.value)} />

      <label htmlFor="bookingType">Booking Type:</label>
      <input type="text" id="bookingType" value={bookingType} onChange={(e) => setBookingType(e.target.value)} />

      <label htmlFor="bookingId">Booking ID:</label>
      <input type="text" id="bookingId" value={bookingId} onChange={(e) => setBookingId(e.target.value)} />

      <label htmlFor="status">Status:</label>
      <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />

      <label htmlFor="totalPrice">Total Price:</label>
      <input type="text" id="totalPrice" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} />

      <button onClick={handleCreateBooking}>Create Booking</button>

      {message && <p>{message}</p>}
        <Footer />
    </div>
  );
};

export default CreateBooking;