













import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar'; 

const Doctor = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const inputClass =
    'p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400';

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Navbar />

      <div className="flex-1 pl-4 p-10">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
            Add Doctor 
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base">
            <input {...register('firstName')} placeholder="First Name" className={inputClass} />
            <input {...register('lastName')} placeholder="Last Name" className={inputClass} />
            <select {...register('gender')} className={inputClass}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input type="date" {...register('dob')} className={inputClass} />
            <input {...register('phone')} placeholder="Phone No" className={inputClass} />
            <input {...register('email')} placeholder="Email" className={inputClass} />

            <input type="password" {...register('password')} placeholder="Password" className={inputClass} />
            <input {...register('address')} placeholder="Address" className={inputClass} />
            <input {...register('designation')} placeholder="Designation" className={inputClass} />

            <select {...register('department')} className={inputClass}>
              <option value="">Select Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Pediatrics</option>
            </select>
            <input {...register('specialist')} placeholder="Specialist" className={inputClass} />
            <input type="file" {...register('photo')} className="p-2 border border-gray-300 rounded-lg" />

        
            
            <select {...register('status')} className={inputClass}>
              <option value="">Select Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            
            <div className="col-span-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">Short Biography</label>
              <textarea
                {...register('bio')}
                placeholder="Short Bio"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="col-span-full flex justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl text-lg font-semibold transition duration-200"
              >
                Add Doctor 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
