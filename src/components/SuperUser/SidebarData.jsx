import React from "react";
import {
  Building2,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  Factory,
  Home,
  List,
  Plus,
  Shield,
  UserCog,
  Users,
} from "lucide-react";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <Home size={18} />
  },
  {
    title: "Management",
    icon: <Shield size={18} />,
    iconClosed: <ChevronDown size={18} />,
    iconOpened: <ChevronUp size={18} />,
    subNav: [
      {
        title: "List All",
        path: "/admin/management",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Add New",
        path: "/admin/add-management-admin",
        icon: <Plus size={16} />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "TPO",
    icon: <UserCog size={18} />,
    iconClosed: <ChevronDown size={18} />,
    iconOpened: <ChevronUp size={18} />,
    subNav: [
      {
        title: "List All",
        path: "/admin/tpo",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Add New",
        path: "/admin/add-tpo-admin",
        icon: <Plus size={16} />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Student",
    icon: <Users size={18} />,
    iconClosed: <ChevronDown size={18} />,
    iconOpened: <ChevronUp size={18} />,
    subNav: [
      {
        title: "List All",
        path: "/admin/student",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Approve",
        path: "/admin/approve-student",
        icon: <ClipboardCheck size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Add New",
        path: "/admin/add-student",
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
        path: "/admin/companys",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Add New",
        path: "/admin/add-company",
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
        path: "/admin/job-listings",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Add New",
        path: "/admin/post-job",
        icon: <Plus size={16} />,
      },
    ],
  },
];
