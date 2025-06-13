import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users, FileText, Settings, Plus, LogOut, User,
  Pill, ChevronDown, ChevronUp
} from 'lucide-react';

const Navbar = () => {
  const [isMedicineOpen, setIsMedicineOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: Users, text: "Patients", path: "/patients!" },
    { icon: FileText, text: "Reports", path: "/reports" },
    { icon: User, text: "Doctor", path: "/doctor" },
    { icon: User, text: "Nurses", path: "/nurses" },
    { icon: Plus, text: "Pharmacy", path: "/pharmacy" },
    { icon: LogOut, text: "Log out", path: "/logout" }
  ];

  const medicineItems = [
    { text: "Add Medicines", path: "/addMedicine" },
    { text: "Medicine List", path: "/medicineList" },
    { text: "Medicine Details", path: "/medicineDetails" }
  ];

  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="w-64 h-screen bg-white shadow-md flex flex-col"
    >
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h2>
      </div>

      <nav className="mt-6 space-y-1 flex-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="w-full flex items-center px-6 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.text}
          </button>
        ))}

        {/* Medicine Dropdown */}
        <button
          onClick={() => setIsMedicineOpen(!isMedicineOpen)}
          className="w-full flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
        >
          <div className="flex items-center">
            <Pill className="h-5 w-5 mr-3" />
            Medicine
          </div>
          {isMedicineOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {/* Dropdown Links */}
        {isMedicineOpen && (
          <div className="ml-12 space-y-1">
            {medicineItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="w-full text-left px-2 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded transition"
              >
                • {item.text}
              </button>
            ))}
          </div>
        )}
      </nav>
    </motion.aside>
  );
};

export default Navbar;

