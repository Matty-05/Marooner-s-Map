import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function ReportsList() {
  const [activeTab, setActiveTab] = useState('myReports');

  return (
    <div className="bg-gray-50 font-sans text-gray-800 h-screen w-screen flex overflow-hidden m-0 p-0">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-full w-full md:ml-24 p-6 md:p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Incident Reports Directory</h1>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col flex-1 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-100 px-6 pt-4">
            <button 
              onClick={() => setActiveTab('myReports')}
              className={`px-6 py-3 font-bold text-sm border-b-2 transition ${activeTab === 'myReports' ? 'border-[#3B5B47] text-[#3B5B47]' : 'border-transparent text-gray-400'}`}
            >
              My Reports
            </button>
            <button 
              onClick={() => setActiveTab('community')}
              className={`px-6 py-3 font-bold text-sm border-b-2 transition ${activeTab === 'community' ? 'border-[#3B5B47] text-[#3B5B47]' : 'border-transparent text-gray-400'}`}
            >
              Community Reports
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === 'myReports' ? (
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50 flex gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900">Flooded Street</h3>
                    <p className="text-sm text-gray-500">Reported on Oct 12, 2023</p>
                    <span className="inline-block mt-2 bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">PENDING VERIFICATION</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50 flex gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900">Downed Powerline</h3>
                    <p className="text-sm text-gray-500">Reported by Community • Oct 11, 2023</p>
                    <span className="inline-block mt-2 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">VERIFIED ACTIVE</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}