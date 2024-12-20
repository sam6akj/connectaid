import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import TopBar from '../components/TopBar';
import '../styles/main-layout.css';

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex bg-gray-50 min-h-screen relative">
      <Sidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
      
      <div className="flex flex-col flex-1 lg:pl-64">
        <TopBar onToggleSidebar={handleToggleSidebar} />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
