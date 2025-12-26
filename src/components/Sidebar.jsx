import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Briefcase, ChevronDown, LogOut, Settings, UserCircle2 } from 'lucide-react';
import axios from 'axios';
import SubMenu from './Submenu';
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Sidebar = ({ isSidebarVisible }) => {
  const [sidebar, setSidebar] = useState(isSidebarVisible);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setSidebar(isSidebarVisible);
  }, [isSidebarVisible]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    if (loadData.role === 'student') navigate('../student/login');
    else if (loadData.role === 'tpo_admin') navigate('../tpo/login');
    else if (loadData.role === 'management_admin') navigate('../management/login');
    else if (loadData.role === 'superuser') navigate('../admin');
  };

  const [loadData, setLoadData] = useState({
    name: 'Not Found',
    email: 'Not Found',
    profile: 'Profile Img',
    role: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${BASE_URL}/user/detail`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        setLoadData({
          name: `${res.data?.first_name} ${res.data?.middle_name} ${res.data?.last_name}`,
          email: res.data.email,
          profile: res.data.profile,
          role: res.data.role,
        });
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          const dataToPass = {
            showToastPass: true,
            toastMessagePass: err.response.data.msg,
          };
          navigate('../', { state: dataToPass });
        }
      });
  }, [navigate]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [SidebarData, setSidebarData] = useState([]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const fetchSidebarData = async () => {
    if (loadData.role === 'superuser') {
      const { SidebarData } = await import('./SuperUser/SidebarData');
      setSidebarData(SidebarData);
    } else if (loadData.role === 'management_admin') {
      const { SidebarData } = await import('./Management/SidebarData');
      setSidebarData(SidebarData);
    } else if (loadData.role === 'tpo_admin') {
      const { SidebarData } = await import('./TPO/SidebarData');
      setSidebarData(SidebarData);
    } else if (loadData.role === 'student') {
      const { SidebarData } = await import('./Students/SidebarData');
      setSidebarData(SidebarData);
    }
  };

  useEffect(() => {
    if (loadData.role) {
      fetchSidebarData();
    }
  }, [loadData.role]);


  return (
    <>
      <nav className={`bg-white w-64 h-[100dvh] z-20 flex flex-col fixed top-0 transition-transform duration-300 ${sidebar ? 'translate-x-0' : '-translate-x-full'} shadow-sm border-r border-gray-100 navbar-container`}>
        {/* Main Sidebar Logo and Name */}
        <div className="flex items-center px-4 py-4 gap-3">
          <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center">
            <Briefcase size={18} />
          </div>
          <h1 className="text-lg font-semibold text-gray-900 truncate">
            {loadData.role === 'superuser' && <Link to="/admin/dashboard" className="no-underline text-black">Placement Portal</Link>}
            {loadData.role === 'management_admin' && <Link to="/management/dashboard" className="no-underline text-black">Placement Portal</Link>}
            {loadData.role === 'tpo_admin' && <Link to="/tpo/dashboard" className="no-underline text-black">Placement Portal</Link>}
            {loadData.role === 'student' && <Link to="/student/dashboard" className="no-underline text-black">Placement Portal</Link>}
          </h1>
        </div>

        {/* Main body */}
        <div className="flex-1 min-h-0 overflow-y-auto sidebar-content">
          <div className="flex flex-col justify-center w-full">
            {SidebarData.length > 0 ? (
              SidebarData.map((item, index) => (
                <SubMenu item={item} key={index} currentPath={location.pathname} />
              ))
            ) : (
              <p className="text-center text-gray-600">Loading...</p>
            )}
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="relative shrink-0 border-t border-gray-100">
          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute bottom-full left-0 w-full border-t border-gray-100 bg-white shadow-sm max-h-48 overflow-y-auto">
              {/* Conditional rendering based on role */}
              {loadData.role === 'student' && (
                <Link to={`../student/account`} className="flex items-center no-underline text-gray-700 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                  <Settings size={16} className="mr-2" /> <span>Account Details</span>
                </Link>
              )}
              {loadData.role === 'tpo_admin' && (
                <Link to={`../tpo/account`} className="flex items-center no-underline text-gray-700 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                  <Settings size={16} className="mr-2" /> <span>Account Details</span>
                </Link>
              )}
              {loadData.role === 'management_admin' && (
                <Link to={`../management/account`} className="flex items-center no-underline text-gray-700 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                  <Settings size={16} className="mr-2" /> <span>Account Details</span>
                </Link>
              )}
              <button onClick={handleLogout} className="flex items-center w-full px-4 py-3 text-red-700 hover:bg-red-50 active:bg-red-100 transition-colors">
                <LogOut size={16} className="mr-2" /> Logout
              </button>
            </div>
          )}

          {/* User Profile */}
          <button type="button" className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 active:bg-gray-100 transition-colors" onClick={toggleDropdown}>
            <UserCircle2 size={36} className="text-gray-400 shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-gray-900 truncate">{loadData.name}</div>
              <div className="text-xs text-gray-500 truncate">{loadData.email}</div>
            </div>
            <ChevronDown size={18} className={`text-gray-500 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
