import React from "react";
import thankyouImg from "./images/thankyou.jpg";
import "./BookingScreen.css";

function ThankYouScreen({ onHome }) {
  return (
    <div className="booking-container">
      <img src={thankyouImg} alt="Thank you" className="booking-img" />
      <div className="booking-content" style={{ justifyContent: "flex-start" }}>
        <h2 style={{ textAlign: "center", margin: "24px 0 16px 0" }}>Thank You.<br />Your booking is confirmed.</h2>
        <p style={{ textAlign: "center", color: "#222", marginBottom: 32 }}>
          Please feel free to get in touch with us on <b>+1-234-56789</b>, if you need any other customisations in your booking.
        </p>
        <button className="checkout-btn" style={{ marginBottom: 24 }}>Add to calendar</button>
        <button className="checkout-btn" onClick={onHome}>Home</button>
      </div>
    </div>
  );
}

export default ThankYouScreen; 