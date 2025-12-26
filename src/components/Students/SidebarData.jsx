// Filename - components/SidebarData.js

import React from "react";
import {
  BadgeCheck,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  Home,
  List,
  Plus,
  User,
} from "lucide-react";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/student/dashboard",
    icon: <Home size={18} />
  },
  {
    title: "Applied Jobs",
    path: "/student/myjob",
    icon: <BadgeCheck size={18} />,
  },
  {
    title: "Placements",
    // path: "",
    icon: <Briefcase size={18} />,
    iconClosed: <ChevronDown size={18} />,
    iconOpened: <ChevronUp size={18} />,

    subNav: [
      {
        title: "Placement Profile",
        path: "/student/placement-profile",
        icon: <User size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Job Listings",
        path: "/student/job-listings",
        icon: <ClipboardList size={16} />,
      },
    ],
  },
  {
    title: "My Internship",
    icon: <ClipboardList size={18} />,
    iconClosed: <ChevronDown size={18} />,
    iconOpened: <ChevronUp size={18} />,

    subNav: [
      {
        title: "List All",
        path: "/student/internship",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Add New",
        path: "/student/add-internship",
        icon: <Plus size={16} />,
      },
    ],
  },
];
