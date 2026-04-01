import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function AdminDashboard() {
  const [incidents, setIncidents] = useState([
    { id: 1, type: 'Flood', location: 'Main St', status: 'reported', time: '10 min ago' },
    { id: 2, type: 'Fire', location: 'Downtown', status: 'dispatched', time: '1 hr ago' }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setIncidents(incidents.map(inc => 
      inc.id === id ? { ...inc, status: newStatus } : inc
    ));
    alert(`Status updated to ${newStatus}`);
  };

  return (
    <div className="bg-gray-100 font-sans text-gray-800 h-screen w-screen flex overflow-hidden m-0 p-0">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-full w-full md:ml-24 p-6 md:p-8 overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Command Center</h1>
            <p className="text-sm text-gray-400 mt-1">Live incident queue and dispatch operations.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex-1 overflow-hidden p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 text-sm font-bold text-gray-500">Type</th>
                <th className="pb-3 text-sm font-bold text-gray-500">Location</th>
                <th className="pb-3 text-sm font-bold text-gray-500">Time</th>
                <th className="pb-3 text-sm font-bold text-gray-500">Status</th>
                <th className="pb-3 text-sm font-bold text-gray-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {incidents.map((incident) => (
                <tr key={incident.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 font-bold text-red-600">{incident.type}</td>
                  <td className="py-4 font-medium">{incident.location}</td>
                  <td className="py-4 text-sm text-gray-500">{incident.time}</td>
                  <td className="py-4">
                    <select 
                      value={incident.status}
                      onChange={(e) => handleStatusChange(incident.id, e.target.value)}
                      className={`text-xs font-bold rounded-lg px-2 py-1.5 cursor-pointer w-32 outline-none border ${
                        incident.status === 'resolved' ? 'bg-gray-100 text-gray-600' : 
                        incident.status === 'dispatched' ? 'bg-white text-blue-700 border-blue-300' : 
                        'bg-white text-red-700 border-red-300'
                      }`}
                    >
                      <option value="reported">REPORTED</option>
                      <option value="dispatched">DISPATCHED</option>
                      <option value="resolved">RESOLVED</option>
                    </select>
                  </td>
                  <td className="py-4 text-right">
                    <button className="text-sm text-[#3B5B47] font-bold hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}