// Filename - components/SidebarData.js

import React from "react";
import {
  Building2,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  Factory,
  Home,
  List,
  Mail,
  Plus,
  Users,
} from "lucide-react";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/management/dashboard",
    icon: <Home size={18} />
  },
  {
    title: "Students",
    icon: <Users size={18} />,
    iconClosed: <ChevronDown size={18} />,
    iconOpened: <ChevronUp size={18} />,
    subNav: [
      {
        title: "List All",
        path: "/management/students",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Approve",
        path: "/management/approve-student",
        icon: <ClipboardCheck size={16} />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "TPO",
    icon: <Users size={18} />,
    iconClosed: <ChevronDown size={18} />,
    iconOpened: <ChevronUp size={18} />,

    subNav: [
      {
        title: "List All",
        path: "/management/tpo-admin",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Add New",
        path: "/management/add-tpo-admin",
        icon: <Plus size={16} />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Company",
    icon: <Building2 size={18} />,
    iconClosed: <ChevronDown size={18} />,
    iconOpened: <ChevronUp size={18} />,
    subNav: [
      {
        title: "List All",
        path: "/management/companys",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Add New",
        path: "/management/add-company",
        icon: <Plus size={16} />,
      },
    ],
  },
  {
    title: "Job Listings",
    icon: <Factory size={18} />,
    iconClosed: <ChevronDown size={18} />,
    iconOpened: <ChevronUp size={18} />,

    subNav: [
      {
        title: "List All",
        path: "/management/job-listings",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Add New",
        path: "/management/post-job",
        icon: <Plus size={16} />,
      },
    ],
  },
  {
    title: "Notice",
    icon: <Mail size={18} />,
    iconClosed: <ChevronDown size={18} />,
    iconOpened: <ChevronUp size={18} />,

    subNav: [
      {
        title: "List All",
        path: "/management/all-notice",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Send",
        path: "/management/send-notice",
        icon: <Plus size={16} />,
      },
    ],
  },
];
