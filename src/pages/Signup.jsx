import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // API Call goes here
    navigate('/');
  };

  return (
    <div className="bg-white font-sans text-gray-800 h-screen w-screen flex overflow-hidden m-0 p-0">
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="w-full max-w-md bg-[#3B5B47] text-white p-10 rounded-3xl shadow-2xl">
          <h1 className="text-4xl font-extrabold mb-2 text-[#95D3A2]">Create Account</h1>
          <p className="text-gray-200 mb-8 font-medium">Join Marooner's Map today.</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-sm font-bold mb-2 ml-1">Email</label>
              <input 
                type="email" 
                required
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white text-gray-900 rounded-full px-6 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#95D3A2]" 
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-bold mb-2 ml-1">Password</label>
              <input 
                type="password" 
                required
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full bg-white text-gray-900 rounded-full px-6 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#95D3A2]" 
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold mb-2 ml-1">Confirm Password</label>
              <input 
                type="password" 
                required
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="w-full bg-white text-gray-900 rounded-full px-6 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#95D3A2]" 
              />
            </div>

            <button type="submit" className="w-full bg-[#527A5F] hover:bg-[#639272] text-white font-bold rounded-full px-6 py-3.5 mb-4">
              Sign Up
            </button>
          </form>
          
          <div className="text-center mt-4">
            <p className="text-gray-300 text-sm">
              Already have an account? <Link to="/" className="text-[#95D3A2] font-bold hover:underline">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}