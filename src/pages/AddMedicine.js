import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as needed

const AddMedicine = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Add Medicine</h1>
        <p className="text-gray-500 mb-6">You can add a medicine by filling these fields.</p>

        <div className="bg-white shadow-md rounded-lg p-6">
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Medicine Name</label>
              <input type="text" placeholder="Medicine Name" className="w-full border border-gray-300 p-2 rounded focus:outline-none" />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Generic Name</label>
              <input type="text" placeholder="Generic Name" className="w-full border border-gray-300 p-2 rounded focus:outline-none" />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">SKU</label>
              <input type="text" placeholder="SKU" className="w-full border border-gray-300 p-2 rounded focus:outline-none" />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Weight</label>
              <input type="text" placeholder="Weight" className="w-full border border-gray-300 p-2 rounded focus:outline-none" />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Category</label>
              <select className="w-full border border-gray-300 p-2 rounded focus:outline-none">
                <option value="">Select Category</option>
                <option>Tablet</option>
                <option>Syrup</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Manufacturer</label>
              <select className="w-full border border-gray-300 p-2 rounded focus:outline-none">
                <option value="">Select Manufacturer</option>
                <option>Pharma A</option>
                <option>Pharma B</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Price</label>
              <input type="number" placeholder="Price" className="w-full border border-gray-300 p-2 rounded focus:outline-none" />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Manufacturer Price</label>
              <input type="number" placeholder="Manufacturer Price" className="w-full border border-gray-300 p-2 rounded focus:outline-none" />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Stock (Box)</label>
              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                <button type="button" className="px-3 py-2 bg-gray-100">-</button>
                <input type="number" className="flex-1 p-2 text-center border-l border-r border-gray-300 focus:outline-none" placeholder="0" />
                <button type="button" className="px-3 py-2 bg-gray-100">+</button>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Expiry Date</label>
              <input type="date" className="w-full border border-gray-300 p-2 rounded focus:outline-none" />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Status</label>
              <select className="w-full border border-gray-300 p-2 rounded focus:outline-none">
                <option value="">Select Status</option>
                <option>Available</option>
                <option>Out of Stock</option>
              </select>
            </div>

            <div className="col-span-full">
              <label className="block text-gray-700 mb-1 font-medium">Medicine Details</label>
              <textarea
                rows="4"
                placeholder="Write here..."
                className="w-full border border-gray-300 p-3 rounded focus:outline-none"
              ></textarea>
            </div>

            <div className="col-span-full flex justify-end">
              <button
                type="submit"
                className="bg-green-600 text-white font-medium px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Add Medicine
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;
