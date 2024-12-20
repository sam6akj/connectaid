import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, PlusIcon, EyeIcon, XMarkIcon } from '@heroicons/react/24/outline';
import '../styles/main-layout.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`sidebar-container bg-white border-r border-gray-200 h-screen p-4 w-64 fixed top-0 left-0 z-50 flex flex-col 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}
      style={{ background: 'linear-gradient(to bottom right, #f9fafb, #e2e8f0)' }}
    >
      <div className="sidebar-header mb-6 flex items-center justify-between">
        <h2 className="text-gray-800 text-xl font-bold">Menu</h2>
        <button className="close-btn" onClick={onClose} aria-label="Close Sidebar">
          <XMarkIcon className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      <nav className="space-y-4">
        <NavLink
          to="/main"
          className={({ isActive }) =>
            `block py-2 px-3 rounded-md flex items-center text-gray-700 hover:bg-gray-200 transition-colors ${
              isActive ? 'bg-gray-300 font-semibold' : ''
            }`
          }
        >
          <HomeIcon className="h-5 w-5 mr-3 text-gray-600" />
          Donate
        </NavLink>

        <NavLink
          to="/main/add-donation"
          className={({ isActive }) =>
            `block py-2 px-3 rounded-md flex items-center text-gray-700 hover:bg-gray-200 transition-colors ${
              isActive ? 'bg-gray-300 font-semibold' : ''
            }`
          }
        >
          <PlusIcon className="h-5 w-5 mr-3 text-gray-600" />
          Add Donation Call
        </NavLink>

        <NavLink
          to="/main/view-donation-calls"
          className={({ isActive }) =>
            `block py-2 px-3 rounded-md flex items-center text-gray-700 hover:bg-gray-200 transition-colors ${
              isActive ? 'bg-gray-300 font-semibold' : ''
            }`
          }
        >
          <EyeIcon className="h-5 w-5 mr-3 text-gray-600" />
          View Donation Calls
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
