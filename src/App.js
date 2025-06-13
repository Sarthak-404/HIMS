// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StaffDashboard from './pages/StaffDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Doctor from './pages/Doctor';
import AddMedicine from './pages/AddMedicine';
import MedicineDetails from './pages/MedicineDetails';
import Patients from './pages/patients';
import MedicineList from './pages/MedicineList';
import Reports from './pages/Reports';
import Pharmacy from './pages/pharmacy';
import Nurses from './pages/Nurses';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Landing page */}
        <Route path="/staff-dashboard" element={<StaffDashboard />} /> {/* Staff Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Admin Dashboard */}
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/addMedicine" element={<AddMedicine />} />
        <Route path="/medicineDetails" element={<MedicineDetails />} />
        <Route path="/patients" element={<Patients/>} />
        <Route path="/medicineList" element={<MedicineList/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/pharmacy" element={<Pharmacy/>} />
        <Route path="/nurses" element={<Nurses/>} />
      </Routes>
    </Router>
  );
};

export default App;
