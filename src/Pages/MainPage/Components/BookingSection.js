import React, { useState } from "react";
import emailjs from "emailjs-com"; // Импортируйте EmailJS
import "../../../Assets/Styles/style.css"; // Import the CSS file
import BookingImage from "../../../Assets/Images/Booking photo.png"; // Adjust the path to your image
import { db } from "../../../firebase"; // Импортируйте вашу инициализацию Firebase
import { collection, addDoc } from "firebase/firestore"; 

function BookingSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Отправка данных в Firestore
      const docRef = await addDoc(collection(db, "bookings"), {
        email: email,
        timestamp: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
      
      // Отправка email через EmailJS
      emailjs.send('service_cn4xiyi', 'template_n4qiyvw', {
        to_name: 'Recipient Name',
        from_name: 'From the landing page', // Укажите ваше имя
        from_email: email,
        message: `New booking from ${email}`
      }, 'jEDPSg7GihhGPb3C4')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setMessage("Email sent successfully!");
      }, (error) => {
        console.error('Error sending email:', error);
        setMessage(`Error sending email: ${error.text}`);
      });

      setEmail(""); // Очистить поле после успешной отправки
    } catch (e) {
      console.error("Error adding document: ", e.message);
      setMessage(`Error sending email: ${e.message}`);
    }
  };

  return (
    <section className="booking">
      <div className="container">
        <div className="booking_inner">
          <div className="booking_image">
            <img src={BookingImage} alt="Solar Panels" />
          </div>
          <div className="booking_content">
            <h2>Contact Us</h2>
            <p>We'd love to talk to you about your goals and how we can get you there.</p>
            <form className="booking_form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              <button type="submit">→</button>
            </form>
            {message && <p className="message">{message}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
