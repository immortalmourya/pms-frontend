// Navbar.jsx
import React from 'react';
import { Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function Navbar({ isSidebarVisible, toggleSidebar }) {
  const location = useLocation();

  // Page name extraction and formatting
  let pageName = location.pathname.split('/').filter(Boolean).pop();
  if (pageName === 'dashboard') pageName = "home";
  if (pageName === 'tpo') pageName = "TPO";
  pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className={`h-16 sticky top-0 z-10 bg-white flex justify-start items-center border-b border-gray-100 text-gray-700 transition-all duration-300 ${isSidebarVisible ? 'ml-60 px-4' : 'ml-0 px-4'}`}>
      <button className="rounded-md p-2 hover:bg-gray-100 active:bg-gray-200 transition-colors" onClick={toggleSidebar} aria-label="Toggle sidebar">
        <Menu size={20} />
      </button>
      <span className="ml-4 text-lg font-medium text-gray-800 truncate">
        {pageName}
      </span>
    </div>
  );
}

export default Navbar;
