import React from "react";
import "./BookingScreen.css";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function SummaryScreen({ booking, onBack, onDone }) {
  return (
    <div className="booking-container">
      <button className="back-btn" onClick={onBack}>&larr;</button>
      <div className="booking-content">
        <h2 style={{ textAlign: "center", marginBottom: 24 }}>Book a Table</h2>
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <b>Date :</b>
            <span>{formatDate(booking.date)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <b>Time :</b>
            <span>{booking.time}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <b>Occassion :</b>
            <span>{booking.occasion}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <b>Guest Count :</b>
            <span>{booking.guests}</span>
          </div>
        </div>
        <div className="form-group">
          <label>Other Instructions</label>
          <input type="text" value={booking.instructions} disabled />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={booking.name} disabled />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input type="text" value={booking.contact} disabled />
        </div>
        <button className="checkout-btn" onClick={onDone} style={{ marginTop: 32 }}>Done</button>
      </div>
    </div>
  );
}

export default SummaryScreen; 