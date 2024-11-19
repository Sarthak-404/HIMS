import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function HospitalRegistration({ onClose }) {
  const [formData, setFormData] = useState({
    hospitalID: '',
    registryNo: '',
    name: '',
    address: '',
    contact: '',
    email: '',
    policyDetails: '',
    healthBima: '',
    additionalInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/api/register-hospital', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
          
          if (!response.ok) {
            const error = await response.text();
            throw new Error(error);
          }
          
          const data = await response.json();
          onClose()
          alert(data.message);        
    } catch (err) {
      console.error('Registration error:', err);
      alert('An error occurred.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl m-20"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">Hospital/Clinic Registration</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Hospital ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hospital/Clinic ID</label>
            <input
              type="text"
              name="hospitalID"
              value={formData.hospitalID}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Registry Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Registry Number</label>
            <input
              type="text"
              name="registryNo"
              value={formData.registryNo}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hospital/Clinic Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Policy Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Policy Details</label>
            <textarea
              name="policyDetails"
              value={formData.policyDetails}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter any policies your hospital/clinic follows"
            ></textarea>
          </div>

          {/* Health Insurance */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Health Bima/Insurance Details</label>
            <textarea
              name="healthBima"
              value={formData.healthBima}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter health insurance providers or plans supported"
            ></textarea>
          </div>

          {/* Additional Info */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Any other information you'd like to share"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-2 sm:col-span-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              // onClick={onClose}
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
