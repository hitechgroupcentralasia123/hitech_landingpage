import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Styles/style.css'; // Убедитесь, что у вас есть нужные стили

export default function Error() {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! Page Not Found</p>
        <Link
          to="/"
          className="error-button"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
