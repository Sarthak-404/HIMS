import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Link to CSS file for styling

function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Welcome to Hospital Management System</h1>
      <div className="button-container">
        <Link to="/login">
          <button className="landing-button">Login</button>
        </Link>
        <Link to="/admin-dashboard">
          <button className="landing-button">Admin Dashboard</button>
        </Link>
        <Link to="/staff-dashboard">
          <button className="landing-button">Staff Dashboard</button>
        </Link>
        <Link to="/patient-registration">
          <button className="landing-button">Patient Registration</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
