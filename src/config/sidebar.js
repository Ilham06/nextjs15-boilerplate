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
     icon: AnalyticsTwoTone,
   },
   {
     label: "User",
     path: "/user",
     isChild: false,
     icon: PeopleTwoTone,
   },
   {
     label: "Role Management",
     path: "/role-management",
     isChild: false,
     icon: LockTwoTone,
   },
 ];
 
 export default sidebarMenu;
 