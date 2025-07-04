import React, { useState } from "react";
import reservedImg from "./images/reserved.jpg";
import "./BookingScreen.css";

const occasions = [
  "Birthday Celebration",
  "Anniversary",
  "Business Meeting",
  "Casual Dining",
  "Other"
];

const times = [
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM"
];

function BookingScreen({ onBack, onCheckout }) {
  const [occasion, setOccasion] = useState(occasions[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);

  function handleCheckout() {
    onCheckout({
      occasion,
      date,
      time,
      guests
    });
  }

  return (
    <div className="booking-container">
      <button className="back-btn" onClick={onBack}>&larr;</button>
      <img src={reservedImg} alt="Reserved Table" className="booking-img" />
      <div className="booking-content">
        <h2>Book a table</h2>
        <p className="desc">For your special occasion, so that we can make the best arrangement for your celebration with us.</p>
        <div className="form-group">
          <label>Occasion</label>
          <select value={occasion} onChange={e => setOccasion(e.target.value)}>
            {occasions.map(o => <option key={o}>{o}</option>)}
          </select>
          <small>This will help us make a best arrangement for you</small>
        </div>
        <div className="form-group">
          <label>Event Date</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Time</label>
          <select value={time} onChange={e => setTime(e.target.value)}>
            <option value="">Select time</option>
            {times.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="form-group guests-group">
          <label>Number of Guests</label>
          <div className="guests-controls">
            <button type="button" onClick={() => setGuests(g => Math.max(1, g - 1))}>-</button>
            <span>{guests}</span>
            <button type="button" onClick={() => setGuests(g => g + 1)}>+</button>
          </div>
        </div>
        <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}

export default BookingScreen; 