import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function Profile() {
  const [formData, setFormData] = useState({
    name: 'Juan Dela Cruz',
    email: 'juan@example.com',
    region: 'Region VI (Western Visayas)',
    province: 'Iloilo',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-800 h-screen w-screen flex overflow-hidden m-0 p-0">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-full w-full md:ml-24 p-6 md:p-8 overflow-y-auto items-center">
        <div className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h1 className="text-2xl font-bold text-[#3B5B47] mb-6">My Profile</h1>
          
          <form onSubmit={handleSave}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name} 
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#95D3A2]" 
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email} 
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#95D3A2]" 
              />
            </div>

            <h2 className="text-lg font-bold text-gray-700 mb-4 border-t pt-4">Default Location</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm font-bold mb-2">Region</label>
                <select name="region" value={formData.region} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                  <option value="Region VI (Western Visayas)">Region VI (Western Visayas)</option>
                  {/* Add more regions */}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Province</label>
                <select name="province" value={formData.province} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                  <option value="Iloilo">Iloilo</option>
                  {/* Add more provinces dynamically based on Region */}
                </select>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#527A5F] hover:bg-[#639272] text-white font-bold py-3.5 rounded-xl transition">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}