import React, { useState } from 'react';
import './PatientRegistration.css'; // Import the CSS file

const PatientRegistration = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !gender) {
      setError('All fields are required.');
      return;
    }
    setError('');
    // Handle registration logic here
    console.log('Patient registered:', { name, age, gender });
  };

  return (
    <div className="registration-container">
      <h2 className="registration-title">Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default PatientRegistration;
