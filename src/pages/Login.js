import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hospital, UserCircle, Lock } from 'lucide-react';

export default function Login() {
  const [activeTab, setActiveTab] = useState('staff');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username && password) {
      if (activeTab === 'staff') {
        navigate(`/staff-dashboard?staffName=${encodeURIComponent(username)}`);
      } else if (activeTab === 'admin') {
        navigate('/admin-dashboard');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  const tabVariants = {
    active: { backgroundColor: '#3B82F6', color: 'white' },
    inactive: { backgroundColor: '#E5E7EB', color: '#4B5563' }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
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
          <motion.button
            variants={tabVariants}
            animate={activeTab === 'staff' ? 'active' : 'inactive'}
            onClick={() => setActiveTab('staff')}
            className="flex-1 py-2 rounded-l-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Staff
          </motion.button>
          <motion.button
            variants={tabVariants}
            animate={activeTab === 'admin' ? 'active' : 'inactive'}
            onClick={() => setActiveTab('admin')}
            className="flex-1 py-2 rounded-r-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Admin
          </motion.button>
        </div>

        <motion.form
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleLogin}
          className="space-y-6"
        >
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Login as {activeTab === 'staff' ? 'Staff' : 'Admin'}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}