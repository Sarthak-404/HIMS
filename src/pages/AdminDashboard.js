import React, { useState } from 'react';
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
  const [doctorName, setDoctorName] = useState('');
  const [department, setDepartment] = useState('');
  const [timing, setTiming] = useState('');
  const [availability, setAvailability] = useState('');
  const [schedule, setSchedule] = useState('');
  const [doctorsList, setDoctorsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDoctor = {
      name: doctorName,
      department,
      timing,
      availability,
      schedule,
    };

    // Add the new doctor to the list
    setDoctorsList((prevList) => [...prevList, newDoctor]);

    // Clear the form
    setDoctorName('');
    setDepartment('');
    setTiming('');
    setAvailability('');
    setSchedule('');
  };

  return (
    <div className="admin-dashboard-container">
      <h2 className="admin-dashboard-title">Admin Dashboard</h2>
      <form onSubmit={handleSubmit} className="doctor-form">
        <div className="input-field">
          <label htmlFor="doctorName">Doctor's Name</label>
          <input
            type="text"
            id="doctorName"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="timing">Timing</label>
          <input
            type="text"
            id="timing"
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="availability">Availability</label>
          <select
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          >
            <option value="">Select Availability</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>

        <div className="input-field">
          <label htmlFor="schedule">Schedule</label>
          <input
            type="text"
            id="schedule"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">Add Doctor</button>
      </form>

      <h3 className="doctor-list-title">Doctors List</h3>
      <ul className="doctor-list">
        {doctorsList.map((doctor, index) => (
          <li key={index}>
            <strong>{doctor.name}</strong> - {doctor.department} ({doctor.timing}) - {doctor.availability} - Schedule: {doctor.schedule}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
