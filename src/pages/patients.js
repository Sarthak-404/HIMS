import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Edit2, Save, Users } from 'lucide-react'

export default function Patients({ patients, onUpdatePatient }) {
  const [editingPatient, setEditingPatient] = useState(null)

  const handleEditPatient = (patient) => {
    setEditingPatient(patient.id)
  }

  const handleSavePatient = (patient) => {
    onUpdatePatient(patient)
    setEditingPatient(null)
  }

  const handleInputChange = (e, patient) => {
    const { name, value } = e.target
    onUpdatePatient({ ...patient, [name]: value })
  }

  const handleCheckboxChange = (name, checked, patient) => {
    onUpdatePatient({ ...patient, [name]: checked })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md"
    >
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Patient List</h2>
        <Users className="h-5 w-5 text-gray-500" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consultation</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admitted</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingPatient === patient.id ? (
                    <input
                      type="text"
                      name="name"
                      value={patient.name}
                      onChange={(e) => handleInputChange(e, patient)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  ) : (
                    patient.name
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingPatient === patient.id ? (
                    <input
                      type="number"
                      name="age"
                      value={patient.age}
                      onChange={(e) => handleInputChange(e, patient)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  ) : (
                    patient.age
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingPatient === patient.id ? (
                    <input
                      type="text"
                      name="gender"
                      value={patient.gender}
                      onChange={(e) => handleInputChange(e, patient)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  ) : (
                    patient.gender
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingPatient === patient.id ? (
                    <input
                      type="text"
                      name="contact"
                      value={patient.contact}
                      onChange={(e) => handleInputChange(e, patient)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  ) : (
                    patient.contact
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingPatient === patient.id ? (
                    <input
                      type="text"
                      name="address"
                      value={patient.address}
                      onChange={(e) => handleInputChange(e, patient)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  ) : (
                    patient.address
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingPatient === patient.id ? (
                    <input
                      type="text"
                      name="department"
                      value={patient.department}
                      onChange={(e) => handleInputChange(e, patient)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  ) : (
                    patient.department
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={patient.consultation}
                    onChange={(e) => handleCheckboxChange("consultation", e.target.checked, patient)}
                    disabled={editingPatient !== patient.id}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={patient.admitted}
                    onChange={(e) => handleCheckboxChange("admitted", e.target.checked, patient)}
                    disabled={editingPatient !== patient.id}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingPatient === patient.id ? (
                    <button
                      onClick={() => handleSavePatient(patient)}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Save className="h-4 w-4 mr-2 inline" />
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditPatient(patient)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Edit2 className="h-4 w-4 mr-2 inline" />
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}