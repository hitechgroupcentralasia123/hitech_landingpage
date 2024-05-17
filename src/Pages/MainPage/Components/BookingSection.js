import React from "react";
import "../../../Assets/Styles/style.css"; // Import the CSS file
import BookingImage from "../../../Assets/Images/Booking photo.png"; // Adjust the path to your image

function BookingSection() {
  return (
    <section className="booking">
      <div className="container">
        <div className="booking_inner">
          <div className="booking_image">
            <img src={BookingImage} alt="Solar Panels" />
          </div>
          <div className="booking_content">
            <h2>Book your demo now</h2>
            <p>We'd love to talk to you about your goals and how we can get you there.</p>
            <form className="booking_form">
              <input type="email" placeholder="Email" required />
              <button type="submit">→</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
