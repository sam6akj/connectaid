import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/main-layout.css'; 

const Sidebar = ({ isOpen, onClose }) => {
  const donateIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1m4 0h13m-10 0V6m0 4l2 4m6.293-4.293l1.414 1.414m-1.414-1.414L21 10m-7 0a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );

  const addCallIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );

  const viewCallsIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A3 3 0 008 19h8a3 3 0 002.879-3.804l-.68-2.72A1 1 0 0017 12H7a1 1 0 00-.969 1.276l.68 2.72zM10 9V7a2 2 0 114 0v2" />
    </svg>
  );

  return (
    <div 
      className={`sidebar-container bg-white border-r border-gray-200 h-screen p-4 w-64 fixed top-0 left-0 z-50 flex flex-col 
        ${isOpen ? 'sidebar-open' : 'sidebar-closed'} lg:translate-x-0 lg:opacity-100`} 
      style={{background: "linear-gradient(to bottom right, #f9fafb, #e2e8f0)"}}
    >
      <div className="sidebar-header mb-6">
        <h2 className="text-gray-800">Menu</h2>
        <button className="close-btn" onClick={onClose} aria-label="Close Sidebar">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <nav className="space-y-2">
        <NavLink 
          to="/app" 
          className={({isActive}) => 
            `sidebar-link block py-2 px-3 rounded-md flex items-center text-gray-700 hover:bg-gray-200 transition-colors 
             ${isActive ? 'bg-gray-300 font-semibold' : ''}`}
        >
          {donateIcon} Donate
        </NavLink>

        <NavLink 
          to="/app/add-donation-call" 
          className={({isActive}) =>
            `sidebar-link block py-2 px-3 rounded-md flex items-center text-gray-700 hover:bg-gray-200 transition-colors 
             ${isActive ? 'bg-gray-300 font-semibold' : ''}`}
        >
          {addCallIcon} Add Donation Call
        </NavLink>

        <NavLink 
          to="/app/view-donation-calls" 
          className={({isActive}) =>
            `sidebar-link block py-2 px-3 rounded-md flex items-center text-gray-700 hover:bg-gray-200 transition-colors 
             ${isActive ? 'bg-gray-300 font-semibold' : ''}`}
        >
          {viewCallsIcon} View Donation Calls
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
