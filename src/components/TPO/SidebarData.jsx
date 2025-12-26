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
    path: "/tpo/dashboard",
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
        path: "/tpo/students",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Approve",
        path: "/tpo/approve-student",
        icon: <ClipboardCheck size={16} />,
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
        path: "/tpo/companys",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Add New",
        path: "/tpo/add-company",
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
        path: "/tpo/job-listings",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Add New",
        path: "/tpo/post-job",
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
        path: "/tpo/all-notice",
        icon: <List size={16} />,
        cName: "sub-nav",
      },
      {
        title: "Send New",
        path: "/tpo/send-notice",
        icon: <Plus size={16} />,
      },
    ],
  },
];
