// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { useLocation } from 'react-router-dom';
// import { Users, FileText, Settings, LogOut, Plus, Activity, Calendar, CheckSquare } from 'lucide-react'
// import Patients from './patients'

// export default function StaffDashboard() {
//   const [totalPatients, setTotalPatients] = useState(120)
//   const [appointmentsToday] = useState(34)
//   const [pendingTasks] = useState(8)
//   const location = useLocation();
//   const staffName = new URLSearchParams(location.search).get('staffName') || "Staff Member";
//   const [showPatientRegistration, setShowPatientRegistration] = useState(false)
//   const [showPatientList, setShowPatientList] = useState(false)
//   const [patients, setPatients] = useState([
//     { id: 1, name: "John Doe", age: 35, gender: "Male", contact: "123-456-7890", address: "123 Main St", department: "Cardiology", consultation: true, admitted: false },
//     { id: 2, name: "Jane Smith", age: 28, gender: "Female", contact: "987-654-3210", address: "456 Elm St", department: "Neurology", consultation: false, admitted: true },
//   ])

//   const handlePatientRegistration = () => {
//     setShowPatientRegistration(!showPatientRegistration)
//     setShowPatientList(false)
//   }

//   const handleShowPatients = () => {
//     setShowPatientList(true)
//     setShowPatientRegistration(false)
//   }

//   const handleUpdatePatient = (updatedPatient) => {
//     setPatients(patients.map(p => p.id === updatedPatient.id ? updatedPatient : p))
//   }

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <motion.aside
//         initial={{ x: -250 }}
//         animate={{ x: 0 }}
//         className="w-64 bg-white shadow-md"
//       >
//         <div className="p-4">
//           <h2 className="text-2xl font-semibold text-gray-800">Staff Dashboard</h2>
//         </div>
//         <nav className="mt-6">
//           {[
//             { icon: Users, text: "Patients", onClick: handleShowPatients },
//             { icon: FileText, text: "Reports" },
//             { icon: Settings, text: "Settings" },
//             { icon: Plus, text: "Add Patient", onClick: handlePatientRegistration },
//             { icon: LogOut, text: "Log out" },
//           ].map((item, index) => (
//             <button
//               key={index}
//               className="w-full flex items-center px-6 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//               onClick={item.onClick}
//             >
//               <item.icon className="h-5 w-5 mr-3" />
//               {item.text}
//             </button>
//           ))}
//         </nav>
//       </motion.aside>

//       <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
//         <div className="container mx-auto px-6 py-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="text-3xl font-semibold text-gray-800">Welcome, {staffName}</h1>
//             <p className="mt-2 text-gray-600">Here's your overview for today</p>
//           </motion.div>

//           <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
//             {[
//               { icon: Users, title: "Total Patients", value: totalPatients },
//               { icon: Calendar, title: "Appointments Today", value: appointmentsToday },
//               { icon: CheckSquare, title: "Pending Patients Today", value: pendingTasks },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white rounded-lg shadow-md p-6"
//               >
//                 <div className="flex items-center">
//                   <div className="p-3 rounded-full bg-blue-100 text-blue-500 mr-4">
//                     <stat.icon className="h-8 w-8" />
//                   </div>
//                   <div>
//                     <p className="text-gray-500">{stat.title}</p>
//                     <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {showPatientList && (
//             <Patients patients={patients} onUpdatePatient={handleUpdatePatient} />
//           )}

//           {!showPatientList && !showPatientRegistration && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="mt-8 bg-white rounded-lg shadow-md"
//             >
//               <div className="flex items-center justify-between px-6 py-4 border-b">
//                 <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
//                 <Activity className="h-5 w-5 text-gray-500" />
//               </div>
//               <ul className="divide-y divide-gray-200">
//                 {[
//                   "Patient X has been discharged.",
//                   "New appointment scheduled for Patient Y.",
//                   "Dr. Z updated medical records for Patient A.",
//                 ].map((activity, index) => (
//                   <li key={index} className="px-6 py-4">
//                     <p className="text-gray-700">{activity}</p>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           )}

//           {showPatientRegistration && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
//             >
//               <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">Patient Registration</h2>
//                 <form className="space-y-4">
//                   <div>
//                     <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Patient Name</label>
//                     <input type="text" id="patientName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Enter patient name" />
//                   </div>
//                   <div>
//                     <label htmlFor="patientAge" className="block text-sm font-medium text-gray-700">Age</label>
//                     <input type="number" id="patientAge" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Enter patient age" />
//                   </div>
//                   <div>
//                     <label htmlFor="patientGender" className="block text-sm font-medium text-gray-700">Gender</label>
//                     <select id="patientGender" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
//                       <option>Select gender</option>
//                       <option>Male</option>
//                       <option>Female</option>
//                       <option>Other</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label htmlFor="patientContact" className="block text-sm font-medium text-gray-700">Contact Number</label>
//                     <input type="tel" id="patientContact" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Enter contact number" />
//                   </div>
//                   <div>
//                     <label htmlFor="patientAddress" className="block text-sm font-medium text-gray-700">Address</label>
//                     <textarea
//                       id="patientAddress"
//                       rows={3}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                       placeholder="Enter patient address"
//                     ></textarea>
//                   </div>
//                   <div>
//                     <label htmlFor="patientDepartment" className="block text-sm font-medium text-gray-700">Department</label>
//                     <input type="text" id="patientDepartment" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Enter department" />
//                   </div>
//                   <div className="flex justify-end space-x-3">
//                     <button type="button" onClick={handlePatientRegistration} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                       Cancel
//                     </button>
//                     <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                       Register Patient
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </main>
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom';
import { Users, FileText, Settings, LogOut, Plus, Activity, Calendar, CheckSquare } from 'lucide-react'
import axios from 'axios'
import Patients from './patients'

