import sidebarMenu from "@/config/sidebar";
import {
  List,
} from "@mui/material";
import React from "react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <List>
      {sidebarMenu.map((sidebar, index) => (
        <SidebarItem key={index} sidebar={sidebar} />
      ))}
    </List>
  );
}
