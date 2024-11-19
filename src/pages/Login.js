import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hospital, UserCircle, Lock } from 'lucide-react';
import HospitalRegistration from './HospitalRegistration';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [activeTab, setActiveTab] = useState('staff');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username && password) {
      try {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem('token', data.token);

          if (data.role === 'staff') {
            navigate(`/staff-dashboard?staffName=${encodeURIComponent(username)}`);
          } else if (data.role === 'admin') {
            navigate('/admin-dashboard');
          }
        } else {
          alert(data.error);
        }
      } catch (err) {
        console.error('Login error:', err);
        alert('An error occurred during login.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/check-hospital-registration', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          const { registered } = await response.json();
          setShowRegistration(!registered); // Show registration form only if not registered
        } else {
          console.error('Failed to check registration status.');
          setShowRegistration(true); // Default to showing the form in case of an error
        }
      } catch (error) {
        console.error('Error checking registration status:', error);
        setShowRegistration(true); // Default to showing the form in case of an error
      }
    };

    checkRegistration();
  }, []);

  const handleRegistrationClose = () => {
    setShowRegistration(false);
    localStorage.setItem('hospitalRegistered', true); // Mark as registered locally
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200 relative">
      {showRegistration && <HospitalRegistration onClose={handleRegistrationClose} />}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <div className="flex items-center justify-center mb-8">
          <Hospital className="text-blue-600 w-12 h-12 mr-4" />
          <h1 className="text-3xl font-bold text-gray-800">MediLogin</h1>
        </div>

        <div className="flex mb-6">
          <button
            onClick={() => setActiveTab('staff')}
            className={`flex-1 py-2 rounded-l-md transition-colors duration-300 ${
              activeTab === 'staff' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Staff
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`flex-1 py-2 rounded-r-md transition-colors duration-300 ${
              activeTab === 'admin' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              {activeTab === 'staff' ? 'Staff ID' : 'Admin Username'}
            </label>
            <div className="relative">
              <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={activeTab === 'staff' ? 'Enter your Staff ID' : 'Enter your Admin Username'}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Login as {activeTab === 'staff' ? 'Staff' : 'Admin'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
