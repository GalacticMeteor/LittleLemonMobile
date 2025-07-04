import React, { useState } from "react";
import "./App.css";
import lemonLogo from "./images/Asset-144x.png";
import homeImage from "./images/home.jpg";
import BookingScreen from "./BookingScreen";
import SummaryScreen from "./SummaryScreen";
import ThankYouScreen from "./ThankYouScreen";

function App() {
  const [screen, setScreen] = useState("home");
  const [bookingData, setBookingData] = useState(null);

  return (
    <div className="iphone-frame">
      {screen === "home" && (
        <div className="home-container">
          <div className="home-header">
            <h2>Welcome to</h2>
            <div className="logo-box">
              <img
                src={lemonLogo}
                alt="Little Lemon Logo"
                className="little-lemon-logo"
              />
            </div>
          </div>
          <div className="home-image-section">
            <img
              src={homeImage}
              alt="Restaurant home"
              className="home-bg-image"
            />
          </div>
          <button className="book-btn" onClick={() => setScreen("booking")}>Book a Table</button>
        </div>
      )}
      {screen === "booking" && (
        <BookingScreen
          onBack={() => setScreen("home")}
          onCheckout={data => {
            setBookingData(data);
            setScreen("summary");
          }}
        />
      )}
      {screen === "summary" && bookingData && (
        <SummaryScreen
          booking={bookingData}
          onBack={() => setScreen("booking")}
          onDone={() => setScreen("thankyou")}
        />
      )}
      {screen === "thankyou" && (
        <ThankYouScreen onHome={() => {
          setBookingData(null);
          setScreen("home");
        }} />
      )}
    </div>
  );
}

export default App;
