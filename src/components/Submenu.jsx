import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Tailwind CSS classes will replace styled-components
const SidebarLink = ({ to, onClick, active, children, hasSubnav }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center justify-between w-full px-4 h-12 text-gray-800 text-sm no-underline transition-colors ${active ? 'bg-gray-100' : 'bg-transparent'} hover:bg-gray-50 active:bg-gray-100`}
  >
    {children}
  </Link>
);

const SidebarLabel = ({ children }) => (
  <span className="ml-3">{children}</span>
);

const DropdownLink = ({ to, active, children }) => (
  <Link
    to={to}
    className={`flex items-center h-10 pl-10 pr-4 text-gray-700 text-sm no-underline transition-colors ${active ? 'bg-gray-100' : 'bg-transparent'} hover:bg-gray-50 active:bg-gray-100`}
  >
    {children}
  </Link>
);

const SubMenu = ({ item, currentPath }) => {
  const [subnav, setSubnav] = useState(false);

  useEffect(() => {
    if (item.subNav && item.subNav.some(subItem => currentPath.includes(subItem.path))) {
      setSubnav(true);
    } else {
      setSubnav(false);
    }
  }, [currentPath, item.subNav]);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={item.subNav && showSubnav}
        active={currentPath === item.path}
        hasSubnav={!!item.subNav}  // Pass whether it has subnav
      >
        <div className="flex items-center min-w-0">
          <span className="text-gray-500 shrink-0">{item.icon}</span>
          <SidebarLabel>
            {item.title}
          </SidebarLabel>
        </div>
        <div className="text-gray-400 shrink-0">
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SidebarLink>

      {subnav && (
        <div className="bg-white">
          {item.subNav.map((subItem, index) => (
            <DropdownLink
              to={subItem.path}
              key={index}
              active={currentPath === subItem.path}
            >
              <span className="text-gray-500 shrink-0">{subItem.icon}</span>
              <SidebarLabel>
                {subItem.title}
              </SidebarLabel>
            </DropdownLink>
          ))}
        </div>
      )}
    </>
  );
};

export default SubMenu;
