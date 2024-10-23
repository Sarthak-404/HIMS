"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, UserPlus, Users, Clock, Calendar, CheckCircle, XCircle, Clipboard } from 'lucide-react'

export default function AdminDashboard() {
  const [doctorName, setDoctorName] = useState('')
  const [department, setDepartment] = useState('')
  const [timing, setTiming] = useState('')
  const [availability, setAvailability] = useState('')
  const [schedule, setSchedule] = useState('')
  const [doctorsList, setDoctorsList] = useState([])

  const [staffName, setStaffName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [staffList, setStaffList] = useState([])

  const [patientList, setPatientList] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 35,
      gender: "Male",
      contact: "123-456-7890",
      address: "123 Main St, Anytown, USA",
      department: "Cardiology",
      consultation: true,
      admitted: false,
      staffName: "Alice Johnson"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      gender: "Female",
      contact: "987-654-3210",
      address: "456 Elm St, Othertown, USA",
      department: "Neurology",
      consultation: false,
      admitted: true,
      staffName: "Bob Williams"
    },
    {
      id: 3,
      name: "Mike Brown",
      age: 42,
      gender: "Male",
      contact: "555-123-4567",
      address: "789 Oak St, Somewhere, USA",
      department: "Orthopedics",
      consultation: true,
      admitted: true,
      staffName: "Carol Davis"
    },
  ])

  const handleDoctorSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newDoctor = { name: doctorName, department, timing, availability, schedule }
    setDoctorsList([...doctorsList, newDoctor])
    setDoctorName('')
    setDepartment('')
    setTiming('')
    setAvailability('')
    setSchedule('')
  }

  const handleStaffSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newStaff = { name: staffName, username, password }
    setStaffList([...staffList, newStaff])
    setStaffName('')
    setUsername('')
    setPassword('')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Doctor</h2>
          <form onSubmit={handleDoctorSubmit} className="space-y-4">
            <div>
              <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">Doctor's Name</label>
              <input
                type="text"
                id="doctorName"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="timing" className="block text-sm font-medium text-gray-700">Timing</label>
              <input
                type="text"
                id="timing"
                value={timing}
                onChange={(e) => setTiming(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability</label>
              <select
                id="availability"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Select Availability</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
            <div>
              <label htmlFor="schedule" className="block text-sm font-medium text-gray-700">Schedule</label>
              <input
                type="text"
                id="schedule"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Doctor
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Staff Member</h2>
          <form onSubmit={handleStaffSubmit} className="space-y-4">
            <div>
              <label htmlFor="staffName" className="block text-sm font-medium text-gray-700">Staff Name</label>
              <input
                type="text"
                id="staffName"
                value={staffName}
                onChange={(e) => setStaffName(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Add Staff Member
            </button>
          </form>
        </motion.div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Doctors List</h3>
          <ul className="space-y-2">
            {doctorsList.map((doctor, index) => (
              <li key={index} className="flex items-center space-x-2 text-gray-700">
                <User className="h-5 w-5 text-indigo-500" />
                <span><strong>{doctor.name}</strong> - {doctor.department}</span>
                <Clock className="h-4 w-4 text-gray-400" />
                <span>{doctor.timing}</span>
                {doctor.availability === 'available' ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-500" />
                )}
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>{doctor.schedule}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Staff List</h3>
          <ul className="space-y-2">
            {staffList.map((staff, index) => (
              <li key={index} className="flex items-center space-x-2 text-gray-700">
                <UserPlus className="h-5 w-5 text-green-500" />
                <span><strong>{staff.name}</strong> - Username: {staff.username}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 bg-white rounded-lg shadow-md p-6"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Total Patient List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Consultation
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Admitted
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Staff Name
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patientList.map((patient) => (
                <tr key={patient.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Clipboard className="h-10 w-10 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.age}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.gender}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">{patient.contact}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.address}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.consultation ? 'Yes' : 'No'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.admitted ? 'Yes' : 'No'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {patient.staffName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}