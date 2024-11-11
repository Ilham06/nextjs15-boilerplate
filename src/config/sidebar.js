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
    label: "Nested Menu",
    path: "/nested-menu",
    isChild: false,
    hasChild: true,
    icon: LockTwoTone,
    children: [
      {
        label: "Sub menu 1",
        path: "/1",
        isChild: true,
        hasChild: false,
        icon: PeopleTwoTone,
      },
      {
        label: "Sub menu 2",
        path: "/2",
        isChild: true,
        hasChild: false,
        icon: PeopleTwoTone,
      },
    ],
  },
];

export default sidebarMenu;