export default function StaffDashboard() {
  const [totalPatients, setTotalPatients] = useState(0)
  const [appointmentsToday] = useState(34)
  const [pendingTasks] = useState(8)
  const location = useLocation();
  const staffName = new URLSearchParams(location.search).get('staffName') || "Staff Member";
  const [showPatientRegistration, setShowPatientRegistration] = useState(false)
  const [showPatientList, setShowPatientList] = useState(false)
  const [patients, setPatients] = useState([])

  const API_URL = 'http://localhost:5000/api/patients'; // Replace with your server's URL

  useEffect(() => {
    // Fetch patients data from server on component mount
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get(API_URL);
      setPatients(response.data);
      setTotalPatients(response.data.length); // Assuming you get an array of patients
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const handlePatientRegistration = () => {
    setShowPatientRegistration(!showPatientRegistration)
    setShowPatientList(false)
  }

  const handleShowPatients = () => {
    setShowPatientList(true)
    setShowPatientRegistration(false)
  }

  const handleAddPatient = async (newPatient) => {
    try {
      const response = await axios.post(API_URL, newPatient);
      setPatients([...patients, response.data]);
      setTotalPatients(totalPatients + 1);
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  const handleRemovePatient = async (patientId) => {
    try {
      await axios.delete(`${API_URL}/${patientId}`);
      setPatients(patients.filter(p => p.id !== patientId));
      setTotalPatients(totalPatients - 1);
    } catch (error) {
      console.error("Error removing patient:", error);
    }
  };

  const handleUpdatePatient = (updatedPatient) => {
    setPatients(patients.map(p => p.id === updatedPatient.id ? updatedPatient : p));
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        className="w-64 bg-white shadow-md"
      >
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Staff Dashboard</h2>
        </div>
        <nav className="mt-6">
          {[ 
            { icon: Users, text: "Patients", onClick: handleShowPatients },
            { icon: FileText, text: "Reports" },
            { icon: Settings, text: "Settings" },
            { icon: Plus, text: "Add Patient", onClick: handlePatientRegistration },
            { icon: LogOut, text: "Log out" }
          ].map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center px-6 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              onClick={item.onClick}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.text}
            </button>
          ))}
        </nav>
      </motion.aside>

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-semibold text-gray-800">Welcome, {staffName}</h1>
            <p className="mt-2 text-gray-600">Here's your overview for today</p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[ 
              { icon: Users, title: "Total Patients", value: totalPatients },
              { icon: Calendar, title: "Appointments Today", value: appointmentsToday },
              { icon: CheckSquare, title: "Pending Patients Today", value: pendingTasks }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-500 mr-4">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {showPatientList && (
            <Patients 
              patients={patients} 
              onUpdatePatient={handleUpdatePatient}
              onRemovePatient={handleRemovePatient}
            />
          )}

          {!showPatientList && !showPatientRegistration && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 bg-white rounded-lg shadow-md"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
                <Activity className="h-5 w-5 text-gray-500" />
              </div>
              <ul className="divide-y divide-gray-200">
                {[ 
                  "Patient X has been discharged.",
                  "New appointment scheduled for Patient Y.",
                  "Dr. Z updated medical records for Patient A."
                ].map((activity, index) => (
                  <li key={index} className="px-6 py-4">
                    <p className="text-gray-700">{activity}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {showPatientRegistration && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Patient Registration</h2>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    const newPatient = {
                      name: e.target.patientName.value,
                      age: e.target.patientAge.value,
                      gender: e.target.patientGender.value,
                      contact: e.target.patientContact.value,
                      address: e.target.patientAddress.value,
                      department: e.target.patientDepartment.value,
                      consultation: true,  // default status
                      admitted: false,     // default status
                    };
                    handleAddPatient(newPatient);
                    handlePatientRegistration();
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Patient Name</label>
                    <input type="text" id="patientName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Enter patient name" required />
                  </div>
                  <div>
                    <label htmlFor="patientAge" className="block text-sm font-medium text-gray-700">Age</label>
                    <input type="number" id="patientAge" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Enter patient age" required />
                  </div>
                  <div>
                    <label htmlFor="patientGender" className="block text-sm font-medium text-gray-700">Gender</label>
                    <select id="patientGender" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="patientContact" className="block text-sm font-medium text-gray-700">Contact Number</label>
                    <input type="tel" id="patientContact" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Enter contact number" required />
                  </div>
                  <div>
                    <label htmlFor="patientAddress" className="block text-sm font-medium text-gray-700">Address</label>
                    <input type="text" id="patientAddress" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Enter patient address" required />
                  </div>
                  <div>
                    <label htmlFor="patientDepartment" className="block text-sm font-medium text-gray-700">Department</label>
                    <input type="text" id="patientDepartment" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Enter department" required />
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Register</button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  )
}
