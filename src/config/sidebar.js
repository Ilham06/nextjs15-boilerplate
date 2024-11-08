import {
  AnalyticsTwoTone,
  LockTwoTone,
  PeopleTwoTone,
} from "@mui/icons-material";

const sidebarMenu = [
  {
    label: "Dashboard",
    path: "/",
    isChild: false,
    hasChild: false,
    icon: AnalyticsTwoTone,
  },
  {
    label: "User",
    path: "/user",
    isChild: false,
    hasChild: false,
    icon: PeopleTwoTone,
  },
  {
    label: "Role Management",
    path: "/role-management",
    isChild: false,
    hasChild: true,
    icon: LockTwoTone,
    children: [
      {
        label: "Role",
        path: "/role",
        isChild: true,
        hasChild: false,
        icon: PeopleTwoTone,
      },
      {
        label: "Permission",
        path: "/permission",
        isChild: true,
        hasChild: false,
        icon: PeopleTwoTone,
      },
    ],
  },
];

export default sidebarMenu;
