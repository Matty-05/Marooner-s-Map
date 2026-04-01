import React from 'react';
import Sidebar from '../components/Sidebar';

export default function Analytics() {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 h-screen w-screen flex overflow-hidden m-0 p-0">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-full w-full md:ml-24 p-6 md:p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Analytics Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-400 font-bold mb-1">Total Reports</p>
            <h2 className="text-3xl font-extrabold text-[#3B5B47]">1,245</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-400 font-bold mb-1">Resolved</p>
            <h2 className="text-3xl font-extrabold text-[#95D3A2]">982</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-400 font-bold mb-1">Pending</p>
            <h2 className="text-3xl font-extrabold text-red-500">263</h2>
          </div>
        </div>

        <div className="bg-white flex-1 p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center min-h-[300px]">
          <p className="text-gray-400 font-medium">Chart components (like Chart.js or Recharts) go here.</p>
        </div>
      </div>
    </div>
  );
}